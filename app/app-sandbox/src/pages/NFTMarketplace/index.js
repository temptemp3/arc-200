import React from "react";
import { Tabs, Tab, createTheme } from "@mui/material";
import { makeStdLib } from "../../utils/reach";
import { makeStyles } from "@mui/styles";
import NFTPortfolio from "../NFTPortfolio";
import NFTDiscover from "../NFTDiscover";
import NFTSales from "../NFTSales";
import NFTAuctions from "../NFTAuctions";
import NFTReverseAuctions from "../NFTReverseAuctions";

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return value == index && children;
}

function NFTMarketplace() {
  const [value, setValue] = React.useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="Discover" />
        <Tab label="Reverse Auctions" />
        <Tab label="Auctions" />
        <Tab label="Buy" />
        <Tab label="Sell" />
      </Tabs>
      {[
        <NFTDiscover />,
        <NFTReverseAuctions />,
        <NFTAuctions />,
        <NFTSales />,
        <NFTPortfolio />,
      ].map((child, i) => (
        <TabPanel key={i} value={value} index={i}>
          {child}
        </TabPanel>
      ))}
    </>
  );
}

export default NFTMarketplace;
