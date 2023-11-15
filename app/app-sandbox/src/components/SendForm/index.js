import { Button, ButtonGroup, Chip, Stack } from "@mui/material";
import TokenInputBase from "../../components/TokenInputBase/index.tsx";
import TextInputBase from "../../components/TextInputBase/index.tsx";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useMemo, useState } from "react";
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
  onClickCancel,
  onClickNext,
}) {
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 500);
  const [nfd, setNfd] = useState(null);
  const [isValidAddres, setIsValidAddress] = useState(false);
  const [isValidTokenAmount, setIsValidTokenAmount] = useState(false);
  const isNumber = (input) => {
    // Use parseFloat for decimal numbers or Number() for integers
    return (
      !input.match(/[^0-9,.]/) && !isNaN(parseFloat(input)) && isFinite(input)
    );
  };
  const onTokenAmountChange = useCallback(
    (e) => {
      const input = e.target.value.replace(/,/g, "");
      const validTokenAmount = isNumber(input);
      setIsValidTokenAmount(validTokenAmount);
      setTokenAmount(input);
    },
    [setTokenAmount]
  );
  const onAccountAddressChange = useCallback((e) => {
    const newValue = e.target.value;
    if (isValidAlgorandAddress(newValue)) {
      setNfd(null);
      setIsValidAddress(true);
      setAccountAddress(newValue);
      return;
    }
    setIsValidAddress(false);
    setText(e.target.value);
  });
  const isValid = useMemo(() => {
    if (!isValidAddres && !nfd) return false;
    if (!isValidTokenAmount) return false;
    return true;
  }, [isValidAddres, nfd, isValidTokenAmount]);
  useEffect(() => {
    (async () => {
      const nfd = await NFDService.getNFDByName(value).catch(console.log);
      if (nfd) {
        setNfd(nfd);
        setIsValidAddress(false);
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
        <TextInputBase onChange={onAccountAddressChange} label="Destination" />
        {nfd && <Chip label={`NFD: ${nfd?.name}`} />}
        {isValidAddres && <Chip label="Algorand Address" />}
        <TokenInputBase
          token={token}
          tokens={tokens}
          onTokenAmountChange={onTokenAmountChange}
          disabled={true}
        />
        <ButtonGroup fullWidth>
          <Button variant="outlined" onClick={onClickCancel}>
            Cancel
          </Button>
          <Button disabled={!isValid} variant="contained" onClick={onClickNext}>
            Next
          </Button>
        </ButtonGroup>
      </Stack>
    </div>
  );
}

export default SendForm;
