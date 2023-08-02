import { makeStdLib, getAccount } from "./reach.js";
import { deployAsHelper, fromSome } from "./util.js";
import fs from "fs";
import * as tokBackend from "./build/index.ARC200.mjs";
import * as icoBackend from "./build/index.ico.mjs";
import * as nntBackend from "./build/index.nnt.mjs";

const stdlib = makeStdLib();
const { algosdk } = stdlib;
const bn = stdlib.bigNumberify;
const bn2n = stdlib.bigNumberToNumber;

const main = async () => {
  console.log("Deploy!");
  const [, , tokA, tokB, proto, price, tokenUnit] = process.argv;
  const acc = await getAccount();
  const ctcICO0 = acc.contract(icoBackend);
  const ctcICO0Info = await stdlib.withDisconnect(() =>
    ctcICO0.p.Deployer({
      params: {
        price: 1000000,
        tokenUnit: 1000000000000000000,
        swap: {
          tokA: 264909298, // USDC (ARC200-nnt)
          tokB: 265385886, // NYCAPT (ARC200)
          proto: 265677599 // Triumvirate
        },
      },
      ready: (ctcInfo) => {
        console.log("Ready!");
        stdlib.disconnect(ctcInfo); // causes withDisconnect to immediately return ctcInfo
      },
    })
  );
 /*
  const ctcICO0Info = 265872015;
  const ctcICO0 = acc.contract(icoBackend, ctcICO0Info);
  */
  const ctcICO0Address = algosdk.getApplicationAddress(bn2n(ctcICO0Info));
  console.log(bn2n(ctcICO0Info), ctcICO0Address);
  const ctcTokA0 = acc.contract(nntBackend, tokA);
  const ctcTokB0 = acc.contract(tokBackend, tokB);
  await ctcTokA0.a.transfer(ctcICO0Address, 0);
  await ctcTokB0.a.transfer(ctcICO0Address, 0);
  await ctcTokB0.a.approve(
    ctcICO0Address,
    fromSome(await ctcTokB0.v.totalSupply(), bn(0))
  );
  await ctcICO0.a.Provider.depositB(1000000000000000000);
  console.log(ctcICO0);
};

main();
