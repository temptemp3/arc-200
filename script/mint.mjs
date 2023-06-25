import { makeStdLib, getAccount } from "./reach.js";
import { mintHelper } from "./util.js";
import fs from "fs";

const stdlib = makeStdLib();
const mint = mintHelper(stdlib);

const main = async () => {
  console.log("Deploy!");
  const [, , inputJson] = process.argv;
  if(!inputJson) {
    console.log("No input json provided");
    process.exit(1);
  }
  const tokens = JSON.parse(Buffer.from(fs.readFileSync(inputJson)).toString('utf-8'));
  const acc = await getAccount();
  for(const token of tokens) {
    console.log("Minting...");
    console.log({ token });
    //
    // TODO check if token exists
    //
    // TODO validate token
    //
    const tokenId = token.id;
    const addr = token.addr;
    delete token.id;
    delete token.addr;
    if(await mint(acc, tokenId, addr, token)) {
      console.log(`Minted ${tokenId} to ${addr}`);
    }
  }
};

main();
