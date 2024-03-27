import React, { useContext, useMemo } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stack from "@mui/material/Stack";
import { useLocation, useNavigate } from "react-router-dom";
import { useWallet } from "@txnlab/use-wallet";
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { MarketplaceContext } from "../../store/MarketplaceContext";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const MainMenu = () => {
  const { isLoading, metrics } = useContext(MarketplaceContext);
  const { activeAccount } = useWallet();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const index =
    pathname.indexOf("/dex/") !== -1
      ? 1
      : pathname.indexOf("/nft/") !== -1
      ? 2
      : 0;
  const [value, setValue] = React.useState(index);
  /*
  const [volume, sales, avgSalePrice] = useMemo(() => {
    const storedStats = localStorage.getItem("mp-stats");
    if (!storedStats) return [0, 0, 0];
    const stats = JSON.parse(storedStats);
    const { volume, sales, avgSalePrice } = stats;
    return [volume, sales, avgSalePrice];
  }, []);
  */

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return !isLoading ? (
    <>
      <h2 align="left" style={{ marginLeft: 10 }}>
        {/*Nautilus - NFT Marketplace*/}
        Shelly's Sandbox
      </h2>

      {/*<Marquee
        style={{
          background: "lightgrey",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
        >
        <Stack direction="row" gap={5}>
          {Object.entries(metrics).map(([key, value], i) => (
            <>
              <Typography
                key={`${i}${key}`}
                variant="body2"
                sx={{ fontWeight: 900 }}
              >
                {key}
              </Typography>
              {Object.entries(value).map(([key, value], i) => (
                <Typography key={`${i}${key}`} variant="body2">
                  {key}: {value}
                </Typography>
              ))}
            </>
          ))}
          <Typography variant="body2" sx={{ fontWeight: 900 }}>
            News
          </Typography>
          <Typography variant="body2">
            <a
              href="https://voi-network.notion.site/Voi-s-NFT-Olympics-Success-Guide-25f13d1d82f24bfda549b038403e5d5e"
              target="_blank"
            >
              NFT Olympics
            </a>{" "}
            is coming
          </Typography>
        </Stack>
      </Marquee>*/}
      {
        <Tabs
          sx={{ background: "aliceblue" }}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          {activeAccount && (
            <Tab
              label="Dashboard"
              onClick={() => navigate(`/account/${activeAccount.address}`)}
            />
          )}
          <Tab label="DEX" onClick={() => navigate(`/dex/`)} />
        </Tabs>
      }
      <Box sx={{ m: 1, textAlign: "left" }}>
        <a href="https://nautilu.xyz" target="_blank">
          Nautilus - NFT Marketplace
        </a>
      </Box>
    </>
  ) : null;
};

export default MainMenu;
