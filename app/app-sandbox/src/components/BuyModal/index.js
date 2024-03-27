// BuyModal.js
import React, {
  useState,
  Suspense,
  lazy,
  useMemo,
  useEffect,
  useCallback,
  useContext,
} from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  CircularProgress,
} from "@mui/material";
import { swap200, arc200 } from "ulujs";
import CONTRACT from "arccjs";
import { getAlgorandClients } from "../../utils/algorand";
import { useWallet, PROVIDER_ID } from "@txnlab/use-wallet";
import {
  mp201Schema,
  arc200Schema,
  mp202Schema,
  mp200Schema,
  arc72Schema,
} from "../../abis";
import { bigNumberToBigInt, bigNumberify } from "../../common/utils/bn";
import { getCurrentNode, getGenesisHash } from "../../utils/reach";
import algosdk, { waitForConfirmation } from "algosdk";
import { makeStdLib } from "../../utils/reach";
import { decodeRoyalties } from "../../utils/hf.js";
import { nftDb, db } from "../../db";
import { useLiveQuery } from "dexie-react-hooks";
import {
  computeNFTSalePrice,
  getPriceSymbol,
  computeExtraPayment,
  computeMarketplaceFee,
  computeSalePrice,
  decodePrice,
  decodeDecimals,
} from "../../utils/mp.js";
import Confetti from "react-confetti";
import { useWindowSize } from "usehooks-ts";
import {
  ctcInfoMp201,
  ctcInfoMp200,
  fee,
  feeBi,
  ctcInfoMp202,
} from "../../constants/mp.js";
import { toast } from "react-toastify";
import { MarketplaceContext } from "../../store/MarketplaceContext";

const LazyNFTImage = lazy(() => import("../../components/NFTImage"));

const { algodClient, indexerClient } = getAlgorandClients();

