import { useCallback, useEffect, useMemo, useState } from "react";
import { useWallet, PROVIDER_ID } from "@txnlab/use-wallet";
import {
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Tooltip,
  Chip,
  Dialog,
  DialogContent,
} from "@mui/material";
import { getCurrentNode, getGenesisHash } from "../../utils/reach";
import { makeStdLib } from "../../utils/reach";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import { displayToken, getAlgorandClients } from "../../utils/algorand.js";
import SendDialog from "../SendDialog/index.js";
import ApproveDialog from "../ApproveDialog/index.js";
import SpendDialog from "../SpendDialog/index.js";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import defaultTokens from "../../config/defaultTokens.js";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { DEFAULT_NODE } from "../../config/defaultLocalStorage.js";
import LoadingIndicator from "../LoadingIndicator/index.js";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { db } from "../../db";
import { useLiveQuery } from "dexie-react-hooks";
import algosdk, { waitForConfirmation } from "algosdk";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import { nt200, arc200 } from "ulujs";
import { bigNumberToBigInt, bigNumberify } from "../../common/utils/bn.ts";
import TokenDisplay from "../TokenDisplay/index.js";

const stdlib = makeStdLib();
const fawd = stdlib.formatWithDecimals;

const [node] = (localStorage.getItem("node") || DEFAULT_NODE).split(":");

const prepareStr = (b64Str) =>
  Buffer.from(b64Str, "base64")
    //.reduce((acc, val) => (val > 0 ? [...acc, val] : acc), [])
    .toString("utf8");

// wVOI ------------------------------------------

const abi = {
  name: "Wrapped Voi",
  desc: "wVOI",
  methods: [
    {
      name: "withdraw",
      args: [
        {
          name: "amount",
          type: "uint64",
        },
      ],
      returns: {
        type: "uint256",
      },
    },
    {
      name: "arc200_balanceOf",
      args: [
        {
          name: "account",
          type: "address",
        },
      ],
      returns: {
        type: "uint256",
      },
    },
    {
      name: "touch",
      args: [],
      returns: {
        type: "void",
      },
    },
    {
      name: "deregister",
      args: [],
      returns: {
        type: "byte",
      },
    },
    {
      name: "deposit",
      args: [
        {
          name: "amount",
          type: "uint64",
        },
      ],
      returns: {
        type: "uint256",
      },
    },
  ],
  events: [],
};

const WVOI = 24590664;
const { algodClient, indexerClient } = getAlgorandClients();

const waitForTxn = async (txId, rounds = 4) =>
  await waitForConfirmation(algodClient, txId, rounds);

// -----------------------------------------------

const nodeNetwork = (node) => {
  switch (node) {
    case "algorand":
    case "algorand-testnet":
      return "algo";
    case "voi":
    case "voi-testnet":
      return "voi";
    default:
      return "algo";
  }
};

const networkToken = (accInfo) => ({
  algo: {
    name: "Algorand",
    symbol: "ALGO",
    tokenId: 0,
    amount: fawd(accInfo?.account?.["amount-without-pending-rewards"], 6),
    assetType: "network",
    network: "algo",
    decimals: 6,
  },
  voi: {
    name: "Voi",
    symbol: "VOI",
    tokenId: 0,
    amount: fawd(accInfo?.account?.["amount-without-pending-rewards"], 6),
    assetType: "network",
    network: "voi",
    decimals: 6,
  },
});

