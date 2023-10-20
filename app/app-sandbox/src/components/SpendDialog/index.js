import { useEffect, useState } from "react";
import { useWallet } from "@txnlab/use-wallet";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import SpendForm from "../SpendForm/index.js";
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
  const [addrFrom, setAddrFrom] = useState("");
  const [addrTo, setAddrTo] = useState("");
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
        const res = await ARC200Service.transferFrom(
          props.token,
          activeAccount.address,
          addrFrom,
          addrTo,
          tokenAmount
        );
        if (res) {
          props.reloadToken();
          toast(
            <div>
              Approval successful!
              <br />
              {tokenAmount} {token.symbol} spending approved to{" "}
              {addrFrom.slice(0, 4)}
              ...{addrFrom.slice(-4)}
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
      <Dialog fullScreen open={props.open} onClose={props.onClose}>
        <DialogContent
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container maxWidth="sm">
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
              <SpendForm
                token={props.token}
                tokens={[props.token]}
                setToken={setToken}
                setTokenAmount={setTokenAmount}
                addrFrom={addrFrom}
                setAddrFrom={setAddrFrom}
                addrTo={addrTo}
                setAddrTo={setAddrTo}
              />
            )}
          </Container>
        </DialogContent>
        {!pending && (
          <DialogActions>
            <Button
              onClick={() => {
                props.setOpen(false);
                setAddrFrom("");
                setAddrTo("");
              }}
            >
              Close
            </Button>
            <Button onClick={handleSubmit}>Spend</Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}

export default SendDialog;
