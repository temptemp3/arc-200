import React, { useEffect, useMemo, lazy, Suspense } from "react";
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
import { getAlgorandClients } from "../../utils/algorand";
import { useParams } from "react-router-dom";
import { arc72Schema, mp200Schema } from "../../abis";
import NFTPortfolio from "../NFTPortfolio";

const stdlib = makeStdLib();

const fee = 5;
const feeBi = 5n;

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

const SalesMetricsDisplay = ({ label, value }) => {
  return (
    <Paper
      elevation={3}
      style={{
        padding: "16px",
        margin: "16px",
        maxWidth: "300px",
        minHeigh: "100px",
      }}
    >
      <Stack gap={2}>
        <Typography variant="body" fontSize={10}>
          {label}
        </Typography>
        <Typography variant="body2">{value}</Typography>
      </Stack>
    </Paper>
  );
};

const ipfsToGateway = (url) => {
  if (url.indexOf("ipfs://") !== 0) return url;
  const gatewayURL = `https://ipfs.io/ipfs/${url.slice(7)}`;
  return gatewayURL;
};

const { algodClient, indexerClient } = getAlgorandClients("voi-testnet");

const LazyNFTImage = lazy(() => import("../../components/NFTImage"));

const ctcInfo = 26944604; // mp200

function NFTMarketplace() {
  const { id } = useParams();
  const [node] = getCurrentNode();
  const { activeAccount } = useWallet();
  const [value, setValue] = React.useState(1);
  const [nfts, setNfts] = React.useState([]);
  const [forSale, setForSale] = React.useState([]);
  const [sold, setSold] = React.useState([]);
  const [owners, setOwners] = React.useState(null);
  const [lastRound, setLastRound] = React.useState(0);
  const [projects, setProjects] = React.useState([]);
  const [loadingProjects, setLoadingProjects] = React.useState(false);
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
        const { algodClient, indexerClient } = getAlgorandClients();
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
        return res.txId;
      } else {
        const wtxns = txns.map((el) => {
          return {
            txn: el,
          };
        });
        await stdlib.signSendAndConfirm({ addr: activeAccount.address }, wtxns);
      }
    },
    [activeAccount]
  );

  const handleBuy = React.useCallback(
    async (lId, cId, tId, lAddr, lPrc) => {
      console.log({ lId, cId, tId, lAddr, lPrc });
      // const ciArc72 = new CONTRACT(
      //   Number(cId),
      //   algodClient,
      //   indexerClient,
      //   arc72Schema,
      //   {
      //     addr: activeAccount.address,
      //   }
      // );
      // const owner = await ciArc72.arc72_ownerOf(tId);

      // TODO check if mbr reqs are met
      // const suggestedParams = await algodClient.getTransactionParams().do();
      // const paymentTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      //   from: activeAccount.address,
      //   to: algosdk.getApplicationAddress(cId),
      //   amount: 28500,
      //   suggestedParams,
      // });
      // await signTransaction([
      //   Buffer.from(paymentTxn.toByte()).toString("base64"),
      // ]);
      const ciMp200 = new CONTRACT(
        ctcInfo,
        algodClient,
        indexerClient,
        mp200Schema,
        {
          addr: activeAccount.address,
        }
      );
      ciMp200.setFee(4000);
      ciMp200.setPaymentAmount((lPrc * (100n + feeBi)) / 100n);
      //ciMp200.setTransfers([[28500, algosdk.getApplicationAddress(cId)]]);
      ciMp200.setAccounts([
        "G3MSA75OZEJTCCENOJDLDJK7UD7E2K5DNC7FVHCNOV7E3I4DTXTOWDUIFQ",
      ]);
      const buyNetR = await ciMp200.buyNet(lId);
      console.log({ buyNetR });
      if (!buyNetR.success) return;
      console.log({ buyNetR });
      await signTransaction(buyNetR.txns);
      alert("Purchase successful!");
    },
    [activeAccount]
  );
  useEffect(() => {
    algodClient
      .status()
      .do()
      .then((s) => {
        setLastRound(s["last-round"]);
      });
  }, []);
  const updateProjects = React.useCallback(async (cache = true) => {
    const exclude = [
      26181725, //
    ];
    const key = `hg-projects`;
    const storedProjects = localStorage.getItem(key);
    if (cache && storedProjects) {
      setProjects(JSON.parse(storedProjects));
      return;
    }
    await fetch(`https://test-voi.api.highforge.io/projects`)
      .then((res) => res.json())
      .then((el) => el.results)
      .then((res) => {
        setProjects(res);
        localStorage.setItem(
          key,
          JSON.stringify(res.filter((p) => !exclude.includes(p.applicationID)))
        );
      });
  }, []);
  useEffect(() => {
    updateProjects(true);
  }, []);
  useEffect(() => {
    (async () => {
      const ci = new CONTRACT(ctcInfo, algodClient, indexerClient, mp200Schema);
      const evts = await ci.getEvents();
      const listings = evts.find((el) => el.name === "ListEvent").events;
      const sales = evts.find((el) => el.name === "BuyEvent").events;
      const deletes = evts.find(
        (el) => el.name === "DeleteNetListingEvent"
      ).events;
      const deleted = deletes.map(([txId, round, ts, lId]) => lId);
      const nfts = [];
      const sold = [];
      listings.forEach((el) => {
        const [txId, round, ts, lId, cId, tId, lAddr, [aT, lPrc]] = el;
        nfts.push([lId, cId, tId, lAddr, lPrc]);
      });
      nfts.reverse();
      sales.forEach((el) => {
        const [txId, round, ts, lId, cId, tId, lAddr, [aT, lPrc], bAddr] = el;
        sold.push([lId, cId, tId, lAddr, lPrc, bAddr]);
      });
      sold.reverse();
      setNfts(nfts.filter(([lId, ...rst]) => !deleted.includes(lId)));
      setForSale(
        ((lIds) =>
          nfts.filter(
            ([lId, ...rst]) => !lIds.includes(lId) && !deleted.includes(lId)
          ))(sold.map(([slId, ...rst]) => slId))
      );
      setSold(sold.filter(([lId, ...rst]) => !deleted.includes(lId)));
    })();
  }, []);
  console.log({ nfts, forSale, sold });
  const volume = useMemo(() => {
    return (
      (
        sold.reduce(
          (acc, [_, __, ___, ____, lPrc, _____]) => acc + Number(lPrc),
          0
        ) / 1e6
      ).toLocaleString() + " VOI"
    );
  }, [sold]);
  const sales = useMemo(() => {
    return sold.length;
  }, [sold]);
  const avgSalePrice = useMemo(() => {
    return (
      (
        sold.reduce(
          (acc, [_, __, ___, ____, lPrc, _____]) => acc + Number(lPrc),
          0
        ) /
        sold.length /
        1e6
      ).toLocaleString() + " VOI"
    );
  }, [sold]);
  return (
    <>
      <h2 align="left" style={{ marginLeft: 10 }}>
        Shellaby's: NFT Marketplace
      </h2>
      {false && (
        <>
          <h3>Trending Collections</h3>
          {projects.length > 0 ? (
            <Container>
              <Grid container spacing={2} sx={{ mt: 5 }}>
                {projects.map(
                  (p, i) =>
                    i < 4 && (
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={4}
                        lg={3}
                        key={p.applicationID}
                        sx={{ textAlign: "left" }}
                      >
                        <Suspense fallback={<CircularProgress />}>
                          <LazyNFTImage
                            collectionId={p.applicationID}
                            tokenId={1}
                            image={p.coverImageURL}
                          />
                        </Suspense>
                        <div
                          style={{ padding: "20px", background: "aliceblue" }}
                        >
                          CollectionId:{" "}
                          <a href={`/#/nft/collection/${p.applicationID}`}>
                            {p.applicationID}
                          </a>
                          <br />
                          Title: {p.title}
                          <br />
                          Launchpad:{" "}
                          <a
                            href={`https://highforge.io/project/${p.applicationID}}`}
                            target="_blank"
                            rel="noreferrer noopener nofollow"
                          >
                            High Forge
                          </a>
                        </div>
                      </Grid>
                    )
                )}
              </Grid>
              <div style={{ marginTop: "15px" }}>
                <a href="/#/nft/projects">
                  See All Trending Collections &gt;&gt;
                </a>
              </div>
            </Container>
          ) : (
            <div style={{ marginTop: "100px" }}>No Trending Collecions</div>
          )}
        </>
      )}
      {volume && sales && avgSalePrice ? (
        <Stack sx={{ my: 5 }}>
          <Stack direction="row" sx={{ justifyContent: "center" }}>
            <SalesMetricsDisplay label="Volume" value={volume} />
            <SalesMetricsDisplay label="Sales" value={sales} />
            <SalesMetricsDisplay
              label="Avg. Sales Price"
              value={avgSalePrice}
            />
          </Stack>
          <Typography variant="body2">Stats all time</Typography>
        </Stack>
      ) : null}
      <Tabs
        sx={{ m: 0, mb: 5 }}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="All" />
        <Tab label="For Sale" />
        <Tab label="Sold" />
        <Tab label="Projects" />
        <Tab label="Portfolio" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Container>
          {nfts.length > 0 ? (
            <Grid container spacing={2}>
              {nfts.map(([lId, cId, tId, lAddr, lPrc]) => (
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  key={`c${cId}t${tId}`}
                  sx={{ textAlign: "left" }}
                >
                  <Suspense
                    fallback={
                      <Skeleton
                        variant="rectangular"
                        width={316}
                        height={400}
                      />
                    }
                  >
                    <Paper elevation={5}>
                      <Suspense fallback={<CircularProgress />}>
                        <LazyNFTImage
                          collectionId={Number(cId)}
                          tokenId={Number(tId)}
                        />
                      </Suspense>
                      <div style={{ padding: "20px", background: "aliceblue" }}>
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
                        <br />
                        SellerAddr: {lAddr.slice(0, 4)}...{lAddr.slice(-4)}
                        <br />
                        {sold.map(([slId, ...rst]) => slId).includes(lId) && (
                          <div
                            style={{
                              color: "red",
                              textAlign: "center",
                              fontWeight: 500,
                              marginTop: "18px",
                            }}
                          >
                            SOLD
                          </div>
                        )}
                      </div>
                      {!sold.map(([slId, ...rst]) => slId).includes(lId) && (
                        <Button
                          sx={{ borderRadius: 0 }}
                          fullWidth
                          variant="contained"
                          onClick={() => handleBuy(lId, cId, tId, lAddr, lPrc)}
                        >
                          Buy Now{` `}
                          {(
                            (Number(lPrc) * (100 + fee)) /
                            100 /
                            1e6
                          ).toLocaleString()}{" "}
                          VOI{` `}
                        </Button>
                      )}
                    </Paper>
                  </Suspense>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Skeleton variant="rectangular" width={316} height={400} />
          )}
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container>
          {forSale.length > 0 ? (
            <Grid container spacing={2}>
              {forSale.map(([lId, cId, tId, lAddr, lPrc]) => (
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  key={`c${cId}t${tId}`}
                  sx={{ textAlign: "left" }}
                >
                  <Paper elevation={5}>
                    <Suspense fallback={<CircularProgress />}>
                      <LazyNFTImage
                        collectionId={Number(cId)}
                        tokenId={Number(tId)}
                      />
                    </Suspense>
                    <div style={{ padding: "20px", background: "aliceblue" }}>
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
                      <br />
                      SellerAddr: {lAddr.slice(0, 4)}...{lAddr.slice(-4)}
                    </div>
                    {sold.indexOf(
                      ([_, scId, stId, slAddr, ...rst]) =>
                        cId === scId && tId === stId && lAddr === slAddr
                    ) === -1 && (
                      <Button
                        sx={{ borderRadius: 0 }}
                        fullWidth
                        variant="contained"
                        onClick={() => handleBuy(lId, cId, tId, lAddr, lPrc)}
                      >
                        Buy Now{` `}
                        {(
                          (Number(lPrc) * (100 + fee)) /
                          100 /
                          1e6
                        ).toLocaleString()}{" "}
                        VOI
                      </Button>
                    )}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          ) : (
            <div style={{ marginTop: "100px" }}>No NFTs for sale</div>
          )}
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container>
          {sold.length > 0 ? (
            <Grid container spacing={2}>
              {sold.map(([lId, cId, tId, lAddr, lPrc, bAddr]) => (
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  key={`c${cId}t${tId}`}
                  sx={{ textAlign: "left" }}
                >
                  <Paper elevation={5}>
                    <Suspense fallback={<CircularProgress />}>
                      <LazyNFTImage
                        collectionId={Number(cId)}
                        tokenId={Number(tId)}
                      />
                    </Suspense>
                    <div style={{ padding: "20px", background: "aliceblue" }}>
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
                      <br />
                      SellerAddr: {lAddr.slice(0, 4)}...{lAddr.slice(-4)}
                      <br />
                      ListPrice: {(
                        (Number(lPrc) * 1) /
                        1e6
                      ).toLocaleString()}{" "}
                      VOI
                      <br />
                      BuyerAddr: {bAddr.slice(0, 4)}...{bAddr.slice(-4)}
                    </div>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          ) : (
            <div style={{ marginTop: "100px" }}>No sold NFTs</div>
          )}
        </Container>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Container>
          <div>
            {!loadingProjects ? (
              <Button
                size="large"
                variant="outlined"
                color="primary"
                onClick={async () => {
                  try {
                    setLoadingProjects(true);
                    await updateProjects(false);
                    await new Promise((res) => setTimeout(res, 2000));
                  } catch (e) {
                    console.log(e);
                  } finally {
                    setLoadingProjects(false);
                  }
                }}
              >
                <RefreshIcon />
              </Button>
            ) : (
              <CircularProgress />
            )}
          </div>
          {projects.length > 0 ? (
            <Grid container spacing={2} sx={{ mt: 5 }}>
              {projects.map((p) => (
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  key={p.applicationID}
                  sx={{ textAlign: "left" }}
                >
                  <Suspense fallback={<CircularProgress />}>
                    <LazyNFTImage
                      collectionId={p.applicationID}
                      tokenId={1}
                      image={p.coverImageURL}
                    />
                  </Suspense>
                  <div style={{ padding: "20px", background: "aliceblue" }}>
                    CollectionId:{" "}
                    <a href={`/#/nft/collection/${p.applicationID}`}>
                      {p.applicationID}
                    </a>
                    <br />
                    Title: {p.title}
                    <br />
                    Launchpad:{" "}
                    <a
                      href={`https://highforge.io/project/${p.applicationID}}`}
                      target="_blank"
                      rel="noreferrer noopener nofollow"
                    >
                      High Forge
                    </a>
                  </div>
                </Grid>
              ))}
            </Grid>
          ) : (
            <div style={{ marginTop: "100px" }}>No NFT Projects</div>
          )}
        </Container>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <NFTPortfolio />
      </TabPanel>
    </>
  );
}

export default NFTMarketplace;
