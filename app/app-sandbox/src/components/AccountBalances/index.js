import { useCallback, useEffect, useMemo, useState } from "react";
import { useWallet } from "@txnlab/use-wallet";
import {
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Tooltip,
  Skeleton,
  Chip,
} from "@mui/material";
import ARC200Service from "../../services/ARC200Service.ts";
import { makeStdLib } from "../../utils/reach";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  displayToken,
  getAlgorandClients,
  zeroAddress,
} from "../../utils/algorand.js";
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
import FireplaceIcon from "@mui/icons-material/Fireplace";
import { DEFAULT_NODE } from "../../config/defaultLocalStorage.js";
import arc200 from "arc200js";
import LoadingIndicator from "../LoadingIndicator/index.js";

const stdlib = makeStdLib();
const fawd = stdlib.formatWithDecimals;

const [node] = (localStorage.getItem("node") || DEFAULT_NODE).split(":");

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
  const { activeAccount } = useWallet();
  const [sendDialogOpen, setSendDialogOpen] = useState(false);
  const [approveDialogOpen, setApproveDialogOpen] = useState(false);
  const [spendDialogOpen, setSpendDialogOpen] = useState(false);
  const [token, setToken] = useState(props.token);
  const reloadToken = useCallback(async () => {
    if (!activeAccount) return;
    if (props.token.assetType === "rc200") {
      const { algodClient, indexerClient } = getAlgorandClients();
      const ci = new arc200(token.appId, algodClient, indexerClient);
      const decimalsR = await ci.arc200_decimals();
      if (!decimalsR.success) return; /// TODO handle error
      const decimals = decimalsR.returnValue;
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
      console.log({ accInfo });
      setToken({
        ...token,
        amount: fawd(accInfo?.account?.["amount-without-pending-rewards"], 6),
      });
    }
  }, [activeAccount, token]);
  useEffect(() => {
    if (!activeAccount) return;
    // realtime rc200 only
    //ARC200Service.nextTransferEvent(token.appId)
    //  .then(reloadToken())
    //  .catch(console.error);
    // every interval
    const interval = setInterval(reloadToken, 60_000);
    return () => clearInterval(interval);
  }, [activeAccount, token]);
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
          {/*<TableCell>{token.tokenId}</TableCell>*/}
          <TableCell>
            {token.name}
            {token.assetType !== "network" && (
              <Chip
                size="small"
                sx={{ ml: 1 }}
                label={`${(
                  (token?.network ?? "")[0] + (token?.assetType ?? "")
                ).toUpperCase()}:${token.appId}`}
              />
            )}
            <br />
            <Link to={`/token/${token.appId}`}>Token Info</Link>
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
              {/* TODO convert to dropdown with default send */}
              {(props.manage
                ? [
                    {
                      label: "R",
                      desciption: "Remove",
                      icon: <DeleteIcon color="warning" />,
                      onClick: () => {
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
                  ]
                : [
                    {
                      label: "S",
                      description: "Send",
                      icon: <SendIcon />,
                      onClick: () => {
                        setToken(token);
                        setSendDialogOpen(true);
                      },
                    },
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
                  ]
              )
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
  const { activeAccount } = useWallet();
  const [token, setToken] = useState({});
  const [networkTokens, setNetworkTokens] = useState(null);
  const [nativeTokens, setNativeTokens] = useState([]);
  const [arc200Tokens, setArc200Tokens] = useState(null);
  const [sendDialogOpen, setSendDialogOpen] = useState(false);
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
  useEffect(() => {
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
        const name = assetDetails?.asset?.params?.name ?? "Unknown";
        const symbol = assetDetails?.asset?.params?.["unit-name"] ?? "Unknown";
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
      setNativeTokens(assetList);
    })();
  }, [activeAccount]);
  useEffect(() => {
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
      const tokenR = await ci.getMetadata();
      if (!tokenR.success) return; /// TODO handle error
      const balanceR = await ci.arc200_balanceOf(activeAccount.address);
      if (!balanceR.success) return; /// TODO handle error
      const token = tokenR.returnValue;
      const amount = fawd(balanceR.returnValue, Number(token.decimals));
      tokens.push({
        ...token,
        appId,
        amount,
      });
    }
    setArc200Tokens(tokens);
  }, [activeAccount, props.tokensIds]);
  // -------------------------------------------
  // effect: reload tokens on account change
  // -------------------------------------------
  useEffect(() => {
    if (arc200Tokens) return;
    reloadTokens();
  }, [activeAccount, arc200Tokens]);
  useEffect(() => {
    reloadTokens();
  }, [props.tokensIds]);
  // -------------------------------------------
  return (
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
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AccountBalances;
