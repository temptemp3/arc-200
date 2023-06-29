import { Stack } from "@mui/material";
import TokenInputBase from "../../components/TokenInputBase/index.tsx";
import TextInputBase from "../../components/TextInputBase/index.tsx";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import { useCallback } from "react";
import { displayToken } from "../../utils/algorand.js";
function SendForm({
  token,
  tokens,
  setToken,
  setTokenAmount,
  setAccountAddress,
}) {
  console.log({ SendForm: { token } });
  const onTokenAmountChange = useCallback(
    (e) => setTokenAmount(e.target.value),
    [setTokenAmount]
  );
  const onAccountAddressChange = useCallback(
    (e) => setAccountAddress(e.target.value),
    [setAccountAddress]
  );
  return (
    <div className="SendForm">
      <Stack spacing={5}>
        <TokenInputBase
          token={token}
          tokens={tokens}
          onTokenAmountChange={onTokenAmountChange}
          disabled={true}
        />
        <TextInputBase onChange={onAccountAddressChange} label="Destination" />
      </Stack>
    </div>
  );
}

export default SendForm;
