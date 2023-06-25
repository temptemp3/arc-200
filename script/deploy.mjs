import { makeStdLib, getAccount } from "./reach.js";
import { deployAsHelper } from "./util.js";

const stdlib = makeStdLib();
const bn2n = stdlib.bigNumberToNumber;
const deployAs = deployAsHelper(stdlib);

const main = async () => {
  console.log("Deploy!");
  const acc = await getAccount();
  const ctcInfo = await deployAs(acc);
  console.log({ ctcInfo: bn2n(ctcInfo) })
};

main();
