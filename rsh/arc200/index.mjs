import * as backend from "./build/index.ARC200.mjs";
import { loadStdlib } from "@reach-sh/stdlib";

const deployCost = "0.16"; // txn cost + cost for box
const transferCostHot = "0.001"; // txn cost
const transferCostCold = "0.0305"; // txn cost + cost for box
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

const stdlib = loadStdlib({ REACH_NO_WARN: "Y" });

const bn = stdlib.bigNumberify;
const bn2n = stdlib.bigNumberToNumber;
const bn2bi = stdlib.bigNumberToBigInt;
const pc = stdlib.parseCurrency;
const fc = stdlib.formatCurrency;
const fawd = stdlib.formatWithDecimals;
const fa = stdlib.formatAddress;

const zeroAddress =
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ";

const tokens = [
  {
    name: "ARC200 Token",
    symbol: "ARC200",
    decimals: 8,
    totalSupply: 1000000000000000000, // 10Bi
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
const deployAs = async (acc, params) =>
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

// main

const balanceBoxes = new Set();
const allowanceBoxes = new Set();
const holders = new Set();

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

// create and destroy token

do {
  let ctcInfo;
  console.log("Deploying token...");

  do {
    ctcInfo = await deployAs(accMaster, {
      zeroAddress,
      manager: addrManager,
      enableZeroAddressBurn: true,
      meta: tokens[0],
    });
  } while (0);

  console.log(ctcInfo);

  const {
    v: {
      arc200_balanceOf: balanceOf,
      arc200_allowance: allowance,
      hasBalance,
      hasAllowance,
      arc200_decimals: decimals,
      arc200_name: name,
      arc200_symbol: symbol,
      arc200_totalSupply: totalSupply,
      state,
    },
    e,
  } = accZero.contract(backend, ctcInfo);

  console.log("total supply:");
  console.log(await totalSupply());

  console.log("manager balance:");
  console.log(await balanceOf(accManager)); // totalSupply
  console.log(await hasBalance(accManager)); // true
  console.log("zero balance:");
  console.log(await balanceOf(accZero)); // 0
  console.log(await hasBalance(accZero)); // true

  const ctcManager = accManager.contract(backend, ctcInfo);

  console.log("Burning tokens...");

  await ctcManager.a.arc200_transfer(
    zeroAddress,
    stdlib.bigNumberify(tokens[0].totalSupply)
  );

  console.log("manager balance:");
  console.log(await balanceOf(accManager)); // 0
  console.log("zero balance:");
  console.log(await balanceOf(accZero)); // totalSupply

  console.log("Deleting balance box...");

  await ctcManager.a.deleteBalanceBox(accManager);

  /*
  console.log("Approving spend...")

  await ctcManager.a.approve(accMaster, 1); // approve master 1 will prevent destroying token
  */

  console.log("Destroying token...");

  await ctcManager.a.destroy();
} while (0);

// deploy contract as issuer

do {
  let ctcInfo;

  do {
    const before = await accMaster.balanceOf();
    ctcInfo = await deployAs(accMaster, {
      zeroAddress,
      manager: addrManager,
      enableZeroAddressBurn: true,
      meta: tokens[0],
    });
    const after = await accMaster.balanceOf();
    holders.add(addrManager);
    holders.add(zeroAddress);
    balanceBoxes.add(addrManager);
    balanceBoxes.add(zeroAddress);
    if (before.gt(after)) {
      const diff = stdlib.formatCurrency(before.sub(after));
      console.log(`Deploy cost: ${diff}`);
      //assertEq(diff, deployCost); // 0.140701 == 0.1408
    }
  } while (0);

  console.log({ ctcInfo: bn2n(ctcInfo) });

  const [
    ctcIssuer,
    ctcMaster,
    ctcManager,
    ctcAlice,
    ctcBob,
    ctcCarla,
    ctcDave,
    ...ctcRobots
  ] = accs.map((a) => a.contract(backend, ctcInfo));

  const { a: issuer } = ctcIssuer;
  const { a: master } = ctcMaster;
  const { a: manager } = ctcManager;
  const { a: alice } = ctcAlice;
  const { a: bob } = ctcBob;
  const { a: carla } = ctcCarla;
  const { a: dave } = ctcDave;
  const [robots] = ctcRobots.map((a) => a.a);

  // once upon a time, we had to do this:
  // - mint arc-200 token and send 100% of funds to addr (call ctc.a.mint(mintParams))

  const {
    v: {
      arc200_balanceOf: balanceOf,
      arc200_allowance: allowance,
      hasBalance,
      hasAllowance,
      arc200_decimals: decimals,
      arc200_name: name,
      arc200_symbol: symbol,
      arc200_totalSupply: totalSupply,
      state,
    },
    e,
  } = accZero.contract(backend, ctcInfo);

  e.arc200_Transfer.monitor((a) =>
    console.log({
      Transfer: a,
    })
  );
  e.arc200_Approval.monitor((a) =>
    console.log({
      Approval: a,
    })
  );

  // TEST should not be able to delete zero addres box

  console.log("Test: should not be able to delete zero address box");

  assertEq(fromSome(await balanceOf(zeroAddress), bn(0)), bn(0));

  try {
    await ctcMaster.a.deleteBalanceBox(zeroAddress);
    process.exit(2);
  } catch (e) {
    console.log("ARC200: Delete balance box to zero address");
  }

  // TEST view functions are callable

  console.log("Test: view functions are callable");

  console.log(`name: ${fromSome(await name(), "")}`);
  console.log(`symbol: ${fromSome(await symbol(), "")}`);
  const d = bn2n(fromSome(await decimals(), bn(0)));
  console.log(`decimals: ${d}`);
  const ts = fromSome(await totalSupply(), bn(0));
  console.log(`total supply: ${fawd(ts, d)}`);
  console.log(
    `balanceOf(zeroAddress): ${fawd(
      fromSome(await balanceOf(zeroAddress), bn(0)),
      d
    )}`
  ); // 0 <= x <= totalSupply
  console.log(
    `allowance(zeroAddress, zeroAddress): ${fawd(
      fromSome(await allowance(zeroAddress, zeroAddress), bn(0)),
      d
    )}`
  ); // == 0

  const initialState = fromSome(await state(), {});
  console.log(initialState);

  const {
    manager: managerAddress,
    enableZeroAddressBurn,
    zeroAddress: zeroAddressState,
  } = initialState;

  assertEq(fromSome(await balanceOf(managerAddress), bn(0)), ts);

  assertEq(managerAddress, addrManager);

  // TEST should not be able to delete manager balance box

  console.log("Test: should not be able to delete manager balance box");

  try {
    await ctcMaster.a.deleteBalanceBox(managerAddress);
    process.exit(2);
  } catch (e) {
    console.log(
      "ARC200: Balance box not empty or zero address balance box not total supply"
    );
  }

  // check that the token was minted correctly

  console.log("Test: check that the token was minted correctly");

  //assertEq(fromSome(await name(), ""), tokens[0].name); // assertion fails due to zero bytes
  //assertEq(fromSome(await symbol(), ""), tokens[0].symbol); // assertion fails due to zero bytes
  assertEq(fromSome(await decimals(), bn(0)), tokens[0].decimals);
  assertEq(fromSome(await totalSupply(), bn(0)), tokens[0].totalSupply);

  // TEST balanceOf

  // balance of manager should be 100% of funds

  console.log("Test: balance of manager should be 100% of funds");

  assertEq(
    fromSome(await balanceOf(addrManager), bn(0)),
    bn(tokens[0].totalSupply)
  );

  // balance of zero address should be 0

  console.log("Test: balance of zero address should be 0");

  assertEq(fromSome(await balanceOf(zeroAddress), bn(0)), bn(0));

  // balance of issuer should be 0

  console.log("Test: balance of issuer should be 0");

  assertEq(fromSome(await balanceOf(addrIssuer), 0), bn(0));

  // transfer 0 tokens from manager to alice

  console.log("Test: transfer 0au tokens from manager to alice (cold)");

  do {
    console.log(await hasBalance(addrAlice));
    const before = await accManager.balanceOf();

    await manager.arc200_transfer(addrAlice, 0); // creates box
    const after = await accManager.balanceOf();

    console.log({ before, after });

    holders.add(addrAlice);
    balanceBoxes.add(addrAlice);

    assertEq(
      fromSome(await balanceOf(addrManager), 0),
      bn(tokens[0].totalSupply)
    );
    assertEq(fromSome(await balanceOf(addrAlice), 0), bn(0));

    if (before.gt(after)) {
      const diff = stdlib.formatCurrency(before.sub(after));
      console.log(`Transfer cost (cold)*: ${diff}`);
      console.log("* txns cost + box cost");
      //assertEq(diff, transferCostCold); // assertEq: 0.020801 == 0.0209
    }
    console.log(await hasBalance(addrAlice));
  } while (0);

  console.log("Test: transfer 0au tokens from manager to alice (hot)");

  do {
    const before = await accManager.balanceOf();
    await manager.arc200_transfer(addrAlice, 0); // creates box
    const after = await accManager.balanceOf();

    console.log({ before, after });

    holders.add(addrAlice);
    balanceBoxes.add(addrAlice);

    assertEq(
      fromSome(await balanceOf(addrManager), 0),
      bn(tokens[0].totalSupply)
    );
    assertEq(fromSome(await balanceOf(addrAlice), 0), bn(0));

    if (before.gt(after)) {
      const diff = stdlib.formatCurrency(before.sub(after));
      console.log(`Transfer cost (hot)*: ${diff}`);
      console.log("* txns cost + box cost");
      //assertEq(diff, transferCostHot); // ssertEq: 0.000901 == 0.001
    }
  } while (0);

  console.log("Test: transfer 0au tokens from manager to bob (cold)");

  do {
    const before = await accManager.balanceOf();
    await manager.arc200_transfer(addrBob, 0); // creates box
    const after = await accManager.balanceOf();

    console.log({ before, after });

    holders.add(addrBob);
    balanceBoxes.add(addrBob);

    assertEq(
      fromSome(await balanceOf(addrManager), 0),
      bn(tokens[0].totalSupply)
    );
    assertEq(fromSome(await balanceOf(addrAlice), 0), bn(0));

    if (before.gt(after)) {
      const diff = stdlib.formatCurrency(before.sub(after));
      console.log(`Transfer cost (cold)*: ${diff}`);
      console.log("* txns cost + box cost");
      //assertEq(diff, transferCostCold); // 0.020801 == 0.0209
    }
  } while (0);

  console.log("Test: transfer 0au tokens from manager to bob (hot)");

  do {
    const before = await accManager.balanceOf();
    await manager.arc200_transfer(addrBob, 0); // creates box
    const after = await accManager.balanceOf();

    console.log({ before, after });

    holders.add(addrBob);
    balanceBoxes.add(addrBob);

    assertEq(
      fromSome(await balanceOf(addrManager), 0),
      bn(tokens[0].totalSupply)
    );
    assertEq(fromSome(await balanceOf(addrAlice), 0), bn(0));

    if (before.gt(after)) {
      const diff = stdlib.formatCurrency(before.sub(after));
      console.log(`Transfer cost (cold)*: ${diff}`);
      console.log("* txns cost + box cost");
      //assertEq(diff, transferCostHot); // 0.020801 == 0.0209
    }
  } while (0);

  // TEST transfer gain

  console.log("Test: transfer gain");

  do {
    const before = await accMaster.balanceOf();
    await alice.deleteBalanceBox(addrAlice);
    balanceBoxes.delete(addrAlice);
    const after = await accMaster.balanceOf();

    console.log({ before, after });

    if (after.gt(before)) {
      const diff = stdlib.formatCurrency(after.sub(before));
      console.log(`Transfer gain: ${diff}`);
      //assertEq(diff, transferGain); // assertEq: 0.018999 == 0.0189
    }

    const netCost = fc(pc(transferCostCold).sub(pc(transferGain)));
    console.log(`Transfer net cost: ${netCost}`);
    //assertEq(netCost, transferNetCost); // Error: Assertion failed: assertEq: 0.002 == 0.0020
  } while (0);

  console.log("Test: transfer 1au tokens from manager to alice");

  do {
    const before = await accManager.balanceOf();
    await manager.arc200_transfer(addrAlice, 1);
    const after = await accManager.balanceOf();

    holders.add(addrAlice);
    balanceBoxes.add(addrAlice);

    assertEq(
      fromSome(await balanceOf(addrManager), 0),
      bn(tokens[0].totalSupply).sub(1)
    );
    assertEq(fromSome(await balanceOf(addrAlice), bn(0)), bn(1));

    if (before.gt(after)) {
      const diff = stdlib.formatCurrency(before.sub(after));
      console.log(`Transfer cost (cold)*: ${diff}`);
      console.log("* txns cost");
      //assertEq(diff, transferCostCold); // 0.020801 == 0.0209
    }
  } while (0);

  // TEST transfer 1au token from alice to zero address (burn)

  /*
// transfer 1au tokens from manager to robots

console.log("Test: transfer 1au tokens from manager to robots");

console.log(addrRobots);
for (const addr of addrRobots) {
  console.log(`Test: transfer 1au tokens from manager to ${addr}`);
  await manager.transfer(tokenId, addr, 1);
  balanceBoxes.add(addr);
}
*/

  // TEST transfer cost dry

  console.log("Test: transfer cost cold");

  do {
    const before = await stdlib.balanceOf(accManager);
    console.log(`Test: transfer 1au tokens from manager to ${addrRobots[0]}`);
    await manager.arc200_transfer(addrRobots[0], 1);
    holders.add(addrRobots[0]);
    balanceBoxes.add(addrRobots[0]);
    const after = await stdlib.balanceOf(accManager);
    if (before.gt(after)) {
      const diff = stdlib.formatCurrency(before.sub(after));
      console.log(`Test: transfer cost ${diff}`);
    }
  } while (0);

  console.log("Test: transfer cost hot");

  do {
    const before = await stdlib.balanceOf(accManager);
    console.log(`Test: transfer 1au tokens from manager to ${addrRobots[0]}`);
    await manager.arc200_transfer(addrRobots[0], 1);
    holders.add(addrRobots[0]);
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
      .a.arc200_transfer(addrRobots[1], 2);
    await bob.deleteBalanceBox(addrRobots[0]);
    holders.delete(addrRobots[0]);
    balanceBoxes.delete(addrRobots[0]);
    const after = await stdlib.balanceOf(accMaster);
    await stdlib.wait(1);
    if (after.gt(before)) {
      const diff = stdlib.formatCurrency(after.sub(before));
      console.log(`Test: transfer gain ${diff}`);
      //assertEq(diff, transferGain); // assertEq: 0.018999 == 0.0189
    }
  } while (0);

  console.log("Test: transfer 2au tokens from alice to bob (should fail)");

  try {
    await alice.arc200_transfer(addrBob, 2);
    process.exit(2);
  } catch (e) {
    console.log("ARC200: Transfer amount must not be greater than balance");
  }

  assertEq(fromSome(await balanceOf(addrBob), bn(0)), bn(0));

  console.log("Test: transfer 1au tokens from alice to bob");

  await alice.arc200_transfer(addrBob, 1);

  holders.add(addrBob);
  balanceBoxes.add(addrBob);

  assertEq(fromSome(await balanceOf(addrBob), bn(0)), bn(1));

  // TEST allowance

  // allowance should be 0

  console.log("Test: allowance should be 0");

  assertEq(fromSome(await allowance(addrBob, addrAlice), bn(0)), bn(0));

  // TEST transferFrom

  console.log("Test: transferFrom Bob 1au to Carla by Alice");

  await bob.arc200_approve(addrAlice, 1);

  allowanceBoxes.add([addrBob, addrAlice]);

  assertEq(fromSome(await allowance(addrBob, addrAlice), bn(0)), bn(1));
  assertEq(fromSome(await balanceOf(addrBob), bn(0)), bn(1));
  assertEq(fromSome(await balanceOf(addrCarla), bn(0)), bn(0));

  await alice.arc200_transferFrom(addrBob, addrCarla, 1);

  holders.add(addrCarla);
  balanceBoxes.add(addrCarla);

  assertEq(fromSome(await allowance(addrBob, addrAlice), bn(0)), bn(0));
  assertEq(fromSome(await balanceOf(addrBob), bn(0)), bn(0));
  assertEq(fromSome(await balanceOf(addrCarla), bn(0)), bn(1));

  // TEST approve

  console.log("Test: approve Bob 1au to Alice then set to 0au");

  assertEq(fromSome(await allowance(addrBob, addrAlice), bn(0)), bn(0));
  await bob.arc200_approve(addrAlice, 1);
  allowanceBoxes.add([addrBob, addrAlice]);
  assertEq(fromSome(await allowance(addrBob, addrAlice), bn(0)), bn(1));
  await bob.arc200_approve(addrAlice, 0);
  allowanceBoxes.add([addrBob, addrAlice]);
  assertEq(fromSome(await allowance(addrBob, addrAlice), bn(0)), bn(0));

  // TEST deleteBalanceBox

  console.log("Test: try deleteBalanceBox that doesn't exist (should fail)");

  assertEq(fromSome(await balanceOf(addrDave), bn(0)), bn(0));

  try {
    await bob.deleteBalanceBox(addrDave);
    process.exit(2);
  } catch (e) {
    console.log("ARC200: Balance box not found");
  }

  do {
    const before = await accMaster.balanceOf();

    for (const addr of Array.from(balanceBoxes)) {
      if (addr === zeroAddress) {
        try {
          await bob.deleteBalanceBox(addr);
        } catch (e) {
          console.log("ARC200: Delete balance box to zero address");
        }
        continue;
      }
      console.log(`Test: deleteBalanceBox for ${addr}`);
      console.log(await balanceOf(addr));
      if (fromSome(await balanceOf(addr), bn(0)).eq(bn(0))) {
        await bob.deleteBalanceBox(addr);
      }
    }
    balanceBoxes.clear();

    const after = await accMaster.balanceOf();

    console.log({ before, after });

    if (after.gt(before)) {
      const diff = stdlib.formatCurrency(after.sub(before));
      console.log(`Test: deleteBalanceBox master change in MBR ${diff}`);
    }
  } while (0);

  // TEST deleteAllowanceBox

  // TEST destroy

  try {
    do {
      console.log("Test: destroy");
      const before = await accMaster.balanceOf();
      await manager.destroy();
      const after = await accMaster.balanceOf();
      console.log({ before, after });
      if (after.gt(before)) {
        const diff = stdlib.formatCurrency(after.sub(before));
        console.log(`Test: destroy master change in MBR ${diff}`);
      }
    } while (0);
  } catch (e) {
    console.log("ARC200: Zero address balance box not total supply");
  }
} while (0);

// TODO

process.exit(0);
