import { makeStdLib, getAccount } from "./reach.js";
import { transferHelper, balanceOfHelper } from "./util.js";
import fs from "fs";

const stdlib = makeStdLib();
const bn2n = stdlib.bigNumberToNumber;
const transfer = transferHelper(stdlib);
const balanceOf = balanceOfHelper(stdlib);

const batchSize = 35;

const main = async () => {
  // util: generate m addresses for payload
  /*
  const n = 1000;
  const addrs = [];
  for (let i = 0; i < n; i++) {
    const { algosdk } = stdlib;
    const j = algosdk.getApplicationAddress(i);
    addrs.push(j);
  }
  console.log(
    addrs.map((el) => ({
      recipientAddress: el,
      amount: 1,
    }))
  );
  fs.writeFileSync(
    "payload.json",
    JSON.stringify(
      addrs.map((el) => ({
        recipientAddress: el,
        amount: 1,
      }))
    )
  );
  return;
  */

  console.log("Deploy!");
  const [, , inputJson] = process.argv;
  if (!inputJson) {
    console.log("No input json provided");
    process.exit(1);
  }
  const payload = JSON.parse(
    Buffer.from(fs.readFileSync(inputJson)).toString("utf-8")
  );
  const acc = await getAccount();

  const balance = await balanceOf(acc, 249906631, acc.networkAccount.addr);

  console.log(balance);

  console.log(`payload size: ${payload.length}`);

  // REM transfer include same address in payload with same amount and token may result in TransactionPool.Remember error

  const results = [];
  const promises = [];
  let i = 0;
  for (const p of payload) {
    //console.log("Transfering...");
    //console.log({ p });
    const promise = transfer(acc, 249906631, p.recipientAddress, p.amount);
    promises.push(promise);
    i++;
    if (i >= batchSize) {
      results.push(...(await Promise.all(promises)));
      i = 0;
    }
  }
  console.log({ results });
};

main();
