import SwapForm from "../../components/SwapForm";
import PoolForm from "../../components/PoolForm";
import { useSearchParams } from "react-router-dom";
import React, { useState } from "react";
import { Tab, Tabs, Typography } from "@mui/material";

const SwapTabs = () => {
  const [selectedTab, setSelectedTab] = useState("swap");
  const [searchParams] = useSearchParams();
  const poolId = searchParams.get("poolId");
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleChange}>
        <Tab value="swap" label="Swap" />
        <Tab value="pool" label="Pool" />
      </Tabs>
      {selectedTab === "swap" && (
        <div>
          <SwapForm ctcInfo={poolId} />
        </div>
      )}
      {selectedTab === "pool" && (
        <div>
          <PoolForm ctcInfo={poolId} />
        </div>
      )}
    </div>
  );
};

function Page() {
  return <SwapTabs />;
}

export default Page;
