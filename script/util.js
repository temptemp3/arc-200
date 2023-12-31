import * as backend from "./build/index.ARC200.mjs";

const appId = process.env.APP_ID || 0;

export const fromSome = (v, d) => (v[0] === "None" ? d : v[1]);

export const getContractHelper = (stdlib) => (acc, appId) => {
  return acc.contract(backend, appId);
};

// transfer
// - transfers the given amount from the given account to the given account
export const transferHelper = (stdlib) => (acc, appId, to, amount) => {
  const ctc = acc.contract(backend, appId);
  return ctc.a.arc200_transfer(to, amount);
};

// transferFrom
// - transfers the given amount from the given account to the given account
export const transferFromHelper =
  (stdlib) => (acc, appId, from, to, amount) => {
    const ctc = acc.contract(backend, appId);
    return ctc.a.arc200_transferFrom(from, to, amount);
  };

// approve
// - approves the given amount from the given account to the given account
export const approveHelper = (stdlib) => (acc, appId, spender, amount) => {
  const ctc = acc.contract(backend, appId);
  return ctc.a.arc200_approve(spender, amount);
};

//
// deployAs
// - deploys the contract as the given account
//
export const deployAsHelper = (stdlib) => async (acc, params) =>
  (async (ctc) =>
    await stdlib.withDisconnect(() =>
      ctc.p.Deployer({
        params,
        ready: (ctcInfo) => {
          console.log("Ready!");
          stdlib.disconnect(ctcInfo); // causes withDisconnect to immediately return ctcInfo
        },
      })
    ))(acc.contract(backend));

export const destroyHelper = (stdlib) => async (acc) => {
  (async (ctc) => {
    ctc.a.destroy();
  })(acc.contract(backend));
};

export const tokenMetadataHelper = (stdlib) => async (acc, tokenId) => {
  const bn = stdlib.bigNumberify;
  const bn2bi = stdlib.bigNumberToBigInt;
  const prepareString = (str) => {
    const index = str.indexOf("\x00");
    if (index > 0) {
      return str.slice(0, str.indexOf("\x00"));
    }
  };
  const ctc = acc.contract(backend, tokenId);
  // slow way
  console.log(await ctc.v.arc200_name());
  const name = prepareString(fromSome(await ctc.v.arc200_name(), ""));
  const symbol = prepareString(fromSome(await ctc.v.arc200_symbol(), ""));
  const decimals = bn2bi(
    fromSome(await ctc.v.arc200_decimals(), bn(0))
  ).toString();
  const totalSupply = bn2bi(
    fromSome(await ctc.v.arc200_totalSupply(), bn(0))
  ).toString();
  const metadata = {
    name: name,
    symbol,
    decimals,
    totalSupply,
  };
  // fast way
  /*
  const {
    name: dName,
    symbol: dSymbol,
    decimals: decimalsBn,
    totalSupply: totalSupplyBn,
    zeroAddress: zeroAddressHexStr,
    manager: managerAddressHexStr,
  } = fromSome(await ctc.v.state(), {});
  const name = prepareString(dName);
  const symbol = prepareString(dSymbol);
  const decimals = bn2n(decimalsBn);
  const totalSupply = bn2bi(totalSupplyBn).toString();
  const tZeroAddress = fa(zeroAddressHexStr);
  const managerAddress = fa(managerAddressHexStr);
  const metadata = {
    name: name,
    symbol,
    decimals,
    totalSupply,
    zeroAddress: tZeroAddress,
    manager: managerAddress,
  };
  */
  return metadata;
};

export const balanceOfHelper = (stdlib) => async (acc, appId, addr) => {
  const bn = stdlib.bigNumberify;
  const bn2bi = stdlib.bigNumberToBigInt;
  const ctc = acc.contract(backend, appId);
  const balance = bn2bi(
    fromSome(await ctc.v.arc200_balanceOf(addr), bn(0))
  ).toString();
  return balance;
};

export const allowanceHelper =
  (stdlib) => async (acc, appId, addrFrom, addrSpender) => {
    const bn = stdlib.bigNumberify;
    const bn2bi = stdlib.bigNumberToBigInt;
    const ctc = acc.contract(backend, appId);
    const allowance = bn2bi(
      fromSome(await ctc.v.arc200_allowance(addrFrom, addrSpender), bn(0))
    ).toString();
    return allowance;
  };

export const eventMonitorHelper = (stdlib) => async (acc) => {
  const ctc = acc.contract(backend, appId);
  ctc.e.Mint.monitor(console.log);
  ctc.e.Transfer.monitor(console.log);
  ctc.e.Approval.monitor(console.log);
};
