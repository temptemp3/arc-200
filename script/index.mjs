import { makeStdLib } from "./reach.js";

const stdlib = makeStdLib();

const main = async () => {
  console.log("Hello, world!");
  console.log(stdlib);
};

main();