import SwapForm from "../../components/SwapForm";
import PoolForm from "../../components/PoolForm";
import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Tab, Tabs, Typography } from "@mui/material";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";
import { getAlgorandClients } from "../../utils/algorand.js";
import CONTRACT from "arccjs";
import triSchema from "../../abis/triumvirate.json";

async function addRegisterEvent(evt) {
  try {
    await db.registerEvents.add(evt);
  } catch (error) {
    console.log(error);
  }
}

const SwapTabs = () => {
  const dbPools = useLiveQuery(() => db.registerEvents.toArray());
  const dbTokens = useLiveQuery(() => db.tokens.toArray());
  const [pool, setPool] = useState(null);
  const [pools, setPools] = useState(null);
  const [value, setValue] = React.useState(1);
  const [searchParams] = useSearchParams();
  const poolId = searchParams.get("poolId");
  const mode = searchParams.get("mode");
  const tokA = searchParams.get("tokA");
  useEffect(() => {
    if (!dbPools) return;
    const pool = dbPools.find((p) => p.poolId === Number(poolId));
    const lastRound = dbPools?.reduce((acc, cur) => {
      return acc > cur.round ? acc : cur.round;
    }, 0);
    const { algodClient, indexerClient } = getAlgorandClients();
    const ctcInfo = 23223143;
    const ci = new CONTRACT(ctcInfo, algodClient, indexerClient, triSchema);
    ci.getEvents({
      minRound: lastRound + 1,
    }).then((events) => {
      const registerEvents = events.find((e) => e.name === "Register");
      if (!registerEvents) return;
      console.log({ registerEvents });
      const rEvts = registerEvents.events.map((e) => ({
        txId: e[0],
        round: e[1],
        timestamp: e[2],
        poolId: Number(e[3][0]),
        tokA: Number(e[3][1]),
        tokB: Number(e[3][2]),
      }));
      rEvts.map(addRegisterEvent);
      const newPools = [...dbPools, ...rEvts];
      setPool(pool);
      setPools(newPools);
    });
  }, [dbPools]);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const [selectedTab, setSelectedTab] = useState(mode);
  if (!pools) return null;
  return (
    <div>
      <Tabs value={selectedTab} onChange={handleChange}>
        <Tab value="swap" label="Swap" />
        <Tab value="pool" label="Pool" />
      </Tabs>
      {selectedTab === "swap" && (
        <div>
          <SwapForm
            ctcInfo={poolId}
            direction={
              pools.find((p) => p.poolId === Number(poolId)).tokA ===
              Number(tokA)
            }
            pool={pool}
            pools={pools}
            tokens={dbTokens}
          />
        </div>
      )}
      {selectedTab === "pool" && (
        <div>
          <PoolForm ctcInfo={poolId} pool={pool} pools={pools} />
        </div>
      )}
    </div>
  );
};

function Page() {
  return <SwapTabs />;
}

export default Page;
