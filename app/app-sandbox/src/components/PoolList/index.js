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
import arc200 from "arc200js";
import LoadingIndicator from "../LoadingIndicator/index.js";
import AddIcon from "@mui/icons-material/Add";
import * as wntBackend from "../../backend/wnt200/index.wNT200.mjs";
import CONTRACT from "arccjs";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";

const stdlib = makeStdLib();
const fawd = stdlib.formatWithDecimals;

const [node] = (localStorage.getItem("node") || DEFAULT_NODE).split(":");

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

export const badPools = [29138188, 29138375, 29146294, 29137625, 29138141];

function PoolListItem(props) {
  const [tm, setTm] = useState(null);
  const token = useMemo(() => {
    return props.tokens.find((t) => t.tokenId === props.poolId);
  }, [props.poolId, props.tokens]);
  return badPools.includes(props.poolId) ? null : (
    <TableRow key={props.poolId}>
      <StyledTableCell
        component="td"
        scope="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="body1">{token.name}</Typography>
        <Box>
          <Button
            variant="text"
            onClick={() => {
              window.location.href = `/#/swap?poolId=${props.poolId}&mode=swap`;
            }}
          >
            Swap
          </Button>
          <Divider orientation="vertical" flexItem />
          <Button
            variant="text"
            onClick={() => {
              window.location.href = `/#/swap?poolId=${props.poolId}&mode=pool`;
            }}
          >
            Pool
          </Button>
        </Box>
      </StyledTableCell>
    </TableRow>
  );
}

function Pools(props) {
  const [search, setSearch] = useState("");
  const dbTokens = useLiveQuery(() => db.tokens.toArray());
  const isLoading = useMemo(
    () => !props.pools || !dbTokens,
    [props.pools, dbTokens]
  );
  if (isLoading) return <LoadingIndicator />;
  return (
    <div className="Pools">
      <FormGroup sx={{ display: "flex" }}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
        />
      </FormGroup>
      <TableContainer sx={{ mt: 3 }} component={Paper}>
        <Table aria-label="customized pagination table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Pair</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props?.pools
              ?.filter((p) => {
                if (badPools.includes(p.poolId)) return false;
                const token = dbTokens.find((t) => t.tokenId === p.poolId);
                return token?.name
                  ?.toLowerCase()
                  .includes(search.toLowerCase());
              })
              ?.map((pool) => (
                <PoolListItem key={pool.pk} {...pool} tokens={dbTokens} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Pools;
