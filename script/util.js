import * as backend from "./build/index.ARC200.mjs";
import { zeroAddress } from "./algorand.js";

const appId = process.env.APP_ID || 0;

const fromSome = (v, d) => (v[0] === "None" ? d : v[1]);

//
// deployAs
// - deploys the contract as the given account
//
export const deployAsHelper = (stdlib) => async (acc) =>
  (async (ctc) =>
    await stdlib.withDisconnect(() =>
      ctc.p.Deployer({
        params: { zeroAddress },
        ready: (ctcInfo) => {
          console.log("Ready!");
          stdlib.disconnect(ctcInfo); // causes withDisconnect to immediately return ctcInfo
        },
      })
    ))(acc.contract(backend));

//
// mint
// - mints the given token to the given address
//
export const mintHelper = (stdlib) => async (acc, tokenId, addr, token) =>
  (async (ctc) => ctc.a.mint(tokenId, addr, token))(
    acc.contract(backend, appId)
  );

export const tokenMetadataHelper = (stdlib) => async (acc, tokenId) => {
  const bn = stdlib.bigNumberify;
  const bn2bi = stdlib.bigNumberToBigInt;
  const prepareString = (str) => {
    const index = str.indexOf("\x00");
    if (index > 0) {
      return str.slice(0, str.indexOf("\x00"));
    }
  };
  const ctc = acc.contract(backend, appId);
  const name = prepareString(fromSome(await ctc.v.name(tokenId), ""))
  const symbol = prepareString(fromSome(await ctc.v.symbol(tokenId), ""))
  const decimals = bn2bi(fromSome(await ctc.v.decimals(tokenId), bn(0))).toString();
  const totalSupply = bn2bi(fromSome(await ctc.v.totalSupply(tokenId), bn(0))).toString();
  const metadata = { name, symbol, decimals, totalSupply };
  return metadata;
};

export const balanceOfHelper = (stdlib) => async (acc, tokenId, addr) => {
  const bn = stdlib.bigNumberify;
  const bn2bi = stdlib.bigNumberToBigInt;
  const ctc = acc.contract(backend, appId);
  console.log(ctc);
  const balance = bn2bi(fromSome(await ctc.v.balanceOf(tokenId, addr), bn(0))).toString();
  return balance;
}

export const eventMonitorHelper = (stdlib) => async (acc) => {
  const ctc = acc.contract(backend, appId);
  ctc.e.Mint.monitor(console.log);
  ctc.e.Transfer.monitor(console.log);
  ctc.e.Approval.monitor(console.log);
}
