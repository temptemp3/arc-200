import React, { lazy, useContext, useEffect, useMemo } from "react";
import { useWallet, PROVIDER_ID } from "@txnlab/use-wallet";
import { getCurrentNode, getGenesisHash } from "../../utils/reach";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Grid,
  Container,
  createTheme,
  Chip,
  ButtonGroup,
} from "@mui/material";
import { makeStdLib } from "../../utils/reach";
import { makeStyles } from "@mui/styles";
import algosdk, { waitForConfirmation } from "algosdk";
import { getAlgorandClients, zeroAddress } from "../../utils/algorand";
import { useParams } from "react-router-dom";
import { mp200Schema, mp201Schema, mp202Schema, arc72Schema } from "../../abis";
import SalesHistoryTable from "../../components/SalesHistoryTable";
import { nftDb, db, mpDb } from "../../db";
import { useLiveQuery } from "dexie-react-hooks";
import { decodeRoyalties } from "../../utils/hf";
import {
  activeApps,
  ctcInfoMp200,
  ctcInfoMp201,
  ctcInfoMp202,
  ctcInfoMp203,
  fee,
  feeBi,
} from "../../constants/mp";
import { arc72 } from "ulujs";
import CONTRACT from "arccjs";
import { toast } from "react-toastify";
import {
  computeExtraPayment,
  computeNFTSalePrice,
  computeSalePrice,
  decodeDecimals,
  decodePrice,
  getPriceSymbol,
} from "../../utils/mp";
import moment from "moment";
import BuyModal from "../../components/BuyModal";
import SellModal from "../../components/SellModal";
import { MarketplaceContext } from "../../store/MarketplaceContext";

const stdlib = makeStdLib();

const theme = createTheme({
  palette: {
    divider: "#C7C7C7", // Define the divider color
  },
});

const useStyles = makeStyles((theme) => ({
  textFieldRoot: {
    paddingRight: 0, // Remove right padding for TextField
  },
  selectRoot: {
    border: 0,
    borderBottom: `1px solid transparent`,
    //backgroundColor: "transparent",
    borderRadius: "0",
    /*
    padding: "8px 0", // Adjust padding as needed
    "& .MuiSelect-select": {
      paddingRight: 0,
    },
    */
  },
}));

const { algodClient, indexerClient } = getAlgorandClients("voi-testnet");

const NFTInfo = ({ nftInfo, collectionId, tokenId, owner, controller }) => {
  return (
    <Table>
      <TableBody>
        {[
          ["Name", nftInfo?.metadata?.name],
          ["Description", nftInfo?.metadata?.description, "justify"],
          ["CollectionId", collectionId],
          ["TokenId", tokenId],
          [
            "Owner",
            owner ? owner?.slice(0, 10) + "..." + owner?.slice(-10) : "...",
          ],
          [
            "Controller",
            controller
              ? controller?.slice(0, 10) + "..." + controller?.slice(-10)
              : "...",
          ],
          [
            "Traits",
            Object.entries(nftInfo?.metadata?.properties || {}).map(
              ([k, v]) => <Chip sx={{ m: 0.5 }} label={`${k}: ${v}`} />
            ),
          ],
          [
            "Royalties",
            nftInfo?.royalties ? `${nftInfo?.royalties.royaltyPercent}%` : null,
          ],
        ].map(([a, b, c]) => {
          return !!b ? (
            <TableRow>
              <TableCell>{a}</TableCell>
              <TableCell align={c || "right"}>{b}</TableCell>
            </TableRow>
          ) : null;
        })}
      </TableBody>
    </Table>
  );
};

const LazyNFTImage = lazy(() => import("../../components/NFTImage"));

