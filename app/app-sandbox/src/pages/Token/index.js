import * as React from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { makeStdLib } from "../../utils/reach";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getAlgorandClients, zeroAddress } from "../../utils/algorand";

import NFDService from "../../services/NFDService";

import moment from "moment";
import LoadingIndicator from "../../components/LoadingIndicator";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import arc200 from "arc200js";

const stdlib = makeStdLib();
const bn = stdlib.bigNumberify;
const fa = stdlib.formatAddress;
const fawd = (amt, dec) => stdlib.formatWithDecimals(amt, Number(dec));
const bn2n = stdlib.bigNumberToNumber;
const bn2bi = stdlib.bigNumberToBigInt;

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// Token Approval Sums
const TokenApprovals = ({
  addresses,
  setAddresses,
  token,
  approvals,
  nfds,
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  if (approvals?.length === 0) return null;
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - approvals?.length) : 0;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    token && (
      <Box sx={{ textAlign: "left", margin: 1 }}>
        <h2>
          Approvals <small>by owner</small> [
          {approvals?.length > 0 ? approvals?.length : "..."}]
        </h2>
        {approvals?.length > 0 ? (
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 700 }}
              aria-label="customized pagination table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell>Owner</StyledTableCell>
                  <StyledTableCell>Spender</StyledTableCell>
                  <StyledTableCell align="right">Amount</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {approvals?.length > 0 ? (
                  (rowsPerPage > 0
                    ? approvals?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : approvals
                  ).map((row) => (
                    <StyledTableRow key={`approval-owner-${row[0]}`}>
                      <StyledTableCell>
                        <Link
                          style={{
                            fontWeight:
                              (addresses ?? []).includes(row[0]) && "bold",
                          }}
                          onClick={() => {
                            setAddresses(
                              Array.from(
                                new Set([...(addresses ?? []), row[0]])
                              )
                            );
                          }}
                        >
                          {((address) =>
                            nfds[address]?.name ||
                            address.slice(0, 8) + "..." + address.slice(-8))(
                            row[0]
                          )}
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Link
                          style={{
                            fontWeight:
                              (addresses ?? []).includes(row[1]) && "bold",
                          }}
                          onClick={() => {
                            setAddresses(
                              Array.from(
                                new Set([...(addresses ?? []), row[1]])
                              )
                            );
                          }}
                        >
                          {((address) =>
                            nfds[address]?.name ||
                            address.slice(0, 8) + "..." + address.slice(-8))(
                            row[1]
                          )}
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {(([a, b]) =>
                          [Number(a).toLocaleString(), b].join("."))(
                          Number(row[2]).toFixed(token.decimals).split(".")
                        )}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
                ) : (
                  <StyledTableRow style={{ height: 184 }}>
                    <StyledTableCell colSpan={3} align="center">
                      Loading...
                    </StyledTableCell>
                  </StyledTableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={3}
                    count={approvals?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        ) : (
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <Skeleton variant="rounded" width="100%" height={278} />
          </Paper>
        )}
      </Box>
    )
  );
};

// Token Approval Sums
const TokenApprovalSums = ({
  addresses,
  setAddresses,
  token,
  approvals,
  nfds,
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  if (approvals?.length === 0) return null;
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - approvals?.length) : 0;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    token && (
      <Box sx={{ textAlign: "left", margin: 1 }}>
        <h2>
          Approvals <small>for spending</small> [
          {approvals?.length > 0 ? approvals?.length : "..."}]
        </h2>
        {approvals?.length > 0 ? (
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 700 }}
              aria-label="customized pagination table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell>Spender</StyledTableCell>
                  <StyledTableCell align="right">Amount</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {approvals?.length > 0 ? (
                  (rowsPerPage > 0
                    ? approvals?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : approvals
                  ).map((row) => (
                    <StyledTableRow key={`approval-owner-${row[0]}`}>
                      <StyledTableCell>
                        <Link
                          style={{
                            fontWeight:
                              (addresses ?? []).includes(row[0]) && "bold",
                          }}
                          onClick={() => {
                            setAddresses(
                              Array.from(
                                new Set([...(addresses ?? []), row[0]])
                              )
                            );
                          }}
                        >
                          {((address) =>
                            nfds[address]?.name ||
                            address.slice(0, 8) + "..." + address.slice(-8))(
                            row[0]
                          )}
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {(([a, b]) =>
                          [Number(a).toLocaleString(), b].join("."))(
                          Number(row[1]).toFixed(token.decimals).split(".")
                        )}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
                ) : (
                  <StyledTableRow style={{ height: 184 }}>
                    <StyledTableCell colSpan={3} align="center">
                      Loading...
                    </StyledTableCell>
                  </StyledTableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={3}
                    count={approvals?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        ) : (
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <Skeleton variant="rounded" width="100%" height={278} />
          </Paper>
        )}
      </Box>
    )
  );
};

const TokenHolders = ({ addresses, setAddresses, token, holders, nfds }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  if (holders?.length === 0) return null;
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - holders?.length) : 0;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    token && (
      <Box sx={{ textAlign: "left", margin: 1 }}>
        <h2>Holders [{holders?.length > 0 ? holders?.length : "..."}]</h2>
        {holders?.length > 0 ? (
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 700 }}
              aria-label="customized pagination table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell>Address</StyledTableCell>
                  <StyledTableCell align="right">Balance</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {holders?.length > 0 ? (
                  (rowsPerPage > 0
                    ? holders?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : holders
                  ).map((row) => (
                    <StyledTableRow key={row[0]}>
                      <StyledTableCell>
                        <Link
                          style={{
                            fontWeight:
                              (addresses ?? []).includes(row[0]) && "bold",
                          }}
                          onClick={() => {
                            setAddresses(
                              Array.from(
                                new Set([...(addresses ?? []), row[0]])
                              )
                            );
                          }}
                        >
                          {((address) =>
                            nfds[address]?.name ||
                            address.slice(0, 8) + "..." + address.slice(-8))(
                            row[0]
                          )}
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {Number(row[1]).toFixed(token.decimals)}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
                ) : (
                  <StyledTableRow style={{ height: 184 }}>
                    <StyledTableCell colSpan={2} align="center">
                      Loading...
                    </StyledTableCell>
                  </StyledTableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={3}
                    count={holders?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        ) : (
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <Skeleton variant="rounded" width="100%" height={278} />
          </Paper>
        )}
      </Box>
    )
  );
};

const TokenTransactions = ({
  addresses,
  setAddresses,
  token,
  transactions,
  nfds,
}) => {
  const [pageTx, setTxPage] = React.useState(0);
  const [rowsTxPerPage, setTxRowsPerPage] = React.useState(5);
  if ((transactions?.length ?? 0) === 0) return null;
  const handleTxChangePage = (event, newPage) => {
    setTxPage(newPage);
  };
  const handleTxChangeRowsPerPage = (event) => {
    setTxRowsPerPage(parseInt(event.target.value, 10));
    setTxPage(0);
  };
  return (
    token && (
      <Box sx={{ textAlign: "left", margin: 1 }}>
        <h2>
          Transactions [
          {transactions?.length > 0 ? transactions?.length : "..."}]
        </h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Block</StyledTableCell>
                <StyledTableCell>Timestamp</StyledTableCell>
                <StyledTableCell align="left">Type</StyledTableCell>
                <StyledTableCell align="right">From</StyledTableCell>
                <StyledTableCell align="right">To</StyledTableCell>
                <StyledTableCell align="right">Amount</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions?.length > 0 ? (
                (rowsTxPerPage > 0
                  ? transactions?.slice(
                      pageTx * rowsTxPerPage,
                      pageTx * rowsTxPerPage + rowsTxPerPage
                    )
                  : transactions
                ).map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row[0]}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {moment.unix(row[1]).format()}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="left">
                      <Chip size="small" variant="outlined" label={row[5]} />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Link
                        style={{
                          fontWeight:
                            (addresses ?? []).includes(row[2]) && "bold",
                        }}
                        onClick={() => {
                          setAddresses(
                            Array.from(new Set([...(addresses ?? []), row[2]]))
                          );
                        }}
                      >
                        {((address) =>
                          nfds[address]?.name ||
                          address.slice(0, 8) + "..." + address.slice(-8))(
                          row[2]
                        )}
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Link
                        style={{
                          fontWeight:
                            (addresses ?? []).includes(row[3]) && "bold",
                        }}
                        onClick={() => {
                          setAddresses(
                            Array.from(new Set([...(addresses ?? []), row[3]]))
                          );
                        }}
                      >
                        {((address) =>
                          nfds[address]?.name ||
                          address.slice(0, 8) + "..." + address.slice(-8))(
                          row[3]
                        )}
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {Number(
                        fawd(bn(row[4].toString()), token.decimals)
                      ).toFixed(token.decimals)}
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              ) : (
                <StyledTableRow style={{ height: 184 }}>
                  <StyledTableCell colSpan={5} align="center">
                    Loading...
                  </StyledTableCell>
                </StyledTableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={transactions?.length}
                  rowsPerPage={rowsTxPerPage}
                  page={pageTx}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleTxChangePage}
                  onRowsPerPageChange={handleTxChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    )
  );
};

const Token = ({
  addresses,
  setAddresses,
  token,
  transactions,
  holders,
  nfds,
  approvals,
}) => {
  // total amount approved for each spender
  const approvalsSum = new Map();
  for (const [owner, spender, amount] of approvals) {
    if (!approvalsSum.has(spender)) approvalsSum.set(spender, 0n);
    approvalsSum.set(
      spender,
      Number(approvalsSum.get(spender)) + Number(amount)
    );
  }

  return (
    // Token Info
    <Stack sx={{ margin: 1 }}>
      {token && (
        <Stack>
          <Stack direction="row" style={{ alignItems: "baseline" }}>
            <Typography variant="h1">{token.symbol}</Typography>
          </Stack>
          <Stack direction="column" gap="1em" style={{ textAlign: "left" }}>
            <code style={{ display: "inline-block" }}>
              {token.appId && <span>Id: {token.appId}</span>}
              <br />
              {token.name && `Name: ${token.name}`}
              <br />
              {token.symbol && `Symbol: ${token.symbol}`}
              <br />
              Decimals: {token.decimals.toString()}
              <br />
              Total Supply:{" "}
              {Number(
                fawd(token.totalSupply.toString(), token.decimals)
              ).toLocaleString()}
              <br />
              Circulating Supply: {token.circulatingSupply}
              <br />
              Date of creation:{" "}
              {transactions?.length > 0
                ? moment.unix(transactions.slice(-1)[0][1]).format("LLL")
                : "-"}
              <br />
              Created at round:{" "}
              {transactions?.length > 0
                ? Number(transactions.slice(-1)[0][0]).toLocaleString()
                : "-"}
            </code>
          </Stack>
        </Stack>
      )}
      <Box
        direction="row"
        gap="1em"
        style={{ textAlign: "left" }}
        sx={{ mt: 5 }}
      >
        {/* deletable chips holding addresses without link style */}
        {addresses?.map((address, index) => (
          <Chip
            key={`address-${index}`}
            sx={{ m: 1 }}
            onDelete={() => {
              if (addresses.length > 1) {
                setAddresses(addresses.filter((a) => a !== address));
              } else {
                setAddresses(null);
              }
            }}
            label={((address) =>
              nfds[address]?.name ||
              address.slice(0, 8) + "..." + address.slice(-8))(address)}
          />
        ))}
        {addresses?.length > 1 && (
          <Chip label="Clear" onClick={() => setAddresses(null)} />
        )}
      </Box>
      <TokenHolders
        addresses={addresses}
        setAddresses={setAddresses}
        token={token}
        holders={
          addresses ? holders.filter((h) => addresses.includes(h[0])) : holders
        }
        nfds={nfds}
      />
      <TokenApprovalSums
        addresses={addresses}
        setAddresses={setAddresses}
        token={token}
        approvals={((approvals) =>
          addresses
            ? approvals.filter((h) => addresses.includes(h[0]))
            : approvals)(
          Array.from(approvalsSum)
            .filter(([spender, amount]) => amount > 0n)
            .sort((a, b) => b[1] - a[1])
        )}
        nfds={nfds}
      />
      <TokenApprovals
        addresses={addresses}
        setAddresses={setAddresses}
        token={token}
        approvals={((approvals) =>
          addresses
            ? approvals.filter(
                (h) => addresses.includes(h[0]) || addresses.includes(h[1])
              )
            : approvals)(
          approvals
            .filter(([owner, spender, amount]) => amount > 0n)
            .sort((a, b) => b[2] - a[2])
        )}
        nfds={nfds}
      />

      <TokenTransactions
        addresses={addresses}
        setAddresses={setAddresses}
        token={token}
        transactions={
          addresses
            ? transactions.filter(
                (t) => addresses.includes(t[2]) || addresses.includes(t[3])
              )
            : transactions
        }
        nfds={nfds}
      />
    </Stack>
  );
};

function Page() {
  const { id: appId } = useParams();
  const [token, setToken] = React.useState(null);
  const [transactions, setTransactions] = React.useState(null);
  const [holders, setHolders] = React.useState(null);
  const [nfds, setNfds] = React.useState(null);
  const [events, setEvents] = React.useState(null);
  const [approvals, setApprovals] = React.useState(null);
  const [addresses, setAddresses] = React.useState(null);
  const [searchParams] = useSearchParams();
  const paramAddr = searchParams.get("address");
  React.useEffect(() => {
    if (paramAddr) setAddresses(paramAddr.split(","));
  }, [paramAddr]);
  const loading = React.useMemo(() => {
    if (!events) return { message: "Loading token info...", progress: 0 };
    return null;
  }, [events, token, holders, transactions, nfds]);
  React.useEffect(() => {
    (async () => {
      const appIdN = Number(appId);
      const { algodClient, indexerClient } = getAlgorandClients();
      const ci = new arc200(appIdN, algodClient, indexerClient);

      const events = await ci.getEvents();
      const transferEvent = events.find((el) => el.name === "arc200_Transfer");
      const approvalEvent = events.find((el) => el.name === "arc200_Approval");

      let state;
      const stateR = await ci.state();
      if (stateR.success) {
        state = stateR.returnValue;
      }
      let token;
      const tokenR = await ci.getMetadata();
      if (tokenR.success) {
        token = tokenR.returnValue;
      }
      const nonCirculating = (
        await Promise.all([
          ci.arc200_balanceOf(state.zeroAddress),
          ci.arc200_balanceOf(state.manager),
        ])
      ).reduce((acc, val) => acc + val.returnValue, 0n);
      const circulatingSupply = Number(
        fawd((token.totalSupply - nonCirculating).toString(), token.decimals)
      ).toLocaleString();
      const holders = {
        [zeroAddress]: token.totalSupply,
      };
      const ttxns = transferEvent.events;
      const addresses = new Set();
      for (const [, , from, to, amount] of ttxns) {
        addresses.add(from);
        addresses.add(to);
        if (holders[from]) holders[from] -= amount;
        else holders[from] = -amount;
        if (holders[to]) holders[to] += amount;
        else holders[to] = amount;
      }
      const balances = Object.entries(holders)
        .filter((el) => el[0] !== token.zeroAddress)
        .map(([address, amount]) => [address, fawd(amount, token.decimals)]);
      balances.sort(([a1, a2], [b1, b2]) => {
        if (a2 === b2) return a1.localeCompare(b1);
        return b2 - a2;
      });
      const atxns = approvalEvent.events;
      const approvalsM = new Map();
      for (const [, , owner, spender, amount] of atxns) {
        if (!approvalsM.has(owner)) approvalsM.set(owner, new Map());
        approvalsM.get(owner).set(spender, amount);
      }
      // flatten map to array containing [owner, spender, amount]
      const approvals = Array.from(approvalsM.entries()).flatMap(
        ([owner, spenderMap]) =>
          Array.from(spenderMap.entries()).map(([spender, amount]) => [
            owner,
            spender,
            fawd(amount, token.decimals),
          ])
      );
      const ctxns = [
        ...ttxns.map((data) => [...data, "Transfer"]),
        ...atxns.map((data) => [...data, "Approval"]),
      ];
      ctxns.sort((a, b) => b[1] - a[1]);

      await NFDService.getNFDByAddressBatch(Array.from(addresses));
      setToken({
        ...token,
        appId: appIdN,
        decimals: Number(token.decimals),
        circulatingSupply,
      });
      setEvents(events);
      setHolders(balances);
      setTransactions(ctxns);
      setApprovals(approvals);
      setNfds(NFDService.getNFDs());
    })();
  }, []);
  return token && holders && transactions && nfds && approvals ? (
    <Token
      addresses={addresses}
      setAddresses={setAddresses}
      token={token}
      transactions={transactions}
      holders={holders}
      nfds={nfds}
      approvals={approvals}
    />
  ) : (
    <LoadingIndicator message={loading.message} progress={loading.progress} />
  );
}

export default Page;
