import * as React from "react";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Typography,
  Skeleton,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useWallet } from "@txnlab/use-wallet";
import { makeStdLib } from "../../utils/reach";
import ARC200Service from "../../services/ARC200Service";
import { displayToken, displayTokenValue } from "../../utils/algorand";

const stdlib = makeStdLib();
const bn2n = stdlib.bigNumberToNumber;
const fc = stdlib.formatCurrency;
const fawd = stdlib.formatWithDecimals;

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },
}));

interface CustomizedInputBaseProps {
  onTokenChange: any;
  onTokenAmountChange: any;
  token: any;
  tokens: any;
  disabled: boolean;
  label: string;
  accountAddress?: string;
  showAllowance?: boolean;
  reverseAllowance?: boolean;
  addrSpender?: string;
  addrFrom?: string;
}

export default function CustomizedInputBase({
  onTokenChange,
  onTokenAmountChange,
  token,
  tokens,
  disabled,
  label,
  accountAddress,
  showAllowance = false,
  reverseAllowance = false,
  addrSpender,
  addrFrom,
}: CustomizedInputBaseProps) {
  const { activeAccount } = useWallet();
  const [selected, setSelected] = useState<any>(token);
  const [allowance, setAllowance] = useState<any>("0");
  // -------------------------------------------
  const [options] = useState<any>(tokens); // TODO type me
  useEffect(() => {
    if (!addrFrom) return;
    if (!addrSpender) return;
    (async () => {
      const allowance = await ARC200Service.allowance(
        token.appId,
        addrFrom,
        addrSpender
      );
      setAllowance(fawd(allowance, token.decimals));
    })();
  }, [addrFrom, addrSpender]);
  console.log({ allowance });
  // EFFECT: get token options
  useEffect(() => {
    if (!addrFrom) return;
    if (!addrSpender) return;
    (async () => {
      const amount = await ARC200Service.balanceOf(selected.appId, addrFrom);
      setSelected({ ...selected, amount });
    })();
  }, [addrFrom, addrSpender]);
  return (
    <>
      {selected.amount && selected.symbol ? (
        <Stack direction="row" spacing={1}>
          <Box>
            <Typography variant="body2">
              Available: {displayToken(selected)}
            </Typography>
          </Box>
          {allowance && (
            <Box>
              <Typography variant="body2">
                Allowance: {displayToken({ ...token, amount: allowance })}
              </Typography>
            </Box>
          )}
        </Stack>
      ) : (
        <Skeleton variant="text" />
      )}
    </>
  );
}