function NFTToken() {
  const {
    isLoading,
    nfts,
    tokens,
    listings,
    forSale,
    projects,
    auctions,
    liveAuctions,
    bids,
  } = useContext(MarketplaceContext);

  const { cid, tid } = useParams();

  const [node] = getCurrentNode();
  const { activeAccount, providers, signTransactions } = useWallet();

  const [value, setValue] = React.useState(1);
  const [sold, setSold] = React.useState([]);
  const [owners, setOwners] = React.useState(null);
  const [ctcInfo, setCtcInfo] = React.useState(null);
  const [owner, setOwner] = React.useState(null);
  const [controller, setController] = React.useState(null);
  const [unclaimed, setUnclaimed] = React.useState(null);
  const [showBuyModal, setShowBuyModal] = React.useState(false);
  const [buyModalListing, setBuyModalListing] = React.useState(null);
  const [showSellModal, setShowSellModal] = React.useState(false);

  // EFFECT: set nftInfo
  const nft = useMemo(() => {
    if (isLoading) return null;
    return nfts.find(
      ({ collectionId, tokenId }) =>
        Number(collectionId) === Number(cid) && Number(tokenId) === Number(tid)
    );
  }, [isLoading, nfts]);

  // EFFECT: update controller
  useEffect(() => {
    if (controller) return;
    (async () => {
      const ci = new arc72(Number(cid), algodClient, indexerClient);
      const arc72_getApprovedrR = await ci.arc72_getApproved(Number(tid));
      if (!arc72_getApprovedrR.success) return;
      const arc72_getApproved = arc72_getApprovedrR.returnValue;
      setController(arc72_getApproved);
    })();
  }, []);

  // EFFECT: update owner
  useEffect(() => {
    if (owner) return;
    (async () => {
      const ci = new arc72(Number(cid), algodClient, indexerClient);
      const ownerR = await ci.arc72_ownerOf(Number(tid));
      if (!ownerR.success) return;
      setOwner(ownerR.returnValue);
    })();
  }, []);

  // set now to block time
  const [now, setNow] = React.useState(null);
  useEffect(() => {
    (async () => {
      const res = await algodClient.status().do();
      setNow(res["last-round"]);
    })();
  }, []);

  // get bid info
  const [token, setToken] = React.useState(null);
  const [nextBid, setNextBid] = React.useState(null);
  const [lastBid, setLastBid] = React.useState(null);
  useEffect(() => {
    if (isLoading) return;
    const liveAuction = liveAuctions.find(
      ({ cId, tId }) =>
        Number(cId) === Number(cid) && Number(tId) === Number(tid)
    );
    if (!liveAuction) return;
    const bid = bids
      .filter((bid) => bid.lId === liveAuction.lId)
      .reduce((acc, val) => {
        if (val.round > acc.round) {
          return val;
        }
        return acc;
      });
    if (!bid) return;
    const [ptid, pprc] = bid.bPrc.slice(1);
    const ptidn = Number("0x" + ptid);
    const pprcn = Number("0x" + pprc);
    const token = tokens.find((t) => Number(t.tokenId) === ptidn);
    if (!token) return;
    const plusOne = 10 ** token.decimals;
    const nextBid = pprcn + plusOne;
    setLastBid(bid);
    setNextBid(nextBid);
    setToken(token);
  }, [liveAuctions, bids, tokens, isLoading]);

  console.log({ liveAuctions, bids, tokens, lastBid, nextBid, token });

  const handleBid = React.useCallback(
    async (mp, txId, round, ts, lId, cId, tId, lAddr, lPrc, nextBid) => {
      try {
        const ciMp = new CONTRACT(mp, algodClient, indexerClient, mp202Schema, {
          addr: activeAccount?.address,
        });
        ciMp.setPaymentAmount(1000);
        ciMp.setFee(2000);
        const bidSCR = await ciMp.bidSC(lId, nextBid);
        if (!bidSCR.success) {
          throw new Error("Bid failed in simulate");
        }
        const txns = bidSCR.txns;
        const txId = await signTransaction(txns);
        console.log({ txId });
        alert("Bid successful!");
      } catch (e) {
        toast.error(e.message);
      }
    },
    [activeAccount, nft, token]
  );

  const handleBuy = React.useCallback(
    async (mp, txId, round, ts, lId, cId, tId, lAddr, lPrc) => {
      setShowBuyModal(true);
      setBuyModalListing({
        mp,
        txId,
        round,
        ts,
        lId,
        cId,
        tId,
        lAddr,
        lPrc,
      });
    },
    [activeAccount, nft]
  );

  // EFFECT: check cid
  useEffect(() => {
    const ctcInfo = Number(cid);
    if (isNaN(ctcInfo)) return;
    setCtcInfo(ctcInfo);
  }, []);

  const signTransaction = React.useCallback(
    async (txns) => {
      if (!activeAccount) return;
      if (
        activeAccount.providerId === PROVIDER_ID.CUSTOM &&
        activeAccount.name === "kibisis"
      ) {
        const algorand = window.algorand;
        if (!algorand) {
          throw new Error("no wallets are installed!");
        }
        const wallets = algorand.getWallets();
        const wallet = await algorand.enable({
          genesisHash: getGenesisHash(node),
        });

        const result = await window.algorand.signTxns({
          txns: txns.map((el) => {
            return {
              txn: el,
            };
          }),
        });
        let signedTransactionBytes;
        signedTransactionBytes = result.stxns.map(
          (stxn) => new Uint8Array(Buffer.from(stxn, "base64"))
        );
        const res = await algodClient
          .sendRawTransaction(signedTransactionBytes)
          .do();
        await waitForConfirmation(algodClient, res.txId, 4);
      } else if (
        [PROVIDER_ID.KIBISIS, PROVIDER_ID.DEFLY, PROVIDER_ID.LUTE].includes(
          activeAccount.providerId
        )
      ) {
        const stxns = await signTransactions(
          txns.map((el) => new Uint8Array(Buffer.from(el, "base64")))
        );
        const res = await algodClient.sendRawTransaction(stxns).do();
        await waitForConfirmation(algodClient, res.txId, 4);
      } else {
        throw new Error("Unsupported wallet");
      }
    },
    [activeAccount]
  );
  const handleUnlist = async () => {
    try {
      const ci = new arc72(Number(cid), algodClient, indexerClient, {
        acc: {
          addr: activeAccount?.address,
        },
      });
      const arc72_approveR = await ci.arc72_approve(
        activeAccount?.address,
        Number(tid)
      );
      if (!arc72_approveR.success) {
        throw new Error("arc72_approve failed in simulate");
      }
      await signTransaction(arc72_approveR.txns);
      alert("Unlist successful!");
    } catch (e) {
      console.log(e);
    }
  };

  const handleTransfer = async () => {
    try {
      const addr = prompt("Enter address to transfer to");
      if (!addr) return;
      const ci = new arc72(ctcInfo, algodClient, indexerClient, {
        acc: { addr: activeAccount?.address },
      });
      // const ci = new CONTRACT(
      //   ctcInfo,
      //   algodClient,
      //   indexerClient,
      //   arc72Schema,
      //   {
      //     addr: activeAccount?.address,
      //   }
      // );
      const arc72_ownerOfR = await ci.arc72_ownerOf(Number(tid));
      if (!arc72_ownerOfR.success) {
        throw new Error("arc72_ownerOf failed in simulate");
      }
      if (arc72_ownerOfR.returnValue !== activeAccount?.address) {
        throw new Error("arc72_ownerOf returned wrong owner");
      }

      // TODO check mbr of ctcAddr

      const accInfo = await algodClient
        .accountInformation(algosdk.getApplicationAddress(Number(cid)))
        .do();
      if (accInfo.amount - accInfo["min-balance"] < 28500) {
        const suggestedParams = await algodClient.getTransactionParams().do();
        const paymentTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
          from: activeAccount?.address,
          to: algosdk.getApplicationAddress(Number(cid)),
          amount: 28500,
          suggestedParams,
        });
        await signTransaction([
          Buffer.from(paymentTxn.toByte()).toString("base64"),
        ]);
      }

      const arc72_transferFromR = await ci.arc72_transferFrom(
        activeAccount?.address,
        addr,
        Number(tid)
      );
      if (!arc72_transferFromR.success) {
        throw new Error("arc72_transferFrom failed in simulate");
      }
      const txns = arc72_transferFromR.txns;
      const txId = await signTransaction(txns);
      console.log({ txId });
      alert("Transfer successful!");
    } catch (e) {
      console.log(e);
    }
  };

  return !ctcInfo || isLoading || !nft ? (
    "NFT not found"
  ) : (
    <>
      <h2 align="left" style={{ marginLeft: 10 }}>
        Collection AppId: <a href={`/#/nft/collection/${ctcInfo}`}>{ctcInfo}</a>
        <br />
        Collection Address:{" "}
        {algosdk.getApplicationAddress(ctcInfo).slice(0, 10)}...
        <br />
        TokenId: {tid}
      </h2>
      <Container sx={{ mt: 5 }} maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <LazyNFTImage
              collectionId={ctcInfo}
              tokenId={Number(tid)}
              image={nft?.metadata?.image}
            />
            <ButtonGroup fullWidth>
              {
                // owner is connected account
                activeAccount?.address === owner && (
                  <Button
                    size="large"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleTransfer}
                  >
                    Transfer
                  </Button>
                )
              }
              {
                // ower is connected account and controller is not a marketplace
                owner === activeAccount?.address &&
                  !activeApps
                    .map(algosdk.getApplicationAddress)
                    .includes(controller) && (
                    <Button
                      color="success"
                      size="large"
                      fullWidth
                      variant="contained"
                      onClick={() => {
                        setShowSellModal(true);
                      }}
                    >
                      Sell
                    </Button>
                  )
              }
              {
                // owner is connected accoujnt and controller is a marketplace
                owner === activeAccount?.address &&
                  activeApps
                    .map(algosdk.getApplicationAddress)
                    .includes(controller) && (
                    <Button
                      color="warning"
                      size="large"
                      fullWidth
                      variant="contained"
                      onClick={handleUnlist}
                    >
                      Unlist
                    </Button>
                  )
              }
            </ButtonGroup>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{ textAlign: "left" }}>
            <NFTInfo
              nftInfo={nft}
              collectionId={ctcInfo}
              tokenId={Number(tid)}
              owner={owner}
              controller={controller}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            {nextBid &&
              liveAuctions
                .filter(
                  ({ cId, tId }) =>
                    Number(cId) === Number(cid) && Number(tId) === Number(tid)
                )
                .map(
                  ({
                    mp,
                    txId,
                    round,
                    ts,
                    lId,
                    cId,
                    tId,
                    lAddr,
                    lPrc,
                    endTime,
                  }) => (
                    <Button
                      color="info"
                      size="large"
                      fullWidth
                      variant="text"
                      onClick={() =>
                        handleBid(
                          mp,
                          txId,
                          round,
                          ts,
                          lId,
                          cId,
                          tId,
                          lAddr,
                          lPrc,
                          nextBid
                        )
                      }
                    >
                      Bid{" "}
                      {(nextBid / 10 ** token?.decimals || 0).toLocaleString()}{" "}
                      {token?.symbol || ""}
                      <Chip
                        sx={{ ml: 1 }}
                        size="small"
                        color="secondary"
                        label={`${((addr) =>
                          `${addr.slice(0, 4)}...${addr.slice(-4)}`)(
                          lastBid?.bAddr
                        )}`}
                      />
                      <Chip
                        sx={{ ml: 1 }}
                        size="small"
                        color="secondary"
                        label={((diff) =>
                          diff > 0 ? `Ends ${diff} blocks` : "Ended")(
                          Number(endTime) - now
                        )}
                      />
                    </Button>
                  )
                )}
            {forSale
              .filter(
                ({ cId, tId }) =>
                  Number(cId) === Number(cid) && Number(tId) === Number(tid)
              )
              .map(({ mp, txId, round, ts, lId, cId, tId, lAddr, lPrc }) =>
                owner !== activeAccount?.address && lAddr === owner ? (
                  <Button
                    color="success"
                    size="large"
                    fullWidth
                    variant="contained"
                    onClick={() => {
                      setShowBuyModal(true);
                      setBuyModalListing({
                        mp,
                        txId,
                        round,
                        ts,
                        lId,
                        cId,
                        tId,
                        lAddr,
                        lPrc,
                      });
                    }}
                  >
                    Buy Now{` `}
                    {lPrc[0] === "00"
                      ? (
                          (decodePrice(lPrc) +
                            computeExtraPayment(
                              decodePrice(lPrc),
                              nft.royalties,
                              fee
                            )) /
                          10 ** decodeDecimals(lPrc, node, tokens)
                        ).toLocaleString() +
                        " " +
                        getPriceSymbol(lPrc, node, tokens)
                      : null}
                    {lPrc[0] === "01"
                      ? (
                          decodePrice(lPrc) /
                          10 ** decodeDecimals(lPrc, node, tokens)
                        ).toLocaleString() +
                        " " +
                        getPriceSymbol(lPrc, node, tokens) +
                        " + " +
                        (
                          computeExtraPayment(
                            decodePrice(lPrc),
                            nft.royalties,
                            fee
                          ) /
                          10 ** decodeDecimals(lPrc, node, tokens)
                        ).toLocaleString() +
                        " " +
                        getPriceSymbol(["00"], node, tokens)
                      : null}
                  </Button>
                ) : null
              )}
          </Grid>
          {sold && sold.length > 0 && (
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <SalesHistoryTable
                salesData={sold.map(
                  ([
                    mp,
                    txId,
                    round,
                    ts,
                    lId,
                    cId,
                    tId,
                    lAddr,
                    lPrc,
                    bAddr,
                  ]) => {
                    return {
                      id: lId,
                      date: ((m) => `${m.format("llll")} (${m.fromNow()})`)(
                        moment.unix(ts)
                      ),
                      seller: `${lAddr.slice(0, 4)}...${lAddr.slice(-4)}`,
                      buyer: `${bAddr.slice(0, 4)}...${bAddr.slice(-4)}`,
                      amount: `${
                        computeNFTSalePrice(
                          tokens,
                          lPrc,
                          nft.royalties.royaltyPercent,
                          fee,
                          false
                        ) / 1e6
                      }`,
                      symbol: getPriceSymbol(lPrc, node, tokens),
                    };
                  }
                )}
              />
            </Grid>
          )}
        </Grid>
      </Container>
      {showBuyModal && (
        <BuyModal
          open={showBuyModal}
          setOpen={setShowBuyModal}
          onClose={() => setShowBuyModal(false)}
          {...buyModalListing}
          nfts={nfts}
        />
      )}
      {showSellModal && (
        <SellModal
          open={showSellModal}
          setOpen={setShowSellModal}
          onClose={() => setShowSellModal(false)}
          cid={Number(cid)}
          tid={Number(tid)}
        />
      )}
    </>
  );
}

export default NFTToken;
