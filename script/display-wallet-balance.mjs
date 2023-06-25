import { makeStdLib } from "./reach.js";
import { balanceOfHelper } from "./util.js";
import { zeroAddress } from "./algorand.js";

const stdlib = makeStdLib();
const bn = stdlib.bigNumberify;
const balanceOf = balanceOfHelper(stdlib);

// Display Token Metadata

const main = async () => {
  console.log("Deploy!");
  const [, , tokenId, addr] = process.argv;
  //
  // TODO validate token
  // TODO check if token exists
  //
  const acc = await stdlib.connectAccount({ addr: zeroAddress });
  const balance = await balanceOf(acc, tokenId, addr);
  console.log(`Balance for ${tokenId} at ${addr}:`);
  console.log(balance);
};

main();
