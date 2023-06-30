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
import { displayToken } from "../../utils/algorand.js";
import SendDialog from "../SendDialog/index.js";
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const stdlib = makeStdLib();
const fawd = stdlib.formatWithDecimals;

function AccountBalance(props) {
  const { activeAccount } = useWallet();
  const [sendDialogOpen, setSendDialogOpen] = useState(false);
  const [token, setToken] = useState(props.token);
  const reloadToken = useCallback(async () => {
    if (!activeAccount) return;
    const meta = await ARC200Service.getTokenMetadata(token.appId);
    const amount = fawd(
      await ARC200Service.balanceOf(token.appId, activeAccount.address),
      meta.decimals
    );
    setToken({
      appId: token.appId,
      amount,
      ...meta,
    });
  }, [activeAccount, token]);
  useEffect(() => {
    if (!activeAccount) return;
    // realtime
    /*
    ARC200Service.nextTransferEvent(token.appId)
      .then(reloadToken())
      .catch(console.error);
    */
   // every 30 seconds
    const interval = setInterval(reloadToken, 30_000);
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
        />
        <TableRow key={token.appId}>
          <TableCell>{token.appId}</TableCell>
          <TableCell>
            {token.name} <br />
            <a
              href={`/#/token/${token.appId}`}
              target="_blank"
              rel="noreferrer"
            >
              Token Info
            </a>{" "}
            <br />
            <a
              href={`/#/transaction/${token.appId}`}
              target="_blank"
              rel="noreferrer"
            >
              Transactions for {activeAccount.address.slice(0, 4)}...
              {activeAccount.address.slice(-4)}
            </a>
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
                          localStorage.getItem("tokens") || "[249906631]"
                        );
                        const newTokens = tokens.filter(
                          (el) => el != token.appId
                        );
                        localStorage.setItem(
                          "tokens",
                          JSON.stringify(newTokens)
                        );
                        //setTokens(newTokens);
                        setToken(null);
                      },
                    },
                  ]
                : [
                    {
                      label: "S",
                      desciption: "Send",
                      icon: <SendIcon />,
                      onClick: () => {
                        setToken(token);
                        setSendDialogOpen(true);
                      },
                    },
                  ]
              ).map((el) => (
                <Tooltip key={el.label} placement="top" title={el.desciption}>
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
          props.tokens && (
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
                {props?.tokens?.map((appId, index) => (
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
          )
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
