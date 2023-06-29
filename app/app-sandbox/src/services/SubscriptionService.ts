import * as backend from "../backend/subscription/index.Master.mjs";
import * as childBackend from "../backend/subscription/index.Child.mjs";
import { makeStdLib } from "../utils/reach.js";
import { zeroAddress } from "../utils/algorand.js";
import { fromSome } from "../utils/common.js";

/*
const { REACT_APP_CONTRACT_INFO_MASTER } = process.env;
const ctcInfoMaster = parseInt(REACT_APP_CONTRACT_INFO_MASTER || "0");
*/

//const ctcInfoMaster = 210034179;
//const ctcInfoMaster = 225729542;
const ctcInfoMaster = 227980983;

const stdlib: any = makeStdLib();
const bn2n = stdlib.bigNumberToNumber;
const fa = stdlib.formatAddress;

const claim = async (
  addr: any,
  appId: any,
  addrTo: any,
  addrFrom: any,
  amount: any
) => {
  const ctc = (
    await stdlib.connectAccount({
      addr,
    })
  ).contract(childBackend, appId);
  const {
    a: {
      U2: { claim },
    },
  } = ctc;
  await claim(addrTo, addrFrom, amount);
};

const subscribe = async (
  addr: any,
  appId: any,
  addrProvider: any,
  addrReserve: any
) => {
  const ctc = (
    await stdlib.connectAccount({
      addr,
    })
  ).contract(childBackend, appId);
  const {
    a: {
      U2: { subscribe },
    },
  } = ctc;
  await subscribe(addrProvider, addrReserve);
};

export const decodeSubscription = (subscription: any) =>
  ((subscription: any) => {
    const [remainingBn, lastTimeBn, active] = subscription;
    const remaining = bn2n(remainingBn);
    const lastTime = bn2n(lastTimeBn);
    return { remaining, lastTime, active };
  })(fromSome(subscription, [0, 0, false]));

const subscription = async (
  appId: any,
  addrProvider: any,
  addrReserve: any,
  addrSubscriber: any
) => {
  const ctc = (
    await stdlib.connectAccount({
      addr: zeroAddress,
    })
  ).contract(childBackend, appId);
  return await ctc.v.subscription(addrProvider, addrReserve, addrSubscriber);
};

const provider = async (appId: any, addrProvider: any, addrReserve: any) => {
  const ctc = (
    await stdlib.connectAccount({
      addr: zeroAddress,
    })
  ).contract(childBackend, appId);
  const {
    v: { providerService: view }, // !!!
  } = ctc;
  return await view(addrProvider, addrReserve);
};

const state = async (appId: any, addr: any) => {
  const ctc = (
    await stdlib.connectAccount({
      addr,
    })
  ).contract(childBackend, appId);
  const {
    v: { state: view },
  } = ctc;
  return await view();
};

const getEvents = (eventName: string) => async (addr: string, time?: any) => {
  const ctc = (
    await stdlib.connectAccount({
      addr,
    })
  ).contract(backend, ctcInfoMaster);
  console.log({ ctc });
  const {
    e: { [eventName]: evt },
  } = ctc;
  console.log({ evt });
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

const getAnnounceEvents = getEvents("announce");

// ? decode what event
const decodeEvent = (eventName: string) => (event: any) => {
  // TODO type me
  const { what, when } = event;
  console.log({ what, when });
  switch (eventName) {
    case "Subscribe": {
      const [ctcInfo, assetInfo, addrProvider, addrReserve, addrSubscriber] =
        what[0][1];
      const dEvent = {
        time: bn2n(when),
        appId: bn2n(ctcInfo),
        assetId: bn2n(assetInfo),
        providerAddress: fa(addrProvider),
        reserveAddress: fa(addrReserve),
        subscriberAddress: fa(addrSubscriber),
      };
      console.log({ dEvent });
      return dEvent;
    }
    case "Announce": {
      const [
        ctcInfo,
        assetInfo,
        addrProvider,
        addrReserve,
        periodCount,
        periodAmount,
        periodLength,
        referenceID,
      ] = what[0][1];
      const dEvent = {
        time: bn2n(when),
        appId: bn2n(ctcInfo),
        assetId: bn2n(assetInfo),
        providerAddress: fa(addrProvider),
        reserveAddress: fa(addrReserve),
        periodCount: bn2n(periodCount),
        periodAmount: bn2n(periodAmount),
        periodLength: bn2n(periodLength),
        referenceID: bn2n(referenceID),
      };
      console.log({ dEvent });
      return dEvent;
    }
    default: {
      return {};
    }
  }
};

const announce = async (
  appId: any,
  addrProvider: any,
  addrReserve: any,
  periodCount: number,
  periodAmount: number,
  periodLength: number,
  referenceID: number
) => {
  const { algosdk } = stdlib;

  const acc = await stdlib.connectAccount({ addr: addrProvider });
  const ctc = acc.contract(childBackend, appId);

  console.log("Announcing new provider service...");

  const ret = await ctc.a.U1.announce(
    algosdk.getApplicationAddress(1),
    periodCount,
    periodAmount,
    periodLength,
    referenceID
  );
  console.log({ ret });
};

export default {
  Child: {
    state,
    subscribe,
    claim,
    announce,
    subscription,
    provider,
  },
  Master: {
    getEvents,
    decodeEvent,
  },
};
