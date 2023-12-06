"reach 0.1";

const MAX_DECIMALS = 256; // decimals fits in UInt8

// TODO maybe used to depreciate reach bool to algosdk.abi.bool mod
const BOOL_TRUE = 128; // unsed
const BOOL_FALSE = 0; // unsed

const TokenMeta = Struct([
  ["name", Bytes(32)], // name
  ["symbol", Bytes(8)], // symbol
  ["decimals", UInt], // number of decimals
  ["totalSupply", UInt256], // total supply
]);

const State = Struct([
  ...Struct.fields(TokenMeta), // token meta
  ["zeroAddress", Address], // zero address
  ["manager", Address], // manager address
  ["enableZeroAddressBurn", Bool], // allow zero address to burn tokens
  ["closed", Bool], // closed
]);

const MintParams = Object({
  name: Bytes(32), // name
  symbol: Bytes(8), // symbol
  decimals: UInt, // number of decimals
  totalSupply: UInt256, // total supply
});

const Params = Object({
  zeroAddress: Address, // zero address
  manager: Address, // manager address
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
    arc200_transfer: Fun([Address, UInt256], Bool), // tranfer from this to address
    arc200_transferFrom: Fun([Address, Address, UInt256], Bool), // transfer from address to address
    arc200_approve: Fun([Address, UInt256], Bool), // approve address to spend this
    deleteBalanceBox: Fun([Address], Null), // delete balance box if zero
    deleteAllowanceBox: Fun([Address, Address], Null), // delete allowance box if zero
    touch: Fun([], Null), // touch this contract
    grant: Fun([Address], Null), // grant address to be manager
    destroy: Fun([], Null), // destroy this contract
  });

  const V = View({
    arc200_name: Fun([], Bytes(32)), // get name
    arc200_symbol: Fun([], Bytes(8)), // get symbol
    arc200_decimals: Fun([], UInt), // get decimals
    arc200_totalSupply: Fun([], UInt256), // get total supply
    arc200_balanceOf: Fun([Address], UInt256), // get balance of address
    arc200_allowance: Fun([Address, Address], UInt256), // get allowance of address to spend this
    hasBalance: Fun([Address], Bool), // check if balance box exists
    hasAllowance: Fun([Address, Address], Bool), // check if allowance box exists
    state: Fun([], State), // get state
  });

  const E = Events({
    arc200_Transfer: [Address, Address, UInt256], // transfer event
    arc200_Approval: [Address, Address, UInt256], // approval event
    DeleteBalanceBox: [Address], // delete balance box event
    DeleteAllowanceBox: [Address, Address], // delete allowance box event
    Destroy: [], // destroy event
  });

  init();

  D.only(() => {
    const { zeroAddress, manager, enableZeroAddressBurn, meta } = declassify(
      interact.params
    );
  });
  D.publish(zeroAddress, manager, enableZeroAddressBurn, meta).check(() => {
    check(
      zeroAddress != manager,
      "ARC200: Zero address must not equal manager address"
    );
    check(
      meta.totalSupply > UInt256(0),
      "ARC200: Total supply must be greater than zero"
    );
    check(
      meta.decimals <= MAX_DECIMALS,
      "ARC200: Decimals must be less than 256"
    );
  });

  const balances = new Map(UInt256);
  const allowances = new Map(Tuple(Address, Address), UInt256);

  balances[manager] = meta.totalSupply; // D creates manager and zero addres balance boxes
  balances[zeroAddress] = UInt256(0);

  E.arc200_Transfer(zeroAddress, manager, meta.totalSupply);
  D.interact.ready(getContract());

  V.arc200_name.set(() => meta.name);
  V.arc200_symbol.set(() => meta.symbol);
  V.arc200_decimals.set(() => meta.decimals);
  V.arc200_totalSupply.set(() => meta.totalSupply);

  const initialState = {
    ...meta,
    zeroAddress,
    manager,
    enableZeroAddressBurn,
    closed: false,
  };

  const [s] = parallelReduce([initialState])
    .define(() => {
      const balanceOf = (owner) => {
        const m_bal = balances[owner];
        return fromSome(m_bal, UInt256(0));
      };
      V.arc200_balanceOf.set(balanceOf);
      const allowance = (owner, spender) => {
        const m_bal = allowances[[owner, spender]];
        return fromSome(m_bal, UInt256(0));
      };
      V.arc200_allowance.set(allowance);
      V.hasBalance.set((addr) => isSome(balances[addr]));
      V.hasAllowance.set((owner, spender) =>
        isSome(allowances[[owner, spender]])
      );
      const state = () => State.fromObject(s);
      V.state.set(state);
    })
    .invariant(balance() == 0)
    .while(!s.closed)
    .define(() => {
      const transfer_ = (from_, to, amount) => {
        assert(from_ != to, "ARC200: Transfer to self");
        balances[from_] = balanceOf(from_) - amount;
        balances[to] = balanceOf(to) + amount;
        E.arc200_Transfer(from_, to, amount);
      };
    })
    // api: touch
    // - touch this contract
    // + does nothing but flushes excess fees to manager
    .api_(A.touch, () => {
      return [
        (k) => {
          const f1 = getUntrackedFunds();
          transfer(f1).to(s.manager);
          k(null);
          return [s];
        },
      ];
    })
    // api: grant
    // - grant address to be manager
    // + may not grant zero address
    .api_(A.grant, (addr) => {
      check(addr != zeroAddress, "ARC200: Grant zero address");
      return [
        (k) => {
          k(null);
          return [{ ...s, manager: addr }];
        },
      ];
    })
    // api: transfer
    // - transfer from this to address
    // + may transfer to zero address (burn) if zero address burn enabled
    .api_(A.arc200_transfer, (to, amount) => {
      check(this != to, "ARC200: Transfer to self");
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
    .api_(A.arc200_transferFrom, (from_, to, amount) => {
      check(from_ != to, "ARC200: Transfer to self");
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
          E.arc200_Approval(from_, this, newAllowance);
          k(true);
          return [s];
        },
      ];
    })
    // api: approve
    // - approve address to spend this
    // + may not approve zero address
    // + may not approve this if zero address
    .api_(A.arc200_approve, (spender, amount) => {
      check(this != zeroAddress, "ARC200: Approve this to zero address");
      check(spender != zeroAddress, "ARC200: Approve to zero address");
      return [
        (k) => {
          allowances[[this, spender]] = amount;
          E.arc200_Approval(this, spender, amount);
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
      check(balanceOf(addr) == UInt256(0), "ARC200: Balance box not empty");
      return [
        (k) => {
          delete balances[addr];
          E.DeleteBalanceBox(addr);
          k(null);
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
        allowance(owner, spender) == UInt256(0),
        "ARC200: Allowance box not empty"
      );
      return [
        (k) => {
          delete allowances[[owner, spender]];
          E.DeleteAllowanceBox(owner, spender);
          k(null);
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
      return [
        (k) => {
          delete balances[zeroAddress]; // delete last balance box
          E.Destroy();
          k(null);
          return [{ ...s, closed: true }];
        },
      ];
    });
  commit();
  exit();
});
