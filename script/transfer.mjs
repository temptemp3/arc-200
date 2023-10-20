import { makeStdLib, getAccount } from "./reach.js";
import { transferHelper, balanceOfHelper } from "./util.js";
import fs from "fs";

const stdlib = makeStdLib();
const bn2n = stdlib.bigNumberToNumber;
const transfer = transferHelper(stdlib);
const balanceOf = balanceOfHelper(stdlib);

const batchSize = 35;

const main = async () => {
  // TODO move these somewhere else

  // util: generate tokens between decimals 0 and 19
  /*
  const n = 19;
  const addrs = [];
  for (let i = 0; i <= n; i++) {
    addrs.push(i);
  }
  console.log(
    addrs.map((i) => ({
      managerAddress:
        "OJUQOEPFOEZUP3JJIF6OAV4RZQL6HQMBDIXODGSXNEIH7TTR353IMJEL24",
      zeroAddress: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ",
      enableZeroAddressBurn: true,
      meta: {
        name: `DEC${i} Token`,
        symbol: `DEC${i}`,
        decimals: i,
        totalSupply: 1000000000000000000,
      },
    }))
  );
  fs.writeFileSync(
    "payload.json",
    JSON.stringify(
      addrs.map((i) => ({
        managerAddress:
          "OJUQOEPFOEZUP3JJIF6OAV4RZQL6HQMBDIXODGSXNEIH7TTR353IMJEL24",
        zeroAddress:
          "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ",
        enableZeroAddressBurn: true,
        meta: {
          name: `DEC${i} Token`,
          symbol: `DEC${i}`,
          decimals: i,
          totalSupply: 1000000000000000000,
        },
      }))
    )
  );
  return;
  */

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

  console.log("Transfer!");
  const [, , appIdStr, infile] = process.argv;
  const appId = parseInt(appIdStr);
  try {
    if (!infile) {
      console.log("No input file provided");
      process.exit(1);
    }
    const [name, type] = infile.split(".");

    let payload;
    switch (type) {
      case "csv":
        payload = Buffer.from(fs.readFileSync(infile))
          .toString("utf-8")
          .split(/\r?\n/)
          .map((el) => (([addr, amt]) => [addr, Number(amt)])(el.split(",")));
        break;
      case "json":
        payload = JSON.parse(
          Buffer.from(fs.readFileSync(infile)).toString("utf-8")
        );
        break;
    }

    const acc = await getAccount();

    const balance = await balanceOf(acc, appId, acc.networkAccount.addr);

    console.log(balance);

    console.log(`payload size: ${payload.length}`);

    // REM transfer include same address in payload with same amount and token may result in TransactionPool.Remember error

    const results = [];
    const promises = [];
    let i = 0;
    for (const p of payload) {
      let promise;
      switch(type) {
        case "json":
          promise = transfer(acc, appId, p.recipientAddress, p.amount);
          break;
        case "csv":
          promise = transfer(acc, appId, p[0], p[1]);
          break;
      }
      promises.push(promise);
      i++;
      if (i >= batchSize) {
        results.push(...(await Promise.all(promises)));
        i = 0;
      }
    }
    if (i <= batchSize) {
      results.push(...(await Promise.all(promises)));
    }
    console.log({ results });
  } catch (e) {
    console.log({ e });
  }
};

main();