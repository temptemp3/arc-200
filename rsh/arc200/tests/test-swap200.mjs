import * as ARC200Backend from "../companion/index.ARC200.mjs";
import * as ctcCtcSwap200Backend from "../companion/index.ctc_ctc.mjs";
import * as trimvirateBackend from "../companion/index.triumvirate.mjs";

import { loadStdlib, test } from "@reach-sh/stdlib";
const { chk, chkErr } = test;

const balances = {};

// Types of accounts
// 1. Accounts with neither balance
// 1.1. Requires balance to swap
// 1.1. Swaps token to net when token/net ratio is < 1
// 1.1. Swaps token to net when token/net ratio is > 1
// 1. Accounts with balance but no token
// 1.1. Swaps token to net when token/net ratio is < 1
// 1. Accounts with balance and token
// 1.1. Provides liquidity
// 1.1. Swaps token to net when token/net ratio is < 1
// 1.1. Swaps token to net when token/net ratio is > 1
// 1. Accounts with token but no balance
// 1.1. Requires balance to swap
// 1.1. Swaps token to net when token/net ratio is > 1

const zeroAddress =
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ";
const UInt256MaxBIS =
  "115792089237316195423570985008687907853269984665640564039457584007913129639935";
const TokTotalSupplyBIS = "1000000000000000000";

const deployCost = "0.16"; // txn cost + cost for box
const transferCostHot = "0.001"; // txn cost
const transferCostCold = "0.0305"; // txn cost + cost for box
const transferTxnCostCold = "0.002";
const transferBalanceBoxCost = "0.0285";
const transferGain = "0.0189"; // gain on box deletion
const transferNetCost = "0.0020"; // transferCostCold - transferGain
const transferFromCostCold = "";
const transferFromCostHot = "";
const transferFromGain = "";
const transferFromNetCost = "";
const approveCostCold = "";
const approveCostHot = "";
const approveGain = "";
const approveNetCost = "";
const deleteBalanceBoxCost = "";

const fromSome = (v, d) => (v[0] === "None" ? d : v[1]);

const stdlib = loadStdlib({ REACH_NO_WARN: "Y", REACH_DEBUG: "0" });
const { algosdk } = stdlib;
const accZero = await stdlib.connectAccount({ addr: zeroAddress });

const bn = stdlib.bigNumberify;
const bn2n = stdlib.bigNumberToNumber;
const balBn2n = ({ A, B }) => ({ A: bn2n(A), B: bn2n(B) });

const bn2bi = stdlib.bigNumberToBigInt;
const pc = stdlib.parseCurrency;
const fc = stdlib.formatCurrency;
const fawd = stdlib.formatWithDecimals;
const fa = stdlib.formatAddress;

const tokens = [
  {
    id: 6779767,
    name: "Voi Incentive Asset",
    symbol: "VIA",
    decimals: 6,
    totalSupply: 10000000000000000,
  },
];

const network = "ALGO";

if (stdlib.connector !== `${network}`) {
  console.log(`Sorry, this program is only compiled on ${network} for now`);
  process.exit(2);
}

console.log("Starting up...");

const assert = stdlib.assert;
const bigNumberify = stdlib.bigNumberify;

const assertFail = async (promise) => {
  try {
    await promise;
  } catch (e) {
    return;
  }
  throw "Expected exception but did not catch one";
};

const assertEq = (a, b, context = "assertEq") => {
  if (a === b) return;
  try {
    const res1BN = bn(a);
    const res2BN = bn(b);
    if (res1BN.eq(res2BN)) return;
  } catch {}
  assert(false, `${context}: ${a} == ${b}`);
};

const startMeUp = async (ctc, meta) => {
  const flag = "startup success throw flag";
  try {
    await ctc.p.Deployer({
      meta,
      ready: (ctc) => {
        throw flag;
      },
    });
  } catch (e) {
    if (e !== flag) {
      throw e;
    }
  }
};

// deployAs
// - deploys the contract as the given account
const deployAs = async (backend, acc, params) =>
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

const makeARC200 = ((backend) => (acc, ctcInfo) => {
  const ctc = acc.contract(backend, ctcInfo);
  return {
    id: ctcInfo,
    addr: algosdk.getApplicationAddress(bn2n(ctcInfo)),
    balanceOf: async (acc) =>
      bn2bi(fromSome(await ctc.v.arc200_balanceOf(acc), bn(0))),
    allowance: async (acc, addr) =>
      bn2bi(fromSome(await ctc.v.arc200_allowance(acc, addr), bn(0))),
    totalSupply: async () => fromSome(await ctc.v.arc200_totalSupply(), bn(0)),
  };
})(ARC200Backend);

