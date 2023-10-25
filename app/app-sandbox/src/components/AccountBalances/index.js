import { useCallback, useEffect, useState } from "react";
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
import { displayToken, zeroAddress } from "../../utils/algorand.js";
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

const stdlib = makeStdLib();
const fawd = stdlib.formatWithDecimals;

const [node] = (localStorage.getItem("node") || DEFAULT_NODE).split(":");

function AccountBalance(props) {
  const { activeAccount } = useWallet();
  const [sendDialogOpen, setSendDialogOpen] = useState(false);
  const [approveDialogOpen, setApproveDialogOpen] = useState(false);
  const [spendDialogOpen, setSpendDialogOpen] = useState(false);
  const [token, setToken] = useState(props.token);
  const reloadToken = useCallback(async () => {
    if (!activeAccount) return;
    if (props.token.assetType === "arc200") {
      const meta = await ARC200Service.getTokenMetadata(token.appId);
      const amount = fawd(
        await ARC200Service.balanceOf(token.appId, activeAccount.address),
        meta.decimals
      );
      const token = {
        tokenId: token.appId,
        amount,
        ...meta,
      };
      setToken(token);
    } else if (props.token.assetType === "asa") {
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
    }
  }, [activeAccount, token]);
  useEffect(() => {
    if (!activeAccount) return;
    // realtime
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
            {token.name}{" "}
            {token.type !== "network" && (
              <Chip
                size="small"
                label={[token.assetType.toUpperCase(), token.tokenId].join(":")}
              />
            )}
            <br />
            <Link to={`/token/${token.appId}`}>Token Info</Link>
            <br />
            <Link to={`/token/${token.appId}/address/${activeAccount.address}`}>
              Transactions for {activeAccount.address.slice(0, 4)}...
              {activeAccount.address.slice(-4)}
            </Link>
          </TableCell>
          <TableCell>{displayToken(token)}</TableCell>
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
                        //setTokens(newTokens);
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
                    token.assetType === "vrc200"
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
                    token.assetType === "vrc200"
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
                    /*
                    {
                      label: "B",
                      description: "Burn",
                      icon: <FireplaceIcon />,
                      onClick: async () => {
                        console.log({ token });
                        const balance = fawd(
                          await ARC200Service.balanceOf(
                            token.appId,
                            activeAccount.address,
                            token.decimals
                          ),
                          token.decimals
                        );
                        ARC200Service.transfer(
                          token,
                          activeAccount.address,
                          token.zeroAddress,
                          fawd(
                            await ARC200Service.balanceOf(
                              token.appId,
                              activeAccount.address,
                              token.decimals
                            ),
                            token.decimals
                          )
                        );
                      },
                    },
                    */
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
  const [nativeTokens, setNativeTokens] = useState(null);
  const [arc200Tokens, setArc200Tokens] = useState(null);
  const [tokens, setTokens] = useState(null);
  const [sendDialogOpen, setSendDialogOpen] = useState(false);
  useEffect(() => {
    if (!activeAccount) return;
    (async () => {
      const { indexer } = await stdlib.getProvider();
      const accInfo = await indexer
        .lookupAccountByID(activeAccount.address)
        .do();
      setNetworkTokens([
        {
          name: "Voi",
          symbol: "VOI",
          tokenId: 0,
          amount: fawd(accInfo?.account?.["amount-without-pending-rewards"], 6),
          type: "network",
          network: "voi",
          decimals: 6,
        },
      ]);
    })();
  }, [activeAccount]);
  useEffect(() => {
    if (!activeAccount) return;
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
    if (!nativeTokens || !arc200Tokens || !networkTokens) return;
    const tokens = [];
    for (const asset of nativeTokens) {
      tokens.push({
        ...asset,
        tokenId: asset["asset-id"],
        assetType: "vsa", // TODO switch display based on network
      });
    }
    for (const token of arc200Tokens) {
      tokens.push({
        ...token,
        tokenId: token.appId,
        assetType: "vrc200", // TODO switch display based on network
      });
    }
    for (const token of networkTokens) {
      tokens.push({
        ...token,
        tokenId: 0,
        assetType: "network",
      });
    }
    tokens.sort((a, b) => a.tokenId - b.tokenId);
    setTokens(tokens);
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
    for (const appId of props.tokens) {
      const meta = await ARC200Service.getTokenMetadata(appId);
      const amount = fawd(
        await ARC200Service.balanceOf(appId, activeAccount.address),
        meta.decimals
      );
      tokens.push({
        appId,
        amount,
        ...meta,
      });
    }
    setArc200Tokens(tokens);
  }, [activeAccount, props.tokens]);
  // -------------------------------------------
  // effect: reload tokens on account change
  // -------------------------------------------
  useEffect(() => {
    if (arc200Tokens) return;
    reloadTokens();
  }, [activeAccount, arc200Tokens]);
  useEffect(() => {
    reloadTokens();
  }, [props.tokens]);
  // -------------------------------------------
  return (
    <div className="AccountBalances">
      <TableContainer component={Paper}>
        <Table aria-label="customized pagination table">
          {!arc200Tokens ? (
            <>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Skeleton variant="text" />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {arc200Tokens?.map((appId, index) => (
                  <TableRow key={appId}>
                    {/*<StyledTableCell>
                      <Skeleton variant="text" />
                </StyledTableCell>*/}
                    <StyledTableCell>
                      <Skeleton variant="text" />
                    </StyledTableCell>
                    <StyledTableCell>
                      <Skeleton variant="text" />
                    </StyledTableCell>
                    <StyledTableCell>
                      <Skeleton variant="text" />
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </>
          ) : (
            <>
              <SendDialog
                open={sendDialogOpen}
                setOpen={setSendDialogOpen}
                token={token}
                setTokens={setArc200Tokens}
                tokens={arc200Tokens}
              />
              <TableHead>
                <TableRow>
                  {/*<StyledTableCell>ID</StyledTableCell>*/}
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Balance</StyledTableCell>
                  <StyledTableCell>Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tokens?.map((token) => (
                  <AccountBalance
                    key={token.appId}
                    token={token}
                    manage={props.manage}
                  />
                ))}
              </TableBody>
            </>
          )}
        </Table>
      </TableContainer>
    </div>
  );
}

export default AccountBalances;
