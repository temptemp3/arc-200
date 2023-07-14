import { ALGO_MakeWalletConnect, loadStdlib } from "@reach-sh/stdlib";

import WalletConnect from "@walletconnect/client";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";

import MyAlgoConnect from "@randlabs/myalgo-connect";

import { PeraWalletConnect } from "@perawallet/connect";

import { decodeUnsignedTransaction } from "algosdk";

// override
function ALGO_MakePeraConnect(PeraWalletConnect) {
  return class PeraConnect {
    constructor(pc = false) {
      this.pc = pc;
      this.accounts = [];
    }
    async ensurePC() {
      if (this.pc) {
        return;
      }
      this.pc = new PeraWalletConnect();
      this.pc.reconnectSession().then((accts) => {
        this.accounts = accts;
      });
    }
    async disconnect() {
      this.pc.disconnect();
      this.accounts = [];
    }
    async ensureSession() {
      await this.ensurePC();
      if (this.accounts.length === 0) {
        this.accounts = await this.pc.connect();
      }
    }
    async getAddr() {
      await this.ensureSession();
      return this.accounts[0];
    }
    async signTxns(txns) {
      let rawSignedTxns;
      await this.ensureSession();
      rawSignedTxns = await this.pc.signTransaction([
        txns.map((value) => {
          const decodedUnsignedTxn = decodeUnsignedTransaction(
            Buffer.from(value, "base64")
          ); 
          return {
            txn: decodedUnsignedTxn,
          };
        }),
      ]);
      return rawSignedTxns.map(
        (value) => Buffer.from(value).toString("base64") 
      );
    }
  };
}

export const makeStdLib = () => {
  const wallet = JSON.parse(localStorage.getItem("txnlab-use-wallet") || "{}");
  const baseProviderId = wallet?.state?.activeAccount?.providerId;
  const providedId =
    baseProviderId === "pera"
      ? JSON.parse(localStorage.getItem("PeraWallet.Wallet") || "{}")?.type
      : baseProviderId;

  const [node, customNode, customIndexer] = (
    localStorage.getItem("node") || "algorand-testnet::"
  ).split(":");
  console.log({ node, customNode, customIndexer });
  let ALGO_SERVER;
  let ALGO_INDEXER_SERVER;
  switch (node) {
    default:
    case "voi": 
    case "voi-testnet":
      ALGO_SERVER = "https://voitest-api.algorpc.pro";
      ALGO_INDEXER_SERVER = "https://voitest-idx.algorpc.pro";
      break;
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

  switch (providedId) {
    case "pera-wallet":
    case "pera-wallet-web":
      stdlib.setWalletFallback(
        stdlib.walletFallback({
          providerEnv,
          WalletConnect: ALGO_MakePeraConnect(PeraWalletConnect),
        })
      );
      break;
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
