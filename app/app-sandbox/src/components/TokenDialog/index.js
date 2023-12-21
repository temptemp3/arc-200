import { useEffect, useState } from "react";
import { useWallet } from "@txnlab/use-wallet";
import { useDebounce } from "use-debounce";
import {
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  Dialog,
  DialogContent,
  Stack,
  Alert,
  FormControlLabel,
} from "@mui/material";
import TextInputBase from "../TextInputBase/index.tsx";
import defaultTokens from "../../config/defaultTokens";
import { DEFAULT_NODE } from "../../config/defaultLocalStorage";
import { getAlgorandClients } from "../../utils/algorand";
import { makeStdLib } from "../../utils/reach";
import arc200 from "arc200js";

const TOKEN_ARC200 = 'arc200'
const TOKEN_ASSET = 'asset'

const stdlib = makeStdLib();

const [node] = (localStorage.getItem("node") || DEFAULT_NODE).split(":");

function TokenDialog(props) {
  const { activeAccount } = useWallet();
  const [tokenIdStr, setTokenIdStr] = useState('');
  const [tokenIdStrDebounced] = useDebounce(tokenIdStr, 500);
  const [tokenType, setTokenType] = useState();
  const [addAssetChecked, setAddAssetChecked] = useState(false);
  const [error, setError] = useState();
  const isValid = !error && !!tokenType && 
    (tokenType !== TOKEN_ASSET || (tokenType === TOKEN_ASSET && addAssetChecked));
  useEffect(() => {
    if (props.open) {
      setError();
      setTokenType();
      setTokenIdStr('')
      setAddAssetChecked(false);
    }
  }, [props.open]);
  const checkAppId = async (tokenId) => {
    const { algodClient, indexerClient } = getAlgorandClients();
    const ci = new arc200(tokenId, algodClient, indexerClient);
    const tokenR = await ci.getMetadata();
    return tokenR.success;
  }
  const checkAsset = async (tokenId) => {
    const { indexerClient } = getAlgorandClients();
    const asset = await indexerClient
      .lookupAssetByID(tokenId)
      .do()
      .catch(() => {});
    return !!asset;
  }
  const checkToken = async () => {
    if (!tokenIdStrDebounced) return;
    const tokenId = parseInt(tokenIdStrDebounced);
    setError();
    setTokenType();
    setAddAssetChecked(false);
    if (await checkAppId(tokenId)) {
      setTokenType(TOKEN_ARC200);
    } else if (await checkAsset(tokenId)) {
      setTokenType(TOKEN_ASSET);
    } else {
      setError(`Token '${tokenId}' not found`);
    }
  }
  useEffect(() => {
    checkToken();
  }, [tokenIdStrDebounced]);
  const addAppId = async (tokenId) => {
    if (tokenType === TOKEN_ARC200) {
      const newTokenIds = Array.from(new Set([...props.tokenIds, tokenId]));
      props.setTokenIds(newTokenIds);
      const storedTokens = JSON.parse(
        localStorage.getItem("tokens") ||
          `${JSON.stringify(defaultTokens)}`
      );
      localStorage.setItem(
        "tokens",
        JSON.stringify({
          ...storedTokens,
          [node]: newTokenIds,
        })
      );
    }
  }
  const addAsset = async (tokenId) => {
    if (tokenType === TOKEN_ASSET) {
      const acc = await stdlib.connectAccount({
        addr: activeAccount.address,
      });
      await acc.tokenAccepted(tokenId);
    }
  }
  const addToken = async () => {
    if (!isValid) return;
    const tokenId = parseInt(tokenIdStrDebounced);
    if (tokenType === TOKEN_ARC200) {
      await addAppId(tokenId);
    } else if (tokenType === TOKEN_ASSET) {
      await addAsset(tokenId);
    }
    props.setOpen(false);
  }
  return (
    <div className="SendDialog">
      <Dialog fullScreen open={props.open} onClose={props.onClose}>
        <DialogContent
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container maxWidth="sm">
            <Stack spacing={5}>
              <TextInputBase
                type="number"
                label="Token Id"
                value={tokenIdStr}
                onChange={(e) => setTokenIdStr(e.target.value)}
              />
              {error && <Alert severity="error">{error}</Alert>}
              {tokenType === TOKEN_ASSET && (
                <FormControlLabel
                  label="Add asset to wallet"
                  control={(
                    <Checkbox
                      checked={addAssetChecked}
                      onChange={(e) => setAddAssetChecked(e.target.checked)}
                    />
                  )}
                />
              )}
              <ButtonGroup fullWidth>
                <Button variant="outlined" onClick={() => props.setOpen(false)}>
                  Cancel
                </Button>
                <Button disabled={!isValid} variant="contained" onClick={addToken}>
                  Add
                </Button>
              </ButtonGroup>
            </Stack>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TokenDialog;