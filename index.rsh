"reach 0.1";

const MAX_DECIMALS = 256;

const TokenId = Address;

const TokenMeta = Struct([
  ["name", Bytes(32)],
  ["symbol", Bytes(8)],
  ["decimals", UInt],
  ["totalSupply", UInt],
]);

const emptyToken = TokenMeta.fromObject({
  name: Bytes(32).pad(" "),
  symbol: Bytes(8).pad(" "),
  decimals: 0,
  totalSupply: 0,
});

const Params = Object({
  zeroAddress: Address,
});

const MintParams = Object({
  name: Bytes(32),
  symbol: Bytes(8),
  decimals: UInt,
  totalSupply: UInt,
});

const DeleteParams = Data({
  Balance: Tuple(TokenId, Address),
  Allowance: Tuple(TokenId, Address, Address),
})

export const ARC200 = Reach.App(() => {
  setOptions({ connectors: [ALGO] });

  const D = Participant("Deployer", {
    params: Params,
    ready: Fun([Contract], Null),
  });

  const A = API({
    mint: Fun([TokenId, Address, TokenMeta], Bool),
    transfer: Fun([TokenId, Address, UInt], Bool),
    transferFrom: Fun([TokenId, Address, Address, UInt], Bool),
    approve: Fun([TokenId, Address, UInt], Bool),
    deleteBalanceBox: Fun([TokenId, Address], Bool),
    deleteAllowanceBox: Fun([TokenId, Address, Address], Bool),
  });

  const V = View({
    name: Fun([TokenId], Bytes(32)),
    symbol: Fun([TokenId], Bytes(8)),
    decimals: Fun([TokenId], UInt),
    totalSupply: Fun([TokenId], UInt),
    balanceOf: Fun([TokenId, Address], UInt),
    allowance: Fun([TokenId, Address, Address], UInt),
  });

  const E = Events({
    Transfer: [TokenId, Address, Address, UInt],
    Approval: [TokenId, Address, Address, UInt],
    Mint: [TokenId],
  });

  init();

  D.only(() => {
    const { zeroAddress } = declassify(interact.params);
  });
  D.publish(zeroAddress);
  D.interact.ready(getContract());

  const tokens = new Map(TokenId, TokenMeta);
  const balances = new Map(Tuple(TokenId, Address), UInt);
  const allowances = new Map(Tuple(TokenId, Address, Address), UInt);

  V.name.set((tokenId) => fromSome(tokens[tokenId], emptyToken).name);
  V.symbol.set((tokenId) => fromSome(tokens[tokenId], emptyToken).symbol);
  V.decimals.set((tokenId) => fromSome(tokens[tokenId], emptyToken).decimals);
  V.totalSupply.set(
    (tokenId) => fromSome(tokens[tokenId], emptyToken).totalSupply
  );

  const [] = parallelReduce([])
    .define(() => {
      const balanceOf = (tokenId, owner) => {
        const m_bal = balances[[tokenId, owner]];
        return fromSome(m_bal, 0);
      };
      V.balanceOf.set(balanceOf);
      const allowance = (tokenId, owner, spender) => {
        const m_bal = allowances[[tokenId, owner, spender]];
        return fromSome(m_bal, 0);
      };
      V.allowance.set(allowance);
    })
    .invariant(balance() == 0)
    .while(true)
    .api_(A.mint, (tokenId, addr, meta) => {
      check(meta.totalSupply > 0, "totalSupply must be greater than zero");
      check(
        meta.decimals < MAX_DECIMALS,
        "decimals must be less than 256 (fits in UInt8)"
      );
      return [
        (k) => {
          tokens[tokenId] = TokenMeta.fromObject(meta);
          balances[[tokenId, addr]] = meta.totalSupply;
          E.Mint(tokenId);
          E.Transfer(tokenId, zeroAddress, addr, meta.totalSupply);
          k(true);
          return [];
        },
      ];
    })
    .define(() => {
      const transfer_ = (tokenId, from_, to, amount) => {
        balances[[tokenId, from_]] = balanceOf(tokenId, from_) - amount;
        balances[[tokenId, to]] = balanceOf(tokenId, to) + amount;
        E.Transfer(tokenId, from_, to, amount);
      };
    })
    .api_(A.transfer, (tokenId, to, amount) => {
      check(to != zeroAddress, "ARC200: Transfer to zero address");
      check(
        balanceOf(tokenId, this) >= amount,
        "amount must not be greater than balance"
      );
      return [
        (k) => {
          transfer_(tokenId, this, to, amount);
          k(true);
          return [];
        },
      ];
    })
    .api_(A.transferFrom, (tokenId, from_, to, amount) => {
      check(from_ != zeroAddress, "ARC200: Transfer from zero address");
      check(to != zeroAddress, "ARC200: Transfer to zero address");
      check(
        balanceOf(tokenId, from_) >= amount,
        "amount must not be greater than balance"
      );
      check(
        allowance(tokenId, from_, this) >= amount,
        "amount must not be greater than allowance"
      );
      return [
        (k) => {
          transfer_(tokenId, from_, to, amount);
          const newAllowance = allowance(tokenId, from_, this) - amount;
          allowances[[tokenId, from_, this]] = newAllowance;
          E.Approval(tokenId, from_, this, newAllowance);
          k(true);
          return [];
        },
      ];
    })
    .api_(A.approve, (tokenId, spender, amount) => {
      check(spender != zeroAddress, "ARC200: Approve to zero address");
      return [
        (k) => {
          allowances[[tokenId, this, spender]] = amount;
          E.Approval(tokenId, this, spender, amount);
          k(true);
          return [];
        },
      ];
    })
    .api_(A.deleteBalanceBox, (tokenId, addr) => {
      check(addr != zeroAddress, "ARC200: Delete balance box of zero address");
      check(isSome(balances[[tokenId, addr]]), "ARC200: Balance box not found");
      return [
        (k) => {
          const currentBalance = balanceOf(tokenId, addr);
          if(currentBalance === 0) {
            delete balances[[tokenId, addr]];
          }
          k(true);
          return [];
        },
      ];
    })
    .api_(A.deleteAllowanceBox, (tokenId, owner, spender) => {
      check(
        owner != zeroAddress,
        "ARC200: Delete allowance box of zero address"
      );
      check(
        spender != zeroAddress,
        "ARC200: Delete allowance box to zero address"
      );
      check(
        isSome(allowances[[tokenId, owner, spender]]),
        "ARC200: Allowance box not found"
      );
      return [
        (k) => {
          const currentAllowance = allowance(tokenId, owner, spender);
          if (currentAllowance === 0) {
            delete allowances[[tokenId, owner, spender]];
          }
          k(true);
          return [];
        },
      ];
    });
  // unreachable
  commit();
  exit();
});
