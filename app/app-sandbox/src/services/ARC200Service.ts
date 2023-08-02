import * as backend from "../backend/arc200/index.ARC200.mjs";
import * as ntBackend from "../backend/arc200/index.nt.mjs";
import * as nntBackend from "../backend/arc200/index.nnt.mjs";
import { zeroAddress } from "../utils/algorand.js";
import { fromSome } from "../utils/common.js";
import { makeStdLib } from "../utils/reach.js";

const stdlib = makeStdLib();
const fa = stdlib.formatAddress;
const bn = stdlib.bigNumberify;
const bn2n = stdlib.bigNumberToNumber;
const bn2bi = stdlib.bigNumberToBigInt;
const ib = stdlib.isBigNumber;

// deprecated
const ctcInfo = 249072786;

// deprecated
const getCTCInfo = () => ctcInfo;

const getBackendId = async (ctcInfo: number) => {
  const { algodClient } = await stdlib.getProvider();
  const app = await algodClient.getApplicationByID(ctcInfo).do();
  switch (app.params["approval-program"]) {
    default:
    case "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":
      // arc200
      return;
    case "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":
      return "nt";
    case "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":
      return "nnt";
  }
};

const getBackend = (backendId: string) => {
  switch (backendId) {
    case "nt":
      return ntBackend;
    case "nnt":
      return nntBackend;
    default:
      return backend;
  }
};

const nextEvent =
  (eventName: string) => async (ctcInfo: number, backendId?: string) => {
    const {
      e: { [eventName]: evt },
    } = (
      await stdlib.connectAccount({
        addr: zeroAddress,
      })
    ).contract(getBackend(backendId), ctcInfo);
    const t = await stdlib.getNetworkTime();
    await evt.seek(t);
    return await evt.next();
  };

const nextTransferEvent = nextEvent("Transfer");

const getEvents =
  (eventName: string) =>
  async (ctcInfo: number, time?: any, backendId?: string) => {
    const {
      e: { [eventName]: evt },
    } = (
      await stdlib.connectAccount({
        addr: zeroAddress,
      })
    ).contract(getBackend(backendId), ctcInfo);
    const t = await stdlib.getNetworkTime();
    if (time) {
      await evt.seek(time);
    }
    const events: any = []; // TODO: type
    do {
      const event = await evt.nextUpToTime(t);
      if (!event) break;
      events.push(event);
    } while (events);
    return events;
  };

const getMintEvents = getEvents("Mint");
const getTransferEvents = getEvents("Transfer");
const getApproveEvents = getEvents("Approve");

const launch = async (addr: string, params: any) => {
  const acc = await stdlib.connectAccount({ addr });
  const ctc = acc.contract(backend);
  const ctcInfo = await stdlib.withDisconnect(() =>
    ctc.p.Deployer({
      params,
      ready: (ctcInfo: any) => {
        console.log("Ready!");
        stdlib.disconnect(ctcInfo); // causes withDisconnect to immediately return ctcInfo
      },
    })
  );
  return ctcInfo;
};

const getTokenMetadata = async (ctcInfo: number, backendId?: string) => {
  const storedTokenMetadata = localStorage.getItem(`token-${ctcInfo}`);
  if (!storedTokenMetadata) {
    const { v } = (
      await stdlib.connectAccount({
        addr: zeroAddress,
      })
    ).contract(getBackend(backendId), ctcInfo);
    const prepareString = (str: string) => {
      const index = str.indexOf("\x00");
      if (index > 0) {
        return str.slice(0, str.indexOf("\x00"));
      } else {
        return str;
      }
    };
    const {
      name: dName,
      symbol: dSymbol,
      decimals: decimalsBn,
      totalSupply: totalSupplyBn,
      zeroAddress: zeroAddressHexStr,
      manager: managerAddressHexStr,
    } = fromSome(await v.state(), {});
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
    localStorage.setItem(`token-${ctcInfo}`, JSON.stringify(metadata));
    return metadata;
  } else {
    return JSON.parse(storedTokenMetadata);
  }
};

const allowance = async (ctcInfo: number, owner: any, spender: any) => {
  const acc = await stdlib.connectAccount({ addr: zeroAddress });
  const ctc = acc.contract(backend, ctcInfo);
  return fromSome(await ctc.v.allowance(owner, spender), bn(0));
};

const balanceOf = async (ctcInfo: number, addr: string, backendId?: string) => {
  const acc = await stdlib.connectAccount({ addr: zeroAddress });
  const ctc = acc.contract(getBackend(backendId), ctcInfo);
  return fromSome(await ctc.v.balanceOf(addr), bn(0));
};

const totalSupply = async (ctcInfo: number) => {
  const acc = await stdlib.connectAccount({ addr: zeroAddress });
  const ctc = acc.contract(backend, ctcInfo);
  return fromSome(await ctc.v.totalSupply(), bn(0));
};

