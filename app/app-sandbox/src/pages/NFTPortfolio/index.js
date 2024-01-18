import React, { useEffect, useMemo, lazy, Suspense } from "react";
import { useWallet, PROVIDER_ID } from "@txnlab/use-wallet";
import { getCurrentNode, getGenesisHash } from "../../utils/reach";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Tabs,
  Tab,
  InputAdornment,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider,
  Skeleton,
  Paper,
  Box,
  ButtonGroup,
} from "@mui/material";
import { makeStdLib } from "../../utils/reach";
import { makeStyles } from "@mui/styles";
import algosdk from "algosdk";
import CONTRACT from "arccjs";
import { getAlgorandClients } from "../../utils/algorand";
import { useParams } from "react-router-dom";
import { arc72Schema } from "../../abis";

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

const ipfsToGateway = (url) => {
  if (url.indexOf("ipfs://") !== 0) return url;
  const gatewayURL = `https://ipfs.io/ipfs/${url.slice(7)}`;
  return gatewayURL;
};

const { algodClient, indexerClient } = getAlgorandClients("voi-testnet");

const LazyNFTImage = React.lazy(() => import("../../components/NFTImage"));

function NFTPortfolio() {
  const projects = JSON.parse(localStorage.getItem("hg-projects") || "[]");
  const ids = projects.map((el) => Number(el.applicationID));
  const { activeAccount } = useWallet();
  const [nfts, setNfts] = React.useState(null);
  useEffect(() => {
    if (!activeAccount) return;
    (async () => {
      const portfolio = [];
      for (let i = 0; i < ids.length; i++) {
        const ctcInfo = ids[i];
        const ci = new CONTRACT(
          ctcInfo,
          algodClient,
          indexerClient,
          arc72Schema
        );
        const arc72_balanceOfR = await ci.arc72_balanceOf(
          activeAccount?.address
        );
        console.log({ arc72_balanceOfR });
        if (!arc72_balanceOfR.success) continue;
        const arc72_balanceOf = Number(arc72_balanceOfR.returnValue);
        console.log({ arc72_balanceOf });
        if (arc72_balanceOf === 0) continue;
        const transfers = await ci.arc72_Transfer();
        console.log({ transfers });
        const owners = new Map();
        const tokens = new Map();
        transfers.forEach((el) => {
          const [txId, round, ts, from, to, tokenId] = el;
          if (!tokens.has(tokenId)) {
            tokens.set(tokenId, to);
            if (!owners.has(to)) {
              owners.set(to, [tokenId]);
            } else {
              owners.set(to, [...owners.get(to), tokenId]);
            }
          } else {
            const prevOwner = tokens.get(tokenId);
            if (!owners.has(prevOwner)) {
              owners.set(prevOwner, []);
            }
            const prevOwnerTokens = owners.get(prevOwner);
            const index = prevOwnerTokens.indexOf(tokenId);
            if (index !== -1) {
              prevOwnerTokens.splice(index, 1);
            }
            tokens.set(tokenId, to);
            if (!owners.has(to)) {
              owners.set(to, [tokenId]);
            } else {
              owners.set(to, [...owners.get(to), tokenId]);
            }
          }
        });
        const nfts = [];
        for (const [key, value] of tokens.entries()) {
          if (value === activeAccount?.address) {
            console.log([key, value, activeAccount?.address]);
            nfts.push(key);
          }
        }
        portfolio.push(nfts.map((el) => [ctcInfo, Number(el)]));
      }
      setNfts(portfolio.flat());
    })();
  }, [activeAccount]);
  console.log({ nfts });
  return nfts ? (
    <>
      <h2 align="left" style={{ marginLeft: 10 }}>
        Your Collection:
      </h2>
      <Container sx={{ mt: 5 }} maxWidth="xl">
        <Grid container spacing={2}>
          {nfts.map(([cId, tId], i) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={i}>
              <Suspense fallback={<Skeleton />}>
                <LazyNFTImage
                  collectionId={Number(cId)}
                  tokenId={Number(tId)}
                />
              </Suspense>
              <Typography sx={{ textAlign: "left" }}>
                TokenId:{" "}
                <a href={`/#/nft/collection/${cId}/token/${tId}`}>{tId}</a>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  ) : (
    "Loading..."
  );
}

export default NFTPortfolio;
