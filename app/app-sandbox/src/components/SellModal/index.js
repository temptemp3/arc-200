// BuyModal.js
import React, { useState, Suspense, lazy, useMemo, useCallback } from "react";
import {
  Grid,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  CircularProgress,
  Typography,
  TextField,
} from "@mui/material";
import CONTRACT from "arccjs";
import { arc72 } from "ulujs";
import { getAlgorandClients } from "../../utils/algorand.js";
import { useWallet, PROVIDER_ID, custom } from "@txnlab/use-wallet";
import { mp201Schema, mp202Schema, arc72Schema } from "../../abis/index.js";
import { getCurrentNode, getGenesisHash } from "../../utils/reach.js";
import algosdk, { waitForConfirmation } from "algosdk";
import { makeStdLib } from "../../utils/reach.js";
import { decodeRoyalties } from "../../utils/hf.js";
import { nftDb, db } from "../../db.js";
import { useLiveQuery } from "dexie-react-hooks";
import { computeSalePrice } from "../../utils/mp.js";
import Confetti from "react-confetti";
import { useWindowSize } from "usehooks-ts";
import { ctcInfoMp202 as ctcInfoMp } from "../../constants/mp.js";
import { toast } from "react-toastify";
import TokenSelect from "../TokenSelect/index.jsx";

const LazyNFTImage = lazy(() => import("../NFTImage/index.js"));

const { algodClient, indexerClient } = getAlgorandClients();

