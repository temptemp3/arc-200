import React, { useEffect, Suspense, useContext } from "react";
import { useWallet } from "@txnlab/use-wallet";
import {
  Grid,
  Typography,
  Container,
  Skeleton,
  Paper,
  Box,
  Chip,
  Divider,
} from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchInput from "../../components/SearchInput";

import { MarketplaceContext } from "../../store/MarketplaceContext";

const LazyNFTImage = React.lazy(() => import("../../components/NFTImage"));

function NFTFeed() {
  const { isLoading, nfts, properties } = useContext(MarketplaceContext);

  const [selected, setSelected] = React.useState(new Set());
  const [query, setQuery] = React.useState("");
  const handleChange = (event) => {
    setSelected(new Set([...selected, event.target.value]));
  };

  console.log({ properties, nfts });

  return !isLoading ? (
    <>
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
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <SearchInput
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setQuery(newValue);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider />
              </Grid>

              {selected && selected.size > 0 && (
                <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                  {Array.from(selected).map((v, k) => (
                    <Chip
                      size="small"
                      sx={{ m: 1 }}
                      key={k}
                      label={v}
                      onDelete={() => {
                        setSelected(
                          new Set([...selected].filter((s) => s !== v))
                        );
                      }}
                    />
                  ))}
                  <Chip
                    size="small"
                    label="Clear"
                    onClick={() => setSelected(new Set())}
                  />
                </Grid>
              )}
              {properties &&
                properties.size > 0 &&
                Array.from(properties.entries())
                  .filter((v) =>
                    [
                      "Background",
                      "Floor",
                      "Background Item",
                      "Base",
                      "Etching",
                      "Eyes",
                      "Body Color",
                      "SHIRTS",
                      "FOREGROUND",
                      "Tshirt",
                      "HATS",
                    ].includes(v[0])
                  )
                  .map((v, k) => (
                    <Grid item xs={12} sm={12} md={12} lg={12} key={k}>
                      <FormControl size="small" fullWidth>
                        <InputLabel size="small" id="demo-simple-select-label">
                          {v[0]}
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Proptery"
                          onChange={handleChange}
                        >
                          {Array.from(v[1])
                            .filter((v) => !Array.from(selected).includes(v))
                            .map((v, k) => (
                              <MenuItem key={k} value={v}>
                                {v}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <Grid container spacing={2}>
              {nfts
                .filter(
                  (t) =>
                    (selected.size === 0 && query === "") ||
                    Object.values(t.metadata.properties)
                      .map((el) => String(el))
                      .some(
                        (v) =>
                          Array.from(selected).includes(v) ||
                          (query !== "" &&
                            v.toLowerCase().includes(query.toLowerCase()))
                      )
                )
                .map((t, i) => (
                  <Grid item xs={6} sm={6} md={4} lg={3} key={i}>
                    <Paper
                      sx={{
                        p: 0,
                        borderRadius: "25px",
                        minHeight: "150px",
                        overflow: "hidden",
                      }}
                    >
                      <Suspense fallback={<Skeleton />}>
                        <LazyNFTImage
                          token={t}
                          image={t?.metadata?.image}
                          collectionId={t.contractId}
                          tokenId={t.tokenId}
                        />
                      </Suspense>
                      <Box sx={{ p: 2 }}>
                        <Typography sx={{ textAlign: "left" }} variant="h6">
                          {t?.metadata?.name}
                        </Typography>
                        <Typography sx={{ textAlign: "left" }}>
                          CollectionId:{" "}
                          <a
                            href={`/#/nft/collection/${t.collectionId}`}
                            target="_self"
                          >
                            {t.collectionId}
                          </a>
                        </Typography>
                        <Typography sx={{ textAlign: "left" }}>
                          TokenId:{" "}
                          <a
                            href={`/#/nft/collection/${t.collectionId}/token/${t.tokenId}`}
                          >
                            {t.tokenId}
                          </a>
                        </Typography>
                      </Box>
                    </Paper>
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

export default NFTFeed;
