import { useCallback, useEffect, useState } from "react";
import { useWallet } from "@txnlab/use-wallet";
import {
  Box,
  Button,
  ButtonGroup,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import TokenBox from "../TokenBox/index.ts";
import ChildService from "../../services/ChildService.ts";
import MasterService from "../../services/MasterService.ts";
import AssetService from "../../services/AssetService.ts";
import { makeStdLib } from "../../utils/reach.js";
import { fromSome } from "../../utils/common.js";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";

const stdlib = makeStdLib();
const bn = stdlib.bigNumberify;
const bn2n = stdlib.bigNumberToNumber;

const Balance = (props) => {
  const [token, setToken] = useState();
  useEffect(() => {
    const timeout = setTimeout(() => {
      const token = props?.tokens?.tokens?.filter(
        (el) => el.appId === props.appId
      )[0];
      setToken(token);
    }, 1);
    return () => clearTimeout(timeout);
  }, [props]);
  return (
    <Stack
      direction="row"
      style={{
        alignItems: "baseline",
        alignItems: "center",
        justifyContent: "space-around",
      }}
      gap={1}
    >
      <Stack direction="column">
        <Typography variant="h6" style={{ textAlign: "left" }}>
          Account
        </Typography>
        <Typography variant="h6" style={{ textAlign: "left" }}>
          Balance
        </Typography>
      </Stack>
      <Box style={{ alignItems: "right" }}>
        <Typography variant="h4" style={{ textAlign: "right" }}>
          {!token ? (
            <Skeleton variant="rounded" width={75} />
          ) : (
            `${Math.floor(Number(token?.amount ?? "0.00") * 100) / 100}`
          )}
        </Typography>
      </Box>
    </Stack>
  );
};

function AccountBalance(props) {
  const { activeAccount } = useWallet();
  const [tokens, setTokens] = useState(
    JSON.parse(localStorage.getItem(`tokens`) ?? "{}")
  );
  console.log({ tokens });
  const reloadTokens = useCallback(async () => {
    if (!activeAccount) return;
    const storedEvents = JSON.parse(
      localStorage.getItem("event-ready") ?? "{}"
    );
    const events = !storedEvents.time
      ? await MasterService.getReadyEvents(activeAccount.address)
      : await MasterService.getReadyEvents(
          activeAccount.address,
          storedEvents.time
        );
    const newEvents = [...(storedEvents?.events ?? []), ...events];
    localStorage.setItem(
      "event-ready",
      JSON.stringify({
        time: await stdlib.getNetworkTime(),
        events: newEvents,
      })
    );
    // -------------------------------------------
    // get tokens from events
    // and balances for active account
    // -------------------------------------------
    const tokens = [];
    let time = bn(0);
    for (const event of newEvents) {
      const {
        what: [[ctcInfoBn, assetInfoBn]],
        when,
      } = event;
      const appId = bn2n(ctcInfoBn);
      const assetId = bn2n(assetInfoBn);
      const asset = await AssetService.getAsset(assetId).catch(console.log);
      if (!asset) continue;
      const {
        params: { decimals, name, ["unit-name"]: symbol },
      } = asset;
      const amountBn = fromSome(
        await ChildService.balanceOf({ appId }, activeAccount.address),
        bn(0)
      );
      const amount = stdlib.formatWithDecimals(amountBn, decimals);
      time = bn2n(when);
      tokens.push({ appId, assetId, decimals, name, symbol, amount });
    }
    localStorage.setItem(`tokens`, JSON.stringify({ time, tokens }));
    setTokens({ time, tokens });
  }, [activeAccount]);
  // -------------------------------------------
  // effect: reload tokens on account change
  // -------------------------------------------
  useEffect(() => {
    reloadTokens();
  }, [activeAccount]);
  // -------------------------------------------
  return <Balance tokens={tokens} {...props} />;
}

export default AccountBalance;
