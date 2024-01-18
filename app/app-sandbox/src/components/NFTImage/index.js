import React, { useEffect, useMemo, lazy, useCallback } from "react";
import { useWallet, PROVIDER_ID } from "@txnlab/use-wallet";
import { getCurrentNode, getGenesisHash } from "../../utils/reach";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Stack,
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
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { makeStdLib } from "../../utils/reach";
import { makeStyles } from "@mui/styles";
import algosdk from "algosdk";
import CONTRACT from "arccjs";
import { arc72Schema } from "../../abis";
import { getAlgorandClients } from "../../utils/algorand";
import { LazyLoadImage } from "react-lazy-load-image-component";

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

const ipfsToGateway = (url) => {
  if (url.indexOf("ipfs://") !== 0) return url;
  const gatewayURL = `https://ipfs.io/ipfs/${url.slice(7)}`;
  return gatewayURL;
};

const NFTImage = ({ collectionId, tokenId, image }) => {
  const [url, setUrl] = React.useState(null);
  const resolveUrl = useCallback(async () => {
    try {
      if (url) return;
      if (!collectionId || !tokenId) return;
      const key = `nft-image-${collectionId}-${tokenId}`;
      const key2 = `nft-${collectionId}-${tokenId}`;
      const key3 = `hg-projects`;
      const storedUrl = localStorage.getItem(key);
      const storedProjects = localStorage.getItem(key3);
      if (!!storedProjects) {
        const projects = JSON.parse(localStorage.getItem(key3));
        const project = projects.find((p) => p.applicationID === collectionId);
        if (project) {
          setUrl(
            `https://prod.cdn.highforge.io/i/https%3A%2F%2Fprod.cdn.highforge.io%2Ft%2F${collectionId}%2F${tokenId}.json%23arc3?w=500`
          );
          return;
        }
      }
      if (!!storedUrl) {
        setUrl(JSON.parse(storedUrl));
      } else {
        (async () => {
          const { algodClient, indexerClient } =
            getAlgorandClients("voi-testnet");
          const ci = new CONTRACT(
            Number(collectionId),
            algodClient,
            indexerClient,
            arc72Schema
          );
          const tokenURIR = await ci.arc72_tokenURI(Number(tokenId));
          if (!tokenURIR.success) return;
          const tokenURI = prepareString(tokenURIR.returnValue);
          const url = ipfsToGateway(tokenURI);
          if (url.indexOf("#arc3") !== -1) {
            console.log("fetching arc3 from ipfs");
            const res = await fetch(ipfsToGateway(url));
            const resJson = await res.json();
            localStorage.setItem(key2, JSON.stringify(resJson));
            const { image } = resJson;
            setUrl(ipfsToGateway(image));
            localStorage.setItem(key, JSON.stringify(ipfsToGateway(image)));
          } else {
            setUrl(ipfsToGateway(url));
            localStorage.setItem(key, JSON.stringify(ipfsToGateway(url)));
          }
        })();
      }
    } catch (e) {
      console.log(e);
    }
  }, [url]);
  useEffect(() => {
    resolveUrl();
  }, []);
  return image || url ? (
    <LazyLoadImage
      //alt={image.alt}
      //height={image.height}
      src={url} // use normal <img> attributes as props
      width={"100%"}
      effect="blur"
      delayTime={2000}
    />
  ) : (
    <Skeleton
      variant="rectangular"
      width={"100%"}
      height={355}
      onClick={resolveUrl}
    />
  );
};

export default NFTImage;
