import React, { useEffect, lazy, Suspense, useContext } from "react";
import { getCurrentNode } from "../../utils/reach";
import CircularProgress from "@mui/material/CircularProgress";
import { Button, Grid, Container, Paper, Chip } from "@mui/material";
import { getAlgorandClients } from "../../utils/algorand";
import { useNavigate } from "react-router-dom";
import { db } from "../../db";
import { arc200 } from "ulujs";
import { MarketplaceContext } from "../../store/MarketplaceContext";
import moment from "moment";

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

const { algodClient, indexerClient } = getAlgorandClients("voi-testnet");

const LazyNFTImage = lazy(() => import("../../components/NFTImage"));

function NFTSales() {
  const { isLoading, tokens, forSale, nfts, listings, pools, liveAuctions } =
    useContext(MarketplaceContext);

  const [node] = getCurrentNode();
  const navigate = useNavigate();

  // EFFECT: update missing tokens
  useEffect(() => {
    if (isLoading) return;
    (async () => {
      const ptoks = new Set();
      liveAuctions.forEach((listing) => {
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

  // get current block time
  const [currentRound, setCurrentRound] = React.useState(0);
  useEffect(() => {
    algodClient
      .status()
      .do()
      .then((s) => {
        setCurrentRound(s["last-round"]);
      });
  }, []);

  return !isLoading && currentRound ? (
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
          {liveAuctions.length > 0 ? (
            <Grid container spacing={2}>
              {liveAuctions.map(
                ({
                  mp,
                  txId,
                  round,
                  timestamp,
                  lId,
                  cId,
                  tId,
                  lAddr,
                  bAddr,
                  lPrc,
                  endTime,
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
                        <br />
                        SellerAddr: {lAddr.slice(0, 4)}...{lAddr.slice(-4)}
                      </div>
                      <Button
                        sx={{ borderRadius: 0 }}
                        fullWidth
                        variant="contained"
                        onClick={() => {
                          navigate(`/nft/collection/${cId}/token/${tId}`);
                        }}
                      >
                        Bid
                        <Chip
                          sx={{ ml: 1 }}
                          size="small"
                          color="secondary"
                          variant="filled"
                          label={((diff) =>
                            diff > 0 ? `Ends ${diff} Blocks` : "Ended")(
                            Number(endTime) - currentRound
                          )}
                        />
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
  ) : (
    "Loading..."
  );
}

export default NFTSales;