const decimals = async (ctcInfo: number) => {
  const acc = await stdlib.connectAccount({ addr: zeroAddress });
  const ctc = acc.contract(backend, ctcInfo);
  return fromSome(await ctc.v.decimals(), bn(0));
};

// code below from ChildService.ts

const state = async (token: any) => {
  const acc = await stdlib.getDefaultAccount();
  const ctc = acc.contract(backend, token.appId);
  const {
    v: { state: view },
  } = ctc;
  return await view();
};

const approve = async (
  token: any,
  addrFrom: string,
  addrSpender: string,
  amount: any
) => {
  console.log({
    token,
    addrFrom,
    addrSpender,
    amount,
  });
  const acc = await stdlib.connectAccount({ addr: addrFrom });
  console.log({ acc });
  const ctc = acc.contract(backend, token.appId);
  if (ib(amount)) {
    return await ctc.a.approve(addrSpender, amount);
  } else {
    const acc = await stdlib.connectAccount({ addr: addrFrom });
    const [lhs, rhs, rst] = amount.split(".");
    if (rst) throw Error("Invalid amount");
    const lhsBn = bn(parseInt(lhs)).mul(bn(10).pow(bn(token.decimals)));
    const rhsBn =
      token.decimals > 0
        ? bn((rhs ?? "0").slice(0, token.decimals).padEnd(token.decimals, "0"))
        : bn(0);
    const amountBn = token.decimals > 0 ? lhsBn.add(rhsBn) : lhsBn;
    return await ctc.a.approve(addrSpender, amountBn);
  }
};

const deposit = async (
  token: any,
  addrFrom: string,
  addrTo: string,
  amount: string
) => {
  const acc = await stdlib.connectAccount({ addr: addrFrom });
  const [lhs, rhs, rst] = amount.split(".");
  if (rst) throw Error("Invalid amount");
  const lhsBn = bn(parseInt(lhs)).mul(bn(10).pow(bn(token.decimals)));
  const rhsBn =
    token.decimals > 0
      ? bn((rhs ?? "0").slice(0, token.decimals).padEnd(token.decimals, "0"))
      : bn(0);
  const amountBn = token.decimals > 0 ? lhsBn.add(rhsBn) : lhsBn;
  const ctc = acc.contract(backend, token.appId);
  const {
    a: {
      U2: { deposit },
    },
  } = ctc;
  return deposit(addrTo, amountBn);
};

const transfer = async (
  token: any,
  addrFrom: string,
  addrTo: string,
  amount: string
) => {
  try {
    const acc = await stdlib.connectAccount({ addr: addrFrom });
    const [mlhs, mrhs, rst] = amount.split(".");
    if (rst) throw Error("Invalid amount: malformed number");
    const lhs = mlhs === "" ? "0" : mlhs;
    if (typeof mrhs === "string" && mrhs.length > token.decimals) {
      throw Error("Invalid amount: too many decimals");
    }
    const rhs = mrhs === "" || !mrhs ? "0" : mrhs;
    const lhsBase = parseInt(lhs);
    const lhsDecimals = token.decimals;
    const lhsBn = bn(parseInt(lhs)).mul(
      bn(10).pow(bn(parseInt(token.decimals)))
    );
    const rhsBn =
      parseInt(token.decimals) > 0
        ? bn(
            (rhs ?? "0")
              .slice(0, parseInt(token.decimals))
              .padEnd(parseInt(token.decimals), "0")
          )
        : bn(0);
    const amountBn = token.decimals > 0 ? lhsBn.add(rhsBn) : lhsBn;
    const ctc = acc.contract(backend, token.appId);
    const {
      a: { transfer },
    } = ctc;
    return transfer(addrTo, amountBn);
  } catch (e) {
    console.log({ e });
  }
};

const withdraw = async (
  token: any,
  addrFrom: string,
  addrTo: string,
  amount: string
) => {
  const acc = await stdlib.connectAccount({ addr: addrFrom });
  const [lhs, rhs, rst] = amount.split(".");
  if (rst) throw Error("Invalid amount");
  const lhsBn = bn(parseInt(lhs)).mul(bn(10).pow(bn(token.decimals)));
  const rhsBn =
    token.decimals > 0
      ? bn((rhs ?? "0").slice(0, token.decimals).padEnd(token.decimals, "0"))
      : bn(0);
  const amountBn = lhsBn.add(rhsBn);
  const ctc = acc.contract(backend, token.appId);
  const {
    a: {
      U2: { withdraw },
    },
  } = ctc;
  return withdraw(addrTo, amountBn);
};

export default {
  launch,
  approve,
  deposit,
  transfer,
  withdraw,
  balanceOf,
  state,
  getMintEvents,
  getTransferEvents,
  getApproveEvents,
  getTokenMetadata,
  getCTCInfo,
  nextTransferEvent,
  totalSupply,
  decimals,
  allowance,
  getBackendId,
};
