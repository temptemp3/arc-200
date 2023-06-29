import { useCallback, useEffect, useState } from "react";
import { useWallet } from "@txnlab/use-wallet";
import {
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
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

const stdlib = makeStdLib();
const fawd = stdlib.formatWithDecimals;

// TODO add interface for props

function AccountBalances(props) {
  const { activeAccount } = useWallet();
  const [token, setToken] = useState({});
  const [tokens, setTokens] = useState(null);
  const [sendDialogOpen, setSendDialogOpen] = useState(false);
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
      <Table>
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
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Balance</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tokens?.map((token) => (
                <TableRow key={token.appId}>
                  <TableCell>{token.appId}</TableCell>
                  <TableCell>
                    {token.name} <br />
                    <a href={`/#/token/${token.appId}`} target="_blank">
                      Token Info
                    </a>{" "}
                    <br />
                    <a href={`/#/transaction/${token.appId}`} target="_blank">
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
                                const newTokens = tokens.filter(
                                  (el) => el.appId != token.appId
                                );
                                console.log({ newTokens });
                                localStorage.setItem(
                                  "tokens",
                                  JSON.stringify(
                                    newTokens.map((el) => el.appId)
                                  )
                                );
                                setTokens(newTokens);
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
                        <Tooltip
                          key={el.label}
                          placement="top"
                          title={el.desciption}
                        >
                          <Button onClick={el.onClick}>
                            {el.icon || el.label}
                          </Button>
                        </Tooltip>
                      ))}
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        )}
      </Table>
    </div>
  );
}

export default AccountBalances;
