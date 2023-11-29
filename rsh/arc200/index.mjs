import { TestARC200 } from "./tests/test-arc200.mjs";
import { TestSwap200CtcCtc } from "./tests/test-swap200.mjs";

import { loadStdlib, test } from "@reach-sh/stdlib";
const { chk, chkErr } = test;

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

const main = async () => {
  console.log("Testing...");
  //await TestARC200();
  await TestSwap200CtcCtc();
};

await main();

process.exit(0);
