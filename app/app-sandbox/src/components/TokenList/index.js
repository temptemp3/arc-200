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
  Skeleton,
  Chip,
  Typography,
  Box,
  Stack,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { getCurrentNode, getGenesisHash } from "../../utils/reach";
import ARC200Service from "../../services/ARC200Service";
import { makeStdLib } from "../../utils/reach";
import BoltIcon from "@mui/icons-material/Bolt";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
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
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import defaultTokens from "../../config/defaultTokens.js";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FireplaceIcon from "@mui/icons-material/Fireplace";
import { DEFAULT_NODE } from "../../config/defaultLocalStorage.js";
import LoadingIndicator from "../LoadingIndicator/index.js";
import AddIcon from "@mui/icons-material/Add";
import * as wntBackend from "../../backend/wnt200/index.wNT200.mjs";
import CONTRACT from "arccjs";
import arc200Schema from "../../abis/arc200.json";
import arc200 from "arc200js";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";

const stdlib = makeStdLib();
const fawd = stdlib.formatWithDecimals;

/*
const [node] = (localStorage.getItem("node") || DEFAULT_NODE).split(":");
*/

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

async function addToken(token) {
  try {
    await db.tokens.add(token);
  } catch (error) {
    console.log(error);
  }
}

function TokenList(props) {
  const { activeAccount } = useWallet();
  const [showLPT, setShowLPT] = useState(false);
  const [showBalTokens, setBalTokens] = useState(false);
  const [search, setSearch] = useState("");
  const [node] = getCurrentNode();
  const dbTokens = useLiveQuery(() => db.tokens.toArray());
  const [myTokens, setMyTokens] = useState([]);
  useEffect(() => {
    setMyTokens(
      JSON.parse(
        localStorage.getItem("tokens") || `${JSON.stringify(defaultTokens)}` // TODO centralize arc200 token id
      )[node]
    );
  }, []);
  const [tokenIds, setTokenIds] = useState(null);
  const [tokens, setTokens] = useState(null);
  const [scanning, setScanning] = useState(false);
  useEffect(() => {
    if (!props.pools) return;
    const tokenIds = new Set();
    props.pools.forEach((pool) => {
      const { tokA, tokB, poolId } = pool;
      tokenIds.add(tokA);
      tokenIds.add(tokB);
      tokenIds.add(poolId);
    });
    setTokenIds(Array.from(tokenIds));
  }, [props.pools]);
  useEffect(() => {
    if (!tokenIds || !dbTokens || tokens) return;
    const { algodClient, indexerClient } = getAlgorandClients();
    const newTokens = [];
    tokenIds.map(async (tokenId) => {
      const dbToken = dbTokens.find((t) => t.tokenId === tokenId);
      if (!dbToken) {
        const ci = new arc200(tokenId, algodClient, indexerClient);
        // --- get metadata
        const nameR = await ci.arc200_name();
        if (!nameR.success) return;
        const assetName = nameR.returnValue;
        const symbolR = await ci.arc200_symbol();
        if (!symbolR.success) return;
        const symbol = symbolR.returnValue;
        let decimals;
        if (symbol === "ARC200LT") decimals = 6;
        else {
          const decimalsR = await ci.arc200_decimals().catch(() => {});
          if (!decimalsR.success) return;
          decimals = decimalsR.returnValue;
        }
        const tm = {
          name: assetName,
          symbol,
          decimals,
          tokenId,
        };
        // ---
        const pk = `${node}:${tokenId}`;
        const newToken = {
          ...tm,
          pk,
          tokenId,
          network: node,
          assetType: "rc200",
        };
        addToken(newToken);
        newTokens.push(newToken);
      } else {
        newTokens.push(dbToken);
      }
    });
    setTokens(newTokens);
  }, [tokenIds, dbTokens]);
  const addMyToken = useCallback(
    (tokenId) => {
      const tokens = JSON.parse(
        localStorage.getItem("tokens") || `${JSON.stringify(defaultTokens)}` // TODO centralize arc200 token id
      );
      const newTokens = Array.from(new Set([...tokens[node], tokenId]));
      localStorage.setItem(
        "tokens",
        JSON.stringify({
          ...tokens,
          [node]: newTokens,
        })
      );
      setMyTokens(newTokens);
    },
    [node]
  );
  const isLoading = useMemo(() => !tokens, [tokens]);
  if (isLoading) return "Loading...";
  return (
    <div className="Tokens">
      <FormGroup sx={{ display: "flex" }}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
        />
        <FormControlLabel
          control={
            <Checkbox
              onClick={() => {
                setShowLPT(!showLPT);
              }}
              checked={showLPT}
            />
          }
          label="Show ARC200 LP tokens"
        />
        {activeAccount && (
          <FormControlLabel
            control={
              <Checkbox
                onClick={() => {
                  setBalTokens(!showBalTokens);
                }}
                checked={showBalTokens}
              />
            }
            label="Show only tokens with balance"
          />
        )}
      </FormGroup>
      <Stack>
        {activeAccount && (
          <Button
            disabled={scanning}
            variant="contained"
            onClick={async () => {
              setScanning(true);
              const { algodClient, indexerClient } = getAlgorandClients();
              const bals = await Promise.all(
                tokens.map((token) => {
                  const { tokenId } = token;
                  const ci = new arc200(tokenId, algodClient, indexerClient);
                  return ci.arc200_balanceOf(activeAccount.address);
                })
              );
              const newTokens = [];
              for (let i = 0; i < tokens.length; i++) {
                const token = tokens[i];
                const bal = bals[i];
                if (bal.success) {
                  const newToken = {
                    ...token,
                    balance: bal.returnValue,
                  };
                  newTokens.push(newToken);
                }
              }
              setTokens(newTokens);
              setShowLPT(true);
              setBalTokens(true);
              setScanning(false);
            }}
          >
            {scanning ? "Scanning..." : "Scan"}
          </Button>
        )}
      </Stack>
      <TableContainer sx={{ mt: 3 }} component={Paper}>
        <Table aria-label="customized pagination table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Token</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tokens
              ?.filter((t) => {
                return (
                  ((!showLPT && t.symbol !== "ARC200LT") || showLPT) &&
                  t.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
                  (!showBalTokens || t.balance)
                );
              })
              .map((token) => (
                <TableRow key={token.pk}>
                  <StyledTableCell
                    component="td"
                    scope="row"
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Stack direction="column" gap={1}>
                      <Typography variant="body1">
                        {token.name} <Chip label={token.symbol} />
                        <Chip sx={{ ml: 1 }} label={token.tokenId} />
                        {token.balance && (
                          <Chip
                            color="success"
                            variant="outlined"
                            sx={{ ml: 1 }}
                            label={`Balance: ${fawd(
                              token.balance.toString(),
                              6
                            )}`}
                          />
                        )}
                      </Typography>
                    </Stack>
                    <Box>
                      <Divider orientation="vertical" flexItem />
                      <ButtonGroup>
                        <Button
                          variant="text"
                          onClick={() => {
                            window.open(`/#/token/${token.tokenId}`);
                          }}
                        >
                          View
                        </Button>
                        {!myTokens.includes(token.tokenId) && (
                          <>
                            <Divider orientation="vertical" flexItem />
                            <Button
                              variant="text"
                              onClick={() => addMyToken(token.tokenId)}
                            >
                              Add to Wallet
                            </Button>
                          </>
                        )}
                      </ButtonGroup>
                    </Box>
                  </StyledTableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TokenList;
