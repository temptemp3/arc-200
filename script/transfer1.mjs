import { makeStdLib, getAccount } from "./reach.js";
import { transferHelper, balanceOfHelper } from "./util.js";
import fs from "fs";

const stdlib = makeStdLib();
const bn2n = stdlib.bigNumberToNumber;
const transfer = transferHelper(stdlib);
const balanceOf = balanceOfHelper(stdlib);

const main = async () => {
  console.log("Transfer1!");
  const [, , appIdStr, addrTo, amt] = process.argv;
  const appId = parseInt(appIdStr);
  try {
    const acc = await getAccount();

    const getBalance = async () =>
      await balanceOf(acc, appId, acc.networkAccount.addr);

    console.log({ balance: await getBalance() });

    console.log({ addrTo, amt });

    await transfer(acc, appId, addrTo, amt);

    console.log({ balance: await getBalance() });
  } catch (e) {
    console.log({ e });
  }
};

main();
