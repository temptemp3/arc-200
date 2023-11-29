import * as ARC200Backend from "../companion/index.ARC200.mjs";
import * as ctcCtcSwap200Backend from "../companion/index.ctc_ctc.mjs";

import { loadStdlib, test } from "@reach-sh/stdlib";
const { chk, chkErr } = test;

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
export const TestARC200 = async () => {
  const balanceBoxes = new Set();
  const allowanceBoxes = new Set();
  const holders = new Set();

  const robotCount = 1;
  const accs = await stdlib.newTestAccounts(
    7 + robotCount,
    stdlib.parseCurrency(100)
  );
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

  do {
    let ctcInfo;
    console.log("Deploying token...");
    // 1. can create token
    do {
      ctcInfo = await deployAs(ARC200Backend, accMaster, {
        zeroAddress,
        manager: addrManager,
        enableZeroAddressBurn: true,
        meta: tokens[0],
      });
    } while (0);
    console.log({ ctcInfo });
    chk("can create token", ctcInfo.gte(bn(0)), true);

    const {
      v: {
        arc200_balanceOf,
        arc200_allowance,
        arc200_decimals,
        arc200_name,
        arc200_symbol,
        arc200_totalSupply,
        state,
      },
      e,
    } = accZero.contract(ARC200Backend, ctcInfo);

    // write all events to console
    Object.keys(e).forEach((k) => {
      e[k].monitor((v) => {
        console.log({ [k]: v });
      });
    });

    const Tok0 = makeARC200(accZero, ctcInfo);

    const ts = await Tok0.totalSupply();
    console.log("total supply:", ts);

    chk("total supply is accurate", ts.eq(bn(tokens[0].totalSupply)), true);

    const balManagerBefore = await Tok0.balanceOf(accManager);
    console.log("manager balance before:", balManagerBefore);

    const balZeroBefore = await Tok0.balanceOf(zeroAddress);
    console.log("zero balance before:", balZeroBefore);

    chk(
      "manager balance before is accurate",
      bn(balManagerBefore).eq(ts),
      true
    );
    chk("zero balance before is accurate", bn(balZeroBefore).eq(bn(0n)), true);

    const ctcManager = accManager.contract(ARC200Backend, ctcInfo);

    console.log("Burnning tokens...");

    await ctcManager.a.arc200_transfer(
      zeroAddress,
      stdlib.bigNumberify(tokens[0].totalSupply)
    );

    console.log("manager balance:", await Tok0.balanceOf(accManager)); // 0
    console.log("zero balance:", await Tok0.balanceOf(zeroAddress)); // token supply

    chk(
      "manager balance is accurate after burn",
      bn(await Tok0.balanceOf(accManager)).eq(bn(0n)),
      true
    );
    chk(
      "zero balance is accurate after burn",
      bn(await Tok0.balanceOf(zeroAddress)).eq(bn(tokens[0].totalSupply)),
      true
    );

    console.log("Deleting balance box...");

    // 1. can deleteBalanceBox box exists
    await ctcManager.a.deleteBalanceBox(accManager);
    chk("can deleteBalanceBox box exists", true, true);
    // 1. cannot deleteBalanceBox box does not exist
    chkErr(
      "fails",
      "deleteBalanceBox",
      async () => await ctcManager.a.deleteBalanceBox(accManager)
    );

    console.log("Destroying token...");

    // 1. can destroy token
    await ctcManager.a.destroy();
    chk("can destroy token", true, true);
    chkErr("fails", "destroy", async () => await ctcManager.a.destroy());
  } while (0);

  return;

  // TODO test all of these

  // deploy contract as issuer

  do {
    let ctcInfo;

    do {
      const before = await accMaster.balanceOf();
      ctcInfo = await deployAs(ARC200Backend, accMaster, {
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
    // here

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
      v: { balanceOf, allowance, decimals, name, symbol, totalSupply, state },
      e,
    } = accZero.contract(backend, ctcInfo);

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
      const before = await accManager.balanceOf();
      await manager.transfer(addrAlice, 0); // creates box
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
    } while (0);

    console.log("Test: transfer 0au tokens from manager to alice (hot)");

    do {
      const before = await accManager.balanceOf();
      await manager.transfer(addrAlice, 0); // creates box
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
      await manager.transfer(addrBob, 0); // creates box
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
      await manager.transfer(addrBob, 0); // creates box
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
      await manager.transfer(addrAlice, 1);
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

    // transfer 1au tokens from manager to robots

    console.log("Test: transfer 1au tokens from manager to robots");

    console.log(addrRobots);
    for (const addr of addrRobots) {
      console.log(`Test: transfer 1au tokens from manager to ${addr}`);
      await manager.transfer(tokenId, addr, 1);
      balanceBoxes.add(addr);
    }

    // TEST transfer cost dry

    console.log("Test: transfer cost cold");

    do {
      const before = await stdlib.balanceOf(accManager);
      console.log(`Test: transfer 1au tokens from manager to ${addrRobots[0]}`);
      await manager.transfer(addrRobots[0], 1);
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
      await manager.transfer(addrRobots[0], 1);
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
        .a.transfer(addrRobots[1], 2);
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
      await alice.transfer(addrBob, 2);
      process.exit(2);
    } catch (e) {
      console.log("ARC200: Transfer amount must not be greater than balance");
    }

    assertEq(fromSome(await balanceOf(addrBob), bn(0)), bn(0));

    console.log("Test: transfer 1au tokens from alice to bob");

    await alice.transfer(addrBob, 1);

    holders.add(addrBob);
    balanceBoxes.add(addrBob);

    assertEq(fromSome(await balanceOf(addrBob), bn(0)), bn(1));

    // TEST allowance

    // allowance should be 0

    console.log("Test: allowance should be 0");

    assertEq(fromSome(await allowance(addrBob, addrAlice), bn(0)), bn(0));

    // TEST transferFrom

    console.log("Test: transferFrom Bob 1au to Carla by Alice");

    await bob.approve(addrAlice, 1);

    allowanceBoxes.add([addrBob, addrAlice]);

    assertEq(fromSome(await allowance(addrBob, addrAlice), bn(0)), bn(1));
    assertEq(fromSome(await balanceOf(addrBob), bn(0)), bn(1));
    assertEq(fromSome(await balanceOf(addrCarla), bn(0)), bn(0));

    await alice.transferFrom(addrBob, addrCarla, 1);

    holders.add(addrCarla);
    balanceBoxes.add(addrCarla);

    assertEq(fromSome(await allowance(addrBob, addrAlice), bn(0)), bn(0));
    assertEq(fromSome(await balanceOf(addrBob), bn(0)), bn(0));
    assertEq(fromSome(await balanceOf(addrCarla), bn(0)), bn(1));

    // TEST approve

    console.log("Test: approve Bob 1au to Alice then set to 0au");

    assertEq(fromSome(await allowance(addrBob, addrAlice), bn(0)), bn(0));
    await bob.approve(addrAlice, 1);
    allowanceBoxes.add([addrBob, addrAlice]);
    assertEq(fromSome(await allowance(addrBob, addrAlice), bn(0)), bn(1));
    await bob.approve(addrAlice, 0);
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
};
