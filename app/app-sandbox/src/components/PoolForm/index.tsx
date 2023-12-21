import React, { useCallback, useEffect, useMemo } from "react";
import {
  TextField,
  Button,
  Box,
  Container,
  Stack,
  Typography,
  ButtonGroup,
  Tooltip,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import CONTRACT from "arccjs";
import { getAlgorandClients } from "../../utils/algorand";
import { PROVIDER_ID, useWallet } from "@txnlab/use-wallet";
import { toast } from "react-toastify";

import { useDebounce } from "usehooks-ts";

import arc200Schema from "../../abis/arc200.json";
import swap200Schema from "../../abis/swap200.json";
import { getCurrentNode, getGenesisHash } from "../../utils/reach";
import LoadingIndicator from "../LoadingIndicator";
import { getApplicationAddress, waitForConfirmation } from "algosdk";

import ARC200Service from "../../services/ARC200Service";
import {
  bigNumberToBigInt,
  bigNumberify,
  formatWithDecimals,
} from "../../common/utils/bn";

import convertToAtomicUnit from "../../common/utils/convertToAtomicUnit";
import convertToStandardUnit from "../../common/utils/convertToStandardUnit";
import BigNumber from "bignumber.js";

import BoltIcon from "@mui/icons-material/Bolt";
import HelpIcon from "@mui/icons-material/Help";

const { indexerClient, algodClient } = getAlgorandClients();

// contractjs funcs

//  swap

const getBalance = async (ctcInfo: number, address: string) => {
  const ci = new CONTRACT(ctcInfo, algodClient, indexerClient, arc200Schema);
  const balanceR = await ci.arc200_balanceOf(address);
  if (!balanceR.success) return; // TODO: Handle error
  return balanceR.returnValue;
};

const getAllowance = async (
  ctcInfo: number,
  addressOwner: string,
  addressSpender: string
) => {
  const ci = new CONTRACT(ctcInfo, algodClient, indexerClient, arc200Schema);
  const allowanceR = await ci.arc200_allowance(addressOwner, addressSpender);
  if (!allowanceR.success) return; // TODO: Handle error
  return allowanceR.returnValue;
};

const transfer = async (
  ctcInfo: number,
  addressFrom: string,
  addressTo: string,
  amount: bigint
) => {
  const ci = new CONTRACT(ctcInfo, algodClient, indexerClient, arc200Schema, {
    addr: addressFrom,
  });
  ci.setFee(2000);
  ci.paymentAmount = 28500;
  const res = await ci.arc200_transfer(addressTo, amount);
  if (!res.success) throw new Error("arc200_transfer failed");
  return res;
};

const Info = async (ctcInfo: number) => {
  const ci = new CONTRACT(ctcInfo, algodClient, indexerClient, swap200Schema);
  const InfoR = await ci.Info();
  if (!InfoR.success) throw new Error("Info failed");
  return InfoR.returnValue;
};

const v_deposit = async (ctcInfo: number, address: string, lp: bigint[]) => {
  const res = await deposit(ctcInfo, address, lp, 0n);
  return res.returnValue;
};

const deposit = async (
  ctcInfo: number,
  addr: string,
  lp: bigint[],
  ol: bigint
) => {
  const ci = new CONTRACT(ctcInfo, algodClient, indexerClient, swap200Schema, {
    addr,
  });
  /*
  const reserveR = await ci.reserve(addr);
  if (!reserveR.success) throw new Error("getReserves failed");
  const reserve = reserveR.returnValue;
  */
  ci.setFee(2000);
  ci.setPaymentAmount(28500);
  //const arg = [reserve[0], reserve[1]];
  const res = await ci.Provider_deposit(lp, ol);
  if (!res.success) throw new Error("Provider_depositR failed");
  return res;
};

const v_withdraw = async (ctcInfo: number, address: string, lp: bigint) => {
  const res = await withdraw(ctcInfo, address, lp, [0n, 0n]);
  return res.returnValue;
};

const withdraw = async (
  ctcInfo: number,
  addr: string,
  lp: bigint,
  outsl: bigint[]
) => {
  const ci = new CONTRACT(ctcInfo, algodClient, indexerClient, swap200Schema, {
    addr,
  });
  ci.setFee(2000);
  ci.setPaymentAmount(28500);
  const res = await ci.Provider_withdraw(lp, outsl);
  if (!res.success) throw new Error("Provider_withdraw failed");
  return res;
};

//  swap

const getEvents = async (ctcInfo: number) => {
  const ci = new CONTRACT(ctcInfo, algodClient, indexerClient, arc200Schema);
  const res = await ci.getEvents();
  return res;
};

const getReserve = async (ctcInfo: number, address: string) => {
  const ci = new CONTRACT(ctcInfo, algodClient, indexerClient, swap200Schema);
  const res = await ci.reserve(address);
  if (!res.success) throw new Error("getReserves failed");
  return res.returnValue;
};

const swap = async (
  ctcInfo: number,
  address: string,
  amount: bigint,
  swapAForB = true
) => {
  const ci = new CONTRACT(ctcInfo, algodClient, indexerClient, swap200Schema, {
    addr: address,
  });
  ci.setFee(4000);
  ci.paymentAmount = 28500 * 2;
  const res = swapAForB
    ? await ci.Trader_swapAForB(amount, 0)
    : await ci.Trader_swapBForA(amount, 0);
  if (!res.success) throw new Error("Trader_swapAForB failed");
  return res;
};

const v_Swap = async (
  ctcInfo: number,
  address: string,
  amount: bigint,
  swapAForB = true
) => {
  const res = await swap(ctcInfo, address, amount, swapAForB);
  return res.returnValue;
};

const doSwap = async (
  ctcInfo: number,
  address: string,
  amount: bigint,
  swapAForB = true
) => {
  const res = await swap(ctcInfo, address, amount, swapAForB);
  if (!res.success) throw new Error("swap failed");
  return res;
};

const doWithdraw = async (
  ctcInfo: number,
  address: string,
  amt: bigint,
  swapDirection = true
) => {
  const ci = new CONTRACT(ctcInfo, algodClient, indexerClient, swap200Schema, {
    addr: address,
  });
  ci.setFee(4000);
  ci.paymentAmount = 28500 * 2;
  const method = swapDirection ? "Provider_withdrawA" : "Provider_withdrawB";
  const res = await ci[method](amt);
  if (!res.success) throw new Error(`${method} failed`);
  return res.txns;
};

const doApprove = async (
  ctcInfo: number,
  address: string,
  addrSpender: string,
  amount: bigint
) => {
  const ci = new CONTRACT(ctcInfo, algodClient, indexerClient, arc200Schema, {
    addr: address,
  });
  ci.setFee(2000);
  ci.paymentAmount = 28500;
  const res = await ci.arc200_approve(addrSpender, amount);
  if (!res.success) throw new Error("arc200_approve failed");
  return res;
};

// end contractjs funcs

// algsdk funcs

const waitForTxn = async (txId: string, rounds = 4) =>
  await waitForConfirmation(algodClient, txId, rounds);

// end algsdk funcs

const poolList: any = { "23215100": { tokA: 6779767, tokB: 6778021 } };
const tokenList: any = {
  "6778021": {
    name: "VRC200",
    symbol: "VRC200",
    decimals: 8,
    totalSupply: 1000000000000000,
  },
  "6779767": {
    name: "Voi Incentive Asset",
    symbol: "VIA",
    decimals: 6,
    totalSupply: 10000000000000000,
  },
  "23215100": {
    name: "ARC200 LP - VIA/VRC200",
    symbol: "ARC200LT",
    decimals: 6,
    totalSupply: 115792089237316195423570985008687907853269984665640564039457584007913129639935,
    isPool: true,
  },
};
const tokenA = "6779767";
const tokenB = "6778021";

interface PoolFormProps {
  // Define any props if needed
}

interface Tokens {
  tokenA: string;
  tokenB: string;
}

const PoolForm: React.FC<PoolFormProps> = () => {
  const { activeAccount } = useWallet();
  const [tokens, setTokens] = React.useState<Tokens>({
    tokenA: "",
    tokenB: "",
  });
  const debouncedValue = useDebounce<Tokens>(tokens, 500);
  const [swapDirection, setSwapDirection] = React.useState<boolean>(true);
  const [balances, setBalances] = React.useState<any>({});
  const [allowances, setAllowances] = React.useState<any>({});
  const [reserves, setReserves] = React.useState<bigint[]>([0n, 0n]);
  const [output, setOutput] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [version, setVersion] = React.useState<number>(0);
  const [message, setMessage] = React.useState<string>("");
  const [allowance, setAllowance] = React.useState<string>("");
  const [step, setStep] = React.useState<number>(0);
  const [approval, setApproval] = React.useState<string>("");
  const [poolBals, setPoolBals] = React.useState<bigint[]>([0n, 0n]);
  const [lptBals, setLptBals] = React.useState<bigint[]>([0n, 1n]);
  const [balance, setBalance] = React.useState<bigint>(0n);
  const [share, setShare] = React.useState<string>("");
  const [receive, setReceive] = React.useState<bigint>(0n);
  const [newShare, setNewShare] = React.useState<string>("");
  const [tokenEvents, setTokenEvents] = React.useState<any[]>([]);
  const [ntokenEvents, setNTokenEvents] = React.useState<any[]>([]);

  const ctcInfo = 23223146;

  const ctcAddr = useMemo(() => getApplicationAddress(ctcInfo), []);

  const token = useMemo(() => {
    const token = swapDirection ? tokenA : tokenB;
    return { ...tokenList[token], id: Number(token) };
  }, []);

  const ntoken = useMemo(() => {
    const token = swapDirection ? tokenB : tokenA;
    return { ...tokenList[token], id: Number(token) };
  }, []);

  const rate = useMemo(() => {
    const [a, b] = poolBals;
    if (a === 0n || b === 0n) return;
    const aBn = new BigNumber(a.toString()).dividedBy(10 ** token.decimals);
    const bBn = new BigNumber(b.toString()).dividedBy(10 ** ntoken.decimals);
    const rate = aBn.dividedBy(bBn);
    return rate;
  }, [token, ntoken, poolBals]);

  const redeamable = useMemo(() => {
    if (!reserves || !rate) return null;
    const list = [];
    const token0: any = tokenList[tokenA];
    const token1: any = tokenList[tokenB];
    const tokABn = new BigNumber(reserves[0].toString()).dividedBy(
      10 ** token0.decimals
    );
    const tokBBn = new BigNumber(reserves[1].toString()).dividedBy(
      10 ** token1.decimals
    );
    const outl = [];
    const outB = tokABn.dividedBy(rate);
    const out1 = [
      BigInt(tokABn.multipliedBy(10 ** token.decimals).toFixed(0)),
      BigInt(outB.multipliedBy(10 ** ntoken.decimals).toFixed(0)),
    ];
    if (out1[1] <= reserves[1]) {
      outl.push(out1);
    }
    const outA = tokBBn.multipliedBy(rate);
    const out2 = [
      BigInt(outA.multipliedBy(10 ** token.decimals).toFixed(0)),
      BigInt(tokBBn.multipliedBy(10 ** ntoken.decimals).toFixed(0)),
    ];
    if (out2[0] <= reserves[0]) {
      outl.push(out2);
    }
    if (outl.length === 0) return null;
    const out =
      outl.length === 1 ? outl[0] : outl[0][0] < outl[1][0] ? outl[0] : outl[1];
    list.push({
      id: Number(token0.id),
      number: out[0],
      symbol: token0.symbol,
      decimals: token0.decimals,
      swapDirection: true,
    });
    list.push({
      id: Number(token1.id),
      number: out[1],
      symbol: token1.symbol,
      decimals: token1.decimals,
      swapDirection: false,
    });
    return list;
  }, [reserves, rate, token, ntoken]);

  /*
  useEffect(() => {
    getEvents(token.id).then(setTokenEvents);
  }, [token]);

  useEffect(() => {
    getEvents(ntoken.id).then(setNTokenEvents);
  }, [ntoken]);
  */

  useEffect(() => {
    if (!activeAccount) return;
    getBalance(ctcInfo, activeAccount.address).then(setBalance);
  }, [activeAccount, version]);

  useEffect(() => {
    if (!activeAccount) return;
    const [, lpMinted] = lptBals;
    const precision = bigNumberify(10).pow(10);
    const balanceBn = bigNumberify(balance);
    const lpMintedBn = bigNumberify(lpMinted);
    const share = lpMintedBn.eq(bigNumberify(0))
      ? "0"
      : formatWithDecimals(
          balanceBn.mul(precision).div(lpMintedBn).div(bigNumberify(100)),
          6
        );
    setShare(share);
  }, [activeAccount, version, balance, lptBals]);

  useEffect(() => {
    if (!activeAccount) return;
    const [, lpMinted] = lptBals;
    const precision = bigNumberify(10).pow(10);
    const balanceBn = bigNumberify(balance);
    const lpMintedBn = bigNumberify(lpMinted);
    const share = lpMintedBn.eq(bigNumberify(0))
      ? "0"
      : formatWithDecimals(
          balanceBn
            .add(receive)
            .mul(precision)
            .div(lpMintedBn.add(receive))
            .div(bigNumberify(100)),
          6
        );
    setNewShare(share);
  }, [activeAccount, version, balance, lptBals, receive]);

  useEffect(() => {
    if (!activeAccount || !redeamable) return;
    v_deposit(
      ctcInfo,
      activeAccount.address,
      redeamable.map(({ number }) => number)
    ).then(setReceive);
  }, [activeAccount, redeamable]);

  useEffect(() => {
    (async () => {
      // ["lptBals", Bals],
      // ["poolBals", Bals],
      // ["protoInfo", ProtocolInfo],
      // ["protoBals", Bals],
      // ["tokB", TokenT],
      // ["tokA", TokenT],
      const [lptBals, poolBals, protoInfo, protoBals, tokB, tokA] = await Info(
        ctcInfo
      );
      console.log({
        lptBals,
        poolBals,
        protoInfo,
        protoBals,
        tokB,
        tokA,
      });
      setLptBals(lptBals);
      setPoolBals(poolBals);
    })();
  }, [version]);

  useEffect(() => {
    if (!activeAccount) return;
    (async () => {
      const tokens = Object.entries(tokenList)
        .filter(([k, v]) => [tokenA, tokenB].includes(k))
        .map(([k, v]) => {
          return Number(k);
        });
      const balances_ = await Promise.all(
        tokens.map((t: any) => getBalance(t, activeAccount.address))
      );
      const balances: any = {};
      tokens.forEach((t, i) => {
        balances[`${t}`] = balances_[i];
      });
      setBalances(balances);
    })();
  }, [activeAccount, version]);

  useEffect(() => {
    if (!activeAccount) return;
    (async () => {
      const tokens = Object.entries(tokenList)
        .filter(([k, v]) => [tokenA, tokenB].includes(k))
        .map(([k, v]) => {
          return Number(k);
        });
      const allowances_ = await Promise.all(
        tokens.map((t: any) => getAllowance(t, activeAccount.address, ctcAddr))
      );
      const allowances: any = {};
      tokens.forEach((t, i) => {
        allowances[`${t}`] = allowances_[i];
      });
      setAllowances(allowances);
    })();
  }, [activeAccount, version]);

  useEffect(() => {
    if (!activeAccount) return;
    (async () => {
      const reserves_ = await getReserve(ctcInfo, activeAccount.address);
      setReserves(reserves_);
    })();
  }, [activeAccount, version]);

  useEffect(() => {
    if (!activeAccount || !balances || !allowances || !reserves) return;
    const timeout = setTimeout(() => {
      setStep(2);
    }, 500);
    return () => clearTimeout(timeout);
  }, [activeAccount, version, balances, allowances, reserves]);

  const signTransaction = useCallback(
    async (txns: string[]) => {
      if (!activeAccount) return;
      if (
        activeAccount.providerId === PROVIDER_ID.CUSTOM &&
        activeAccount.name === "kibisis"
      ) {
        const algorand = (window as any).algorand;
        if (!algorand) {
          throw new Error("no wallets are installed!");
        }
        const [node] = getCurrentNode();
        const wallets = algorand.getWallets();
        const wallet = await algorand.enable({
          genesisHash: getGenesisHash(node),
        });
        const { algodClient, indexerClient } = getAlgorandClients();
        const result = await (window as any).algorand.signTxns({
          txns: txns.map((el) => {
            return {
              txn: el,
            };
          }),
        });
        let signedTransactionBytes;
        signedTransactionBytes = result.stxns.map(
          (stxn: string) => new Uint8Array(Buffer.from(stxn, "base64"))
        );
        const res = await algodClient
          .sendRawTransaction(signedTransactionBytes)
          .do();
        return res.txId;
      }
    },
    [activeAccount, allowance]
  );

  const handleApproveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApproval(e.target.value);
  };

  const handleTokenASwap = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const newToken = e.target.value;
      if (swapDirection) {
        setTokens({ ...tokens, tokenA: newToken });
      } else {
        setTokens({ ...tokens, tokenB: newToken });
      }
    },
    [swapDirection]
  );

  const handleWithdrawButtonClick = useCallback(async () => {
    try {
      setLoading(true);
      setMessage("Signature pending...");
      const r = reserves[swapDirection ? 0 : 1];
      const txns = await doWithdraw(
        ctcInfo,
        activeAccount.address,
        r,
        swapDirection
      );
      const txId = await signTransaction(txns);
      setMessage("Waiting for confirmation...");
      await waitForTxn(txId);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [reserves, swapDirection]);

  const handleMaxButtonClick = useCallback(
    (el: number) => {
      const newValue = ((tot) => (el === 100 ? tot : (tot * el) / 100))(
        Number(balances[token.id]) / 10 ** token.decimals
      ).toFixed(token.decimals);
      if (swapDirection) {
        setTokens({ ...tokens, tokenA: newValue.toString() });
      } else {
        setTokens({ ...tokens, tokenB: newValue.toString() });
      }
    },
    [reserves, swapDirection, balances, token]
  );

  const handleApproveMaxButtonClick = useCallback(
    (el: number) => {
      const newValue =
        ((Number(balances[token.id]) / 10 ** token.decimals) * el) / 100;
      setApproval(newValue.toFixed(token.decimals));
    },
    [balances, token]
  );

  const handleApprove = useCallback(async () => {
    try {
      setLoading(true);
      setMessage("Signature pending...");
      const res = await doApprove(
        token.id,
        activeAccount.address,
        ctcAddr,
        bigNumberToBigInt(
          bigNumberify(
            convertToAtomicUnit(
              new BigNumber(approval),
              token.decimals
            ).toString()
          )
        )
      );
      const { txns } = res;
      const txId = await signTransaction(txns);
      setMessage("Waiting for confirmation...");
      await waitForTxn(txId);
      const msg = "+" + approval + " " + token.symbol;
      toast(
        <div>
          Approve successful!
          <br />
          {msg}
        </div>
      );
      setVersion(version + 1);
      setTokens({ tokenA: "", tokenB: "" });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [activeAccount, swapDirection, tokens, approval, token]);

  const handleRedeem = useCallback(
    async (token: any) => {
      try {
        setLoading(true);
        setMessage("Signature pending...");

        const bal = await getBalance(token.id, activeAccount.address);
        if (bal === 0n) {
          setMessage("Signature pending (1 of 2)...");
          const res = await transfer(
            token.id,
            activeAccount.address,
            activeAccount.address,
            0n
          );
          const txId = await signTransaction(res.txns);
          setMessage("Waiting for confirmation (1 of 2)...");
          await waitForTxn(txId);
          setMessage("Signature pending (2 of 2)...");
        }

        const txns = await doWithdraw(
          ctcInfo,
          activeAccount.address,
          token.number,
          token.swapDirection
        );
        const txId = await signTransaction(txns);

        if (bal === 0n) {
          setMessage("Waiting for confirmation (2 of 2)...");
        } else {
          setMessage("Waiting for confirmation...");
        }
        await waitForTxn(txId);
        setVersion(version + 1);
        toast(
          <div>
            Redeem successful!
            <br />
            {"+" +
              formatWithDecimals(token.number, token.decimals) +
              " " +
              token.symbol}
          </div>
        );
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    },
    [activeAccount, version]
  );

  const parseWithDecimals = (amount: string, decimals: number) => {
    const [l, r] = amount.split(".");
    const lbn = bigNumberify(l).mul(
      bigNumberify(10).pow(bigNumberify(decimals))
    );
    if (r) {
      const rbn = bigNumberify(r.padEnd(decimals, "0").slice(0, decimals));
      return lbn.add(rbn);
    } else {
      return lbn;
    }
  };

  const handleAdd = useCallback(async () => {
    if (!redeamable) return;
    try {
      setLoading(true);
      setMessage("Adding liquidty...");
      const res = await deposit(
        ctcInfo,
        activeAccount.address,
        redeamable.map(({ number }) => number),
        receive
      );
      console.log({ res });
      const { txns } = res;
      setMessage("Pending signature...");
      const txId = await signTransaction(txns);
      setMessage("Waiting for confirmation...");
      await waitForTxn(txId);
      const msg = "";
      toast(
        <div>
          Add successful!
          <br />
          {msg}
        </div>
      );
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setVersion(version + 1);
    }
  }, [
    activeAccount,
    swapDirection,
    tokens,
    allowance,
    token,
    ntoken,
    version,
    redeamable,
  ]);

  const handleRemove = useCallback(async () => {
    try {
      setLoading(true);
      setMessage("Transaction pending...");
      const allowance = await getAllowance(
        ctcInfo,
        activeAccount.address,
        ctcAddr
      );
      if (allowance < balance) {
        const { txns } = await doApprove(
          ctcInfo,
          activeAccount.address,
          ctcAddr,
          balance
        );
        const txId = await signTransaction(txns);
        await waitForTxn(txId);
      }
      const outsl = await v_withdraw(ctcInfo, activeAccount.address, balance);
      const { txns } = await withdraw(
        ctcInfo,
        activeAccount.address,
        balance,
        outsl
      );
      const txId = await signTransaction(txns);
      await waitForTxn(txId);
      const msg = "-" + balance + " " + token.symbol;
      toast(
        <div>
          Remove successful!
          <br />
          {msg}
        </div>
      );
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setVersion(version + 1);
    }
  }, [balance]);

  const handleSwitchDirection = useCallback(() => {
    setSwapDirection(!swapDirection);
    setTokens({ tokenA: "", tokenB: "" });
    // You can add logic here to switch the direction of the swap
  }, [swapDirection]);

  if (!redeamable) return null;
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      {step === 0 || loading ? (
        <LoadingIndicator message={message} />
      ) : (
        <Stack sx={{ minWidth: "300px", width: "500px", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              spacing: 2,
              gap: 1,
            }}
          >
            <Typography variant="h5">TVL</Typography>
            <Typography variant="h5">
              {Number(
                formatWithDecimals(poolBals[0] * 2n, token.decimals)
              ).toLocaleString()}{" "}
              {token.symbol}
            </Typography>
            <Tooltip
              title={
                <div>
                  Total Value Locked:
                  <br />
                  {Number(
                    formatWithDecimals(poolBals[0], token.decimals)
                  ).toLocaleString()}{" "}
                  {token.symbol} +{" "}
                  {Number(
                    formatWithDecimals(poolBals[1], ntoken.decimals)
                  ).toLocaleString()}{" "}
                  {ntoken.symbol}
                </div>
              }
            >
              <HelpIcon fontSize="medium" />
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              spacing: 2,
              gap: 1,
            }}
          >
            <Typography variant="h5">Total Minted</Typography>
            <Typography variant="h5">
              {Number(formatWithDecimals(lptBals[1], 6)).toLocaleString()} LPT
            </Typography>
            <Tooltip title={<div>LPT, Liquidity Provider Token</div>}>
              <HelpIcon fontSize="medium" />
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              spacing: 2,
              gap: 1,
            }}
          >
            <Typography variant="h5">Your Share</Typography>
            <Typography variant="h5">{share}%</Typography>
            <Tooltip
              title={
                <div>
                  Balance:
                  <br />
                  {Number(formatWithDecimals(balance, 6)).toLocaleString()}{" "}
                  ARC200LP
                </div>
              }
            >
              <HelpIcon fontSize="medium" />
            </Tooltip>
          </Box>
          {step === 2 && (
            <Stack sx={{ minWidth: "300px", width: "500px", gap: 5 }}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <Stack
                  direction="row"
                  gap={5}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Stack direction="row" gap={5}>
                    <Typography variant="caption">
                      Balance:{" "}
                      {!balances[swapDirection ? tokenA : tokenB]
                        ? "-"
                        : (
                            Number(balances[swapDirection ? tokenA : tokenB]) /
                            10 **
                              tokenList[swapDirection ? tokenA : tokenB]
                                .decimals
                          ).toLocaleString()}
                    </Typography>
                    <Typography variant="caption">
                      Allowance:{" "}
                      {!allowances[tokenA]
                        ? "-"
                        : formatWithDecimals(
                            allowances[tokenA],
                            token.decimals
                          )}
                    </Typography>
                  </Stack>
                  {/*
                  <Box>
                    <ButtonGroup size="small" variant="outlined">
                      {[0, 50, 100].map((el) => (
                        <Tooltip
                          key={`swap-${el}`}
                          title="Set Approval to Balance"
                        >
                          <Button onClick={() => handleMaxButtonClick(el)}>
                            {el}%
                          </Button>
                        </Tooltip>
                      ))}
                    </ButtonGroup>
                  </Box>
                      */}
                </Stack>
                <TextField
                  disabled
                  label={tokenList[swapDirection ? tokenA : tokenB].symbol}
                  value={formatWithDecimals(
                    bigNumberify(redeamable[0]?.number ?? 0),
                    token.decimals
                  )}
                  fullWidth
                  type="number"
                />

                <Button
                  variant="text"
                  onClick={() => {}}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  +
                </Button>
                <Box sx={{ textAlign: "left" }}></Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Stack direction="row" gap={5}>
                    <Typography variant="caption">
                      Balance:{" "}
                      {!balances[swapDirection ? tokenB : tokenA]
                        ? "-"
                        : (
                            Number(balances[swapDirection ? tokenB : tokenA]) /
                            10 **
                              tokenList[swapDirection ? tokenB : tokenA]
                                .decimals
                          ).toLocaleString()}
                    </Typography>
                    <Typography variant="caption">
                      Allowance:{" "}
                      {!allowances[tokenB]
                        ? "-"
                        : formatWithDecimals(
                            allowances[tokenB],
                            ntoken.decimals
                          )}
                    </Typography>
                  </Stack>
                </Box>
                <TextField
                  disabled
                  label={tokenList[swapDirection ? tokenB : tokenA].symbol}
                  value={formatWithDecimals(
                    bigNumberify(redeamable[1]?.number ?? 0),
                    ntoken.decimals
                  )}
                  fullWidth
                  type="number"
                />
              </div>
              <Box>
                You will receive {formatWithDecimals(bigNumberify(receive), 6)}{" "}
                LPT (new share: {newShare}%)
              </Box>
              <Button
                size="large"
                fullWidth
                variant="contained"
                onClick={handleAdd}
              >
                Add Liquidity
              </Button>
              <Button
                size="large"
                fullWidth
                variant="outlined"
                onClick={handleRemove}
              >
                Remove Liquidity
              </Button>
            </Stack>
          )}
        </Stack>
      )}
    </Container>
  );
};

export default PoolForm;
