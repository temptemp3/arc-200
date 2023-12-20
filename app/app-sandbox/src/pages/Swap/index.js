import SwapForm from "../../components/SwapForm";

import React, { useState } from "react";
import { Tab, Tabs, Typography } from "@mui/material";

const SwapTabs = () => {
  const [selectedTab, setSelectedTab] = useState("swap");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleChange} centered>
        <Tab value="swap" label="Swap" />
        <Tab value="pool" label="Pool" />
      </Tabs>
      {selectedTab === "swap" && (
        <div>
          <SwapForm />
        </div>
      )}
      {selectedTab === "pool" && (
        <div>
          <Typography variant="h6">Pool Tab Content</Typography>
        </div>
      )}
    </div>
  );
};

function Page() {
  return <SwapTabs />;
}

export default Page;
