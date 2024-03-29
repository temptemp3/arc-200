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
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
// //import CONTRACT from "arccjs";
import { getAlgorandClients } from "../../utils/algorand";
import { PROVIDER_ID, useWallet } from "@txnlab/use-wallet";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import algosdk from "algosdk";

import { useDebounce } from "usehooks-ts";

//import swap200 from "swap200js";

import arc200Schema from "../../abis/arc200.json";
import swap200Schema from "../../abis/swap200.json";
import { getCurrentNode, getGenesisHash, makeStdLib } from "../../utils/reach";
import LoadingIndicator from "../LoadingIndicator";
import { getApplicationAddress, waitForConfirmation } from "algosdk";

import {
  bigNumberToBigInt,
  bigNumberify,
  formatWithDecimals,
} from "../../common/utils/bn";

import { CONTRACT, swap200, arc200 } from "ulujs";

import convertToAtomicUnit from "../../common/utils/convertToAtomicUnit";
import convertToStandardUnit from "../../common/utils/convertToStandardUnit";

import BigNumber from "bignumber.js";

/*
 * prepareString
 * - prepare string (strip trailing null bytes)
 * @param str: string to prepare
 * @returns: prepared string
 */
const prepareString = (str: string) => {
  const index = str.indexOf("\x00");
  if (index > 0) {
    return str.slice(0, str.indexOf("\x00"));
  } else {
    return str;
  }
};

const { indexerClient, algodClient } = getAlgorandClients();

const stdlib: any = makeStdLib();

// contractjs funcs

// contract

const getEvents = async (ctcInfo: number) => {
  const ci = new CONTRACT(ctcInfo, algodClient, indexerClient, swap200Schema);
  const res = await ci.getEvents();
  return res;
};

//  arc200

const getMetadata = async (ctcInfo: number) => {
  const ci = new arc200(ctcInfo, algodClient, indexerClient);
  const res = await ci.getMetadata();
  if (!res.success) throw new Error("getMetadata failed");
  const tm = res.returnValue;
  const tmf = {
    ...tm,
    name: prepareString(String(tm.name)),
    symbol: prepareString(String(tm.symbol)),
  };
  console.log({ tmf });
  return tmf;
};

const getBalance = async (ctcInfo: number, address: string) => {
  const ci = new CONTRACT(ctcInfo, algodClient, indexerClient, arc200Schema);
  const balanceR = await ci.arc200_balanceOf(address);
  console.log({ balanceR });
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
  const ci = new swap200(ctcInfo, algodClient, indexerClient, {
    acc: { addr: addressFrom, sk: new Uint8Array(0) },
  });
  const res = await ci.arc200_transfer(addressTo, amount, true, false);
  if (!res.success) throw new Error("arc200_transfer failed");
  return res;
};

const doApprove = async (
  ctcInfo: number,
  address: string,
  addrSpender: string,
  amount: bigint
) => {
  const ci = new swap200(ctcInfo, algodClient, indexerClient, {
    acc: { addr: address, sk: new Uint8Array(0) },
  });
  const res = await ci.arc200_approve(addrSpender, amount, true, false);
  if (!res.success) throw new Error("arc200_approve failed");
  return res;
};

// ---

// swap

// ---

