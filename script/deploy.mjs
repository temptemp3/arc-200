import { makeStdLib, getAccount } from "./reach.js";
import { deployAsHelper } from "./util.js";
import fs from "fs";

const stdlib = makeStdLib();
const bn2n = stdlib.bigNumberToNumber;
const deployAs = deployAsHelper(stdlib);

const main = async () => {
  console.log("Deploy!");
  const [, , inputJson] = process.argv;
  if (!inputJson) {
    console.log("No input json provided");
    process.exit(1);
  }
  const tokens = JSON.parse(
    Buffer.from(fs.readFileSync(inputJson)).toString("utf-8")
  );
  const acc = await getAccount();
  const minted = [];
  for (const token of tokens) {
    console.log("Minting...");
    console.log({ token });
    //
    // TODO check if token exists
    //
    // TODO validate token
    //
    const ctcInfo = await deployAs(acc, token);
    console.log(`Minted token ${bn2n(ctcInfo)} to ${token.manager}`);
    console.log({ ctcInfo: bn2n(ctcInfo) });
    minted.push({
      appId: bn2n(ctcInfo),
      ...token
    });
  }
  fs.writeFileSync("minted.json", JSON.stringify(minted));
};

main();
