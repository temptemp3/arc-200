import { loadStdlib } from "@reach-sh/stdlib";
import dotenv from "dotenv";
import { zeroAddress } from "./algorand.js";

dotenv.config();

const [node, customNode, customIndexer] = (
  process?.env?.NODE || "algorand-testnet::"
).split(":");
console.log({ node, customNode, customIndexer });
let ALGO_SERVER;
let ALGO_INDEXER_SERVER;
switch (node) {
  default:
  case "voi":
  case "algorand-testnet":
    ALGO_SERVER = "https://testnet-api.algonode.cloud";
    ALGO_INDEXER_SERVER = "https://testnet-idx.algonode.cloud";
    break;
  case "algorand":
    ALGO_SERVER = "https://mainnet-api.algonode.cloud";
    ALGO_INDEXER_SERVER = "https://mainnet-idx.algonode.cloud";
    break;
  case "custom":
    ALGO_SERVER = customNode;
    ALGO_INDEXER_SERVER = customIndexer;
    break;
}
console.log({ ALGO_SERVER, ALGO_INDEXER_SERVER });

const mnemonic = process.env.MN || "";

/*
 * makeStdlib
 * Create a stdlib object with the correct network environment (MainNet)
 */
export const makeStdLib = () => {
  const networkEnv = "ALGO-live";
  const stdlib = loadStdlib({
    REACH_CONNECTOR_MODE: networkEnv,
    //REACH_DEBUG: "1",
    REACH_NO_WARN: "1",
  });
  const providerEnv = {
    ALGO_TOKEN: "",
    ALGO_SERVER,
    ALGO_PORT: "",
    ALGO_NODE_WRITE_ONLY: "no",

    ALGO_INDEXER_TOKEN: "",
    ALGO_INDEXER_SERVER,
    ALGO_INDEXER_PORT: "",
  };
  stdlib.setWalletFallback(
    stdlib.walletFallback({
      providerEnv,
    })
  );
  return stdlib;
};

export const getAccount = async () => {
  const stdlib = makeStdLib();
  const acc = await stdlib.newAccountFromMnemonic(mnemonic);
  return acc;
};

export const getAlgorandZeroAccount = async () => {
  const stdlib = makeStdLib();
  const acc = await stdlib.connectAccount({ addr: zeroAddress });
  return acc;
};