const getReserve = async (ctcInfo: number, address: string) => {
  const ci = new swap200(ctcInfo, algodClient, indexerClient);
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
  const abi: any = {
    name: "",
    desc: "",
    methods: [
      {
        name: "custom",
        args: [],
        returns: {
          type: "void",
        },
      },
      // Trader_swapAForB(byte,uint256,uint256)(uint256,uint256)
      {
        name: "Trader_swapAForB",
        args: [{ type: "byte" }, { type: "uint256" }, { type: "uint256" }],
        returns: {
          type: "(uint256,uint256)",
        },
      },
      // Trader_swapBForA(byte,uint256,uint256)(uint256,uint256)
      {
        name: "Trader_swapBForA",
        args: [{ type: "byte" }, { type: "uint256" }, { type: "uint256" }],
        returns: {
          type: "(uint256,uint256)",
        },
      },
      {
        name: "Provider_withdrawA",
        args: [{ type: "uint256" }],
        returns: { type: "uint256" },
      },
      {
        name: "Provider_withdrawB",
        args: [{ type: "uint256" }],
        returns: { type: "uint256" },
      },
      {
        name: "createBalanceBoxes",
        desc: "Creates a balance box",
        args: [
          {
            type: "address",
          },
        ],
        returns: {
          type: "void",
        },
      },
    ],
    events: [],
  };
  // const ci = new CONTRACT(ctcInfo, algodClient, indexerClient, abi, {
  //   addr: address,
  //   sk: new Uint8Array(0),
  // });
  // console.log(ci);
  // const ci2 = new CONTRACT(
  //   24590664,
  //   //ctcInfo,
  //   algodClient,
  //   indexerClient,
  //   abi,
  //   {
  //     addr: address,
  //     sk: new Uint8Array(0),
  //   }
  // );
  // const builder = {
  //   wnt200: new CONTRACT(
  //     24590664,
  //     algodClient,
  //     indexerClient,
  //     {
  //       name: "",
  //       desc: "",
  //       methods: [
  //         {
  //           name: "deposit",
  //           args: [
  //             {
  //               name: "amount",
  //               type: "uint64",
  //               desc: "Amount to deposit",
  //             },
  //           ],
  //           returns: {
  //             type: "uint256",
  //             desc: "Amount deposited",
  //           },
  //         },
  //         {
  //           name: "createBalanceBox",
  //           args: [
  //             {
  //               type: "address",
  //               name: "Address to create balance box for",
  //             },
  //           ],
  //           returns: {
  //             type: "byte",
  //             desc: "Success",
  //           },
  //         },
  //       ],
  //       events: [],
  //     },
  //     { addr: address, sk: new Uint8Array(0) },
  //     true,
  //     false,
  //     true
  //   ),
  //   swap200: new CONTRACT(
  //     ctcInfo,
  //     algodClient,
  //     indexerClient,
  //     abi,
  //     { addr: address, sk: new Uint8Array(0) },
  //     true,
  //     false,
  //     true
  //   ),
  // };
  // const buildP = [];
  // ci.setFee(3000);
  // let r;
  // if (swapAForB) {
  //   r = await ci.Trader_swapAForB(1, Number(amount), 0);
  //   ci2.setPaymentAmount(Number(amount));
  //   buildP.push(builder.wnt200.deposit(Number(amount)));
  //   buildP.push(builder.swap200.Trader_swapAForB(0, Number(amount), 0));
  //   buildP.push(builder.swap200.Provider_withdrawB(r.returnValue[1]));
  // } else {
  //   r = await ci.Trader_swapBForA(1, Number(amount), 0);
  //   ci2.setPaymentAmount(1);
  //   buildP.push(builder.swap200.Trader_swapBForA(0, Number(amount), 0));
  //   buildP.push(builder.swap200.Provider_withdrawA(r.returnValue[0]));
  // }
  // const extraTxns = (await Promise.all(buildP)).map((el) => el.obj);
  // console.log({ r, extraTxns });
  // ci2.setFee(3000);
  // ci2.setEnableGroupResourceSharing(true);
  // //ci2.setPaymetns([[1, algosdk.getApplicationAddress(ctcInfo)]]);
  // ci2.setExtraTxns(extraTxns);
  // ci2.setAccounts([algosdk.getApplicationAddress(ctcInfo)]);
  // const customR = await ci2.custom();
  // console.log({ customR });
  // return {
  //   ...customR,
  //   returnValue: r.returnValue,
  // };

  const ci = new swap200(ctcInfo, algodClient, indexerClient, {
    acc: { addr: address, sk: new Uint8Array(0) },
  });
  const res = await ci.swap(amount, BigInt(0), swapAForB, true, false);
  if (!res.success) throw new Error("Trader_swap failed");
  return res;
};

const withdrawReserve = async (
  ctcInfo: number,
  address: string,
  amt: bigint,
  isA: boolean
) => {
  const ci = new swap200(ctcInfo, algodClient, indexerClient, {
    acc: { addr: address, sk: new Uint8Array(0) },
  });
  const res = await ci.withdrawReserve(amt, isA, true, false);
  if (!res.success) throw new Error(`withdrawReserve failed`);
  return res;
};

const getInfo = async (ctcInfo: number) => {
  const ci = new swap200(ctcInfo, algodClient, indexerClient);
  const InfoR = await ci.Info();
  if (!InfoR.success) throw new Error("Info failed");
  return InfoR.returnValue;
};

