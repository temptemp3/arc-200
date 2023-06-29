"reach 0.1";

const MAX_DECIMALS = 256; // fits in UInt8

const TokenMeta = Struct([
  ["name", Bytes(32)], // name
  ["symbol", Bytes(8)], // symbol
  ["decimals", UInt], // number of decimals
  ["totalSupply", UInt], // total supply
]);

const State = Struct([
  ...Struct.fields(TokenMeta), // token meta
  ["zeroAddress", Address], // zero address
  ["managerAddress", Address], // manager address
  ["enableZeroAddressBurn", Bool], // allow zero address to burn tokens
  ["closed", Bool], // closed
]);

const MintParams = Object({
  name: Bytes(32), // name
  symbol: Bytes(8), // symbol
  decimals: UInt, // number of decimals
  totalSupply: UInt, // total supply
});

const Params = Object({
  zeroAddress: Address, // zero address
  managerAddress: Address, // manager address
  enableZeroAddressBurn: Bool, // allow zero address to burn tokens
  meta: MintParams, // token meta
});

export const ARC200 = Reach.App(() => {
  setOptions({ connectors: [ALGO] });

  const D = Participant("Deployer", {
    params: Params, // deployer params
    ready: Fun([Contract], Null), // token ready
  });

  const A = API({
    transfer: Fun([Address, UInt], Bool), // tranfer from this to address
    transferFrom: Fun([Address, Address, UInt], Bool), // transfer from address to address
    approve: Fun([Address, UInt], Bool), // approve address to spend this
    deleteBalanceBox: Fun([Address], Bool), // delete balance box if zero
    deleteAllowanceBox: Fun([Address, Address], Bool), // delete allowance box if zero
    destroy: Fun([], Null), // destroy this contract
  });

  const V = View({
    name: Fun([], Bytes(32)), // get name
    symbol: Fun([], Bytes(8)), // get symbol
    decimals: Fun([], UInt), // get decimals
    totalSupply: Fun([], UInt), // get total supply
    balanceOf: Fun([Address], UInt), // get balance of address
    allowance: Fun([Address, Address], UInt), // get allowance of address to spend this
    state: Fun([], State), // get state
  });

  const E = Events({
    Transfer: [Address, Address, UInt],
    Approval: [Address, Address, UInt],
  });

  init();

  D.only(() => {
    const { zeroAddress, managerAddress, enableZeroAddressBurn, meta } =
      declassify(interact.params);
  });
  D.publish(zeroAddress, managerAddress, enableZeroAddressBurn, meta).check(
    () => {
      check(
        zeroAddress != managerAddress,
        "ARC200: Zero address must not equal manager address"
      );
      check(meta.totalSupply > 0, "ARC200: Total supply must be greater than zero");
      check(
        meta.decimals < MAX_DECIMALS,
        "ARC200: Decimals must be less than 256 (fits in UInt8)"
      );
    }
  );

  const balances = new Map(UInt);
  const allowances = new Map(Tuple(Address, Address), UInt);

  balances[managerAddress] = meta.totalSupply; // D creates manager and zero addres balance boxes
  balances[zeroAddress] = 0;

  E.Transfer(zeroAddress, managerAddress, meta.totalSupply);
  D.interact.ready(getContract());

  V.name.set(() => meta.name);
  V.symbol.set(() => meta.symbol);
  V.decimals.set(() => meta.decimals);
  V.totalSupply.set(() => meta.totalSupply);

  const initialState = {
    ...meta,
    zeroAddress,
    managerAddress,
    enableZeroAddressBurn,
    closed: false,
  };

  const [s] = parallelReduce([initialState])
    .define(() => {
      const balanceOf = (owner) => {
        const m_bal = balances[owner];
        return fromSome(m_bal, 0);
      };
      V.balanceOf.set(balanceOf);
      const allowance = (owner, spender) => {
        const m_bal = allowances[[owner, spender]];
        return fromSome(m_bal, 0);
      };
      V.allowance.set(allowance);
      const state = () => State.fromObject(s);
      V.state.set(state);
    })
    .invariant(balance() == 0)
    .while(!s.closed)
    .define(() => {
      const transfer_ = (from_, to, amount) => {
        balances[from_] = balanceOf(from_) - amount;
        balances[to] = balanceOf(to) + amount;
        E.Transfer(from_, to, amount);
      };
    })
    // api: transfer
    // - transfer from this to address
    // + may transfer to zero address (burn) if zero address burn enabled
    .api_(A.transfer, (to, amount) => {
      check(
        enableZeroAddressBurn || to != zeroAddress,
        "ARC200: Transfer to zero address"
      );
      check(
        balanceOf(this) >= amount,
        "ARC200: Transfer amount must not be greater than balance"
      );
      return [
        (k) => {
          transfer_(this, to, amount);
          k(true);
          return [s];
        },
      ];
    })
    // api: transferFrom
    // - transfer from address to address
    // + may not transfer to and from zero address
    // + requires allowance from spender to this
    .api_(A.transferFrom, (from_, to, amount) => {
      check(from_ != zeroAddress, "ARC200: Transfer from zero address");
      check(to != zeroAddress, "ARC200: Transfer to zero address");
      check(
        balanceOf(from_) >= amount,
        "ARC200: Amount must not be greater than balance"
      );
      check(
        allowance(from_, this) >= amount,
        "ARC200: Amount must not be greater than allowance"
      );
      return [
        (k) => {
          transfer_(from_, to, amount);
          const newAllowance = allowance(from_, this) - amount;
          allowances[[from_, this]] = newAllowance;
          E.Approval(from_, this, newAllowance);
          k(true);
          return [s];
        },
      ];
    })
    // api: approve
    // - approve address to spend this
    // + may not approve zero address
    // + may not approve this if zero address
    .api_(A.approve, (spender, amount) => {
      check(this != zeroAddress, "ARC200: Approve this to zero address");
      check(spender != zeroAddress, "ARC200: Approve to zero address");
      return [
        (k) => {
          allowances[[this, spender]] = amount;
          E.Approval(this, spender, amount);
          k(true);
          return [s];
        },
      ];
    })
    // api: deleteBalanceBox
    // - delete balance box if zero
    // + requires address not zero address
    // + requires balance box to exist
    // + requires balance box to be zero or zero address balance box to be total supply
    .api_(A.deleteBalanceBox, (addr) => {
      check(addr != zeroAddress, "ARC200: Delete balance box to zero address");
      check(isSome(balances[addr]), "ARC200: Balance box not found");
      check(
        balanceOf(addr) == 0 || balanceOf(zeroAddress) == meta.totalSupply,
        "ARC200: Balance box not empty or zero address balance box not total supply"
      );
      return [
        (k) => {
          delete balances[addr];
          k(true);
          return [s];
        },
      ];
    })
    // api: deleteAllowanceBox
    // - delete allowance box if zero
    // + requires allowance box to exist
    // + requires allowance box to be zero or zero address balance box to be total supply
    .api_(A.deleteAllowanceBox, (owner, spender) => {
      check(
        isSome(allowances[[owner, spender]]),
        "ARC200: Allowance box not found"
      );
      check(
        allowance(owner, spender) == 0 ||
          balanceOf(zeroAddress) == meta.totalSupply,
        "ARC200: Allowance box not empty or zero address balance box not total supply"
      );
      return [
        (k) => {
          delete allowances[[owner, spender]];
          k(true);
          return [s];
        },
      ];
    })
    // api: destroy
    // - destroy this contract
    // + requires zero address balance box to be total supply
    // + deletes last balance box, zero address balance box
    // + exits loop and closes contract
    .api_(A.destroy, () => {
      check(
        isSome(balances[zeroAddress]),
        "ARC200: Zero address balance box not found"
      );
      check(
        balanceOf(zeroAddress) == meta.totalSupply,
        "ARC200: Zero address balance box not total supply"
      );
      return [
        (k) => {
          delete balances[zeroAddress]; // delete last balance box
          k(null);
          return [{ ...s, closed: true }];
        },
      ];
    });
  commit();
  exit();
});
