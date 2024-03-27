import { Stack, Typography } from "@mui/material";
import { useWallet } from "@txnlab/use-wallet";
import React, { useEffect, useState, useMemo } from "react";
import AccountBalances from "../../components/AccountBalances";
import Pools from "../../components/PoolList";
import TokenList from "../../components/TokenList";
import Connect from "../../components/Connect";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import NFTMarketplace from "../NFTMarketplace";
import SwapForm from "../../components/SwapForm";
import Skeleton from "@mui/material/Skeleton";
import defaultTokens from "../../config/defaultTokens";
import { useNavigate, useParams } from "react-router-dom";
import { makeStdLib } from "../../utils/reach";
import { DEFAULT_NODE } from "../../config/defaultLocalStorage";
import { getAlgorandClients } from "../../utils/algorand";
import CONTRACT from "arccjs";
import arc200 from "arc200js";
import triSchema from "../../abis/triumvirate.json";
import { db } from "../../db";
import { useLiveQuery } from "dexie-react-hooks";
import LoadingIndicator from "../../components/LoadingIndicator";

const stdlib = makeStdLib();

const [node] = (localStorage.getItem("node") || DEFAULT_NODE).split(":");

function Balances(props) {
  const dbTokens = useLiveQuery(() => db.tokens.toArray());
  const navigate = useNavigate();
  const params = useParams();
  const [tokenIds, setTokenIds] = React.useState(props.tokens);
  const [tokens, setTokens] = React.useState(null);
  const [, setAppId] = React.useState(0);
  const [manage, setManage] = React.useState(false);
  const { activeAccount } = useWallet();
  useEffect(() => {
    if (!dbTokens) return;
    const { algodClient, indexerClient } = getAlgorandClients();
    tokenIds.map(async (tokenId) => {
      const ci = new arc200(tokenId, algodClient, indexerClient);
      if (dbTokens.find((t) => t.tokenId === tokenId)) return;
      const res = await ci.getMetadata();
      if (!res.success) return;
      const tm = res.returnValue;
      const newToken = {
        ...tm,
        pk: `${node}:${tokenId}`,
        tokenId,
        network: node,
      };
      await addToken(newToken);
    });
  }, [tokenIds, dbTokens]);
  const isLoading = useMemo(() => {
    return !tokens;
  }, [tokens]);
  return (
    <>
      <Container sx={{ mt: 3 }}>
        <Box sx={{ ml: 1 }}>
          <AccountBalances
            {...props}
            manage={manage}
            tokenIds={tokenIds}
            tokens={tokens}
            setTokens={setTokens}
            onSetAppId={setAppId}
          />
        </Box>
      </Container>
    </>
  );
}


async function addRegisterEvent(evt) {
  try {
    await db.registerEvents.add(evt);
  } catch (error) {
    console.log(error);
  }
}

async function addToken(token) {
  try {
    await db.tokens.add(token);
  } catch (error) {
    console.log(error);
  }
}

function Home() {
  const dbPools = useLiveQuery(() => db.registerEvents.toArray());
  const { activeAccount } = useWallet();
  const [pools, setPools] = useState(null);
  // EFFECT: get all pools from db
  useEffect(() => {
    if (!dbPools) return;
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
      setPools(newPools);
    });
  }, [dbPools]);
  return (
    <Container sx={{ mt: 5 }}>
      <Stack spacing={2}>
        <Typography variant="h4" sx={{ textAlign: "left" }}>
          Tokens
        </Typography>
        <TokenList pools={pools} />
        <Typography variant="h4" sx={{ textAlign: "left" }}>
          Pools
        </Typography>
        <Pools pools={pools} />
      </Stack>
    </Container>
  );
}

export default Home;
