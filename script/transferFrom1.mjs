import { makeStdLib, getAccount } from "./reach.js";
import { balanceOfHelper, transferFromHelper, allowanceHelper } from "./util.js";
import fs from "fs";

const stdlib = makeStdLib();
const bn2n = stdlib.bigNumberToNumber;
const transferFrom = transferFromHelper(stdlib);
const balanceOf = balanceOfHelper(stdlib);
const allowance = allowanceHelper(stdlib);

const main = async () => {
  console.log("TransferFrom1!");
  const [, , appIdStr, addrFrom, addrTo, amt] = process.argv;
  const appId = parseInt(appIdStr);
  try {
    const acc = await getAccount();

    const getBalance = async (addr) => await balanceOf(acc, appId, addr);
    const getAllowance = async (addrFrom, addrSpender) => await allowance(acc, appId, addrFrom, addrSpender);

    console.log({ addrFrom, addrTo, amt });

    console.log({
      addr: await getBalance(acc.networkAccount.addr),
      addrFrom: await getBalance(addrFrom),
      addrTo: await getBalance(addrTo),
    });

    console.log({ allowance: await getAllowance(addrFrom, acc.networkAccount.addr) })

    await transferFrom(acc, appId, addrFrom, addrTo, amt);

    console.log({
      addr: await getBalance(acc.networkAccount.addr),
      addrFrom: await getBalance(addrFrom),
      addrTo: await getBalance(addrTo),
    });

    console.log({ allowance: await getAllowance(addrFrom, acc.networkAccount.addr) })
  } catch (e) {
    console.log({ e });
  }
};

main();
