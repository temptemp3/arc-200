import React, { useEffect, useContext } from "react";
import { useWallet } from "@txnlab/use-wallet";
import { Grid, Container } from "@mui/material";
import { MarketplaceContext } from "../../store/MarketplaceContext";
import NFTCard from "../../components/NFTCard";

function NFTPortfolio() {
  const { isLoading, nfts, forSale } = useContext(MarketplaceContext);
  console.log({ forSale });
  const { activeAccount } = useWallet();
  const [portfolio, setPortfolio] = React.useState([]);

  // EFFECT: get account holdings from db
  useEffect(() => {
    if (!activeAccount || isLoading) return;
    const partfolio = [];
    nfts
      .filter(({ owner }) => owner === activeAccount?.address)
      .forEach(({ collectionId, tokenId }) => {
        partfolio.push({ cId: Number(collectionId), tId: Number(tokenId) });
      });
    setPortfolio(partfolio.flat());
  }, [activeAccount, isLoading, nfts]);

  return !isLoading ? (
    <>
      <Container sx={{ mt: 5 }} maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            &nbsp;
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <Grid container spacing={2}>
              {portfolio.map(({ cId, tId }, i) => (
                <Grid key={`${cId}:${tId}`} item xs={6} sm={6} md={4} lg={3}>
                  <NFTCard cId={cId} tId={tId} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  ) : (
    "Loading..."
  );
}

export default NFTPortfolio;