const SellModal = ({ open, setOpen, cid, tid }) => {
  const { activeAccount, signTransactions } = useWallet();
  const [node] = getCurrentNode();
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [message, setMessage] = useState("");
  const dbTokens = useLiveQuery(() => db.tokens.toArray());
  const dbNfts = useLiveQuery(() => nftDb.nfts.toArray());
  const dbPools = useLiveQuery(() => db.registerEvents.toArray());
  const isLoading = useMemo(
    () => !dbPools || !dbTokens || !dbNfts,
    [dbPools, dbTokens, dbNfts]
  );
  const nft = useMemo(() => {
    if (!dbNfts) return null;
    const nft = dbNfts.find(
      (el) => el.collectionId === Number(cid) && el.tokenId === Number(tid)
    );
    const metadata = JSON.parse(nft.metadata);
    const royalties = decodeRoyalties(metadata.royalties);
    return { ...nft, metadata, royalties };
  }, [dbNfts, cid, tid]);
  const [token, setToken] = useState(null);
  const [price, setPrice] = useState("");
  const salePrice = useMemo(() => {
    const priceN = Number(price);
    if (!price || !nft || !token || isNaN(priceN)) return null;
    return computeSalePrice(priceN, nft.royalties, token);
  }, [price, nft]);

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

  const handleClose = () => {
    window.location.reload();
  };
  const handleSell = useCallback(async () => {
    try {
      if (!activeAccount) {
        throw new Error("No active account");
      }
      const builder = {
        arc72: new CONTRACT(
          Number(cid),
          algodClient,
          indexerClient,
          arc72Schema,
          {
            addr: activeAccount?.address,
          },
          true,
          false,
          true
        ),
        mp202: new CONTRACT(
          ctcInfoMp,
          algodClient,
          indexerClient,
          mp202Schema,
          {
            addr: activeAccount?.address,
          },
          true,
          false,
          true
        ),
      };
      const ciMp = new CONTRACT(
        ctcInfoMp,
        algodClient,
        indexerClient,
        mp202Schema,
        {
          addr: activeAccount?.address,
        }
      );
      // const ciARC72 = new arc72(Number(cid), algodClient, indexerClient, {
      //   acc: {
      //     addr: activeAccount?.address,
      //   },
      // });
      // const arc72_ownerOfR = await ciARC72.arc72_ownerOf(Number(tid));
      // if (!arc72_ownerOfR.success) {
      //   throw new Error("arc72_ownerOf failed in simulate");
      // }
      // if (arc72_ownerOfR.returnValue !== activeAccount?.address) {
      //   throw new Error("arc72_ownerOf returned wrong owner");
      // }
      // const arc72_getApprovedrR = await ciARC72.arc72_getApproved(Number(tid));
      // if (!arc72_getApprovedrR.success) {
      //   throw new Error("arc72_getApproved failed in simulate");
      // }
      // const arc72_getApproved = arc72_getApprovedrR.returnValue;
      // if (arc72_getApproved !== algosdk.getApplicationAddress(ctcInfoMp)) {
      //   const arc72_approveR = await ciARC72.arc72_approve(
      //     algosdk.getApplicationAddress(ctcInfoMp),
      //     Number(tid)
      //   );
      //   if (!arc72_approveR.success) {
      //     throw new Error("arc72_approve failed in simulate");
      //   }
      //   await signTransaction(arc72_approveR.txns);
      // }
      if (token.tokenId === 0) {
        const customPaymentAmount = [73700];
        const customTxns = (
          await Promise.all([
            builder.arc72.arc72_approve(
              algosdk.getApplicationAddress(ctcInfoMp),
              Number(tid)
            ),
            builder.mp202.listNet(
              Number(cid),
              Number(tid),
              Number(price) * Math.pow(10, token.decimals)
            ),
          ])
        ).map(({ obj }) => obj);
        ciMp.setPaymentAmount(
          customPaymentAmount.reduce((acc, val) => acc + val, 0)
        );
        ciMp.setExtraTxns(customTxns.reverse());
        const customR = await ciMp.custom();
        if (!customR.success) {
          throw new Error("failed in simulate");
        }
        const stxn = await signTransaction(customR.txns);

        //   // listnet
        //   const listPrice = Number(price) * Math.pow(10, token.decimals);
        //   ciMp.setPaymentAmount(73700);
        //   const listNetR = await ciMp.listNet(
        //     Number(cid),
        //     Number(tid),
        //     listPrice
        //   );
        //   if (!listNetR.success) {
        //     throw new Error("listNet failed in simulate");
        //   }
        //   await signTransaction(listNetR.txns);
      } else {
        const customPaymentAmount = [73700];
        const customTxns = (
          await Promise.all([
            builder.arc72.arc72_approve(
              algosdk.getApplicationAddress(ctcInfoMp),
              Number(tid)
            ),
            builder.mp202.listSC(
              Number(cid),
              Number(tid),
              token.tokenId,
              Number(price) * Math.pow(10, token.decimals)
            ),
          ])
        ).map(({ obj }) => obj);
        ciMp.setFee(2000);
        ciMp.setPaymentAmount(
          customPaymentAmount.reduce((acc, val) => acc + val, 0)
        );
        ciMp.setExtraTxns(customTxns.reverse());
        const customR = await ciMp.custom();
        if (!customR.success) {
          throw new Error("failed in simulate");
        }
        const stxn = await signTransaction(customR.txns);
        //listsc
        // const boxCost = 28500;
        // const accInfo = await algodClient
        //   .accountInformation(algosdk.getApplicationAddress(Number(cid)))
        //   .do();
        // if (accInfo.amount - accInfo["min-balance"] < boxCost) {
        //   const suggestedParams = await algodClient.getTransactionParams().do();
        //   const paymentTxn =
        //     algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        //       from: activeAccount?.address,
        //       to: algosdk.getApplicationAddress(Number(cid)),
        //       amount: boxCost,
        //       suggestedParams,
        //     });
        //   await signTransaction([
        //     Buffer.from(paymentTxn.toByte()).toString("base64"),
        //   ]);
        // }
        // const listPrice = Number(price) * Math.pow(10, token.decimals);
        // ciMp.setFee(2000);
        // ciMp.setPaymentAmount(73700);
        // const listSCR = await ciMp.listSC(
        //   Number(cid),
        //   Number(tid),
        //   token.tokenId,
        //   listPrice
        // );
        // if (!listSCR.success) {
        //   throw new Error("listSC failed in simulate");
        // }
        // await signTransaction(listSCR.txns);
      }
      toast("List successful!");
    } catch (e) {
      toast.error(e.message);
    }
  }, [activeAccount, token, price]);
  return isLoading ? (
    "Loading..."
  ) : (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={
          {
            /*
          root: {
            style: { zIndex: 999999, backgroundColor: "rgba(0,0,0,0.5)" },
          },
          */
          }
        }
      >
        <DialogTitle>Sell NFT</DialogTitle>
        <DialogContent>
          {showConfetti && <Confetti width={width} height={height} />}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Suspense fallback={<CircularProgress />}>
                <LazyNFTImage
                  collectionId={Number(cid)}
                  tokenId={Number(tid)}
                />
              </Suspense>
              {[
                `Name: ${nft.name}`,
                `Royalty: ${nft.royalties?.royaltyPercent || 0}%`,
              ].map((el) => (
                <Typography variant="body1" align="left">
                  {el}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography
                variant="body1"
                align="left"
                sx={{ fontWeight: 900, mt: 2 }}
              >
                1. Select Token
              </Typography>
              <TokenSelect onChange={setToken} />
              {token &&
                [
                  `Name: ${token.name}`,
                  `Symbol: ${token.symbol}`,
                  `Decimals: ${token.decimals}`,
                ].map((el) => <p>{el}</p>)}
              <Typography
                variant="body1"
                align="left"
                sx={{ fontWeight: 900, mt: 2 }}
              >
                2. Set Price
                <TextField
                  fullWidth
                  label="Price"
                  sx={{ my: 2 }}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Typography>
              {salePrice &&
                [`Sale Price: ${salePrice}`].map((el) => <p>{el}</p>)}

              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSell}
              >
                {!isLoading ? (showConfetti ? "Close" : "Sell") : message}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SellModal;
