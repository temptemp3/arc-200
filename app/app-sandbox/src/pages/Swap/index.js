import SwapForm from "../../components/SwapForm";
import PoolForm from "../../components/PoolForm";

import React, { useState } from "react";
import { Tab, Tabs, Typography } from "@mui/material";

const SwapTabs = () => {
  const [selectedTab, setSelectedTab] = useState("swap");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
      >
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
          <PoolForm />
        </div>
      )}
    </div>
  );
};

function Page() {
  return <SwapTabs />;
}

export default Page;
