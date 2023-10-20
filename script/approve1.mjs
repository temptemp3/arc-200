import { makeStdLib, getAccount } from "./reach.js";
import {
  transferHelper,
  balanceOfHelper,
  approveHelper,
  allowanceHelper,
} from "./util.js";
import fs from "fs";

const stdlib = makeStdLib();
const bn2n = stdlib.bigNumberToNumber;
const transfer = transferHelper(stdlib);
const balanceOf = balanceOfHelper(stdlib);
const approve = approveHelper(stdlib);
const allowance = allowanceHelper(stdlib);

const main = async () => {
  console.log("Transfer1!");
  const [, , appIdStr, addrSpender, amt] = process.argv;
  const appId = parseInt(appIdStr);
  try {
    const acc = await getAccount();

    const getBalance = async (addr) => await balanceOf(acc, appId, addr);
    const getAllowance = async (addrFrom, addrSpender) =>
      await allowance(acc, appId, addrFrom, addrSpender);

    console.log({ addrSpender, amt });

    console.log({
      [`balance(${acc.networkAccount.addr.slice(0, 4)})`]: await getBalance(
        acc.networkAccount.addr
      ),
    });

    console.log({
      [`allowance(${acc.networkAccount.addr.slice(0, 4)},${addrSpender.slice(
        0,
        4
      )})`]: await getAllowance(acc.networkAccount.addr, addrSpender),
    });

    await approve(acc, appId, addrSpender, amt);

    console.log({
      [`balance(${acc.networkAccount.addr.slice(0, 4)})`]: await getBalance(
        acc.networkAccount.addr
      ),
    });

    console.log({
      [`allowance(${acc.networkAccount.addr.slice(0, 4)},${addrSpender.slice(
        0,
        4
      )})`]: await getAllowance(acc.networkAccount.addr, addrSpender),
    });
  } catch (e) {
    console.log({ e });
  }
};

main();
