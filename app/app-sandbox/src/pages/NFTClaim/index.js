import React, { useEffect, useMemo, lazy, Suspense, useContext } from "react";
import { useWallet, PROVIDER_ID } from "@txnlab/use-wallet";
import { getCurrentNode, getGenesisHash } from "../../utils/reach";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Stack,
  Button,
  Grid,
  Typography,
  Container,
  Tabs,
  Tab,
  createTheme,
  Paper,
  Tooltip,
} from "@mui/material";
import { makeStdLib } from "../../utils/reach";
import { makeStyles } from "@mui/styles";
import algosdk, { waitForConfirmation } from "algosdk";
import CONTRACT from "arccjs";
import { getAlgorandClients } from "../../utils/algorand";
import { useParams } from "react-router-dom";
import { mp200Schema, mp201Schema, arc200Schema } from "../../abis";
import NFTPortfolio from "../NFTPortfolio";
import NFTFeed from "../NFTFeed";
import NFTProjects from "../NFTProjects";
import NFTSales from "../NFTSales";
import BuyModal from "../../components/BuyModal";
import { bigNumberToBigInt, bigNumberify } from "../../common/utils/bn";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { decodeRoyalties } from "../../utils/hf";
import {
  computeExtraPayment,
  computeNFTSalePrice,
  decodeDecimals,
  decodePrice,
} from "../../utils/mp";
import { nftDb, db, mpDb } from "../../db";
import { useLiveQuery } from "dexie-react-hooks";
import { ctcInfoMp200, ctcInfoMp201, fee, feeBi } from "../../constants/mp";
import Confetti from "react-confetti";
import { useWindowSize } from "usehooks-ts";
import { toast } from "react-toastify";
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

/*
 * prepareString
 * - prepare string (strip trailing null bytes)
 * @param str: string to prepare
 * @returns: prepared string
 */
const prepareString = (str) => {
  const index = str.indexOf("\x00");
  if (index > 0) {
    return str.slice(0, str.indexOf("\x00"));
  } else {
    return str;
  }
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return value == index && children;
}

const { algodClient, indexerClient } = getAlgorandClients("voi-testnet");

const LazyNFTImage = lazy(() => import("../../components/NFTImage"));

const showTooltip = (lPrc) => {
  const [pType, ...prc] = lPrc;
  switch (pType) {
    case "00":
      return false;
    default:
    case "01":
      return true;
  }
};

function NFTMarketplace() {
  const {
    isLoading,
    nfts,
    tokens,
    listins,
    sales,
    deletions,
    claims,
    properties,
    unclaimed,
  } = useContext(MarketplaceContext);

  console.log({ unclaimed });

  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [node] = getCurrentNode();
  const { activeAccount, signTransactions } = useWallet();
  const [value, setValue] = React.useState(0);
  const [allNfts, setAllNfts] = React.useState([]);

  const [buyModalOpen, setBuyModalOpen] = React.useState(false);
  const [buyModalListing, setBuyModalListing] = React.useState(null);

  // EEFFECT: when showing conffeti, hide after 5 seconds
  useEffect(() => {
    if (showConfetti) {
      const timeout = setTimeout(() => {
        window.location.reload();
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [showConfetti]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
  const handleClaim = React.useCallback(
    async (mp, lId, cId, tId, lAddr, lPrc) => {
      const [pType, ...prc] = lPrc;
      console.log({ lId, cId, tId, lAddr, lPrc });
      switch (pType) {
        case "00": {
          return; // not applicable
        }
        case "01": {
          // buySC
          const [tId, tPrc] = prc;
          const ci = new CONTRACT(
            ctcInfoMp201,
            algodClient,
            indexerClient,
            mp201Schema,
            {
              addr: activeAccount.address,
            }
          );
          // claimSC
          ci.setFee(3000);
          ci.setAccounts([
            "G3MSA75OZEJTCCENOJDLDJK7UD7E2K5DNC7FVHCNOV7E3I4DTXTOWDUIFQ",
          ]);
          const claimSCR = await ci.claimSC(lId);
          if (!claimSCR.success) return;
          toast.info("Signing transaction to claim NFT...", {
            autoClose: true,
            delay: 1000,
          });
          await signTransaction(claimSCR.txns);
          setShowConfetti(true);
          toast(<div>NFT claim successful!</div>);
        }
      }
    },
    [activeAccount]
  );

  return (
    <>
      {showConfetti && <Confetti width={width} height={height} />}
      <Container>
        <Grid container spacing={2}>
          {unclaimed.map(({ mp, lId, cId, tId, lAddr, lPrc, bAddr }) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={3}
              key={`c${cId}t${tId}`}
              sx={{ textAlign: "left" }}
            >
              <Paper
                elevation={5}
                sx={{ borderRadius: "25px", overflow: "hidden" }}
              >
                <Suspense fallback={<CircularProgress />}>
                  <LazyNFTImage
                    collectionId={Number(cId)}
                    tokenId={Number(tId)}
                  />
                </Suspense>
                <div style={{ padding: "20px", background: "aliceblue" }}>
                  MarketplaceId: {mp}
                  <br />
                  ListId: {lId.toString()}
                  <br />
                  CollectionId:{" "}
                  <a href={`/#/nft/collection/${cId.toString()}`}>
                    {cId.toString()}
                  </a>
                  <br />
                  TokenId:{" "}
                  <a
                    href={`/#/nft/collection/${cId.toString()}/token/${tId.toString()}`}
                  >
                    {tId.toString()}
                  </a>
                </div>
                <Button
                  sx={{ borderRadius: 0 }}
                  fullWidth
                  variant="contained"
                  onClick={() => handleClaim(mp, lId, cId, tId, lAddr, lPrc)}
                >
                  Claim NFT
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default NFTMarketplace;
