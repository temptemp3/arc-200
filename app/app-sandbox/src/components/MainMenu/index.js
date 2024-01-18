import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useLocation, useNavigate } from "react-router-dom";
import { useWallet } from "@txnlab/use-wallet";

const MainMenu = () => {
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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
    >
      {activeAccount && (
        <Tab
          label="Account"
          onClick={() => navigate(`/account/${activeAccount.address}`)}
        />
      )}
      <Tab label="DEX" onClick={() => navigate(`/dex/`)} />
      <Tab label="Marketplace" onClick={() => navigate(`/nft/marketplace`)} />
    </Tabs>
  );
};

export default MainMenu;
