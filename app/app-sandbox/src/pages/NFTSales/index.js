import React, { useEffect, useMemo, lazy, Suspense, useContext } from "react";
import { useWallet, PROVIDER_ID } from "@txnlab/use-wallet";
import { getCurrentNode, getGenesisHash } from "../../utils/reach";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Button,
  Grid,
  Container,
  createTheme,
  Paper,
  Tooltip,
} from "@mui/material";
import { makeStdLib } from "../../utils/reach";
import { makeStyles } from "@mui/styles";
import { getAlgorandClients } from "../../utils/algorand";
import { useParams } from "react-router-dom";
import { mp200Schema, mp201Schema, arc200Schema } from "../../abis";
import BuyModal from "../../components/BuyModal";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { decodeRoyalties } from "../../utils/hf";
import { nftDb, db, mpDb } from "../../db";
import { useLiveQuery } from "dexie-react-hooks";
import { ctcInfoMp200, ctcInfoMp201, fee, feeBi } from "../../constants/mp";
import Confetti from "react-confetti";
import { useWindowSize } from "usehooks-ts";
import { toast } from "react-toastify";
import { arc200, CONTRACT } from "ulujs";
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
  const [pType] = lPrc;
  switch (pType) {
    case "00":
      return false;
    default:
    case "01":
      return true;
  }
};

function NFTSales() {
  const { isLoading, tokens, forSale, nfts, listings, pools } =
    useContext(MarketplaceContext);

  // EFFECT: update missing tokens
  useEffect(() => {
    if (isLoading) return;
    (async () => {
      const ptoks = new Set();
      forSale.forEach((listing) => {
        const { lPrc } = listing;
        const [pType, ...prc] = lPrc;
        switch (pType) {
          case "00": {
            return;
          }
          case "01": {
            const [tId] = prc;
            const tid = Number("0x" + tId);
            ptoks.add(tid);
          }
        }
      });
      for (const tok of Array.from(ptoks).filter(
        (el) => !tokens.map((el) => el.tokenId).includes(el)
      )) {
        const ci = new arc200(tok, algodClient, indexerClient);
        const res = await ci.getMetadata();
        if (!res.success) continue;
        const metadata = res.returnValue;
        const pk = `${node}:${tok}`;
        const tm = {
          ...res.returnValue,
          pk,
          tokenId: tok,
          network: node,
          decimals: Number(metadata.decimals),
          name: prepareString(metadata.name),
          symbol: prepareString(metadata.symbol),
        };
        await db.tokens.put(tm);
      }
    })();
  }, [isLoading, forSale, tokens]);

  // EEFFECT: when showing conffeti, hide after 5 seconds
  const [showConfetti, setShowConfetti] = React.useState(false);
  useEffect(() => {
    if (showConfetti) {
      const timeout = setTimeout(() => {
        window.location.reload();
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [showConfetti]);

  const { width, height } = useWindowSize();
  const [node] = getCurrentNode();
  const { activeAccount } = useWallet();
  const [allNfts, setAllNfts] = React.useState([]);
  const [sold, setSold] = React.useState([]);
  const [buyModalOpen, setBuyModalOpen] = React.useState(false);
  const [buyModalListing, setBuyModalListing] = React.useState(null);

  const nftRoyalties = React.useCallback(
    (cId, tId) => {
      const token = nfts.find(
        (el) => el.collectionId === Number(cId) && el.tokenId === Number(tId)
      );
      return decodeRoyalties(token.metadata?.royalties);
    },
    [allNfts, nfts]
  );

  const volume = useMemo(() => {
    return (
      sold
        .filter(([mp, txId, round, ts, lId, cId, tId, lAddr, lPrc, bAddr]) => {
          const [pType, ...prc] = lPrc;
          switch (pType) {
            case "00":
              return true;
            case "01":
              return false;
          }
        })
        .reduce(
          (acc, [mp, txId, round, ts, lId, cId, tId, lAddr, lPrc, bAddr]) => {
            const [pType, ...prc] = lPrc;
            switch (pType) {
              case "00":
                return acc + Number(prc);
              case "01":
                return 0;
            }
          },
          0
        ) / 1e6
    );
  }, [sold]);
  const sales = useMemo(() => {
    return sold.length;
  }, [sold]);
  const avgSalePrice = useMemo(() => {
    return volume / sales;
  }, [volume, sales]);

  // EFFECT: store mp stats
  useEffect(() => {
    if (!volume || !sales || !avgSalePrice) return;
    localStorage.setItem(
      "mp-stats",
      JSON.stringify({ volume, sales, avgSalePrice })
    );
  }, [volume, sales, avgSalePrice]);

  return !isLoading ? (
    <>
      {showConfetti && <Confetti width={width} height={height} />}
      <Container sx={{ mt: 5 }} maxWidth="xl">
        <Grid container spacing={2}>
          <Grid
            sx={{
              display: { xs: "none", md: "block" },
            }}
            item
            xs={12}
            sm={12}
            md={2}
            lg={2}
          >
            &nbsp;
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={10}>
            {forSale.length > 0 ? (
              <Grid container spacing={2}>
                {forSale.map(
                  ({
                    mp,
                    txId,
                    round,
                    timestamp,
                    lId,
                    cId,
                    tId,
                    lAddr,
                    lPrc,
                    payment,
                    extraPayment,
                    decimals,
                    symbol,
                    royalties,
                    priceDisplay,
                  }) => (
                    <Grid
                      item
                      xs={6}
                      sm={6}
                      md={4}
                      lg={3}
                      key={txId}
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
                        <div
                          style={{ padding: "20px", background: "aliceblue" }}
                        >
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
                          <br />
                          SellerAddr: {lAddr.slice(0, 4)}...{lAddr.slice(-4)}
                        </div>
                        <Button
                          sx={{ borderRadius: 0 }}
                          fullWidth
                          variant="contained"
                          onClick={() => {
                            //handleBuy(mp, lId, cId, tId, lAddr, lPrc);
                            setBuyModalOpen(true);
                            setBuyModalListing({
                              mp,
                              lId,
                              cId,
                              tId,
                              lAddr,
                              lPrc,
                            });
                          }}
                        >
                          Buy Now{` `}
                          {priceDisplay}
                          {` `}
                          {showTooltip(lPrc) && (
                            <Tooltip
                              placement="top"
                              title="excludes fees + royalties"
                            >
                              <InfoOutlinedIcon
                                sx={{ ml: 0.5 }}
                                fontSize="small"
                                variant="outline"
                              />
                            </Tooltip>
                          )}
                        </Button>
                      </Paper>
                    </Grid>
                  )
                )}
              </Grid>
            ) : (
              <div style={{ marginTop: "100px" }}>No NFTs for sale</div>
            )}
          </Grid>
        </Grid>
      </Container>
      {buyModalListing && (
        <BuyModal
          setOpen={setBuyModalOpen}
          open={buyModalOpen}
          {...buyModalListing}
          nfts={allNfts}
        />
      )}
    </>
  ) : (
    "Loading..."
  );
}

export default NFTSales;
