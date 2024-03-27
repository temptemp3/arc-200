import React, { useCallback, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ButtonGroup, Stack } from "@mui/material";
import { useWallet, PROVIDER_ID } from "@txnlab/use-wallet";
import { getAlgorandClients } from "../../utils/algorand";
import { getCurrentNode, getGenesisHash } from "../../utils/reach";
import algosdk, { waitForConfirmation } from "algosdk";
import { makeStdLib } from "../../utils/reach";
import { arc200, CONTRACT } from "ulujs";
import { bigNumberToBigInt, bigNumberify } from "../../common/utils/bn";

const TokenDisplay = ({ tokenName, amount }) => {
  const { activeAccount, signTransactions } = useWallet();
  const { algodClient } = getAlgorandClients();
  const [node] = getCurrentNode();
  const ctcInfo = 27704539; // VIA<>VIASA
  const VIA = 6779767;
  const VIASA = 27704545; // VIA(SA)
  const [balance, setBalance] = useState(null);
  const [balance2, setBalance2] = useState(null);
  const [doOptin, setDoOptin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Add or remove VIASA holdings");

  const signTransaction = React.useCallback(
    async (txns) => {
      if (!activeAccount) return;
      if (
        activeAccount.providerId === PROVIDER_ID.CUSTOM &&
        activeAccount.name === "kibisis"
      ) {
        const algorand = window.algorand;
        if (!algorand) {
          throw new Error("no wallets are installed!");
        }
        const wallets = algorand.getWallets();
        const wallet = await algorand.enable({
          genesisHash: getGenesisHash(node),
        });

        const result = await window.algorand.signTxns({
          txns: txns.map((el) => {
            return {
              txn: el,
            };
          }),
        });
        let signedTransactionBytes;
        signedTransactionBytes = result.stxns.map(
          (stxn) => new Uint8Array(Buffer.from(stxn, "base64"))
        );
        const res = await algodClient
          .sendRawTransaction(signedTransactionBytes)
          .do();
        await waitForConfirmation(algodClient, res.txId, 4);
      } else if (
        [PROVIDER_ID.KIBISIS, PROVIDER_ID.DEFLY, PROVIDER_ID.LUTE].includes(
          activeAccount.providerId
        )
      ) {
        const stxns = await signTransactions(
          txns.map((el) => new Uint8Array(Buffer.from(el, "base64")))
        );
        const res = await algodClient.sendRawTransaction(stxns).do();
        await waitForConfirmation(algodClient, res.txId, 4);
      } else {
        throw new Error("Unsupported wallet");
      }
    },
    [activeAccount]
  );

  useEffect(() => {
    try {
      if (activeAccount && !balance) {
        const { algodClient, indexerClient } = getAlgorandClients();
        const ci = new arc200(VIA, algodClient, indexerClient, {
          acc: { addr: activeAccount.address },
        });
        ci.arc200_balanceOf(activeAccount.address).then((arc200_balanceR) => {
          console.log({ arc200_balanceR });
          if (!arc200_balanceR.success)
            throw new Error("arc200_balanceOf failed");
          const arc200_balance = arc200_balanceR.returnValue;
          setBalance2(Number(arc200_balance));
        });
        const VIASA = 27704545;
        const assetId = VIASA;
        indexerClient
          .lookupAccountAssets(activeAccount.address)
          .assetId(assetId)
          .do()
          .then(({ assets: [{ amount: balance }] }) => {
            setBalance(balance);
          });
      }
    } catch (e) {
      console.log(e);
    }
  }, [activeAccount, balance]);

  const handleWithdraw = useCallback(() => {
    try {
      if (activeAccount) {
        (async () => {
          setLoading(true);
          const inputStr = window.prompt(
            "Enter VIASA amount to convert to VIA:"
          );
          if (!inputStr) throw new Error("invalid number");
          const num = Number(inputStr);
          if (isNaN(num)) throw new Error("invalid number");
          const amt = num * 10 ** 6;
          const amtBi = bigNumberToBigInt(bigNumberify(amt));
          const { algodClient, indexerClient } = getAlgorandClients();
          // optint
          if (doOptin) {
            setMessage("Signing optin transaction...");
            const suggestedParams = await algodClient
              .getTransactionParams()
              .do();
            const txn =
              algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
                from: activeAccount.address,
                to: activeAccount.address,
                amount: 0,
                assetIndex: VIASA,
                suggestedParams,
              });
            await signTransaction([
              Buffer.from(txn.toByte()).toString("base64"),
            ]);
          }
          const ci2 = new CONTRACT(
            ctcInfo,
            algodClient,
            indexerClient,
            {
              name: "VIASAw",
              desc: "Convert VIA to VIASA",
              methods: [
                {
                  name: "deposit",
                  desc: "",
                  readonly: false,
                  args: [{ type: "uint64" }],
                  returns: { type: "void" },
                },
                {
                  name: "withdraw",
                  desc: "",
                  readonly: false,
                  args: [{ type: "uint64" }],
                  returns: { type: "void" },
                },
              ],
              events: [],
            },
            { addr: activeAccount.address }
          );
          setMessage("Signing withdraw transaction...");
          ci2.setFee(2000);
          ci2.setAssetTransfers([[amt, VIASA]]);
          const withdrawR = await ci2.withdraw(amtBi);
          console.log({ withdrawR });
          if (!withdrawR.success) throw new Error("withdraw failed");
          await signTransaction(withdrawR.txns);
          alert("Transaction successful!");
          setBalance(null);
          setBalance2(null);
        })();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setMessage("Add or remove VIASA holdings");
    }
  }, [activeAccount, balance, doOptin, signTransaction]);

  const handleDeposit = () => {
    if (!activeAccount) return;
    setLoading(true);
    console.log({ activeAccount, balance });
    try {
      (async () => {
        const inputStr = window.prompt("Enter VIA amount to convert to VIASA:");
        if (!inputStr) throw new Error("invalid number");
        const num = Number(inputStr);
        if (isNaN(num)) throw new Error("invalid number");
        const amt = num * 10 ** 6;
        const { algodClient, indexerClient } = getAlgorandClients();
        // optint
        if (doOptin) {
          setMessage("Signing optin transaction...");
          const suggestedParams = await algodClient.getTransactionParams().do();
          const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject(
            {
              from: activeAccount.address,
              to: activeAccount.address,
              amount: 0,
              assetIndex: VIASA,
              suggestedParams,
            }
          );
          await signTransaction([Buffer.from(txn.toByte()).toString("base64")]);
        }
        const ci = new arc200(VIA, algodClient, indexerClient, {
          acc: { addr: activeAccount.address },
        }); // VIA
        // create box (once)
        // const arc200_transferR = await ci.arc200_transfer(
        //   algosdk.getApplicationAddress(ctcInfo),
        //   0
        // );
        // if (!arc200_transferR.success)
        //   throw new Error("arc200_transfer failed");
        // await signTransaction(arc200_transferR.txns);
        // const arc200_totalSupplyR = await ci.arc200_totalSupply();
        // if (!arc200_totalSupplyR.success)
        //   throw new Error("arc200_totalSupply failed");
        // const arc200_totalSupply = arc200_totalSupplyR.returnValue;
        // get approval
        const arc200_allowanceR = await ci.arc200_allowance(
          activeAccount.address,
          algosdk.getApplicationAddress(ctcInfo)
        );
        if (!arc200_allowanceR.success)
          throw new Error("arc200_allowance failed");
        const arc200_allowance = arc200_allowanceR.returnValue;
        console.log({ arc200_allowance, amt });
        // approve spend
        if (amt > Number(arc200_allowance)) {
          setMessage("Signing approve transaction...");
          const arc200_approveR = await ci.arc200_approve(
            algosdk.getApplicationAddress(ctcInfo),
            amt
          );
          if (!arc200_approveR.success)
            throw new Error("arc200_approve failed");
          await signTransaction(arc200_approveR.txns);
        }
        const ci2 = new CONTRACT(
          ctcInfo,
          algodClient,
          indexerClient,
          {
            name: "VIASAw",
            desc: "Convert VIA to VIASA",
            methods: [
              {
                name: "deposit",
                desc: "",
                readonly: false,
                args: [{ type: "uint64" }],
                returns: { type: "void" },
              },
            ],
            events: [],
          },
          { addr: activeAccount.address }
        );
        setMessage("Signing deposit transaction...");
        ci2.setFee(3000);
        const depositR = await ci2.deposit(amt);
        console.log({ depositR });
        if (!depositR.success) throw new Error("deposit failed");
        await signTransaction(depositR.txns);
        alert("Transaction successful!");
        setBalance(null);
        setBalance2(null);
        setMessage("Add or remove VIASA holdings");
      })();

      // approve
      // transfer
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    "Loading..."
  ) : (
    <Stack
      sx={{
        width: "100%",
      }}
      spacing={2}
    >
      <Typography variant="h6">VIA/VIASA Exchange</Typography>
      <Typography
        variant="body1"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <span>VIA</span>
        <span>{(balance2 / 1e6).toLocaleString()}</span>
      </Typography>
      <Typography
        variant="body1"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <span>VIASA</span>
        <span>{(balance / 1e6).toLocaleString()}</span>
      </Typography>
      <Typography variant="body2">{message}</Typography>
      <ButtonGroup fullWidth>
        <Button variant="contained" color="secondary" onClick={handleWithdraw}>
          -
        </Button>
        <Button variant="contained" color="primary" onClick={handleDeposit}>
          +
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

export default TokenDisplay;
