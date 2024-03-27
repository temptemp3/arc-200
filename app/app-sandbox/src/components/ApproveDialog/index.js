import { useEffect, useState } from "react";
import { PROVIDER_ID, useWallet } from "@txnlab/use-wallet";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import ApproveForm from "../ApproveForm/index.js";
import ARC200Service from "../../services/ARC200Service.ts";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { toast } from "react-toastify";
import { getAlgorandClients } from "../../utils/algorand.js";

import { arc200 } from "ulujs";
import { waitForConfirmation } from "algosdk";
import { bigNumberToBigInt, bigNumberify } from "../../common/utils/bn.ts";

function ApproveDialog(props) {
  const { providers, activeAccount, signTransactions } = useWallet();
  const [token, setToken] = useState(props.token);
  const [tokenAmount, setTokenAmount] = useState("");
  const [accountAddress, setAccountAddress] = useState("");
  const [doSubmit, setDoSubmit] = useState(false);
  const [pending, setPending] = useState(false);
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
        const amount = bigNumberToBigInt(
          bigNumberify(
            Math.floor(Number(tokenAmount) * 10 ** Number(token.decimals))
          )
        );
        let res;
        if (
          activeAccount.providerId === PROVIDER_ID.CUSTOM &&
          activeAccount.name === "kibisis"
        ) {
          const { algodClient, indexerClient } = getAlgorandClients();
          const ci = new arc200(token.appId, algodClient, indexerClient, {
            acc: { addr: activeAccount.address },
          });

          res = await ci.arc200_approve(accountAddress, amount);
          if (!res.success) return; // TODO: handle error

          const result = await window.algorand.signTxns({
            txns: res.txns.map((el) => {
              return {
                txn: el,
              };
            }),
          });
          let signedTransactionBytes;
          // decode the base 64 encoded signed transactions
          signedTransactionBytes = result.stxns.map(
            (stxn) => new Uint8Array(Buffer.from(stxn, "base64"))
          );
          // send to the network
          const res2 = await algodClient
            .sendRawTransaction(signedTransactionBytes)
            .do();
        } else if (
          [PROVIDER_ID.KIBISIS, PROVIDER_ID.DEFLY, PROVIDER_ID.LUTE].includes(
            activeAccount.providerId
          )
        ) {
          const { algodClient, indexerClient } = getAlgorandClients();
          const ci = new arc200(token.appId, algodClient, indexerClient, {
            acc: { addr: activeAccount.address },
          });

          res = await ci.arc200_approve(accountAddress, amount);
          if (!res.success) return; // TODO: handle error
          const stxns = await signTransactions(
            res.txns.map((el) => new Uint8Array(Buffer.from(el, "base64")))
          );
          const res2 = await algodClient.sendRawTransaction(stxns).do();
          await waitForConfirmation(algodClient, res2.txId, 4);
        } else {
          throw new Error("Wallet not supported");
        }
        if (res) {
          props.reloadToken();
          toast(
            <div>
              Approval successful!
              <br />
              {tokenAmount} {token.symbol} spending approved to{" "}
              {accountAddress.slice(0, 4)}
              ...{accountAddress.slice(-4)}
            </div>
          );
          setToken({ ...token, amount: undefined });
          props.setOpen(false);
        } else {
          throw new Error("Approval failed");
        }
        // TODO catch others
      } catch (e) {
        toast.error(e.message);
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
              <ApproveForm
                token={props.token}
                tokens={[props.token]}
                setToken={setToken}
                setTokenAmount={setTokenAmount}
                accountAddress={accountAddress}
                setAccountAddress={setAccountAddress}
              />
            )}
          </Container>
        </DialogContent>
        {!pending && (
          <DialogActions>
            <Button
              onClick={() => {
                props.setOpen(false);
                setAccountAddress("");
              }}
            >
              Close
            </Button>
            <Button onClick={handleSubmit}>Approve</Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}

export default ApproveDialog;
