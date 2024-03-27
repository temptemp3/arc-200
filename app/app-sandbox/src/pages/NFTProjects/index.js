import React, { useEffect, lazy, Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid, Typography, Container, createTheme, Paper } from "@mui/material";

const LazyNFTImage = lazy(() => import("../../components/NFTImage"));

function NFTProjects() {
  const [projects, setProjects] = React.useState([]);
  const updateProjects = React.useCallback(async (cache = true) => {
    const exclude = [];
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
    updateProjects(false);
  }, []);
  return (
    <Container sx={{ mt: 5 }} maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          &nbsp;
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={10}>
          {projects.length > 0 ? (
            <Grid container spacing={2}>
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
                  <Paper
                    elevation={5}
                    sx={{ borderRadius: "25px", overflow: "hidden" }}
                  >
                    <div sx={{ maxHeight: "280px", overflow: "hidden" }}>
                      <Suspense fallback={<CircularProgress />}>
                        <LazyNFTImage
                          collectionId={p.applicationID}
                          tokenId={1}
                          image={p.coverImageURL}
                        />
                      </Suspense>
                    </div>
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "center", py: 2 }}
                    >
                      {p.title}
                    </Typography>
                    <div style={{ padding: "20px", background: "aliceblue" }}>
                      CollectionId:{" "}
                      <a href={`/#/nft/collection/${p.applicationID}`}>
                        {p.applicationID}
                      </a>
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
                  </Paper>
                </Grid>
              ))}
            </Grid>
          ) : (
            <div style={{ marginTop: "100px" }}>No NFT Projects</div>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default NFTProjects;
