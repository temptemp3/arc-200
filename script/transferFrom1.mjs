import { makeStdLib, getAccount } from "./reach.js";
import { balanceOfHelper, transferFromHelper } from "./util.js";
import fs from "fs";

const stdlib = makeStdLib();
const bn2n = stdlib.bigNumberToNumber;
const transferFrom = transferFromHelper(stdlib);
const balanceOf = balanceOfHelper(stdlib);

const main = async () => {
  console.log("TransferFrom1!");
  const [, , appIdStr, addrFrom, addrTo, amt] = process.argv;
  const appId = parseInt(appIdStr);
  try {
    const acc = await getAccount();

    const getBalance = async (addr) => await balanceOf(acc, appId, addr);

    console.log({ addrFrom, addrTo, amt });

    console.log({
      addr: await getBalance(acc.networkAccount.addr),
      addrFrom: await getBalance(addrFrom),
      addrTo: await getBalance(addrTo),
    });

    await transferFrom(acc, appId, addrFrom, addrTo, amt);

    console.log({
      addr: await getBalance(acc.networkAccount.addr),
      addrFrom: await getBalance(addrFrom),
      addrTo: await getBalance(addrTo),
    });
  } catch (e) {
    console.log({ e });
  }
};

main();
