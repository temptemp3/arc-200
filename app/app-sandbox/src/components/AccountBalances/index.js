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
} from "@mui/material";
import ARC200Service from "../../services/ARC200Service.ts";
import { makeStdLib } from "../../utils/reach";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import { displayToken, zeroAddress } from "../../utils/algorand.js";
import SendDialog from "../SendDialog/index.js";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import defaultTokens from "../../config/defaultTokens.js";

import FireplaceIcon from "@mui/icons-material/Fireplace";

const stdlib = makeStdLib();
const { algosdk } = stdlib;
const fawd = stdlib.formatWithDecimals;

const [node] = (localStorage.getItem("node") || "algorand-testnet::").split(
  ":"
);

function AccountBalance(props) {
  const { activeAccount } = useWallet();
  const [sendDialogOpen, setSendDialogOpen] = useState(false);
  const [token, setToken] = useState(props.token);
  const reloadToken = useCallback(async () => {
    const backendId = await ARC200Service.getBackendId(token.appId);
    const meta = await ARC200Service.getTokenMetadata(token.appId, backendId);
    const amount = fawd(
      await ARC200Service.balanceOf(token.appId, activeAccount.address, backendId),
      meta.decimals
    );
    const token = {
      appId: token.appId,
      amount,
      ...meta,
    };
    setToken(token);
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
        <TableRow key={token.appId}>
          <TableCell>{token.appId}</TableCell>
          <TableCell>
            {token.name} <br />
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
              ).map((el) => (
                <Tooltip key={el.label} placement="top" title={el.description}>
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
  const [tokens, setTokens] = useState(null);
  const [sendDialogOpen, setSendDialogOpen] = useState(false);

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

  const reloadTokens = useCallback(async () => {
    if (!activeAccount) return;
    const tokens = [];
    for (const appId of props.tokens) {
      const backendId = await ARC200Service.getBackendId(appId);
      const meta = await ARC200Service.getTokenMetadata(appId, backendId);
      const amount = fawd(
        await ARC200Service.balanceOf(appId, activeAccount.address, backendId),
        meta.decimals
      );
      tokens.push({
        appId,
        amount,
        ...meta,
        backendId,
      });
    }
    setTokens(tokens);
  }, [activeAccount, props.tokens]);
  // -------------------------------------------
  // effect: reload tokens on account change
  // -------------------------------------------
  useEffect(() => {
    if (tokens) return;
    reloadTokens();
  }, [activeAccount, tokens]);
  useEffect(() => {
    reloadTokens();
  }, [props.tokens]);
  // -------------------------------------------
  return (
    <div className="AccountBalances">
      <TableContainer component={Paper}>
        <Table aria-label="customized pagination table">
          {!tokens ? (
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
                {tokens?.map((appId, index) => (
                  <TableRow key={appId}>
                    <StyledTableCell>
                      <Skeleton variant="text" />
                    </StyledTableCell>
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
                setTokens={setTokens}
                tokens={tokens}
              />
              <TableHead>
                <TableRow>
                  <StyledTableCell>ID</StyledTableCell>
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