function AccountBalance(props) {
  const [node] = getCurrentNode();
  const { activeAccount, signTransactions } = useWallet();
  const [sendDialogOpen, setSendDialogOpen] = useState(false);
  const [approveDialogOpen, setApproveDialogOpen] = useState(false);
  const [spendDialogOpen, setSpendDialogOpen] = useState(false);
  const [doingMint, setDoingMint] = useState(false);
  const [doingBurn, setDoingBurn] = useState(false);
  const [token, setToken] = useState(props.token);

  const signTransaction = useCallback(
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
  const reloadToken = useCallback(async () => {
    if (!activeAccount) return;
    if (props.token.assetType === "rc200") {
      const { algodClient, indexerClient } = getAlgorandClients();
      const ci = new arc200(token.appId, algodClient, indexerClient);

      let decimals = token.decimals;
      if (!decimals) {
        const decimalsR = await ci.arc200_decimals();
        if (!decimalsR.success) return;
        decimals = decimalsR.returnValue;
      }

      const balanceR = await ci.arc200_balanceOf(activeAccount.address);
      if (!balanceR.success) return; /// TODO handle error
      const amount = fawd(balanceR.returnValue, Number(decimals));
      const newToken = {
        ...props.token,
        amount,
      };
      setToken(newToken);
    } else if (props.token.assetType === "sa") {
      const { indexer } = await stdlib.getProvider();
      const assetDetails = await indexer
        .lookupAssetByID(token["asset-id"])
        .do();
      const amount = fawd(
        await stdlib.balanceOf(token["asset-id"], activeAccount.address),
        assetDetails.decimals
      );
      const token = {
        tokenId: token["asset-id"],
        amount,
        ...assetDetails.asset,
      };
      setToken(token);
    } else if (props.token.assetType === "network") {
      const { indexer } = await stdlib.getProvider();
      const accInfo = await indexer
        .lookupAccountByID(activeAccount.address)
        .do();
      setToken({
        ...token,
        amount: fawd(accInfo?.account?.["amount-without-pending-rewards"], 6),
      });
    }
  }, [activeAccount, token]);
  // useEffect(() => {
  //   if (!activeAccount) return;
  //   const interval = setInterval(reloadToken, 60_000);
  //   return () => clearInterval(interval);
  // }, [activeAccount, token]);
  return (
    activeAccount &&
    token && (
      <>
        <SendDialog
          open={sendDialogOpen}
          setOpen={setSendDialogOpen}
          token={token}
          reloadToken={reloadToken}
        />
        <ApproveDialog
          open={approveDialogOpen}
          setOpen={setApproveDialogOpen}
          token={token}
          reloadToken={reloadToken}
        />
        <SpendDialog
          open={spendDialogOpen}
          setOpen={setSpendDialogOpen}
          token={token}
          reloadToken={reloadToken}
        />
        <TableRow key={token?.appId || token?.assetId}>
          <TableCell>
            {token.name}
            {token.assetType !== "network" && (
              <Chip
                size="small"
                sx={{ ml: 1 }}
                label={`${(
                  (token?.network ?? "")[0] + (token?.assetType ?? "")
                ).toUpperCase()}:${token.appId || token.tokenId}`}
              />
            )}
            <br />
            <Link
              target={token.assetType === "rc200" ? "_self" : "_blank"}
              to={
                token.assetType === "rc200"
                  ? `/token/${token.appId}`
                  : `https://voi.observer/explorer/asset/${token.tokenId}/transactions`
              }
            >
              Token Info
            </Link>
            <br />
            <Link to={`/token/${token.appId}?address=${activeAccount.address}`}>
              Transactions for {activeAccount.address.slice(0, 4)}...
              {activeAccount.address.slice(-4)}
            </Link>
          </TableCell>
          <TableCell>
            {displayToken({ ...token, decimals: Number(token.decimals) })}
          </TableCell>
          <TableCell>
            <ButtonGroup variant="text">
              {[
                token.assetType !== "sa"
                  ? {
                      label: "S",
                      description: "Send",
                      icon: <SendIcon />,
                      onClick: () => {
                        setToken(token);
                        setSendDialogOpen(true);
                      },
                    }
                  : null,
                token.assetType === "rc200"
                  ? {
                      label: "A",
                      description: "Approve",
                      icon: <ThumbUpIcon />,
                      onClick: () => {
                        setToken(token);
                        setApproveDialogOpen(true);
                      },
                    }
                  : null,
                /*
                    token.assetType === "rc200"
                      ? {
                          label: "T",
                          description: "Spend",
                          icon: <SendIcon color="secondary" />,
                          onClick: () => {
                            setToken(token);
                            setSpendDialogOpen(true);
                          },
                        }
                      : null,
                      */
                token.assetType === "rc200" && token.poolId > 0
                  ? {
                      label: "E",
                      description: "Swap",
                      icon: <CurrencyExchangeIcon />,
                      onClick: () => {
                        window.location = `/#/swap?poolId=${token.poolId}&mode=swap`;
                      },
                    }
                  : null,
                token.assetType === "rc200" &&
                  token.appId == 24590664 && {
                    label: "M",
                    description: "Mint",
                    icon: !doingMint ? (
                      <AddIcon />
                    ) : (
                      <CircularProgress size={20} />
                    ),
                    onClick: async () => {
                      try {
                        if (!activeAccount) return;
                        const ci = new nt200(WVOI, algodClient, indexerClient, {
                          acc: {
                            addr: activeAccount.address,
                          },
                        });
                        const arc200_balanceOfR = await ci.arc200_balanceOf(
                          activeAccount.address
                        );
                        if (!arc200_balanceOfR.success)
                          throw new Error("Failed to get balance");
                        const balance = arc200_balanceOfR.returnValue;
                        if (balance === 0n) {
                          const createBalanceBoxR = await ci.createBalanceBox(
                            activeAccount.address
                          );
                          if (createBalanceBoxR.success) {
                            await signTransaction(createBalanceBoxR.txns);
                          }
                        }
                        const inputStr = window.prompt("Enter amount to mint");
                        if (!inputStr) return;
                        setDoingMint(true);
                        const num = Number(inputStr);
                        if (isNaN(num)) return;
                        const amt = num * 10 ** 6;
                        const res = await ci.deposit(
                          bigNumberToBigInt(bigNumberify(amt))
                        );
                        console.log({ res });
                        const txId = await signTransaction(res.txns);
                        setToken({
                          ...token,
                          amount: fawd(res.returnValue, Number(token.decimals)),
                        });
                        toast(
                          <div>
                            Mint successful!
                            <br />+{fawd(amt, Number(token.decimals))} wVOI
                          </div>
                        );
                      } catch (e) {
                        console.log(e);
                      } finally {
                        setDoingMint(false);
                      }
                    },
                  },
                token.assetType === "rc200" &&
                  token.appId == 24590664 && {
                    label: "W",
                    description: "Burn",
                    icon: !doingBurn ? (
                      <RemoveIcon />
                    ) : (
                      <CircularProgress size={20} />
                    ),
                    onClick: async () => {
                      try {
                        if (!activeAccount) return;

                        const ciArc200 = new arc200(
                          token.appId,
                          algodClient,
                          indexerClient,
                          {
                            acc: { addr: activeAccount.address },
                          }
                        );
                        const totalSupplyR =
                          await ciArc200.arc200_totalSupply();
                        if (!totalSupplyR.success)
                          throw new Error("Failed to get total supply");
                        const totalSupply = totalSupplyR.returnValue;
                        const approvalR = await ciArc200.arc200_allowance(
                          activeAccount.address,
                          algosdk.getApplicationAddress(WVOI)
                        );
                        if (!approvalR.success)
                          throw new Error("Failed to get allowance");

                        const inputStr = window.prompt("Enter amount to burn");
                        if (!inputStr) return;
                        const num = Number(inputStr);
                        if (isNaN(num)) return;
                        setDoingBurn(true);
                        const amt = num * 10 ** 6;
                        const amtBi = bigNumberToBigInt(bigNumberify(amt));

                        const approval = approvalR.returnValue;
                        if (approval < amtBi) {
                          const res1 = await ciArc200.arc200_approve(
                            algosdk.getApplicationAddress(WVOI),
                            totalSupply
                          );
                          if (!res1.success)
                            throw new Error("Failed to approve");
                          await signTransaction(res1.txns);
                        }
                        const ci = new nt200(WVOI, algodClient, indexerClient, {
                          acc: {
                            addr: activeAccount.address,
                          },
                        });
                        const withdrawR = await ci.withdraw(amt);
                        if (!withdrawR.success)
                          throw new Error("Failed to withdraw");
                        await signTransaction(withdrawR.txns);
                        setToken({
                          ...token,
                          amount: fawd(
                            withdrawR.returnValue,
                            Number(token.decimals)
                          ),
                        });
                        toast(
                          <div>
                            Burn successful!
                            <br />+{fawd(amt, Number(token.decimals))} VIO
                          </div>
                        );
                      } catch (e) {
                        console.log(e);
                      } finally {
                        setDoingBurn(false);
                      }
                    },
                  },

                token.assetType === "rc200" && {
                  label: "R",
                  desciption: "Remove",
                  icon: <DeleteIcon color="warning" />,
                  onClick: () => {
                    const inputStr = window.prompt(
                      "Are you sure you want to remove this token from your wallet? (y/n)"
                    );
                    if (inputStr !== "y") return;
                    const tokens = JSON.parse(
                      localStorage.getItem("tokens") ||
                        `${JSON.stringify(defaultTokens)}` // TODO centralize arc200 token id
                    );
                    const newTokens = tokens[node].filter(
                      (el) => el != token.appId
                    );
                    localStorage.setItem(
                      "tokens",
                      JSON.stringify({
                        ...tokens,
                        [node]: newTokens,
                      })
                    );
                    setToken(null);
                  },
                },
                token.assetType === "sa" && {
                  label: "V",
                  description: "VIA/VIASA Exchange",
                  icon: <CurrencyExchangeIcon />,
                  onClick: () => props?.setShowTokenDisplay(true),
                },
              ]
                .filter((el) => !!el)
                .map((el) => (
                  <Tooltip
                    key={el.label}
                    placement="top"
                    title={el.description}
                  >
                    <Button onClick={el.onClick}>{el.icon || el.label}</Button>
                  </Tooltip>
                ))}
            </ButtonGroup>
          </TableCell>
        </TableRow>
      </>
    )
  );
}

// TODO add interface for props

function AccountBalances(props) {
  const dbTokens = useLiveQuery(() => db.tokens.toArray());
  const { activeAccount } = useWallet();
  const [token, setToken] = useState({});
  const [networkTokens, setNetworkTokens] = useState(null);
  const [nativeTokens, setNativeTokens] = useState(null);
  const [arc200Tokens, setArc200Tokens] = useState(null);
  const [sendDialogOpen, setSendDialogOpen] = useState(false);
  const [showTokenDisplay, setShowTokenDisplay] = useState(false);
  const loading = useMemo(() => !props.tokens, [props.tokens]);
  // EFFECT: lookup account info and set network tokens
  useEffect(() => {
    if (!activeAccount || networkTokens) return;
    (async () => {
      const { indexer } = await stdlib.getProvider();
      const accInfo = await indexer
        .lookupAccountByID(activeAccount.address)
        .do();
      setNetworkTokens([networkToken(accInfo)[nodeNetwork(node)]]);
    })();
  }, [activeAccount]);
  // EFFECT: lookup account assets and set native tokens
  useEffect(() => {
    if (!activeAccount || nativeTokens) return;
    setNativeTokens([]);
    if (!activeAccount || nativeTokens) return;
    (async () => {
      const { indexer } = await stdlib.getProvider();
      const assets = await indexer
        .lookupAccountAssets(activeAccount.address)
        .do();
      const assetList = [];
      for (const asset of assets.assets) {
        const assetDetails = await indexer
          .lookupAssetByID(asset["asset-id"])
          .do();
        const decimals = assetDetails?.asset?.params?.decimals ?? 0;
        const name = prepareStr(assetDetails?.asset?.params?.["name-b64"]);
        const symbol = prepareStr(
          assetDetails?.asset?.params?.["unit-name-b64"]
        );
        const amountAu = asset?.amount ?? 0;
        const amount = stdlib.formatWithDecimals(
          stdlib.bigNumberify(amountAu),
          decimals
        );
        assetList.push({
          ...asset,
          ...(assetDetails?.asset ?? {}),
          amount,
          name,
          symbol,
          decimals,
        });
      }
      setNativeTokens(assetList.filter((el) => el["asset-id"] === 27704545)); // only VIASA
    })();
  }, [activeAccount]);
  // EFFECT: lookup account assets and set arc200 tokens
  useEffect(() => {
    if (!activeAccount || !networkToken || !nativeTokens || !arc200Tokens)
      return;
    const tokens = [];
    if (nativeTokens)
      nativeTokens.forEach((token) => {
        tokens.push({
          ...token,
          tokenId: token["asset-id"],
          assetType: "sa", // TODO switch display based on network
          network: nodeNetwork(node),
        });
      });
    if (arc200Tokens)
      arc200Tokens.forEach((token) => {
        tokens.push({
          ...token,
          tokenId: token.appId,
          assetType: "rc200", // TODO switch display based on network
          network: nodeNetwork(node),
        });
      });
    if (networkTokens)
      networkTokens.forEach((token) => {
        tokens.push({
          ...token,
          tokenId: 0,
          assetType: "network",
          network: nodeNetwork(node),
        });
      });
    tokens.sort((a, b) => a.tokenId - b.tokenId);
    props.setTokens(tokens);
  }, [nativeTokens, arc200Tokens, networkTokens]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      padding: 8,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      padding: 8,
    },
  }));

  // TODO reload network and native tokens on account change
  const reloadTokens = useCallback(async () => {
    if (!activeAccount) return;
    const tokens = [];
    const { algodClient, indexerClient } = getAlgorandClients();
    for (const appId of props.tokenIds) {
      const ci = new arc200(appId, algodClient, indexerClient);
      let tm;
      const dbToken = dbTokens?.find((el) => el.tokenId == appId);
      if (dbToken) {
        tm = dbToken;
      } else {
        // --- get metadata
        const nameR = await ci.arc200_name();
        if (!nameR.success) return;
        const assetName = nameR.returnValue;
        const symbolR = await ci.arc200_symbol();
        if (!symbolR.success) return;
        const symbol = symbolR.returnValue;
        let decimals;
        if (symbol === "ARC200LT") decimals = 6n;
        else {
          const decimalsR = await ci.arc200_decimals().catch(() => {});
          if (!decimalsR.success) return;
          decimals = decimalsR.returnValue;
        }
        const totalSupplyR = await ci.arc200_totalSupply();
        if (!totalSupplyR.success) return;
        const totalSupply = totalSupplyR.returnValue;
        tm = {
          name: assetName,
          tokenId: appId,
          symbol,
          decimals,
          totalSupply,
        };
      }
      console.log({ tm });
      // ---

      // poolId, first poolId found
      const poolId =
        tm.symbol === "ARC200LT"
          ? 0
          : props?.pools?.find((el) => el.tokA == appId || el.tokB == appId)
              ?.poolId || 0;

      const balanceR = await ci.arc200_balanceOf(activeAccount.address);
      if (!balanceR.success) return; /// TODO handle error
      const amount = fawd(balanceR.returnValue, Number(tm.decimals));

      tokens.push({
        ...tm,
        appId,
        amount,
        poolId,
      });
    }
    setArc200Tokens(tokens);
  }, [activeAccount, props]);
  // -------------------------------------------
  // effect: reload tokens on account change
  // -------------------------------------------
  useEffect(() => {
    if (!activeAccount || arc200Tokens) return;
    const timeout = setTimeout(() => reloadTokens(), 1000);
    return () => clearTimeout(timeout);
  }, [props, activeAccount, arc200Tokens]);
  // -------------------------------------------
  return loading ? (
    <LoadingIndicator message="Loading balances..." />
  ) : (
    <div className="AccountBalances">
      <TableContainer component={Paper}>
        <Table aria-label="customized pagination table">
          <SendDialog
            open={sendDialogOpen}
            setOpen={setSendDialogOpen}
            token={token}
            setTokens={setArc200Tokens}
            tokens={arc200Tokens}
          />
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Balance</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.tokens?.map((token) => (
              <AccountBalance
                key={token.appId}
                token={token}
                manage={props.manage}
                setShowTokenDisplay={setShowTokenDisplay}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={showTokenDisplay}
        onClose={() => setShowTokenDisplay(false)}
      >
        <DialogContent
          sx={{
            minWidth: 300,
            minHeight: 150,
          }}
        >
          <TokenDisplay />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AccountBalances;
