import { makeStdLib, getAccount } from "./reach.js";
import * as trimvirateBackendBackend from "./build/index.triumvirate.mjs";

const stdlib = makeStdLib();
const bn2n = stdlib.bigNumberToNumber;

const main = async () => {
  console.log("Deploy!");
  const [, , protoFee, lpFee, totFee] = process.argv;
  const acc = await getAccount();
  const ctcTri0 = acc.contract(trimvirateBackendBackend);
  const ctcTri0Info = await stdlib.withDisconnect(() =>
    ctcTri0.p.Deployer({
      params: {
        umvirs: [acc, acc, acc],
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
  console.log(bn2n(ctcTri0Info));
};

main();
