import React, { useEffect } from "react";

import "./App.css";

import { Routes, Route } from "react-router-dom";

import algosdk from "algosdk";

import {
  PROVIDER_ID,
  WalletProvider,
  useInitializeProviders,
} from "@txnlab/use-wallet";

import { DeflyWalletConnect } from "@blockshake/defly-connect";
import { PeraWalletConnect } from "@perawallet/connect";
import { DaffiWalletConnect } from "@daffiwallet/connect";
import { WalletConnectModalSign } from "@walletconnect/modal-sign-html";

import Home from "./pages/Home";
import Subscription from "./pages/Subscription";
import Mint from "./pages/Mint";
import Token from "./pages/Token";
import Config from "./pages/Config";
import Swap from "./pages/Swap";
import TokenAddress from "./pages/TokenAddress";
import AppBar from "./components/AppBar.tsx";
import { MyCustomProvider } from "./wallet/CustomProvider";
import { getCurrentNode, getGenesisHash } from "./utils/reach";

function App() {
  const [node] = getCurrentNode();
  let networkProviders;
  switch (node) {
    case "voi":
    case "voi-testnet":
      networkProviders = [
        {
          id: "defly",
          clientStatic: DeflyWalletConnect,
        },
        /*
        {
          id: PROVIDER_ID.WALLETCONNECT,
          clientStatic: WalletConnectModalSign,
          clientOptions: {
            projectId: "1da7d79da1e1c620ac717a04f1bf2cb4",
            metadata: {
              name: "ARC200",
              description: "ARC200 Dapp",
              url: "https://temptemp3.github.io/arc200.algo.xyz/",
              icons: ["https://walletconnect.com/walletconnect-logo.png"],
            },
            modalOptions: {
              themeMode: "dark",
            },
          },
        },
        */
        {
          id: PROVIDER_ID.CUSTOM,
          clientOptions: {
            name: "kibisis",
            icon: "https://avatars.githubusercontent.com/u/99801015?s=200&v=4",
            getProvider: (params) => {
              return new MyCustomProvider(params.algosdkStatic ?? algosdk);
            },
            genesisHash: getGenesisHash(node),
          },
        },
      ];
      break;
    default:
    case "algorand-testnet":
    case "algorand":
      networkProviders = [
        { id: PROVIDER_ID.DEFLY, clientStatic: DeflyWalletConnect },
        { id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect },
        { id: PROVIDER_ID.DAFFI, clientStatic: DaffiWalletConnect },
        {
          id: PROVIDER_ID.WALLETCONNECT,
          clientStatic: WalletConnectModalSign,
          clientOptions: {
            projectId: "1da7d79da1e1c620ac717a04f1bf2cb4",
            metadata: {
              name: "ARC200",
              description: "ARC200 Dapp",
              url: "https://temptemp3.github.io/arc200.algo.xyz/",
              icons: ["https://walletconnect.com/walletconnect-logo.png"],
            },
            modalOptions: {
              themeMode: "dark",
            },
          },
        },
        //{ id: PROVIDER_ID.EXODUS },
        {
          id: PROVIDER_ID.CUSTOM,
          clientOptions: {
            name: "kibisis",
            icon: "https://avatars.githubusercontent.com/u/99801015?s=200&v=4",
            getProvider: (params) => {
              return new MyCustomProvider(params.algosdkStatic ?? algosdk);
            },
            genesisHash: getGenesisHash(node),
          },
        },
      ];
      break;
  }
  const providers = useInitializeProviders({
    providers: networkProviders,
    nodeConfig: {
      network: "testnet",
      nodeServer: "https://testnet-api.algonode.cloud",
      nodeToken: "",
      nodePort: "443",
    },
    algosdkStatic: algosdk,
  });
  return (
    <WalletProvider value={providers}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:addr/:amt/:note" element={<Home />} />
          <Route path="/config" element={<Config />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/token/:id" element={<Token />} />
          <Route path="/token/:id/address/:addr" element={<TokenAddress />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/s" element={<Subscription />} />
        </Routes>
      </div>
      <AppBar />
    </WalletProvider>
  );
}

export default App;
