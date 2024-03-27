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
import Leaderboard from "../../components/Leaderboard";

const stdlib = makeStdLib();

const schema = {
  name: "ARC-72",
  description: "Smart Contract NFT Interface",
  methods: [
    {
      name: "_reachp_0",
      args: [{ type: "uint64" }, { type: "(byte[67],address)" }],
      returns: { type: "void" },
    },
    {
      name: "_reachp_2",
      args: [{ type: "uint64" }, { type: "(byte,byte[96])" }],
      returns: { type: "void" },
    },
    {
      name: "arc72_approve",
      args: [{ type: "address" }, { type: "uint256" }],
      returns: { type: "void" },
    },
    {
      name: "arc72_balanceOf",
      args: [{ type: "address" }],
      returns: { type: "uint256" },
      readonly: true,
    },
    {
      name: "arc72_getApproved",
      args: [{ type: "uint256" }],
      returns: { type: "address" },
      readonly: true,
    },
    {
      name: "arc72_isApprovedForAll",
      args: [{ type: "address" }, { type: "address" }],
      returns: { type: "bool" },
      readonly: true,
    },
    {
      name: "arc72_ownerOf",
      args: [{ type: "uint256" }],
      returns: { type: "address" },
      readonly: true,
    },
    {
      name: "arc72_setApprovalForAll",
      args: [{ type: "address" }, { type: "bool" }],
      returns: { type: "void" },
    },
    {
      name: "arc72_tokenByIndex",
      args: [{ type: "uint256" }],
      returns: { type: "uint256" },
      readonly: true,
    },
    {
      name: "arc72_tokenURI",
      args: [{ type: "uint256" }],
      returns: { type: "byte[256]" },
      readonly: true,
    },
    {
      name: "arc72_totalSupply",
      args: [],
      returns: { type: "uint256" },
      readonly: true,
    },
    {
      name: "arc72_transferFrom",
      args: [{ type: "address" }, { type: "address" }, { type: "uint256" }],
      returns: { type: "void" },
    },
    {
      name: "burn",
      args: [{ type: "uint256" }],
      returns: { type: "void" },
    },
    { name: "close", args: [], returns: { type: "void" } },
    {
      name: "deleteNftDataBox",
      args: [{ type: "uint256" }],
      returns: { type: "void" },
    },
    {
      name: "deleteOperatorDataBox",
      args: [{ type: "address" }, { type: "address" }],
      returns: { type: "void" },
    },
    {
      name: "grant",
      args: [{ type: "address" }],
      returns: { type: "void" },
    },
    {
      name: "manager",
      args: [],
      returns: { type: "address" },
      readonly: true,
    },
    {
      name: "mintTo",
      args: [
        { type: "address" },
        { type: "byte[256]" },
        { type: "uint256" },
        { type: "byte[256]" },
        { type: "uint64" },
      ],
      returns: { type: "uint256" },
    },
    {
      name: "state",
      args: [],
      returns: { type: "(address,uint256,uint256)" },
      readonly: true,
    },
    {
      name: "supportsInterface",
      args: [{ type: "byte[4]" }],
      returns: { type: "byte" },
      readonly: true,
    },
    { name: "touch", args: [], returns: { type: "void" } },
  ],
  events: [
    {
      name: "arc72_Approval",
      args: [{ type: "address" }, { type: "address" }, { type: "uint256" }],
    },
    {
      name: "arc72_ApprovalForAll",
      args: [{ type: "address" }, { type: "address" }, { type: "bool" }],
    },
    {
      name: "arc72_Transfer",
      args: [{ type: "address" }, { type: "address" }, { type: "uint256" }],
    },
  ],
};

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

