import React, { useEffect } from "react";

import "./App.css";

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
import LuteConnect from "lute-connect";

import Home from "./pages/Home";
import DEX from "./pages/DEX";
import NFTBridge from "./pages/NFTBridge";
import NFTCollection from "./pages/NFTCollection/index.js";
import NFTToken from "./pages/NFTToken/index.js";
import NFTMarketpalce from "./pages/NFTMarketplace";
import NFTPortfolio from "./pages/NFTPortfolio";
import Subscription from "./pages/Subscription";
import Mint from "./pages/Mint";
import Wint from "./pages/Wint";
import Token from "./pages/Token";
import Config from "./pages/Config";
import Swap from "./pages/Swap";
import TokenAddress from "./pages/TokenAddress";
import MainMenu from "./components/MainMenu";
import AppBar from "./components/AppBar.tsx";
import { MyCustomProvider } from "./wallet/CustomProvider";
import { getCurrentNode, getGenesisHash } from "./utils/reach";
import NFTIndexerService from "./services/NFTIndexerService.ts";
import { nftDb, mpDb, db } from "./db.js";
import {
  ctcInfoMp200,
  ctcInfoMp201,
  ctcInfoMp202,
  ctcInfoMp203,
  ctcInfoMp204,
} from "./constants/mp.js";
import { getAlgorandClients } from "./utils/algorand.js";
import { CONTRACT, arc200 } from "ulujs";
import { mp200Schema, mp201Schema, mp202Schema } from "./abis/index.js";
import { ctcInfoTri200 } from "./constants/dex.js";
import triSchema from "./abis/triumvirate.json";
import { MarketplaceProvider } from "./store/MarketplaceContext.js";

import { HashRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { algodClient, indexerClient } = getAlgorandClients();

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
        //  {
        //   id: PROVIDER_ID.WALLETCONNECT,
        //   clientStatic: WalletConnectModalSign,
        //   clientOptions: {
        //     projectId: "1da7d79da1e1c620ac717a04f1bf2cb4",
        //     metadata: {
        //       name: "Shelly's Sandbox",
        //       description: "Shelly's Sandbox Dapp - DEX, NFTs, and more",
        //       url: "https://shellyssandbox.xyz",
        //       icons: ["https://walletconnect.com/walletconnect-logo.png"],
        //     },
        //     modalOptions: {
        //       themeMode: "dark",
        //     },
        //   },
        // },
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
        {
          id: PROVIDER_ID.LUTE,
          clientStatic: LuteConnect,
          clientOptions: { siteName: "Shell's Sandbox" },
        },
        { id: PROVIDER_ID.KIBISIS },
      ];
      break;
    default:
    case "algorand-testnet":
    case "algorand":
      networkProviders = [
        { id: PROVIDER_ID.DEFLY, clientStatic: DeflyWalletConnect },
        { id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect },
        { id: PROVIDER_ID.DAFFI, clientStatic: DaffiWalletConnect },
        // {
        //   id: PROVIDER_ID.WALLETCONNECT,
        //   clientStatic: WalletConnectModalSign,
        //   clientOptions: {
        //     projectId: "1da7d79da1e1c620ac717a04f1bf2cb4",
        //     metadata: {
        //       name: "ARC200",
        //       description: "ARC200 Dapp",
        //       url: "https://temptemp3.github.io/arc200.algo.xyz/",
        //       icons: ["https://walletconnect.com/walletconnect-logo.png"],
        //     },
        //     modalOptions: {
        //       themeMode: "dark",
        //     },
        //   },
        // },
        // { id: PROVIDER_ID.EXODUS },
        // { id: PROVIDER_ID.KIBISIS },
        // {
        //   id: PROVIDER_ID.CUSTOM,
        //   clientOptions: {
        //     name: "kibisis",
        //     icon: "https://avatars.githubusercontent.com/u/99801015?s=200&v=4",
        //     getProvider: (params) => {
        //       return new MyCustomProvider(params.algosdkStatic ?? algosdk);
        //     },
        //     genesisHash: getGenesisHash(node),
        //   },
        // },
      ];
      break;
  }
  const providers = useInitializeProviders({
    providers: networkProviders,
    nodeConfig: {
      network: "voi-testnet",
      nodeServer: "https://testnet-api.voi.nodly.io",
      nodeToken: "",
      nodePort: "443",
    },
    algosdkStatic: algosdk,
    debug: true,
  });

  const [currentRound, setCurrentRound] = React.useState(0);
  useEffect(() => {
    algodClient
      .status()
      .do()
      .then((s) => {
        setCurrentRound(s["last-round"]);
      });
  }, []);

  // EFFECT: update mp db
  useEffect(() => {
    if (!currentRound) return;
    (async () => {
      const mp = ctcInfoMp200;
      const lastRound = localStorage.getItem("mp200-current-round");
      const ci = new CONTRACT(mp, algodClient, indexerClient, mp200Schema);
      const evts = await ci.getEvents({
        minRound: lastRound,
      });
      const listings = evts.find((el) => el.name === "ListEvent").events;
      const sales = evts.find((el) => el.name === "BuyEvent").events;
      const deletes = evts.find(
        (el) => el.name === "DeleteNetListingEvent"
      ).events;
      await Promise.allSettled([
        ...listings.map((el) => {
          const [txId, round, ts, lId, cId, tId, lAddr, lPrc] = el;
          const pk = `${node}:${mp}:${lId}`;
          const listing = {
            pk,
            mp,
            txId,
            round,
            timestamp: ts,
            lId,
            cId,
            tId,
            lAddr,
            lPrc,
          };
          return mpDb.listings.put(listing, pk);
        }),
        ...sales.map((el) => {
          const [txId, round, ts, lId, cId, tId, lAddr, lPrc, bAddr] = el;
          const pk = `${node}:${mp}:${lId}`;
          const sale = {
            pk,
            mp,
            txId,
            round,
            timestamp: ts,
            lId,
            cId,
            tId,
            lAddr,
            lPrc,
            bAddr,
          };
          return mpDb.sales.put(sale, pk);
        }),
        ...deletes.map((el) => {
          const [txId, round, ts, lId] = el;
          const pk = `${node}:${mp}:${lId}`;
          const deletion = {
            pk,
            mp,
            txId,
            round,
            timestamp: ts,
            lId,
          };
          return mpDb.deletions.put(deletion, pk);
        }),
      ]);
      localStorage.setItem("mp200-current-round", currentRound + 1);
    })();
  }, [currentRound]);

  // EFFECT: update mp201b db
  // useEffect(() => {
  //   if (!currentRound) return;
  //   (async () => {
  //     const mp = 28368147;
  //     const lastRound = localStorage.getItem("mp201b-current-round");
  //     const ci = new CONTRACT(mp, algodClient, indexerClient, mp201Schema);
  //     const evts = await ci.getEvents({
  //       minRound: lastRound,
  //     });
  //     const listings = evts.find((el) => el.name === "ListEvent").events;
  //     const sales = evts.find((el) => el.name === "BuyEvent").events;
  //     const deletes = evts.find(
  //       (el) => el.name === "DeleteListingEvent"
  //     ).events;
  //     const claims = evts.find((el) => el.name === "ClaimEvent").events;
  //     await Promise.allSettled([
  //       ...listings.map((el) => {
  //         const [txId, round, ts, lId, cId, tId, lAddr, lPrc] = el;
  //         const pk = `${node}:${mp}:${lId}`;
  //         const listing = {
  //           pk,
  //           mp,
  //           txId,
  //           round,
  //           timestamp: ts,
  //           lId,
  //           cId,
  //           tId,
  //           lAddr,
  //           lPrc,
  //         };
  //         return mpDb.listings.put(listing, pk);
  //       }),
  //       ...sales.map((el) => {
  //         const [txId, round, ts, lId, cId, tId, lAddr, lPrc, bAddr] = el;
  //         const pk = `${node}:${mp}:${lId}`;
  //         const sale = {
  //           pk,
  //           mp,
  //           txId,
  //           round,
  //           timestamp: ts,
  //           lId,
  //           // cId,
  //           // tId,
  //           // lAddr,
  //           // lPrc,
  //           // bAddr,
  //         };
  //         return mpDb.sales.put(sale, pk);
  //       }),
  //       ...deletes.map((el) => {
  //         const [txId, round, ts, lId] = el;
  //         const pk = `${node}:${mp}:${lId}`;
  //         const deletion = {
  //           pk,
  //           mp,
  //           txId,
  //           round,
  //           timestamp: ts,
  //           lId,
  //         };
  //         return mpDb.deletions.put(deletion, pk);
  //       }),
  //       ...claims.map((el) => {
  //         const [txId, round, ts, lId, cId, tId, lAddr, lPrc, bAddr] = el;
  //         const pk = `${node}:${mp}:${lId}`;
  //         const claim = {
  //           pk,
  //           mp,
  //           txId,
  //           round,
  //           timestamp: ts,
  //           lId,
  //           // cId,
  //           // tId,
  //           // lAddr,
  //           // lPrc,
  //           // bAddr,
  //         };
  //         return mpDb.claims.put(claim, pk);
  //       }),
  //     ]);
  //     localStorage.setItem("mp201b-current-round", currentRound + 1);
  //   })();
  // }, [currentRound]);

  // EFFECT: update mp201 db
  useEffect(() => {
    if (!currentRound) return;
    (async () => {
      const mp = ctcInfoMp201;
      const lastRound = localStorage.getItem("mp201-current-round");
      const ci = new CONTRACT(mp, algodClient, indexerClient, mp201Schema);
      const evts = await ci.getEvents({
        minRound: lastRound,
      });
      const listings = evts.find((el) => el.name === "ListEvent").events;
      const sales = evts.find((el) => el.name === "BuyEvent").events;
      const deletes = evts.find(
        (el) => el.name === "DeleteListingEvent"
      ).events;
      const claims = evts.find((el) => el.name === "ClaimEvent").events;
      await Promise.allSettled([
        ...listings.map((el) => {
          const [txId, round, ts, lId, cId, tId, lAddr, lPrc] = el;
          const pk = `${node}:${mp}:${lId}`;
          const listing = {
            pk,
            mp,
            txId,
            round,
            timestamp: ts,
            lId,
            cId,
            tId,
            lAddr,
            lPrc,
          };
          return mpDb.listings.put(listing, pk);
        }),
        ...sales.map((el) => {
          const [txId, round, ts, lId, cId, tId, lAddr, lPrc, bAddr] = el;
          const pk = `${node}:${mp}:${lId}`;
          const sale = {
            pk,
            mp,
            txId,
            round,
            timestamp: ts,
            lId,
            // cId,
            // tId,
            // lAddr,
            // lPrc,
            // bAddr,
          };
          return mpDb.sales.put(sale, pk);
        }),
        ...deletes.map((el) => {
          const [txId, round, ts, lId] = el;
          const pk = `${node}:${mp}:${lId}`;
          const deletion = {
            pk,
            mp,
            txId,
            round,
            timestamp: ts,
            lId,
          };
          return mpDb.deletions.put(deletion, pk);
        }),
        ...claims.map((el) => {
          const [txId, round, ts, lId, cId, tId, lAddr, lPrc, bAddr] = el;
          const pk = `${node}:${mp}:${lId}`;
          const claim = {
            pk,
            mp,
            txId,
            round,
            timestamp: ts,
            lId,
            // cId,
            // tId,
            // lAddr,
            // lPrc,
            // bAddr,
          };
          return mpDb.claims.put(claim, pk);
        }),
      ]);
      localStorage.setItem("mp201-current-round", currentRound + 1);
    })();
  }, [currentRound]);

  // EFFECT: update mp202 db
  useEffect(() => {
    if (!currentRound) return;
    (async () => {
      const mp = ctcInfoMp202;
      const lastRound = localStorage.getItem("mp202-current-round");
      const ci = new CONTRACT(mp, algodClient, indexerClient, mp202Schema);
      const evts = await ci.getEvents({
        minRound: lastRound,
      });
      const listings = evts.find((el) => el.name === "ListEvent").events;
      const sales = evts.find((el) => el.name === "BuyEvent").events;
      const deletes = evts.find(
        (el) => el.name === "DeleteListingEvent"
      ).events;
      const claims = evts.find((el) => el.name === "ClaimEvent").events;
      await Promise.allSettled([
        ...listings.map((el) => {
          const [txId, round, ts, lId, cId, tId, lAddr, lPrc] = el;
          const pk = `${node}:${mp}:${lId}`;
          const listing = {
            pk,
            mp,
            txId,
            round,
            timestamp: ts,
            lId,
            cId,
            tId,
            lAddr,
            lPrc,
          };
          return mpDb.listings.put(listing, pk);
        }),
        ...sales.map((el) => {
          const [txId, round, ts, lId] = el;
          const pk = `${node}:${mp}:${lId}`;
          const sale = {
            pk,
            mp,
            txId,
            round,
            timestamp: ts,
            lId,
          };
          return mpDb.sales.put(sale, pk);
        }),
        ...deletes.map((el) => {
          const [txId, round, ts, lId] = el;
          const pk = `${node}:${mp}:${lId}`;
          const deletion = {
            pk,
            mp,
            txId,
            round,
            timestamp: ts,
            lId,
          };
          return mpDb.deletions.put(deletion, pk);
        }),
        ...claims.map((el) => {
          const [txId, round, ts, lId] = el;
          const pk = `${node}:${mp}:${lId}`;
          const claim = {
            pk,
            mp,
            txId,
            round,
            timestamp: ts,
            lId,
          };
          return mpDb.claims.put(claim, pk);
        }),
      ]);
      localStorage.setItem("mp202-current-round", currentRound + 1);
    })();
  }, [currentRound]);

  // EFFECT: update mp202 db
  useEffect(() => {
    if (!currentRound) return;
    (async () => {
      const mp = ctcInfoMp203;
      const lastRound = localStorage.getItem("mp203-current-round");
      const ci = new CONTRACT(mp, algodClient, indexerClient, mp202Schema);
      const evts = await ci.getEvents({
        minRound: lastRound,
      });
      const listings = evts.find((el) => el.name === "ListEvent").events;
      const sales = evts.find((el) => el.name === "BuyEvent").events;
      const deletes = evts.find(
        (el) => el.name === "DeleteListingEvent"
      ).events;
      const claims = evts.find((el) => el.name === "ClaimEvent").events;
      const auctions = evts.find((el) => el.name === "AuctionEvent").events;
      const auctionDeletes = evts.find(
        (el) => el.name === "DeleteAuctionEvent"
      ).events;
      const bids = evts.find((el) => el.name === "BidEvent").events;
      await Promise.allSettled([
        ...listings.map((el) => {
          const [txId, round, ts, lId, cId, tId, lAddr, lPrc] = el;
          const pk = `${node}:${mp}:${lId}`;
          const listing = {
            pk,
            mp,
            txId,
            round,
            timestamp: ts,
            lId,
            cId,
            tId,
            lAddr,
            lPrc,
          };
          return mpDb.listings.put(listing, pk);
        }),
        ...auctions.map((el) => {
          const [txId, round, ts, lId, cId, tId, lAddr, lPrc, endTime] = el;
          const pk = `${node}:${mp}:${lId}`;
          const auction = {
            pk,
            mp,
            txId,
            round,
            timestamp: ts,
            lId,
            cId,
            tId,
            lAddr,
            lPrc,
            endTime,
          };
          return mpDb.auctions.put(auction, pk);
        }),
        ...sales.map((el) => {
          const [txId, round, ts, lId] = el;
          const pk = `${node}:${mp}:${lId}`;
          const sale = {
            pk,
            mp,
            txId,
            round,
            timestamp: ts,
            lId,
          };
          return mpDb.sales.put(sale, pk);
        }),
        ...deletes.map((el) => {
          const [txId, round, ts, lId] = el;
          const pk = `${node}:${mp}:${lId}`;
          const deletion = {
            pk,
            mp,
            txId,
            round,
            timestamp: ts,
            lId,
          };
          return mpDb.deletions.put(deletion, pk);
        }),
        ...auctionDeletes.map((el) => {
          const [txId, round, ts, lId] = el;
          const pk = `${node}:${mp}:${lId}`;
          const deletion = {
            pk,
            mp,
            txId,
            round,
            timestamp: ts,
            lId,
          };
          return mpDb.auctionDeletions.put(deletion, pk);
        }),
        ...claims.map((el) => {
          const [txId, round, ts, lId] = el;
          const pk = `${node}:${mp}:${lId}`;
          const claim = {
            pk,
            mp,
            txId,
            round,
            timestamp: ts,
            lId,
          };
          return mpDb.claims.put(claim, pk);
        }),
        ...bids.map((el) => {
          const [txId, round, ts, lId, bAddr, bPrc] = el;
          const pk = `${node}:${mp}:${lId}:${bAddr}`;
          const bid = {
            pk,
            mp,
            txId,
            round,
            timestamp: ts,
            lId,
            bAddr,
            bPrc,
          };
          return mpDb.bids.put(bid, pk);
        }),
      ]);
      localStorage.setItem("mp203-current-round", currentRound + 1);
    })();
  }, [currentRound]);

  // EFFECT: update mp204 db
  useEffect(() => {
    if (!currentRound) return;
    (async () => {
      const mp = ctcInfoMp204;
      const lastRound = localStorage.getItem("mp204-current-round");
      const ci = new CONTRACT(mp, algodClient, indexerClient, mp202Schema);
      const evts = await ci.getEvents({
        minRound: lastRound,
      });
      const reverses = evts.find((el) => el.name === "ReverseListEvent").events;
      await Promise.allSettled([
        ...reverses.map((el) => {
          //   reverseListings:
          // "pk, mp, txId, round, timestamp, lId, cId, tId, lAddr, lPrc, fPrc, endTime",
          const [txId, round, ts, lId, cId, tId, lAddr, lPrc, fPrc, endTime] =
            el;
          const pk = `${node}:${mp}:${lId}`;
          const listing = {
            pk,
            mp,
            txId,
            round,
            timestamp: ts,
            lId,
            cId,
            tId,
            lAddr,
            lPrc,
            fPrc,
            endTime,
          };
          return mpDb.reverseListings.put(listing, pk);
        }),
      ]);
      localStorage.setItem("mp204-current-round", currentRound + 1);
    })();
  }, [currentRound]);

  // EFFECT: update db pools
  useEffect(() => {
    if (!currentRound) return;
    try {
      (async () => {
        const ctcInfo = ctcInfoTri200;
        const lastRound = localStorage.getItem("tri200-current-round");
        const ci = new CONTRACT(ctcInfo, algodClient, indexerClient, triSchema);
        const evts = await ci.getEvents({
          minRound: lastRound,
        });
        const status = await algodClient.status().do();
        const currentRound = status["last-round"];
        const registerEvents = evts.find((el) => el.name === "Register").events;
        if (registerEvents.length === 0) return;
        const tokens = registerEvents
          .map((e) => {
            const [txId, round, timestamp, toks] = e;
            return toks;
          })
          .flat();
        await Promise.all(
          registerEvents.map((e) => {
            const [txId, round, timestamp, [poolId, tokA, tokB]] = e;
            const pk = txId;
            const dbPool = {
              txId,
              round,
              timestamp,
              poolId: Number(poolId),
              tokA: Number(tokA),
              tokB: Number(tokB),
            };
            return db.registerEvents.put(dbPool, pk);
          })
        );
        localStorage.setItem("tri200-current-round", currentRound + 1);
      })();
    } catch (e) {
      console.error(e);
    }
  }, [currentRound]);

  // EFFECT: update db collections
  useEffect(() => {
    if (!currentRound) return;
    try {
      (async () => {
        const lastRound = localStorage.getItem("nft-current-round");
        const { collections } = await NFTIndexerService.getCollections({
          //"mint-min-round": lastRound,
        });
        await Promise.all(
          collections.map((c) => {
            const pk = `${node}:${c.contractId}`;
            const dbCollection = {
              pk,
              collectionId: c.contractId,
              mintRound: c.mintRound,
              totalSupply: c.totalSupply,
            };
            return nftDb.collections.put(dbCollection, pk);
          })
        );
        localStorage.setItem("nft-current-round", currentRound + 1);
      })();
    } catch (e) {
      console.error(e);
    }
  }, [currentRound]);

  // EFFECT: update nfts db
  useEffect(() => {
    if (!currentRound) return;
    try {
      (async () => {
        const lastRound = localStorage.getItem("nft-current-round");
        const res = await NFTIndexerService.getTokens({
          "mint-min-round": lastRound,
        });
        const { tokens, currentRound } = res;
        await Promise.all(
          tokens.map((t) => {
            const pk = `${node}:${t.contractId}:${t.tokenId}`;
            const metadata = JSON.parse(t.metadata);
            const dbToken = {
              pk,
              name: metadata.name,
              network: node,
              symbol: String(metadata.name)
                .replace(/[^A-Za-z]/, "")
                .slice(0, 8)
                .toUpperCase(),
              decimals: 0,
              supply: 1,
              assetType: "arc72",
              collectionId: t.contractId,
              tokenId: t.tokenId,
              mintRound: t["mint-round"],
              metadata: t.metadata,
              metadataURI: t.metadataURI,
              owner: t.owner,
            };
            return nftDb.nfts.put(dbToken, pk);
          })
        );
        localStorage.setItem("nft-current-round", currentRound + 1);
      })();
    } catch (e) {
      console.error(e);
    }
  }, [currentRound]);

  return (
    <WalletProvider value={providers}>
      <MarketplaceProvider>
        <HashRouter>
          <MainMenu />
          <Routes>
            {<Route path="/" element={<Home />} />}
            {/*<Route path="/" element={<NFTMarketpalce />} />*/}
            <Route path="/account/:addr" element={<Home />} />
            <Route path="/:addr/:amt/:note" element={<Home />} />
            <Route path="/dex/" element={<DEX />} />
            <Route path="/config" element={<Config />} />
            <Route path="/mint" element={<Mint />} />
            <Route path="/token/:id" element={<Token />} />
            <Route path="/token/:id/address/:addr" element={<TokenAddress />} />
            <Route path="/wint/:id" element={<Wint />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/s" element={<Subscription />} />
            <Route path="/nft/portfolio" element={<NFTPortfolio />} />
            <Route path="/nft/marketplace" element={<NFTMarketpalce />} />
            <Route path="/nft/bridge" element={<NFTBridge />} />
            <Route path="/nft/collection/:id" element={<NFTCollection />} />
            <Route
              path="/nft/collection/:cid/token/:tid"
              element={<NFTToken />}
            />
            <Route
              path="/nft/collection"
              element={
                <div>
                  <iframe
                    src="https://docs.google.com/spreadsheets/d/13TMV_jkzxPrJEC8LbtWZuG_7j0ypPVk2OGeKEtHqhI0/edit#gid=0"
                    style={{ width: "100%", height: "100vh", border: "none" }}
                  ></iframe>
                </div>
              }
            />
          </Routes>
          <AppBar />
        </HashRouter>
        <ToastContainer />
      </MarketplaceProvider>
    </WalletProvider>
  );
}

export default App;
