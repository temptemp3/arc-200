import { useEffect, useState } from "react";
import { useWallet } from "@txnlab/use-wallet";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import SendForm from "../SendForm";
import ARC200Service from "../../services/ARC200Service.ts";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { toast } from "react-toastify";
import { makeStdLib } from "../../utils/reach.js";

function SendDialog(props) {
  const { providers, activeAccount } = useWallet();
  const [token, setToken] = useState(props.token);
  const [tokenAmount, setTokenAmount] = useState("");
  const [accountAddress, setAccountAddress] = useState("");
  const [doSubmit, setDoSubmit] = useState(false);
  const [pending, setPending] = useState(false);
  const stdlib = makeStdLib();
  const fawd = stdlib.formatWithDecimals;
  useEffect(() => {
    if (!activeAccount) return;
    if (token.amount) return;
    (async () => {
      const amount = fawd(
        await ARC200Service.balanceOf(token.appId, activeAccount.address),
        token.decimals
      );
      setToken({ ...token, amount });
    })();
  }, [activeAccount, token, props.token]);
  const handleSubmit = async () => {
    if (!activeAccount) {
      providers
        .filter((el) => el.metadata.id === activeAccount.providerId)[0]
        .connect();
    }
    setDoSubmit(true);
  };
  useEffect(() => {
    if (!activeAccount) return;
    if (!doSubmit) return;
    (async () => {
      try {
        setPending(true);
        const res = await ARC200Service.transfer(
          props.token,
          activeAccount.address,
          accountAddress,
          tokenAmount
        );
        if (res) {
          toast(
            <div>
              Transfer successful!
              <br />
              {tokenAmount} {token.symbol} sent to {accountAddress.slice(0, 4)}
              ...{accountAddress.slice(-4)}
            </div>
          );
          setToken({ ...token, amount: undefined });
          props.setOpen(false);
          props.setTokens(null);
        } else {
          alert("Transfer failed");
        }
        // TODO catch others
      } catch (e) {
        console.log(e);
      } finally {
        setPending(false);
        setDoSubmit(false);
      }
    })();
  }, [activeAccount, doSubmit]);
  return (
    <div className="SendDialog">
      <Dialog fullScreen={true} open={props.open} onClose={props.onClose}>
        <DialogContent
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {pending ? (
            <Stack
              gap={5}
              direction="column"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress size={100} />
              <Typography variant="h6">Transaction pending...</Typography>
            </Stack>
          ) : (
            <SendForm
              token={props.token}
              tokens={[props.token]}
              setToken={setToken}
              setTokenAmount={setTokenAmount}
              setAccountAddress={setAccountAddress}
            />
          )}
        </DialogContent>
        {!pending && (
          <DialogActions>
            <Button onClick={() => props.setOpen(false)}>Close</Button>
            <Button onClick={handleSubmit}>Send</Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}

export default SendDialog;
