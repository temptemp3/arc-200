import React, { lazy, Suspense, useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Paper, Typography } from "@mui/material";
import { MarketplaceContext } from "../../store/MarketplaceContext";

const LazyNFTImage = React.lazy(() => import("../../components/NFTImage"));

const NFTCard = ({ cId, tId, image }) => {
  const { forSale } = useContext(MarketplaceContext);
  return (
    <Paper elevation={5} sx={{ borderRadius: "25px", overflow: "hidden" }}>
      <Suspense fallback={<CircularProgress />}>
        <LazyNFTImage
          collectionId={Number(cId)}
          tokenId={Number(tId)}
          image={image}
        />
      </Suspense>
      <div style={{ padding: "20px", background: "aliceblue" }}>
        <Typography sx={{ textAlign: "left" }}>
          CollectionId:{" "}
          <a href={`/#/nft/collection/${cId.toString()}`}>{cId.toString()}</a>
        </Typography>
        <Typography sx={{ textAlign: "left" }}>
          TokenId:{" "}
          <a
            href={`/#/nft/collection/${cId.toString()}/token/${tId.toString()}`}
          >
            {tId.toString()}
          </a>
        </Typography>
        <Typography sx={{ textAlign: "left" }}>
          List Status:{" "}
          {forSale.find(
            ({ cId: scId, tId: stId }) =>
              Number(scId) === Number(cId) && Number(stId) === Number(tId)
          ) ? (
            <u>For Sale</u>
          ) : (
            <em>Not For Sale</em>
          )}
        </Typography>
      </div>
    </Paper>
  );
};

export default NFTCard;