/* doSwap
 * - returns full swap response
 * @param ctcInfo
 * @param address
 * @param amount
 * @param swapAForB (default: true)
 */
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

interface SwapFormProps {
  ctcInfo: string;
  direction: boolean;
  pool: any;
  pools: any[];
  tokens: any[];
}

interface Tokens {
  tokenA: string;
  tokenB: string;
}

const SwapForm: React.FC<SwapFormProps> = (props) => {
  const { activeAccount, signTransactions } = useWallet();
  const [tokens, setTokens] = React.useState<Tokens>({
    tokenA: "",
    tokenB: "",
  });
  const [node] = getCurrentNode();
  const [pools, setPools] = React.useState<any[]>([]);
  const debouncedValue = useDebounce<Tokens>(tokens, 500);
  const [swapDirection, setSwapDirection] = React.useState<boolean>(true);
  const [balances, setBalances] = React.useState<any>({});
  const [reserves, setReserves] = React.useState<any>({});
  const [output, setOutput] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(true);
  const [version, setVersion] = React.useState<number>(0);
  const [message, setMessage] = React.useState<string>("");
  const [allowance, setAllowance] = React.useState<string>("");
  const [step, setStep] = React.useState<number>(0);
  const [approval, setApproval] = React.useState<string>("");
  const [poolBals, setPoolBals] = React.useState<bigint[]>([0n, 0n]);
  const [protoInfo, setProtoInfo] = React.useState<
    [bigint, bigint, bigint, string, number]
  >([0n, 0n, 0n, "", 0]);
  const [tokenList, setTokenList] = React.useState<any>(null);
  const [tokenA, setTokenA] = React.useState<string>("");
  const [tokenB, setTokenB] = React.useState<string>("");
  const navigate = useNavigate();

  const ctcInfo = Number(props.ctcInfo);

  const ctcAddr = useMemo(() => getApplicationAddress(ctcInfo), []);

  const token = useMemo(() => {
    if (!tokenList || tokenA === "" || tokenB === "") return {};
    const token = swapDirection ? tokenA : tokenB;
    return { ...tokenList[token], id: token };
  }, [swapDirection, tokenList, tokenA, tokenB]);

  const ntoken = useMemo(() => {
    if (!tokenList || tokenA === "" || tokenB === "") return {};
    const token = swapDirection ? tokenB : tokenA;
    return { ...tokenList[token], id: token };
  }, [swapDirection, tokenList, tokenA, tokenB]);

  const redeamable = useMemo(() => {
    if (!tokenList || tokenA === "" || tokenB === "") return [];
    const list = [];
    const token0: any = tokenList[tokenA];
    const token1: any = tokenList[tokenB];
    list.push({
      id: Number(token0.id),
      number: reserves[0],
      symbol: token0.symbol,
      decimals: token0.decimals,
      swapDirection: true,
    });
    list.push({
      id: Number(token1.id),
      number: reserves[1],
      symbol: token1.symbol,
      decimals: token1.decimals,
      swapDirection: false,
    });
    return list;
  }, [reserves, tokenList, tokenA, tokenB]);

  useEffect(() => {
    setSwapDirection(props.direction);
  }, [props.direction]);

  useEffect(() => {
    if (!props.pools) return;
    const tok = Number(swapDirection ? tokenA : tokenB);
    setPools(
      props.pools.filter(
        (p) => ctcInfo !== p.poolId && [p.tokA, p.tokB].includes(tok)
      )
    );
  }, [props.pools, props.direction, swapDirection, tokenA, tokenB]);

  useEffect(() => {
    (async () => {
      setMessage("Loading liquidity pool...");
      const [lptBals, poolBals, protoInfo, protoBals, tokB, tokA] =
        await getInfo(ctcInfo);
      setPoolBals(poolBals);
      setProtoInfo(protoInfo);
      setTokenA(`${tokA}`);
      setTokenB(`${tokB}`);
      setMessage("Loading token metadata...");
      const tokATM = await getMetadata(Number(tokA));
      const tokBTM = await getMetadata(Number(tokB));
      setTokenList({
        [tokA as unknown as string]: {
          ...tokATM,
          decimals: Number(tokATM.decimals),
          id: Number(tokA),
        },
        [tokB as unknown as string]: {
          ...tokBTM,
          decimals: Number(tokBTM.decimals),
          id: Number(tokB),
        },
      });
      setLoading(false);
    })();
  }, [version]);

  useEffect(() => {
    if (!activeAccount || !tokenList) return;
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
  }, [activeAccount, version, tokenA, tokenB, tokenList]);

  useEffect(() => {
    if (!activeAccount) return;
    (async () => {
      const reserves_ = await getReserve(ctcInfo, activeAccount.address);
      setReserves(reserves_);
    })();
  }, [activeAccount, version, tokenA, tokenB, tokenList]);

  useEffect(() => {
    if (!activeAccount || tokenA === "" || tokenB === "") return;
    const tokenId = Number(swapDirection ? tokenA : tokenB);
    getAllowance(tokenId, activeAccount.address, ctcAddr).then(
      (allowanceBi: bigint) => {
        setAllowance(bigNumberify(allowanceBi).toString());
        if (allowanceBi === 0n) {
          setStep(1);
        } else {
          setStep(2);
        }
      }
    );
  }, [activeAccount, version, swapDirection, tokenA, tokenB]);

  useEffect(() => {
    try {
      if (swapDirection) {
        const { tokenA } = debouncedValue;
        if (!tokenA) return;
        const tokenBn = new BigNumber(tokenA);
        const tokenAtomic = tokenBn.multipliedBy(
          new BigNumber(10).pow(token.decimals)
        );
        const tokenBi = bigNumberToBigInt(bigNumberify(tokenAtomic.toFixed(0)));
        const allowanceBi = bigNumberToBigInt(bigNumberify(allowance));
        swap(ctcInfo, activeAccount.address, tokenBi, swapDirection).then(
          ({ returnValue }) => {
            const [a, b] = returnValue;
            setOutput(formatWithDecimals(bigNumberify(b), ntoken.decimals));
          }
        );
      } else {
        const { tokenB } = debouncedValue;
        if (!tokenB) return;
        const tokenBn = new BigNumber(tokenB);
        const tokenAtomic = tokenBn.multipliedBy(
          new BigNumber(10).pow(token.decimals)
        );
        const tokenBi = bigNumberToBigInt(bigNumberify(tokenAtomic.toFixed(0)));
        const allowanceBi = bigNumberToBigInt(bigNumberify(allowance));
        swap(ctcInfo, activeAccount.address, tokenBi, swapDirection).then(
          ({ returnValue }) => {
            const [a, b] = returnValue;
            setOutput(formatWithDecimals(bigNumberify(a), ntoken.decimals));
          }
        );
      }
    } catch (e) {
      console.log(e);
    }
  }, [swapDirection, debouncedValue, token, ntoken]);

  const displayPoolLiquidity = useMemo(() => {
    const [a, b] = (([a, b]) => (swapDirection ? [a, b] : [b, a]))(poolBals);
    const aBn = new BigNumber(a.toString()).dividedBy(10 ** token.decimals);
    const bBn = new BigNumber(b.toString()).dividedBy(10 ** ntoken.decimals);
    return `${Number(aBn.toFixed(token.decimals)).toLocaleString()} ${
      token.symbol
    } / ${Number(bBn.toFixed(token.decimals)).toLocaleString()} ${
      ntoken.symbol
    }`;
  }, [poolBals, token, ntoken]);

  const displayExchangeRate = useMemo(() => {
    const [a, b] = (([a, b]) => (swapDirection ? [a, b] : [b, a]))(poolBals);
    const aBn = new BigNumber(a.toString()).dividedBy(10 ** token.decimals);
    const bBn = new BigNumber(b.toString()).dividedBy(10 ** ntoken.decimals);
    const rate = bBn.dividedBy(aBn);
    return rate.toFixed(ntoken.decimals);
  }, [swapDirection, token, ntoken, poolBals]);

  const displayFee = useMemo(() => {
    const [, , totFee] = protoInfo;
    const prec = 10_000;
    const amtA = Number(tokens[swapDirection ? "tokenA" : "tokenB"]);
    if (isNaN(Number(amtA)) || amtA === 0) return `${Number(totFee) / 100}%`;
    const tokenBn = new BigNumber(amtA);
    const totFeeBn = new BigNumber(totFee.toString());
    const feeBn = tokenBn.multipliedBy(totFeeBn).dividedBy(prec);
    const feeBnStr = feeBn.toFixed(token.decimals);
    return `${feeBnStr} ${token.symbol}`;
  }, [protoInfo, swapDirection, tokens, token]);

  const signTransaction = React.useCallback(
    async (txns: string[]) => {
      if (!activeAccount) return;
      if (activeAccount.providerId === PROVIDER_ID.CUSTOM) {
        const algorand = (window as any).algorand;
        if (!algorand) {
          throw new Error("no wallets are installed!");
        }
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

  console.log({ token });

  const handleApprove = useCallback(async () => {
    try {
      setLoading(true);
      setMessage("Signature pending...");
      const { txns } = await doApprove(
        Number(token.id),
        activeAccount.address,
        ctcAddr,
        bigNumberToBigInt(parseWithDecimals(approval, token.decimals))
        /*
        bigNumberToBigInt(
          bigNumberify(
            convertToAtomicUnit(
              new BigNumber(approval),
              token.decimals
            ).toString()
          )
        )
        */
      );
      await signTransaction(txns);
      setMessage("Waiting for confirmation...");
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
      toast.error(e.message);
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
        console.log({ bal });
        if (bal === BigInt(0)) {
          if (token.id === 24590664) {
            setMessage("Signature pending (1 of 2)...");
            const ci = new CONTRACT(
              token.id,
              algodClient,
              indexerClient,
              {
                name: "",
                desc: "",
                methods: [
                  {
                    name: "createBalanceBox",
                    args: [{ type: "address" }],
                    returns: {
                      type: "byte",
                    },
                  },
                ],
                events: [],
              },
              { addr: activeAccount.address, sk: new Uint8Array(0) }
            );
            ci.setFee(2000);
            ci.setPaymentAmount(28500);
            const res = await ci.createBalanceBox(activeAccount.address);
            const txId = await signTransaction(res.txns);
            setMessage("Waiting for confirmation (1 of 2)...");
          } else {
            const res = await transfer(
              token.id,
              activeAccount.address,
              activeAccount.address,
              BigInt(0)
            );
            const txId = await signTransaction(res.txns);
            setMessage("Waiting for confirmation (1 of 2)...");
          }
          setMessage("Signature pending (2 of 2)...");
        }

        const { txns } = await withdrawReserve(
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
        toast.error(e.message);
      } finally {
        setLoading(false);
      }
    },
    [activeAccount, version]
  );

  const parseWithDecimals = (amount: string, decimals: number) => {
    const [l, r] = amount.split(".");
    const safeL = l === "" ? "0" : l;
    const lbn = bigNumberify(safeL).mul(
      bigNumberify(10).pow(bigNumberify(decimals))
    );
    if (r) {
      const rbn = bigNumberify(r.padEnd(decimals, "0").slice(0, decimals));
      return lbn.add(rbn);
    } else {
      return lbn;
    }
  };

  const handleSwap = useCallback(async () => {
    try {
      setLoading(true);
      setMessage("Waiting for confirmation...");
      const idx = swapDirection ? 0 : 1;
      const ndx = !swapDirection ? 0 : 1;
      // Logic for swapping tokens based on the swapDirection state
      let msg = "";
      if (swapDirection) {
        const allowanceBn = parseWithDecimals(allowance, token.decimals);
        const amountBn = parseWithDecimals(tokens.tokenA, token.decimals);
        if (allowanceBn.lt(amountBn)) {
          setMessage("Approving...");
          const { txns } = await doApprove(
            Number(tokenA),
            activeAccount.address,
            ctcAddr,
            bigNumberToBigInt(allowanceBn)
          );
          const txId = await signTransaction(txns);
          setMessage("Waiting for confirmation...");
        }
        const { txns, returnValue } = await doSwap(
          ctcInfo,
          activeAccount.address,
          bigNumberToBigInt(amountBn),
          swapDirection
        );
        msg =
          "+" +
          Number(returnValue[ndx]) / 10 ** ntoken.decimals +
          " " +
          tokenList[tokenB].symbol;
        const txId = await signTransaction(txns);
        setMessage("Waiting for confirmation...");
        setVersion(version + 1); // refresh
      } else {
        // Swap from tokenB to tokenA
        // Implement your swapping logic here
        const allowanceBn = parseWithDecimals(allowance, token.decimals);
        const amountBn = parseWithDecimals(tokens.tokenB, token.decimals);
        if (allowanceBn.lt(amountBn)) {
          setMessage("Approving...");
          const { txns } = await doApprove(
            Number(tokenA),
            activeAccount.address,
            ctcAddr,
            bigNumberToBigInt(allowanceBn)
          );
          const txId = await signTransaction(txns);
          setMessage("Waiting for confirmation...");
        }
        const { txns, returnValue } = await doSwap(
          ctcInfo,
          activeAccount.address,
          bigNumberToBigInt(amountBn),
          swapDirection
        );
        const txId = await signTransaction(txns);
        msg =
          "+" +
          Number(returnValue[ndx]) / 10 ** tokenList[tokenA].decimals +
          " " +
          tokenList[tokenA].symbol;
        setMessage("Waiting for confirmation...");
        setVersion(version + 1); // refresh
      }
      toast(
        <div>
          Swap successful!
          <br />
          {msg}
        </div>
      );
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }, [activeAccount, swapDirection, tokens, allowance, token, ntoken, version]);

  const handleSwitchDirection = useCallback(() => {
    if (!tokenList) return;
    setSwapDirection(!swapDirection);
    setAllowance("");
    setTokens({ tokenA: "", tokenB: "" });
    navigate(
      `/swap?poolId=${props.ctcInfo}&mode=swap&tokA=${
        tokenList[swapDirection ? tokenB : tokenA].id
      }`
    );
    // You can add logic here to switch the direction of the swap
  }, [swapDirection, tokenList]);

  const error = useMemo(() => {
    try {
      if (!tokens.tokenA && !tokens.tokenB) return false;
      const v = parseWithDecimals(
        swapDirection ? tokens.tokenA : tokens.tokenB,
        token.decimals
      );
      const w = String(token.id);
      const balanceBn = bigNumberify(balances[w]);
      const allowanceBn = parseWithDecimals(allowance, token.decimals);
      return v.gt(allowanceBn) || v.gt(balanceBn);
    } catch (e) {}
  }, [tokens, swapDirection, token, allowance, balances]);

  console.log({ props });

  const helperText = useMemo(() => {
    if (error) {
      if (!tokens.tokenA && !tokens.tokenB) return false;
      const v = parseWithDecimals(
        swapDirection ? tokens.tokenA : tokens.tokenB,
        token.decimals
      );
      const w = String(token.id);
      const balanceBn = bigNumberify(balances[w]);
      const allowanceBn = bigNumberify(allowance);
      if (true || v.gt(allowanceBn))
        return (
          <div style={{ height: "1em" }}>
            <Typography variant="caption">Insufficient allowance</Typography>
            <Button
              size="small"
              variant="text"
              onClick={() => {
                setStep(1);
              }}
            >
              <small>Update Allowance</small>
            </Button>
          </div>
        );
      else if (v.gt(balanceBn))
        return (
          <div style={{ height: "1em" }}>
            <Typography variant="caption">Insufficient balance</Typography>
          </div>
        );
    } else {
      return <div style={{ height: "1em" }}>&nbsp;</div>;
    }
  }, [error, allowance, swapDirection, token, ntoken, balances, tokens]);

  const renderSelect = () => (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">
        {tokenList[swapDirection ? tokenB : tokenA].symbol}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={(e) => {
          const newPoolId = e.target.value;
          const newPool = pools.find((p) => p.poolId === newPoolId);
          navigate(
            `/swap?poolId=${newPoolId}&mode=swap&tokA=${Number(
              swapDirection ? tokenB : tokenA
            )}`
          );
          window.location.reload();
        }}
      >
        {pools.map((p: any) => (
          <MenuItem key={p.poolId} value={p.poolId}>
            {props?.tokens?.find((t: any) =>
              p.tokA === tokenList[swapDirection ? tokenB : tokenA].tokenId
                ? t.tokenId === p.tokA
                : t.tokenId === p.tokB
            )?.symbol ?? "a"}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

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
          {step === 1 && (
            <Stack sx={{ minWidth: "300px", width: "500px", gap: 2 }}>
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
                    <Typography variant="caption">From</Typography>
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
                      {!allowance ? "-" : formatWithDecimals(allowance, 6)}
                    </Typography>
                  </Stack>
                  <Box>
                    <ButtonGroup size="small" variant="outlined">
                      {[0, 50, 100].map((el) => (
                        <Tooltip
                          key={`appr-${el}`}
                          title="Set Approval to Balance"
                        >
                          <Button
                            onClick={() => handleApproveMaxButtonClick(el)}
                          >
                            {el}%
                          </Button>
                        </Tooltip>
                      ))}
                    </ButtonGroup>
                  </Box>
                </Stack>
                <TextField
                  label={tokenList[swapDirection ? tokenA : tokenB].symbol}
                  value={approval}
                  onChange={handleApproveChange}
                  fullWidth
                  type="number"
                />
                <Button
                  variant="text"
                  onClick={handleSwitchDirection}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <SwapVertIcon />
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
                    <Typography variant="caption">To</Typography>
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
                  </Stack>
                  <Box>&nbsp;</Box>
                </Box>
                {pools.length > 0 ? (
                  renderSelect()
                ) : (
                  <TextField
                    disabled
                    label={tokenList[swapDirection ? tokenB : tokenA].symbol}
                    value={output}
                    fullWidth
                    type="number"
                    helperText=" "
                  />
                )}
              </div>
              <Button
                size="large"
                fullWidth
                variant="contained"
                onClick={handleApprove}
              >
                Approve
              </Button>
            </Stack>
          )}
          {step === 2 && (
            <Stack sx={{ minWidth: "300px", width: "500px", gap: 0 }}>
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
                    <Typography variant="caption">From</Typography>
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
                      {!allowance ? "-" : formatWithDecimals(allowance, 6)}
                    </Typography>
                  </Stack>
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
                </Stack>
                <TextField
                  label={tokenList[swapDirection ? tokenA : tokenB].symbol}
                  value={swapDirection ? tokens.tokenA : tokens.tokenB}
                  onChange={handleTokenASwap}
                  fullWidth
                  type="number"
                  error={error}
                  helperText={helperText}
                />
                <div style={{ height: "1em" }}>
                  <Button
                    size="small"
                    variant="text"
                    onClick={() => {
                      setStep(1);
                    }}
                  >
                    <small>Update Allowance</small>
                  </Button>
                </div>

                <Button
                  variant="text"
                  onClick={handleSwitchDirection}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <SwapVertIcon />
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
                    <Typography variant="caption">To</Typography>
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
                  </Stack>
                  <Box>&nbsp;</Box>
                </Box>
                {pools.length > 0 ? (
                  renderSelect()
                ) : (
                  <TextField
                    disabled
                    label={tokenList[swapDirection ? tokenB : tokenA].symbol}
                    value={output}
                    fullWidth
                    type="number"
                    helperText=" "
                  />
                )}
              </div>
              <Box
                sx={{
                  border: 3,
                  my: 3,
                  p: 2,
                  borderRadius: "5px",
                  borderColor: "#1976d2",
                }}
              >
                <List sx={{ p: 0 }}>
                  {[
                    {
                      label: "Exchange Rate",
                      value: `1 ${token.symbol} ~= ${displayExchangeRate} ${ntoken.symbol}`,
                    },
                    {
                      label: "Swap Fee",
                      value: displayFee,
                    },
                    {
                      label: "Minimum Received",
                      value: `${((o) => (o === 0 ? "-" : o.toLocaleString()))(
                        Number(output)
                      )} ${ntoken.symbol}`,
                    },
                    {
                      label: "Pool Liquidity",
                      value: `${displayPoolLiquidity}`,
                    },
                  ].map(({ label, value }) => (
                    <ListItem sx={{ p: 0 }}>
                      <ListItemText primary={label} />
                      <Typography variant="caption">{value}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Button
                //disabled={
                //  tokens[swapDirection ? "tokenA" : "tokenB"] === "" || error
                //</Stack>}
                size="large"
                fullWidth
                variant="contained"
                onClick={handleSwap}
              >
                Swap
              </Button>
            </Stack>
          )}
          <List>
            {redeamable
              .filter(({ number }) => number > 0)
              .map((token) => (
                <ListItem key={token.id} sx={{ px: 0 }}>
                  <ListItemText
                    primary={`${formatWithDecimals(
                      token.number,
                      token.decimals
                    )} ${token.symbol}`}
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      handleRedeem(token);
                    }}
                  >
                    Redeem
                  </Button>
                </ListItem>
              ))}
          </List>
        </Stack>
      )}
    </Container>
  );
};

export default SwapForm;