const BuyModal = ({ open, setOpen, mp, lId, cId, tId, lAddr, lPrc }) => {
  const { isLoading, tokens, nfts, pools, listings, forSale } =
    useContext(MarketplaceContext);
  const { width, height } = useWindowSize();
  // const tokens = useLiveQuery(() => db.tokens.toArray());
  // const dbNfts = useLiveQuery(() => nftDb.nfts.toArray());
  // const pool = useLiveQuery(() => db.registerEvents.toArray());
  // const isLoading = useMemo(
  //   () => !pool || !tokens || !dbNfts,
  //   [pool, tokens, dbNfts]
  // );
  const nft = useMemo(() => {
    if (isLoading) return null;
    return nfts.find(
      (el) => el.collectionId === Number(cId) && el.tokenId === Number(tId)
    );
  }, [isLoading, nfts, cId, tId]);
  const token = useMemo(() => {
    if (isLoading) return null;
    const [pType, ...prc] = lPrc;
    if (pType === "01") {
      const [tok, tprc] = prc;
      const token = tokens.find((el) => el.tokenId === Number("0x" + tok));
      return token;
    }
  }, [isLoading, tokens, lPrc]);

  // //const [nft, setNft] = useState(null);
  //const [royalties, setRoyalties] = useState(null);
  //const [token, setToken] = useState(null);
  //const [tokens, setTokens] = useState(null);
  //const [properties, setProperties] = useState(null);
  const [poolPair, setPoolPair] = React.useState(null);
  const [pool, setPool] = useState(null);
  const [node] = getCurrentNode();
  const { activeAccount, signTransactions } = useWallet();
  const [step, setStep] = useState(0);
  const [rate, setRate] = useState(1);
  const [allowance, setAllowance] = useState(0n);
  const [hasAllowance, setHasAllowance] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

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

  const handleBuy = useCallback(async () => {
    try {
      setMessage("Please wait...");
      setLoading(true);

      const [pType, ...prc] = lPrc;

      const listing = forSale.find((el) => {
        return Number(el.lId) === Number(lId) && Number(el.mp) === Number(mp);
      });

      // check collection escrow acc mbr
      // // const accInfo = await algodClient
      //   .accountInformation(algosdk.getApplicationAddress(cId))
      //   .do();
      // if (accInfo.amount - accInfo["min-balance"] < 28500) {
      //   const suggestedParams = await algodClient.getTransactionParams().do();
      //   const paymentTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      //     from: activeAccount?.address,
      //     to: algosdk.getApplicationAddress(cId),
      //     amount: 28500,
      //     suggestedParams,
      //   });
      //   await signTransaction([
      //     Buffer.from(paymentTxn.toByte()).toString("base64"),
      //   ]);
      // }

      switch (pType) {
        case "00": {
          // TODO use customtxn
          const ci = new CONTRACT(
            mp,
            algodClient,
            indexerClient,
            mp === ctcInfoMp202
              ? mp202Schema
              : ctcInfoMp201
              ? mp201Schema
              : mp200Schema,
            {
              addr: activeAccount.address,
            }
          );
          ci.setFee(4000);
          ci.setPaymentAmount(
            computeNFTSalePrice(tokens, lPrc, listing.nft.royalties, fee, true)
          );
          ci.setAccounts([
            "G3MSA75OZEJTCCENOJDLDJK7UD7E2K5DNC7FVHCNOV7E3I4DTXTOWDUIFQ",
          ]);
          setMessage("Signing buy transaction...");
          const buyNetR = await ci.buyNet(lId);
          if (!buyNetR.success) throw new Error(buyNetR.error);
          await signTransaction(buyNetR.txns);
          setShowConfetti(true);
          toast("NFT purchase successful!");
          break;
        }
        case "01": {
          // -----------------------------------------------
          // arc200_approve mp202 cId tId
          // mp202_buySC tId
          // mp202_claimSC tId
          // -----------------------------------------------
          // TODO add preflight checks here
          const [tId, tPrc] = prc;
          const ptid = Number("0x" + tId);
          const tprc = Number("0x" + tPrc);
          const builder = {
            mp202: new CONTRACT(
              mp,
              algodClient,
              indexerClient,
              mp202Schema,
              { addr: activeAccount.address },
              undefined,
              undefined,
              true
            ),
            arc200: new CONTRACT(
              ptid,
              algodClient,
              indexerClient,
              arc200Schema,
              { addr: activeAccount.address },
              undefined,
              undefined,
              true
            ),
          };
          const ciArc200 = new arc200(ptid, algodClient, indexerClient, {
            acc: { addr: activeAccount.address },
          });
          const ciMp = new CONTRACT(
            mp,
            algodClient,
            indexerClient,
            mp202Schema,
            {
              addr: activeAccount?.address,
            }
          );
          const arc200_totalSupplyR = await ciArc200.arc200_totalSupply();
          if (!arc200_totalSupplyR.success)
            throw new Error("Failed to get supply");
          const arc200_totalSupply = arc200_totalSupplyR.returnValue;
          const arc200_allowanceR = await ciArc200.arc200_allowance(
            activeAccount.address,
            algosdk.getApplicationAddress(mp)
          );
          if (!arc200_allowanceR.success)
            throw new Error("Failed to get allowance");
          const arc200_allowance = arc200_allowanceR.returnValue;
          if (arc200_allowance < bigNumberToBigInt(bigNumberify(tprc))) {
            setMessage("Approving...");
            const arc200_approveR = await ciArc200.arc200_approve(
              algosdk.getApplicationAddress(mp),
              arc200_totalSupply
            );
            if (!arc200_approveR.success) throw new Error("Failed to approve");
            await signTransaction(arc200_approveR.txns);
          }
          const customTxn = (
            await Promise.all([
              // builder.arc200.arc200_approve(
              //   algosdk.getApplicationAddress(mp),
              //   tprc
              // ),
              builder.mp202.buySC(lId),
              builder.mp202.claimSC(lId),
            ])
          ).map(({ obj }) => obj);
          ciMp.setExtraTxns(customTxn);
          const extraPaymentAmount = Math.max(
            Math.ceil(
              computeExtraPayment(tprc, listing.nft.royalties, fee, rate)
            ),
            1e6
          );
          ciMp.setPaymentAmount(extraPaymentAmount);
          ciMp.setFee(5000);
          const customR = await ciMp.custom();
          if (!customR.success) {
            throw new Error("failed in simulate");
          }
          await signTransaction(customR.txns);
          setShowConfetti(true);
          toast("NFT purchase successful!");
          // -----------------------------------------------
        }
      }
    } catch (e) {
      console.log(e);
      toast.error(e.message);
    } finally {
      setLoading(false);
      setMessage("");
    }
  }, [activeAccount, rate, mp, lId, cId, tId, lAddr, lPrc, nfts]);

  // EFFECT: step 0 - check activeAccount
  useEffect(() => {
    if (activeAccount && step === 0 && !isLoading) setStep(1);
  }, [step, activeAccount, pool]);

  // EFFECT: step 1 - check allowance
  useEffect(() => {
    if (activeAccount && step === 1) {
      const [pType, ...prc] = lPrc;
      switch (pType) {
        case "00": {
          return true;
        }
        case "01": {
          const [tok, tprc] = prc;
          const tokN = Number("0x" + tok);
          const ciARC200 = new arc200(tokN, algodClient, indexerClient);
          ciARC200
            .arc200_allowance(
              activeAccount.address,
              algosdk.getApplicationAddress(mp)
            )
            .then((arc200_allowanceR) => {
              if (!arc200_allowanceR.success) return;
              const arc200_allowance = arc200_allowanceR.returnValue;
              if (arc200_allowance > 0n) {
                setHasAllowance(true);
                setAllowance(arc200_allowance);
              }
            });
        }
      }
    }
  }, [activeAccount, step]);

  // EFFECT: check rate
  useEffect(() => {
    if (!pool) return;
    switch (lPrc[0]) {
      case "00":
        setPoolPair(null);
        setPool(null);
        setRate(1);
        return;
      case "01":
        const [_, tok, tprc] = lPrc;
        const tokN = Number("0x" + tok);
        const wVOI = 24590664;

        if (tokN === wVOI) {
          setPoolPair(null);
          setPool(null);
          setRate(1);
          return;
        }

        const pools = pool.filter((el) => {
          return (
            [el.tokA, el.tokB].includes(wVOI) &&
            [el.tokA, el.tokB].includes(tokN)
          );
        });

        if (pools.length !== 1) {
          setPoolPair(null);
          setPool(null);
          setRate(0.000001);
          return;
        }

        const [pool] = pools;

        setPool(pool);

        const { tokA, tokB, poolId } = pool;

        const tokASymbol = tokens.find((el) => el.tokenId === tokA)?.symbol;
        const tokBSymbol = tokens.find((el) => el.tokenId === tokB)?.symbol;

        setPoolPair(`${tokASymbol}/${tokBSymbol}`);
    }
  }, [pool, lPrc]);

  useEffect(() => {
    if (!pool) return;
    const fallback = 0.000001;
    const ci = new swap200(pool.poolId, algodClient, indexerClient);
    ci.Info()
      .then((InfoR) => {
        if (!InfoR.success) return fallback;
        return InfoR.returnValue;
      })
      .then((Info) => {
        const [lptBals, [balA, balB]] = Info;
        const prec = 10000000n;
        const rateAU = (prec * balA) / balB;
        const rateSU = Number(rateAU) / Number(prec);
        return rateSU;
      })
      .then((r) => {
        setRate(r);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [pool]);

  const handleClose = () => {
    setOpen(false);
  };

  return isLoading && nft ? (
    "Loading..."
  ) : (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          root: {
            style: { backgroundColor: "rgba(0,0,0,0.5)" },
          },
        }}
      >
        <DialogTitle>Buy NFT</DialogTitle>
        <DialogContent>
          {showConfetti && <Confetti width={width} height={height} />}
          <Suspense fallback={<CircularProgress />}>
            <LazyNFTImage collectionId={Number(cId)} tokenId={Number(tId)} />
          </Suspense>
          {[
            `ListAddress: ${lAddr.slice(0, 4) + "..." + lAddr.slice(-4)}`,
            `ListPrice: ${(
              decodePrice(lPrc) /
              10 ** decodeDecimals(lPrc, node, tokens)
            ).toLocaleString()} ${getPriceSymbol(lPrc, node, tokens)}`,
            // mp !== 28368147
            //   ? `MarketplaceFee: ${computeMarketplaceFee(royalties, fee)}%`
            //   : null,
            // mp !== 28368147
            //   ? `Royalties: ${nft.royalties.royaltyPercent}%`
            //   : null,
            mp !== 28368147 && pool ? `Rate (${poolPair}): ${rate}` : null,
            mp !== 28368147 && lPrc[0] === "00"
              ? "SalePrice: " +
                (
                  (decodePrice(lPrc) +
                    computeExtraPayment(
                      decodePrice(lPrc),
                      nft.royalties,
                      fee,
                      rate
                    )) /
                  10 ** decodeDecimals(lPrc, node, tokens)
                ).toLocaleString() +
                " " +
                getPriceSymbol(lPrc, node, tokens)
              : null,
            mp !== 28368147 && lPrc[0] !== "00"
              ? "SalePrice: " +
                (
                  decodePrice(lPrc) /
                  10 ** decodeDecimals(lPrc, node, tokens)
                ).toLocaleString() +
                " " +
                getPriceSymbol(lPrc, node, tokens) +
                " + " +
                ((
                  Math.max(
                    computeExtraPayment(
                      decodePrice(lPrc),
                      nft.royalties,
                      fee,
                      rate
                    ),
                    1e6
                  ) /
                  10 ** decodeDecimals(["00"], node, tokens)
                ).toLocaleString() +
                  " " +
                  getPriceSymbol(["00"], node, tokens))
              : null,
          ].map((el) => (
            <p>{el}</p>
          ))}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={showConfetti ? () => handleClose() : handleBuy}
          >
            {!loading ? (showConfetti ? "Close" : "Buy") : message}
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BuyModal;
