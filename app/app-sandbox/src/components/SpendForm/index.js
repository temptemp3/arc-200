import { Button, Chip, Stack } from "@mui/material";
import TokenInputBase from "../TokenInputBase/index.tsx";
import TextInputBase from "../TextInputBase/index.tsx";
import TokenAllowance from "../TokenAllowance/index.tsx";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import { displayToken, isValidAlgorandAddress } from "../../utils/algorand.js";
import NFDService from "../../services/NFDService.ts";
import { useDebounce } from "use-debounce";
import { useWallet } from "@txnlab/use-wallet";

function SendForm({
  token,
  tokens,
  setToken,
  setTokenAmount,
  addrFrom,
  setAddrFrom,
  addrTo,
  setAddrTo,
}) {
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 500);
  const [nfd, setNfd] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const onTokenAmountChange = useCallback(
    (e) => setTokenAmount(e.target.value),
    [setTokenAmount]
  );
  const { activeAccount } = useWallet();
  const onAccountAddressChange = useCallback((e) => {
    const newValue = e.target.value;
    if (isValidAlgorandAddress(newValue)) {
      setNfd(null);
      setIsValid(true);
      setAddrFrom(newValue); //
      return;
    }
    setIsValid(false);
    setText(e.target.value);
  });
  const onAccountAddressChange2 = useCallback((e) => {
    const newValue = e.target.value;
    if (isValidAlgorandAddress(newValue)) {
      setNfd(null);
      setIsValid(true);
      setAddrTo(newValue); //
      return;
    }
    setIsValid(false);
    setText(e.target.value);
  });
  /*
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
  */
  return (
    <div className="SendForm">
      <Stack spacing={5}>
        <Typography variant="h6">Spend</Typography>
        <TextInputBase onChange={onAccountAddressChange} label="From" />
        {nfd && <Chip label={`NFD: ${nfd?.name}`} />}
        {isValid && <Chip label="Algorand Address" />}
        <TextInputBase onChange={onAccountAddressChange2} label="To" />
        {nfd && <Chip label={`NFD: ${nfd?.name}`} />}
        {isValid && <Chip label="Algorand Address" />}
        <TokenInputBase
          token={token}
          tokens={tokens}
          onTokenAmountChange={onTokenAmountChange}
          disabled={true}
          label="Token quantity"
          addrFrom={addrFrom}
          addrTo={addrTo}
          showAllowance={true}
        />
        <TokenAllowance
          token={token}
          addrSpender={activeAccount?.address || ""}
          addrFrom={addrFrom}
        />
      </Stack>
    </div>
  );
}

export default SendForm;