const makeSwap200 = ((backend) => (acc, ctcInfo) => {
  const ctc = acc.contract(backend, ctcInfo);
  return {
    id: ctcInfo,
    addr: algosdk.getApplicationAddress(bn2n(ctcInfo)),
    balanceOf: async (acc) =>
      bn2bi(fromSome(await ctc.v.arc200_balanceOf(acc), bn(0))),
    allowance: async (acc, addr) =>
      bn2bi(fromSome(await ctc.v.arc200_allowance(acc, addr), bn(0))),
    totalSupply: async () => fromSome(await ctc.v.arc200_totalSupply(), bn(0)),
    Info: async () => fromSome(await ctc.v.Info(), {}),
  };
})(ctcCtcSwap200Backend);

// [ ] arc200
// [x] can create token
// [x] can deleteBalanceBox box exists
// [x] can deleteBalanceBox box does not exist
// [x] can destroy token
// [ ] can get balanceOf zero address ***
// [ ] can get balanceOf manager
// [ ] can get balanceOf issuer
// [ ] can get allowance zero address to zero address
// [ ] can get allowance zero address to manager
// [ ] can get allowance manager to zero address
// [ ] can get allowance manager to manager
// [ ] can get name
// [ ] can get symbol
// [ ] can get decimals
// [ ] can get totalSupply
// [ ] can get state
// [ ] can transfer 0
// [ ] can transfer 1
// [ ] can approve 0
// [ ] can approve 1
// [ ] can approve max
// [ ] can deleteAllowanceBox
// [ ] can burn 0
// [ ] can burn 1
// [ ] can transferFrom
// [ ] swap200
// [x] can deploy swap200
// [ ] can swapAForB
// [ ] can swapBForA
// [ ] harvest by tri
// [ ] tri
// [x] can deploy tri
// [x] can get tri info
// [x] can propose
// [x] can support

// 1. arc200
// 1. can deploy arc200
// 1. can transfer
// 1. can approve
// 1. can transferFrom
// 1. can deleteBalanceBox
// 1. can deleteAllowanceBox
// 1. can destroy
// 1. swap200
// 1. can deploy swap200
// 1. can swapAForB
// 1. can swapBForA
// 1. harvest by tri
// 1. tri
// 1. can deploy tri

