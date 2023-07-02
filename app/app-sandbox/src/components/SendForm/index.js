import { Button, Chip, Stack } from "@mui/material";
import TokenInputBase from "../../components/TokenInputBase/index.tsx";
import TextInputBase from "../../components/TextInputBase/index.tsx";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import { displayToken, isValidAlgorandAddress } from "../../utils/algorand.js";
import NFDService from "../../services/NFDService.ts";
import { useDebounce } from "use-debounce";

function SendForm({
  token,
  tokens,
  setToken,
  setTokenAmount,
  setAccountAddress,
}) {
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 500);
  const [nfd, setNfd] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const onTokenAmountChange = useCallback(
    (e) => setTokenAmount(e.target.value),
    [setTokenAmount]
  );
  const onAccountAddressChange = useCallback((e) => {
    const newValue = e.target.value;
    if (isValidAlgorandAddress(newValue)) {
      setNfd(null);
      setIsValid(true);
      setAccountAddress(newValue);
      return;
    }
    setIsValid(false);
    setText(e.target.value);
  });
  useEffect(() => {
    (async () => {
      const nfd = await NFDService.getNFDByName(value).catch(console.log);
      if (nfd) {
        setNfd(nfd);
        setIsValid(false);
        setAccountAddress(
          nfd?.depositAccount || nfd?.owner || nfd?.caAlgo?.[0] || ""
        );
      } else {
        setNfd(null);
      }
    })();
  }, [value]);
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
        {nfd && <Chip label={`NFD: ${nfd?.name}`} />}
        {isValid && <Chip label="Algorand Address" />}
      </Stack>
    </div>
  );
}

export default SendForm;
