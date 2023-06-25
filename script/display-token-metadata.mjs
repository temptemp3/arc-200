import { makeStdLib } from "./reach.js";
import { tokenMetadataHelper } from "./util.js";
import { zeroAddress } from "./algorand.js";

const stdlib = makeStdLib();
const tokenMetadata = tokenMetadataHelper(stdlib);

// Display Token Metadata

const main = async () => {
  console.log("Deploy!");
  const [, , tokenId] = process.argv;
  //
  // TODO validate token
  // TODO check if token exists
  //
  const acc = await stdlib.connectAccount({ addr: zeroAddress });
  const metadata = await tokenMetadata(acc, tokenId);
  console.log(`Metadata for ${tokenId}:`);
  console.log(metadata);
};

main();
