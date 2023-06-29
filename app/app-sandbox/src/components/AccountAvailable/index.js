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

const stdlib = makeStdLib();
const bn = stdlib.bigNumberify;
const bn2n = stdlib.bigNumberToNumber;
const fc = stdlib.formatCurrency;

const Balance = (props) => {
  const [amount, setAmount] = useState();
  useEffect(() => {
    if (!props.assetId || !props.activeAccount) return;
    (async () => {
      const { address: addr } = props.activeAccount;
      const amount = fc(await stdlib.balanceOf({ addr }, props.assetId));
      setAmount(amount);
    })();
  }, [props]);
  return (
    <Stack direction="row" gap={1} style={{ justifyContent: "center" }}>
      <Typography variant="body">
        {!amount ? (
          <Skeleton variant="rounded" width={100} />
        ) : (
          `${Math.floor(Number(amount) * 100) / 100} ${props.symbol} available`
        )}
      </Typography>
    </Stack>
  );
};

function AccountAvailable(props) {
  const { activeAccount } = useWallet();
  return <Balance activeAccount={activeAccount} {...props} />;
}

export default AccountAvailable;
