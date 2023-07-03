import { ALGO_MakeWalletConnect, loadStdlib } from "@reach-sh/stdlib";

import WalletConnect from "@walletconnect/client";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";

import MyAlgoConnect from "@randlabs/myalgo-connect";

import { ALGO_MakePeraConnect as MakePeraConnect } from "@reach-sh/stdlib";
import { PeraWalletConnect } from "@perawallet/connect";

export const makeStdLib = () => {
  const wallet = JSON.parse(localStorage.getItem("txnlab-use-wallet") || "{}");
  const [node, customNode, customIndexer] = (
    localStorage.getItem("node") || "algorand-testnet::"
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

  const networkEnv = "ALGO-live";
  //const networkProvider = "testnet";
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
  switch (wallet?.state?.activeAccount?.providerId) {
    // TODO fix issue introduced afte upgrading pera wallet
    // (1) options bump down pera wallet
    // (2) use wallet connect for pera wallet
    // until the issue is isolated and fixed
    // See https://github.com/reach-sh/reach-lang/issues/1548
    // See also https://github.com/temptemp3/arc-200/issues/29
    /*
    case "pera":
      stdlib.setWalletFallback(
        stdlib.walletFallback({
          providerEnv,
          WalletConnect: MakePeraConnect(PeraWalletConnect),
        })
      );
      break;
    */
    case "myalgo":
      stdlib.setWalletFallback(
        stdlib.walletFallback({
          providerEnv,
          MyAlgoConnect,
        })
      );
      break;
    // case daffi sorta works
    // case defly
    case "pera":
    default:
      stdlib.setWalletFallback(
        stdlib.walletFallback({
          providerEnv,
          WalletConnect: ALGO_MakeWalletConnect(WalletConnect, QRCodeModal),
        })
      );
  }
  return stdlib;
};
