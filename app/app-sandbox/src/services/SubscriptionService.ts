import * as backend from "../backend/sub256/index.SUB256.mjs";
import { makeStdLib } from "../utils/reach.js";
import { zeroAddress } from "../utils/algorand.js";
import { fromSome } from "../utils/common.js";

const ctcInfo = 254795779; // Algorand Testnet

const stdlib: any = makeStdLib();
const bn = stdlib.bigNumberify;

const getAddress = () => {
  const { algosdk } = stdlib;
  return algosdk.getApplicationAddress(ctcInfo);
};

const getEvents = (eventName: string) => async (time?: any) => {
  const ctc = (
    await stdlib.connectAccount({
      addr: zeroAddress,
    })
  ).contract(backend, ctcInfo);
  const {
    e: { [eventName]: evt },
  } = ctc;
  const t = await stdlib.getNetworkTime();
  if (time) {
    await evt.seek(time);
  }
  const events: any = [];
  do {
    const event = await evt.nextUpToTime(t);
    if (!event) break;
    events.push(event);
  } while (events);
  return events;
};

const subscribe = async (addr: string, addrProvider: string) => {
  const {
    a: { subscribe },
  } = (
    await stdlib.connectAccount({
      addr,
    })
  ).contract(backend, ctcInfo);
  return await subscribe(addrProvider);
};

const subscription = async (addrProvider: string, addrSubscriber: string) => {
  const ctc = (await stdlib.connectAccount({ addr: zeroAddress })).contract(
    backend,
    ctcInfo
  );
  return fromSome(await ctc.v.subscription(addrProvider, addrSubscriber), [
    bn(0),
    bn(0),
    false,
  ]);
};

const providerService = async (addrProvider: string) => {
  const ctc = (await stdlib.connectAccount({ addr: zeroAddress })).contract(
    backend,
    ctcInfo
  );
  return fromSome(await ctc.v.providerService(addrProvider), {});
};

export default {
  getEvents: getEvents("event"),
  subscribe,
  subscription,
  getAddress,
  providerService,
};