function NFTGallery() {
  const { id } = useParams();
  const [node] = getCurrentNode();
  const { activeAccount } = useWallet();
  const [value, setValue] = React.useState(1);
  const [nfts, setNfts] = React.useState([]);
  const [owners, setOwners] = React.useState(null);
  const [ownerOf, setOwnerOf] = React.useState({});
  const [ctcInfo, setCtcInfo] = React.useState(null);
  const [ranks, setRanks] = React.useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    const ctcInfo = Number(id);
    if (isNaN(ctcInfo)) return;
    setCtcInfo(ctcInfo);
  }, []);

  useEffect(() => {
    if (!activeAccount || !ctcInfo) setValue(0);
    else setValue(0);
  }, [activeAccount]);

  useEffect(() => {
    if (!ctcInfo) return;
    (async () => {
      const ci = new CONTRACT(ctcInfo, algodClient, indexerClient, schema);
      const transfers = await ci.arc72_Transfer();
      const nfts = [];
      const owners = new Map();
      const tokens = new Map();
      transfers.forEach((el) => {
        const [txId, round, ts, from, to, tokenId] = el;
        if (!nfts.includes(tokenId)) {
          nfts.push(tokenId);
        }
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
      setNfts(nfts);
      setOwners(owners);
      const ownerOf = {};
      const rank = {};
      for (let [key, value] of owners) {
        value.forEach((el) => {
          ownerOf[el] = key;
          if (!rank[key]) rank[key] = 1;
          else rank[key]++;
        });
      }
      setRanks(Object.entries(rank).sort((a, b) => b[1] - a[1]));
      setOwnerOf(ownerOf);
    })();
  }, [ctcInfo]);
  console.log({
    ctcInfo,
    nfts,
    owners,
  });
  return !ctcInfo ? (
    "Collection not found"
  ) : (
    <>
      <Tabs
        sx={{ m: 0, mb: 5 }}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="Collection" />
        <Tab label="Leaderboard" />
        <Tab label="My Collection" />
      </Tabs>
      <h2 align="left" style={{ marginLeft: 10 }}>
        Collection AppId: {ctcInfo}
        <br />
        Collection Address:{" "}
        {algosdk.getApplicationAddress(ctcInfo).slice(0, 10)}...
      </h2>

      <TabPanel value={value} index={0}>
        <h2 align="left" style={{ marginLeft: 10 }}>
          Collection:
        </h2>
        {nfts.length > 0 ? (
          <Container sx={{ mt: 5 }} maxWidth="xl">
            <Grid container spacing={2}>
              {nfts.map((el) => (
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  key={`col-${el}`}
                  sx={{ textAlign: "left" }}
                >
                  <Suspense fallback={<Skeleton />}>
                    <LazyNFTImage collectionId={ctcInfo} tokenId={el} />
                  </Suspense>
                  <br />
                  TokenId:{" "}
                  <a
                    href={`/#/nft/collection/${ctcInfo}/token/${el.toString()}`}
                  >
                    {el.toString()}
                  </a>
                  <br />
                  Holder:
                  {((addr) => `${addr.slice(0, 4)}...${addr.slice(-4)}`)(
                    ownerOf[el]
                  )}
                </Grid>
              ))}
            </Grid>
          </Container>
        ) : (
          <Skeleton />
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {ranks && (
          <>
            <h2 align="left" style={{ marginLeft: 10 }}>
              Leaderboard:
            </h2>
            <Leaderboard collectionId={ctcInfo} data={owners} />
          </>
        )}
      </TabPanel>

      <TabPanel value={value} index={2}>
        <h2 align="left" style={{ marginLeft: 10 }}>
          Your Collection:
        </h2>
        {owners && owners.has(activeAccount?.address) && (
          <Container sx={{ mt: 5 }} maxWidth="xl">
            <Grid container spacing={2}>
              {owners.get(activeAccount?.address).map((el) => (
                <Grid item xs={6} sm={6} md={4} lg={3} key={`yours-${el}`}>
                  <Suspense fallback={<Skeleton />}>
                    <LazyNFTImage
                      collectionId={Number(ctcInfo)}
                      tokenId={Number(el)}
                    />
                  </Suspense>
                  <Typography sx={{ textAlign: "left" }}>
                    TokenId:{" "}
                    <a
                      href={`/#/nft/collection/${ctcInfo}/token/${el.toString()}`}
                    >
                      {el.toString()}
                    </a>
                  </Typography>
                  {/*<ButtonGroup fullWidth sx={{ borderRadius: 0 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: 0 }}
                  >
                    Sell
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: 0 }}
                    onClick={async () => {
                      try {
                        const addr = prompt("Enter address to transfer to");
                        if (!addr) return;
                        const ci = new CONTRACT(
                          ctcInfo,
                          algodClient,
                          indexerClient,
                          schema,
                          {
                            addr: activeAccount?.address,
                          }
                        );
                        const arc72_ownerOfR = await ci.arc72_ownerOf(el);
                        if (!arc72_ownerOfR.success) {
                          throw new Error("arc72_ownerOf failed in simulate");
                        }
                        console.log({ arc72_ownerOfR });
                        return;
                        const arc72_transferFromR = await ci.arc72_transferFrom(
                          activeAccount?.address,
                          addr,
                          el
                        );
                        if (!arc72_transferFromR.success) {
                          throw new Error(
                            "arc72_transferFrom failed in simulate"
                          );
                        }
                        const txns = arc72_transferFromR.txns;
                        const txId = await signTransaction(txns);
                        console.log({ txId });
                        alert("Transfer successful!");
                      } catch (e) {
                        console.log(e);
                      }
                    }}
                  >
                    Transfer
                  </Button>
                  </ButtonGroup>*/}
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
      </TabPanel>
    </>
  );
}

export default NFTGallery;