export const TestSwap200CtcCtc = async () => {
  console.log("Testing Swap200...");
  const apps = [];

  const accs = await stdlib.newTestAccounts(4, pc(100));

  const holderAccs = {};
  /*
  for (let i = 0; i < Object.keys(balances).length; i++) {
    const [addr, bals] = Object.entries(balances)[i];
    if ((bals["0"] || 0) === 0) continue;
    const acc = await stdlib.newTestAccount(bals["0"]);
    holderAccs[addr] = acc;
  }
  */
  const [accCaesar, accPompey, accCrassus, accCleopatra, ...accHolders] = [
    ...accs,
    ...Object.values(holderAccs),
  ];
  const addrs = accs.map((a) => stdlib.formatAddress(a.getAddress()));
  const [addrCaesar, addrPompey, addrCrassus, addrCleopatra, ...addrHolders] =
    addrs;

  console.log(addrHolders);

  // begin triumvirate

  // 1. can deploy tri
  const ctcTri0 = accCaesar.contract(trimvirateBackend);
  const ctcTri0Info = await stdlib.withDisconnect(() =>
    ctcTri0.p.Deployer({
      params: {
        umvirs: [accCaesar, accPompey, accCrassus],
        info: {
          protoFee: 5,
          lpFee: 25,
          totFee: 30,
        },
      },
      ready: (ctcInfo) => {
        console.log("Ready!");
        stdlib.disconnect(ctcInfo); // causes withDisconnect to immediately return ctcInfo
      },
    })
  );
  chk("can deploy tri", ctcTri0Info.gte(bn(0)), true);

  apps.push(bn2n(ctcTri0Info));

  // [TRI] here

  const ctcCaesar = accCaesar.contract(trimvirateBackend, ctcTri0Info);
  const ctcPompey = accPompey.contract(trimvirateBackend, ctcTri0Info);
  const ctcCrassus = accCrassus.contract(trimvirateBackend, ctcTri0Info);

  ctcTri0.e.Event.monitor(console.log);

  const triInfo = await ctcTri0.v.Info();
  chk("can get tri info", triInfo[0], "Some");

  const c0 = ["NoOp", null];

  await ctcCaesar.a.Umvir.propose(c0);
  chk("can propose", true, true);

  await ctcCrassus.a.Umvir.support(0, c0);
  chk("can support", true, true);

  // more tri stuff here

  // begin arc200
  const tokenMeta = [
    {
      zeroAddress: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ",
      enableZeroAddressBurn: true,
      meta: {
        name: "Token A",
        symbol: "TOKA",
        decimals: 8,
        totalSupply: 1000000000000000000,
      },
    },
    {
      zeroAddress: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ",
      enableZeroAddressBurn: true,
      meta: {
        name: "Token B",
        symbol: "TOKB",
        decimals: 8,
        totalSupply: 1000000000000000000,
      },
    },
  ];
  const tokens = [];
  for (const token of tokenMeta) {
    const ctc = accCaesar.contract(ARC200Backend);
    Object.keys(ctc.e).forEach((el) =>
      ctc.e[el].monitor((ej) => console.log({ [el]: ej }))
    );
    const ctcInfo = await stdlib.withDisconnect(() =>
      ctc.p.Deployer({
        params: { ...token, manager: accCaesar },
        ready: (ctcInfo) => {
          console.log("Ready!");
          stdlib.disconnect(ctcInfo);
        },
      })
    );
    tokens.push(ctcInfo);
    apps.push(bn2n(ctcInfo));
  }

  const [TokA, TokB] = tokens.map((ci) => makeARC200(accZero, ci));

  const displayTokBalances = async (acc) => {
    const balA = await TokA.balanceOf(acc);
    const balB = await TokB.balanceOf(acc);
    console.log({ balA, balB });
  };

  chk(
    "initial tokA balance accurate",
    (await TokA.balanceOf(accCaesar)).toString(),
    TokTotalSupplyBIS
  );

  chk(
    "initial tokB balance accurate",
    (await TokB.balanceOf(accCaesar)).toString(),
    TokTotalSupplyBIS
  );

  // Initialize tok VIA
  // console.log("Initializing tok VIA...");
  // const scHolderCount = Math.min(10, scHolders.length);
  // for (let i = 0; i < scHolderCount; i++) {
  //   const [addr, amt] = scHolders[i];
  //   const ctc = accCaesar.contract(ARC200Backend, TokVIA.id);
  //   console.log(`Transfer ${amt} VIA to ${addr}`);
  //   await ctc.a.arc200_transfer(addr, amt);
  // }
  // console.log("Done initializing tok VIA");

  // Initialize tok VOI
  // console.log("Initializing tok VOI...");
  // const netHolderCount = Math.min(10, netHolders.length);
  // for (let i = 0; i < netHolderCount; i++) {
  //   const [addr, amt] = netHolders[i];
  //   const ctc = accCaesar.contract(ARC200Backend, TokVOI.id);
  //   console.log(`Transfer ${amt} VOI to ${addr}`);
  //   await ctc.a.arc200_transfer(addr, amt);
  // }
  // console.log("Done initializing tok VOI");

  // can deploy swap200
  console.log("Deploying swap200...");
  const ctcSwap0 = accCaesar.contract(ctcCtcSwap200Backend);
  const ctcSwap0Info = await stdlib.withDisconnect(() =>
    ctcSwap0.p.Deployer({
      params: {
        zeroAddress,
        meta: {
          name: "SWAP200 LP - TOKA/TOKB",
          symbol: "ARC200LT",
          decimals: 6,
        },
        swap: {
          tokA: TokA.id,
          tokB: TokB.id,
          proto: ctcTri0Info,
        },
      },
      ready: (ctcInfo) => {
        console.log("Ready!");
        stdlib.disconnect(ctcInfo);
      },
    })
  );
  chk("can deploy swap200", ctcSwap0Info.gte(bn(0)), true);
  apps.push(bn2n(ctcSwap0Info));
  const swapAddress = algosdk.getApplicationAddress(bn2n(ctcSwap0Info));

  // deploy swap200 VOI/VIA
  const [LT_TOKA_TOKB] = [ctcSwap0Info].map((ci) => makeSwap200(accZero, ci));

  chk("LT_TokA eq TokA", (await LT_TOKA_TOKB.Info()).tokA.eq(TokA.id), true);
  chk("LT_TokB eq TokB", (await LT_TOKA_TOKB.Info()).tokB.eq(TokB.id), true);

  console.log(LT_TOKA_TOKB);

  chk(
    "total supply accurate",
    (await LT_TOKA_TOKB.totalSupply()).toString(),
    UInt256MaxBIS
  );

  chk(
    "initial liquidity accurate",
    (await LT_TOKA_TOKB.balanceOf(swapAddress)).toString(),
    UInt256MaxBIS
  );

  console.log(await LT_TOKA_TOKB.Info());

  // begin simulation
  // for each balance with both tokens
  //  deposit min(balanceA, balanceB) to swap1
  for (const el of Object.entries(balances)) {
    const [addr, bals] = el;
    console.log(addr, bals);
    const [balA, balB] = bals;
    if (balA === 0 || balB === 0) continue;
    // amount to deposit
    //  min(balanceA, balanceB)
    const amt = Math.min(balA, balB);
    // deposit
    //  transfer tokA to swap1
  }

  // begin deposit

  console.log("DEPOSIT");

  const doDeposit = async (acc, swapCtc, tokIdA, tokIdB, amtA, amtB) => {
    const ctcTokA = acc.contract(ARC200Backend, tokIdA);
    const ctcTokB = acc.contract(ARC200Backend, tokIdB);
    await ctcTokA.a.arc200_approve(
      swapCtc,
      await ctcTokA.v.arc200_totalSupply()
    );
    await ctcTokB.a.arc200_approve(
      swapCtc,
      await ctcTokB.v.arc200_totalSupply()
    );
    await ctcTokA.a.arc200_transfer(swapCtc, amtA);
    await ctcTokB.a.arc200_transfer(swapCtc, amtB);
    await swapCtc.a.Provider.deposit([amtA, amtB], pc(0));
  };

  do {
    // approve tokB spending by ctc
    console.log(`caesar balance: ${await stdlib.balanceOf(accCaesar)}`);
    console.log(
      `caesar tokB allowance ctcSwap0 ${await TokB.allowance(
        accCaesar,
        swapAddress
      )}`
    );
    const ctcTokA = accCaesar.contract(ARC200Backend, TokA.id);
    const ctcTokB = accCaesar.contract(ARC200Backend, TokB.id);
    await ctcTokA.a.arc200_approve(swapAddress, await TokA.totalSupply());
    await ctcTokB.a.arc200_approve(swapAddress, await TokB.totalSupply());
    console.log(
      `caesar tokB allowance ctcSwap0 ${await TokB.allowance(
        accCaesar,
        swapAddress
      )}`
    );
    // cold transfer box payment
    do {
      const before = await stdlib.balanceOf(accCaesar);
      await ctcTokA.a.arc200_transfer(swapAddress, 0);
      await ctcTokB.a.arc200_transfer(swapAddress, 0);
      const after = await stdlib.balanceOf(accCaesar);
      const diff = after.gt(before) ? after.sub(before) : before.sub(after);
      console.log({ before: fc(before), after: fc(after), diff: fc(diff) });
    } while (0);
    console.log(`caesar tokA balance: ${await TokA.balanceOf(accCaesar)}`);
    console.log(`caesar tokB balance: ${await TokB.balanceOf(accCaesar)}`);
    console.log(`swap tokA balance: ${await TokA.balanceOf(swapAddress)}`);
    console.log(`swap tokB balance: ${await TokB.balanceOf(swapAddress)}`);
    console.log(
      `caesar lt balance: ${await LT_TOKA_TOKB.balanceOf(accCaesar)}`
    );
    console.log(`caesar balance: ${await stdlib.balanceOf(accCaesar)}`);
    console.log("Deposit A");
    await ctcSwap0.a.Provider.depositA(pc(50));
    console.log("Deposit B");
    await ctcSwap0.a.Provider.depositB(pc(50));
    console.log("Deposit");
    await stdlib.wait(1);
    await ctcSwap0.a.Provider.deposit([pc(40), pc(40)], pc(0));
    console.log(
      `caesar tokB allowance ctcSwap0 ${await TokB.allowance(
        accCaesar,
        swapAddress
      )}`
    );
    console.log(`caesar tokB balance: ${await TokB.balanceOf(accCaesar)}`);
    console.log(`caesar tokA balance: ${await TokA.balanceOf(accCaesar)}`);
    console.log(`swap tokA balance: ${await TokA.balanceOf(swapAddress)}`);
    console.log(`swap tokB balance: ${await TokB.balanceOf(swapAddress)}`);
    console.log(
      `caesar lt balance: ${await LT_TOKA_TOKB.balanceOf(accCaesar)}`
    );
    console.log(`caesar balance: ${await stdlib.balanceOf(accCaesar)}`);
    // test: cold deposit with zero payment fails
    // test: cold deposit with payment succeeds
    // test: hot deposit with  zero payment succeeds
  } while (0);

  // begin withdraw

  console.log("WITHDRAW");

  do {
    console.log(`caesar balance: ${await stdlib.balanceOf(accCaesar)}`);
    console.log(
      `caesar lt allowance ctcSwap0 ${await LT_TOKA_TOKB.allowance(
        accCaesar,
        swapAddress
      )}`
    );
    await ctcSwap0.a.arc200_approve(
      swapAddress,
      fromSome(await ctcSwap0.v.arc200_totalSupply(), bn(0))
    );
    console.log(`caesar balance: ${await stdlib.balanceOf(accCaesar)}`);
    console.log(
      `caesar lt allowance ctcSwap0 ${await LT_TOKA_TOKB.allowance(
        accCaesar,
        swapAddress
      )}`
    );
    // TODO check approval here
    console.log(`caesar balance: ${await stdlib.balanceOf(accCaesar)}`);
    console.log(`caesar tokB balance: ${await TokB.balanceOf(accCaesar)}`);
    console.log(`swap tokB balance: ${await TokB.balanceOf(swapAddress)}`);
    console.log(
      `caesar lt balance: ${await LT_TOKA_TOKB.balanceOf(accCaesar)}`
    );
    await ctcSwap0.a.Provider.withdraw(pc(25), [pc(24), pc(24)]);
    await ctcSwap0.a.Provider.withdrawA(pc(10));
    await ctcSwap0.a.Provider.withdrawA(pc(10));
    console.log(
      `caesar lt allowance ctcSwap0 ${await LT_TOKA_TOKB.allowance(
        accCaesar,
        swapAddress
      )}`
    );
    console.log(`caesar balance: ${await stdlib.balanceOf(accCaesar)}`);
    console.log(`caesar tokB balance: ${await TokB.balanceOf(accCaesar)}`);
    console.log(`swap tokB balance: ${await TokB.balanceOf(swapAddress)}`);
    console.log(
      `caesar lt balance: ${await LT_TOKA_TOKB.balanceOf(accCaesar)}`
    );
  } while (0);

  // begin swapAforB

  do {
    // Pompey has neither tokB or tokA
    //  Caesar give Pompey some tokA
    const ctcTokACaesar = accCaesar.contract(ARC200Backend, TokA.id);
    const ctcTokAPompey = accPompey.contract(ARC200Backend, TokA.id);
    const ctcTokBPompey = accPompey.contract(ARC200Backend, TokB.id);
    await ctcTokACaesar.a.arc200_transfer(accPompey, pc(10));
    console.log(`caesar tokA balance: ${await TokA.balanceOf(accCaesar)}`);
    console.log(`pompey tokA balance: ${await TokA.balanceOf(accPompey)}`);
    console.log(`pompey tokB balance: ${await TokB.balanceOf(accPompey)}`);
    // Pompey wants tokB but only has tokA
    //  He swaps tokA for tokB
    await ctcTokAPompey.a.arc200_approve(swapAddress, await TokA.totalSupply());
    const ctcSwap = accPompey.contract(ctcCtcSwap200Backend, LT_TOKA_TOKB.id);
    console.log(await ctcSwap.v.reserve(accPompey));
    await ctcSwap.a.Trader.swapAForB(pc(1), pc(0));
    console.log(`pompey tokA balance: ${await TokA.balanceOf(accPompey)}`);
    console.log(`pompey tokB balance: ${await TokB.balanceOf(accPompey)}`);
    console.log(await ctcSwap.v.reserve(accPompey));
    //  He has tokB in reserve
    await ctcTokBPompey.a.arc200_transfer(accPompey, 0);
    await ctcSwap.a.Provider.withdrawB(pc(0.5));
    console.log(`pompey tokA balance: ${await TokA.balanceOf(accPompey)}`);
    console.log(`pompey tokB balance: ${await TokB.balanceOf(accPompey)}`);
    console.log(await LT_TOKA_TOKB.Info());
    console.log(await LT_TOKA_TOKB.Info());
    console.log(bn2bi((await LT_TOKA_TOKB.Info()).protoBals.A));
    console.log(bn2bi((await LT_TOKA_TOKB.Info()).protoBals.B));
  } while (0);

  // begin swapBforA

  // ---------------------------------------------
  // Pompey may not have neither tokB or tokA
  //  Caesar give Pompey some tokB
  // Pompey wants tokA but only has tokB
  //  He swaps tokB for tokA
  // ---------------------------------------------
  do {
    console.log("Pompey may not have neither tokB or tokA");
    const ctcTokBCaesar = accCaesar.contract(ARC200Backend, TokB.id);
    const ctcTokAPompey = accPompey.contract(ARC200Backend, TokA.id);
    const ctcTokBPompey = accPompey.contract(ARC200Backend, TokB.id);
    console.log("Caeasar give Pompey some tokB");
    await ctcTokBCaesar.a.arc200_transfer(accPompey, pc(10));
    console.log(`caesar tokB balance: ${await TokB.balanceOf(accCaesar)}`);
    console.log(`pompey tokA balance: ${await TokA.balanceOf(accPompey)}`);
    console.log(`pompey tokB balance: ${await TokB.balanceOf(accPompey)}`);
    console.log("Pompey wants tokA but only has tokB");
    await ctcTokBPompey.a.arc200_approve(swapAddress, await TokB.totalSupply());
    const ctcSwap = accPompey.contract(ctcCtcSwap200Backend, LT_TOKA_TOKB.id);
    console.log(await ctcSwap.v.reserve(accPompey));
    console.log("He swaps tokB for tokA");
    await ctcSwap.a.Trader.swapBForA(pc(1), pc(0));
    console.log(`pompey tokA balance: ${await TokA.balanceOf(accPompey)}`);
    console.log(`pompey tokB balance: ${await TokB.balanceOf(accPompey)}`);
    console.log(await ctcSwap.v.reserve(accPompey));
    //  He has tokA
    await ctcTokAPompey.a.arc200_transfer(accPompey, 0);
    await ctcSwap.a.Provider.withdrawA(pc(0.5));
    console.log(`pompey tokA balance: ${await TokA.balanceOf(accPompey)}`);
    console.log(`pompey tokB balance: ${await TokB.balanceOf(accPompey)}`);
    console.log(await LT_TOKA_TOKB.Info());
    console.log(await LT_TOKA_TOKB.Info());
    console.log(bn2bi((await LT_TOKA_TOKB.Info()).protoBals.A));
    console.log(bn2bi((await LT_TOKA_TOKB.Info()).protoBals.B));
  } while (0);
  // ---------------------------------------------

  // harvest by tri

  // pompey creates box for cleopatra
  const ctcTokAPompey = accPompey.contract(ARC200Backend, TokA.id);
  const ctcTokBPompey = accPompey.contract(ARC200Backend, TokB.id);
  await ctcTokAPompey.a.arc200_transfer(accCleopatra, 0);
  await ctcTokBPompey.a.arc200_transfer(accCleopatra, 0);

  console.log("tokA", bn2n((await LT_TOKA_TOKB.Info()).tokA));
  console.log("tokB", bn2n((await LT_TOKA_TOKB.Info()).tokB));

  const cc = [
    LT_TOKA_TOKB.id,
    LT_TOKA_TOKB.addr,
    TokA.id,
    TokB.id,
    addrCleopatra,
  ];
  const c3 = ["Harvest", cc];
  await ctcCaesar.a.Umvir.propose(c3);
  console.log("Proto bals:");
  console.log(balBn2n((await LT_TOKA_TOKB.Info()).protoBals));
  console.log("Cleopatra bals:");
  await displayTokBalances(accCleopatra);
  await ctcPompey.a.Umvir.support(0, c3);
  console.log("Proto bals:");
  console.log(balBn2n((await LT_TOKA_TOKB.Info()).protoBals));
  console.log("Cleopatra bals:");
  await displayTokBalances(accCleopatra);

  console.log("Done!");
};
