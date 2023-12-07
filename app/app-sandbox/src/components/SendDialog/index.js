import { useCallback, useEffect, useMemo, useState } from "react";
import { PROVIDER_ID, useWallet } from "@txnlab/use-wallet";
import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import SendForm from "../SendForm";
import ARC200Service from "../../services/ARC200Service.ts";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { toast } from "react-toastify";
import {
  getCurrentNode,
  getGenesisHash,
  makeStdLib,
} from "../../utils/reach.js";
import ConfirmationComponent from "../ConfirmationComponent.js";
import { getAlgorandClients } from "../../utils/algorand.js";
import arc200 from "arc200js";
import algosdk, { encodeUnsignedTransaction } from "algosdk";

import { encode as encodeBase64 } from "@stablelib/base64";

function SendDialog(props) {
  const { providers, activeAccount } = useWallet();
  const [token, setToken] = useState(props.token);
  const [tokenAmount, setTokenAmount] = useState("");
  const [accountAddress, setAccountAddress] = useState("");
  const [doSubmit, setDoSubmit] = useState(false);
  const [step, setStep] = useState(0);
  const stdlib = makeStdLib();
  const fawd = stdlib.formatWithDecimals;
  const reset = () => {
    props.setOpen(false);
    setDoSubmit(false);
    setAccountAddress("");
    setTokenAmount("");
    setStep(0);
  };
  const prepareTokenAmount = useCallback(
    (str) => {
      const num = Number(str.replace(/[, ]/g, ""));
      if (isNaN(num)) return "";

      const formattedAmount = stdlib.formatWithDecimals(
        stdlib.parseCurrency(num, Number(token.decimals)),
        Number(token.decimals)
      );

      const [a, b] = formattedAmount.split(".");
      return !!b
        ? `${Number(a).toLocaleString()}.${b}`
        : Number(a).toLocaleString();
    },
    [token, stdlib]
  );
  const handleClose = () => {
    reset();
  };
  useEffect(() => {
    if (!activeAccount) return;
    if (token.amount) return;
    (async () => {
      let amount;
      switch (token.assetType) {
        case "network":
        case "native":
          amount = fawd(await stdlib.balanceOf(activeAccount), token.decimals);
          break;
        case "arc200":
          const { algodClient, indexerClient } = getAlgorandClients();
          const ci = new arc200(token.appId, algodClient, indexerClient);
          const balanceR = await ci.arc200_balanceOf(activeAccount.address);
          if (balanceR.success) return; // TODO: handle error
          const balance = balanceR.returnValue;
          amount = fawd(balance, Number(token.decimals));
          break;
      }
      setToken({ ...token, amount });
    })();
  }, [activeAccount, props.token]);
  const handleSubmit = async () => {
    if (!activeAccount) {
      providers
        .filter((el) => el.metadata.id === activeAccount.providerId)[0]
        .connect();
    }
    setStep(2);
    setDoSubmit(true);
  };
  useEffect(() => {
    if (!activeAccount) return;
    if (!doSubmit) return;
    (async () => {
      try {
        switch (props.token.assetType) {
          case "network": {
            if (
              activeAccount.providerId === PROVIDER_ID.CUSTOM &&
              activeAccount.name === "kibisis"
            ) {
              const algorand = window.algorand;
              if (!algorand) {
                throw new Error("no wallets are installed!");
              }
              const [node] = getCurrentNode();
              const wallets = algorand.getWallets();
              const wallet = await algorand.enable({
                genesisHash: getGenesisHash(node),
              });
              const { algodClient } = getAlgorandClients();
              const suggestedParams = await algodClient
                .getTransactionParams()
                .do();
              const utxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
                amount: stdlib
                  .parseCurrency(
                    prepareTokenAmount(tokenAmount).replace(/,/g, "")
                  )
                  .toBigInt(),
                from: activeAccount.address,
                to: accountAddress,
                suggestedParams,
              });
              const result = await window.algorand.signTxns({
                txns: [
                  {
                    txn: encodeBase64(encodeUnsignedTransaction(utxn)),
                  },
                ],
              });
              let signedTransactionBytes;
              signedTransactionBytes = result.stxns.map(
                (stxn) => new Uint8Array(Buffer.from(stxn, "base64"))
              );
              await algodClient.sendRawTransaction(signedTransactionBytes).do();
            } else {
              const acc = await stdlib.connectAccount({
                addr: activeAccount.address,
              });
              await stdlib.transfer(
                acc,
                accountAddress,
                stdlib.parseCurrency(
                  prepareTokenAmount(tokenAmount).replace(/,/g, "")
                )
              );
            }
            // TODO confirm transaction
            setTimeout(() => {
              props.reloadToken();
            }, 5_000);
            toast(
              <div>
                Transfer successful!
                <br />
                {prepareTokenAmount(tokenAmount)} {token.symbol} sent to{" "}
                {accountAddress.slice(0, 4)}
                ...{accountAddress.slice(-4)}
              </div>
            );
            break;
          }
          case "native":
            break;
          case "rc200": {
            const amount = stdlib
              .parseCurrency(tokenAmount, Number(token.decimals))
              .toBigInt();
            let res2;
            if (
              activeAccount.providerId === PROVIDER_ID.CUSTOM &&
              activeAccount.name === "kibisis"
            ) {
              const algorand = window.algorand;
              if (!algorand) {
                throw new Error("no wallets are installed!");
              }
              const [node] = getCurrentNode();
              const wallets = algorand.getWallets();
              const wallet = await algorand.enable({
                genesisHash: getGenesisHash(node),
              });
              const { algodClient, indexerClient } = getAlgorandClients();
              const ci = new arc200(token.appId, algodClient, indexerClient, {
                acc: { addr: activeAccount.address },
                simulate: true,
                formatBytes: true,
              });
              const res = await ci.arc200_transfer(accountAddress, amount);
              if (!res.success) return;
              const result = await window.algorand.signTxns({
                txns: res.txns.map((el) => {
                  return {
                    txn: el,
                  };
                }),
              });
              let signedTransactionBytes;
              signedTransactionBytes = result.stxns.map(
                (stxn) => new Uint8Array(Buffer.from(stxn, "base64"))
              );
              res2 = await algodClient
                .sendRawTransaction(signedTransactionBytes)
                .do();
            } else {
              res2 = await ARC200Service.transfer(
                props.token,
                activeAccount.address,
                accountAddress,
                prepareTokenAmount(tokenAmount).replace(/,/g, "")
              );
            }
            if (res2) {
              // TODO confirm transaction
              setTimeout(() => {
                props.reloadToken();
              }, 5_000);
              toast(
                <div>
                  Transfer successful!
                  <br />
                  {prepareTokenAmount(tokenAmount)} {token.symbol} sent to{" "}
                  {accountAddress.slice(0, 4)}
                  ...{accountAddress.slice(-4)}
                </div>
              );
            } else {
            }
            break;
          }
          default: {
            alert(`Asset type ${props.token.assetType} not supported!`);
          }
        }
        // TODO catch others
      } catch (e) {
        console.log(e);
        toast(
          <div>
            Transfer rejected or failed!
            <br />
            Please try again.
          </div>,
          {
            type: toast.TYPE.ERROR,
          }
        );
      } finally {
        reset();
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
            {step === 0 && (
              <SendForm
                token={props.token}
                tokens={[props.token]}
                setToken={setToken}
                setTokenAmount={setTokenAmount}
                setAccountAddress={setAccountAddress}
                onClickCancel={handleClose}
                onClickNext={() => {
                  setStep(1);
                }}
              />
            )}
            {step === 1 && (
              <>
                <ConfirmationComponent
                  label="Transaction Details"
                  data={[
                    {
                      name: "Sender Address",
                      value: activeAccount.address,
                    },
                    { name: "Recipient Address", value: accountAddress },
                    {
                      name: "Token",
                      value: (
                        <div>
                          {token.name} ({token.symbol})
                          {token.assetType !== "network" && (
                            <Chip
                              size="small"
                              sx={{ ml: 1 }}
                              label={`${(
                                token.network[0] + token.assetType
                              ).toUpperCase()}:${token.appId}`}
                            />
                          )}
                        </div>
                      ),
                    },
                    {
                      name: "Token Quantity",
                      value: `${prepareTokenAmount(tokenAmount)} ${
                        token.symbol
                      }`,
                    },
                  ]}
                />
                <ButtonGroup sx={{ mt: 3 }} fullWidth>
                  <Button
                    onClick={() => {
                      setStep(0);
                    }}
                  >
                    Back
                  </Button>
                  <Button variant="contained" onClick={handleSubmit}>
                    Confirm
                  </Button>
                </ButtonGroup>
              </>
            )}
            {step === 2 && (
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
                <Typography variant="h6">
                  Waiting on signing of transaction...
                </Typography>
                <Typography variant="body1">
                  Please sign or reject the transaction in your wallet.
                </Typography>
                <Box>
                  <ConfirmationComponent
                    label="Transaction Details"
                    data={[
                      {
                        name: "Sender Address",
                        value: activeAccount.address,
                      },
                      { name: "Recipient Address", value: accountAddress },
                      {
                        name: "Token",
                        value: (
                          <div>
                            {token.name} ({token.symbol})
                            {token.assetType !== "network" && (
                              <Chip
                                size="small"
                                sx={{ ml: 1 }}
                                label={`${(
                                  token.network[0] + token.assetType
                                ).toUpperCase()}:${token.appId}`}
                              />
                            )}
                          </div>
                        ),
                      },
                      {
                        name: "Token Quantity",
                        value: `${prepareTokenAmount(tokenAmount)} ${
                          token.symbol
                        }`,
                      },
                    ]}
                  />
                </Box>
              </Stack>
            )}
          </Container>
        </DialogContent>
        {false && step !== 2 && (
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={handleSubmit}>Send</Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}

export default SendDialog;
