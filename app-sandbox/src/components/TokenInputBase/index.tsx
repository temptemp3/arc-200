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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useWallet } from "@txnlab/use-wallet";
import { makeStdLib } from "../../utils/reach";
import ARC200Service from "../../services/ARC200Service";
import { displayToken } from "../../utils/algorand";

const stdlib = makeStdLib();
const bn2n = stdlib.bigNumberToNumber;

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
}

export default function CustomizedInputBase({
  onTokenChange,
  onTokenAmountChange,
  token,
  tokens,
  disabled,
}: CustomizedInputBaseProps) {
  const { activeAccount } = useWallet();
  const [selected, setSelected] = useState<any>(token);
  // -------------------------------------------
  const [options] = useState<any>(tokens); // TODO type me
  // EFFECT: get token options
  useEffect(() => {
    if (!activeAccount) return;
    if (selected.amount) return;
    (async () => {
      const amount = await ARC200Service.balanceOf(
        selected.appId,
        activeAccount?.address ?? ""
      );
      setSelected({ ...selected, amount });
    })();
  }, [activeAccount, selected]);
  return (
    <>
      <InputLabel>Send</InputLabel>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, padding: "10px 26px 10px 12px" }}
          onChange={onTokenAmountChange}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <FormControl
          style={{ minWidth: 100, border: 0 }}
          sx={{
            m: 1,
            textAlign: "center",
          }}
        >
          <Typography variant="body2">{token.symbol}</Typography>
          {/*<Select
            disabled={disabled}
            input={<BootstrapInput />}
            sx={{ border: 0 }}
            id="token-select"
            onChange={(a, b: any) => {
              onTokenChange(a, b);
              setSelected(b?.props?.value || token);
            }}
            defaultValue={
              options
                ? options.filter((el: any) => el.appId === token.appId)[0]
                : null
            }
          >
            {options?.map((option: any) => (
              <MenuItem key={option.appId} value={option}>
                {option.symbol}
              </MenuItem>
            ))}
            </Select>*/}
        </FormControl>
      </Paper>
      {selected.amount && selected.symbol ? (
        <Box>
          <Typography variant="body2">
            Available: {displayToken(selected)}
          </Typography>
        </Box>
      ) : (
        <Skeleton variant="text" />
      )}
    </>
  );
}
