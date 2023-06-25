import * as backend from "./build/index.ARC200.mjs";
import { loadStdlib } from "@reach-sh/stdlib";

const mintCost = "";
const transferCostHot = "0.001"; // txn cost
const transferCostCold = "0.0205"; // txn cost + cost for box
const transferGain = "0.0185"; // gain on box deletion
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

const stdlib = loadStdlib({ REACH_NO_WARN: "Y" });

const bn = stdlib.bigNumberify;
const bn2n = stdlib.bigNumberToNumber;

const zeroAddress =
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ";

const tokens = [
  {
    name: "ERC200 Token",
    symbol: "ERC200",
    decimals: 8,
    totalSupply: 1000000000000000000, // 10Bi
  },
];

const network = "ALGO";

if (stdlib.connector !== `${network}`) {
  console.log(`Sorry, this program is only compiled on ${network} for now`);
  process.exit(0);
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
const deployAs = async (acc) =>
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

// main

const balanceBoxes = new Set();

const accs = await stdlib.newTestAccounts(7 + 100, stdlib.parseCurrency(100));

const accZero = await stdlib.connectAccount({ addr: zeroAddress });

const [
  accIssuer,
  accMaster,
  accManager,
  accAlice,
  accBob,
  accCarla,
  accDave,
  ...accRobots
] = accs;

const [
  addrIssuer,
  addrMaster,
  addrManager,
  addrAlice,
  addrBob,
  addrCarla,
  addrDave,
  ...addrRobots
] = accs.map((a) => a.getAddress());

// deploy contract as issuer

const ctcInfo = await deployAs(accMaster);

console.log({ ctcInfo: bn2n(ctcInfo) });

// once upon a time, we had to do this:
// - mint arc-200 token and send 100% of funds to addr (call ctc.a.mint(mintParams))

const {
  v: { balanceOf, allowance, decimals, name, symbol, totalSupply },
  e,
} = accZero.contract(backend, ctcInfo);

e.Mint.monitor((a) =>
  console.log({
    Mint: a,
  })
);
e.Transfer.monitor((a) =>
  console.log({
    Transfer: a,
  })
);
e.Approval.monitor((a) =>
  console.log({
    Approval: a,
  })
);

const {
  a: { mint },
} = accIssuer.contract(backend, ctcInfo);

const { algosdk } = stdlib;

const tokenId = algosdk.getApplicationAddress(0);

console.log({ tokenId });

if (await mint(tokenId, addrManager, tokens[0])) {
  console.log("mint success");
}

balanceBoxes.add(addrManager);

// check that the token was minted correctly

console.log("Test: check that the token was minted correctly");

//assertEq(fromSome(await name(tokenId), ""), tokens[0].name); // assertion fails due to zero bytes
//assertEq(fromSome(await symbol(tokenId), ""), tokens[0].symbol); // assertion fails due to zero bytes
assertEq(fromSome(await decimals(tokenId), 0), tokens[0].decimals);
assertEq(fromSome(await totalSupply(tokenId), 0), tokens[0].totalSupply);

// TEST balanceOf

// balance of manager should be 100% of funds

console.log("Test: balance of manager should be 100% of funds");

assertEq(
  fromSome(await balanceOf(tokenId, addrManager), 0),
  bn(tokens[0].totalSupply)
);

// balance of issuer should be 0

console.log("Test: balance of issuer should be 0");

assertEq(fromSome(await balanceOf(tokenId, addrIssuer), 0), bn(0));

// transfer 0 tokens from manager to alice

const { a: manager } = accManager.contract(backend, ctcInfo);
const { a: alice } = accAlice.contract(backend, ctcInfo);
const { a: bob } = accBob.contract(backend, ctcInfo);

console.log("Test: transfer 0au tokens from manager to alice");

await manager.transfer(tokenId, addrAlice, 0); // creates box

balanceBoxes.add(addrAlice);

assertEq(
  fromSome(await balanceOf(tokenId, addrManager), 0),
  bn(tokens[0].totalSupply)
);
assertEq(fromSome(await balanceOf(tokenId, addrAlice), 0), bn(0));

// transfer 1au tokens from manager to issuer

console.log("Test: transfer 1au tokens from manager to issuer");

await manager.transfer(tokenId, addrAlice, 1);

assertEq(
  fromSome(await balanceOf(tokenId, addrManager), 0),
  bn(tokens[0].totalSupply).sub(1)
);
assertEq(fromSome(await balanceOf(tokenId, addrAlice), bn(0)), bn(1));

// transfer 1au tokens from manager to robots

/*
console.log("Test: transfer 1au tokens from manager to robots");

console.log(addrRobots);
for (const addr of addrRobots) {
  console.log(`Test: transfer 1au tokens from manager to ${addr}`);
  await manager.transfer(tokenId, addr, 1);
  balanceBoxes.add(addr);
}
*/

// TEST transfer cost dry

console.log("Test: transfer cost dry");

do {
  const before = await stdlib.balanceOf(accManager);
  console.log(`Test: transfer 1au tokens from manager to ${addrRobots[0]}`);
  await manager.transfer(tokenId, addrRobots[0], 1);
  balanceBoxes.add(addrRobots[0]);
  const after = await stdlib.balanceOf(accManager);
  if (before.gt(after)) {
    const diff = stdlib.formatCurrency(before.sub(after));
    console.log(`Test: transfer cost ${diff}`);
  }
} while (0);

console.log("Test: transfer cost dry");

do {
  const before = await stdlib.balanceOf(accManager);
  console.log(`Test: transfer 1au tokens from manager to ${addrRobots[0]}`);
  await manager.transfer(tokenId, addrRobots[0], 1);
  balanceBoxes.add(addrRobots[0]);
  const after = await stdlib.balanceOf(accManager);
  if (before.gt(after)) {
    const diff = stdlib.formatCurrency(before.sub(after));
    console.log(`Test: transfer cost ${diff}`);
  }
} while (0);

// TEST transfer gain

console.log("Test: transfer gain");

do {
  const before = await stdlib.balanceOf(accMaster);
  await accRobots[0]
    .contract(backend, ctcInfo)
    .a.transfer(tokenId, addrRobots[1], 2);
  await bob.deleteBalanceBox(tokenId, addrRobots[0]);
  balanceBoxes.delete(addrRobots[0]);
  const after = await stdlib.balanceOf(accMaster);
  await stdlib.wait(1);
  if (after.gt(before)) {
    const diff = stdlib.formatCurrency(after.sub(before));
    console.log(`Test: transfer gain ${diff}`);
    assertEq(diff, "0.0185");
  }
} while (0);

console.log("Test: transfer 2au tokens from alice to bob (should fail)");

try {
  await alice.transfer(tokenId, addrBob, 2);
} catch (e) {}

assertEq(fromSome(await balanceOf(tokenId, addrBob), bn(0)), bn(0));

console.log("Test: transfer 1au tokens from alice to bob");

await alice.transfer(tokenId, addrBob, 1);

balanceBoxes.add(addrBob);

assertEq(fromSome(await balanceOf(tokenId, addrBob), bn(0)), bn(1));

// TEST allowance

// allowance should be 0

console.log("Test: allowance should be 0");

assertEq(fromSome(await allowance(tokenId, addrBob, addrAlice), bn(0)), bn(0));

// TEST transferFrom

console.log("Test: transferFrom Bob 1au to Carla by Alice");

await bob.approve(tokenId, addrAlice, 1);

assertEq(fromSome(await allowance(tokenId, addrBob, addrAlice), bn(0)), bn(1));
assertEq(fromSome(await balanceOf(tokenId, addrBob), bn(0)), bn(1));
assertEq(fromSome(await balanceOf(tokenId, addrCarla), bn(0)), bn(0));

await alice.transferFrom(tokenId, addrBob, addrCarla, 1);

balanceBoxes.add(addrCarla);

assertEq(fromSome(await allowance(tokenId, addrBob, addrAlice), bn(0)), bn(0));
assertEq(fromSome(await balanceOf(tokenId, addrBob), bn(0)), bn(0));
assertEq(fromSome(await balanceOf(tokenId, addrCarla), bn(0)), bn(1));

// TEST approve

console.log("Test: approve Bob 1au to Alice then set to 0au");

assertEq(fromSome(await allowance(tokenId, addrBob, addrAlice), bn(0)), bn(0));
await bob.approve(tokenId, addrAlice, 1);
assertEq(fromSome(await allowance(tokenId, addrBob, addrAlice), bn(0)), bn(1));
await bob.approve(tokenId, addrAlice, 0);
assertEq(fromSome(await allowance(tokenId, addrBob, addrAlice), bn(0)), bn(0));

// TEST deleteBalanceBox

console.log("Test: try deleteBalanceBox that doesn't exist (should fail)");

assertEq(fromSome(await balanceOf(tokenId, addrDave), bn(0)), bn(0));

try {
  await bob.deleteBalanceBox(tokenId, addrDave);
} catch (e) {}

const balanceBefore = await accMaster.balanceOf();

for (const addr of Array.from(balanceBoxes)) {
  console.log(`Test: deleteBalanceBox for ${addr}`);
  await bob.deleteBalanceBox(tokenId, addr);
}
balanceBoxes.clear();

const balanceAfter = await accMaster.balanceOf();

console.log({ balanceBefore, balanceAfter });

if (balanceAfter.gt(balanceBefore)) {
  const diff = stdlib.formatCurrency(balanceAfter.sub(balanceBefore));
  console.log(`Test: deleteBalanceBox master change in MBR ${diff}`);
}

// TEST deleteAllowanceBox

process.exit(0);
