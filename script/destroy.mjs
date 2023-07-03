import { zeroAddress } from "./algorand.js";
import { makeStdLib, getAccount } from "./reach.js";
import {
  transferHelper,
  balanceOfHelper,
  destroyHelper,
  tokenMetadataHelper,
  getContractHelper,
  fromSome,
} from "./util.js";
import fs from "fs";

const stdlib = makeStdLib();
const bn = stdlib.bigNumberify;
const bn2bi = stdlib.bigNumberToBigInt;
const bn2n = stdlib.bigNumberToNumber;

const transfer = transferHelper(stdlib);
const balanceOf = balanceOfHelper(stdlib);
const destroy = destroyHelper(stdlib);
const tokenMetadata = tokenMetadataHelper(stdlib);
const getContract = getContractHelper(stdlib);

const main = async () => {
  console.log("Deploy!");
  const [, , appIdStr] = process.argv;
  const appId = parseInt(appIdStr);
  try {
    const acc = await getAccount();

    const balance = await balanceOf(acc, appId, acc.networkAccount.addr);

    console.log(balance);

    console.log(await balanceOf(acc, appId, zeroAddress));

    const ctc = getContract(acc, appId);

    //console.log(ctc);

    // TODO check if manager

    const totalSupply = bn2bi(
      fromSome(await ctc.v.totalSupply(), bn(0))
    ).toString();

    if(balance !== totalSupply) {
      console.log("Abort: balance !== totalSupply")
      process.exit(1)
    }

    console.log(totalSupply);

    console.log("Burning entire supply...")

    await ctc.a.transfer(zeroAddress, totalSupply)

    console.log("Deleting box...")

    await ctc.a.deleteBalanceBox(acc);

    console.log("Destroying contract...");

    await ctc.a.destroy();

    console.log("Done");

    return 0;
  } catch (e) {
    console.log(e);
  }
};

main();
