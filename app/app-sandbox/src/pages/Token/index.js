import * as React from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Chip,
  Grid,
  Modal,
  Skeleton,
  Stack,
  Tab,
  Tabs,
  TextField,
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
import { getCurrentNode, makeStdLib } from "../../utils/reach";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getAlgorandClients, zeroAddress } from "../../utils/algorand";
import { Chart } from "react-google-charts";
import PieChartIcon from "@mui/icons-material/PieChart";

import NFDService from "../../services/NFDService";

import moment from "moment";
import LoadingIndicator from "../../components/LoadingIndicator";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as Copy from "react-copy-to-clipboard";
import { toast } from "react-toastify";

import arc200 from "arc200js";

import ContentCopy from "@mui/icons-material/ContentCopy";
import { formatWithDecimals } from "../../common/utils/bn";

import algosdk from "algosdk";
import { registeredToken, tokenURL } from "../../constants/json";

import { CSVLink, CSVDownload } from "react-csv";

import TypeFilter from "../../components/TypeFilter";

const stdlib = makeStdLib();
const bn = stdlib.bigNumberify;
const fa = stdlib.formatAddress;
const fawd = (amt, dec) => stdlib.formatWithDecimals(amt, Number(dec));
const bn2n = stdlib.bigNumberToNumber;
const bn2bi = stdlib.bigNumberToBigInt;

const modalBoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
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
  const { CopyToClipboard } = Copy;
  const notify = (msg) => toast(msg);
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
      <>
        <Box sx={{ textAlign: "left", margin: 1 }}>
          <Stack
            direction="row"
            gap={1}
            style={{ alignItems: "center", justifyContent: "flex-start" }}
          >
            <h2>
              Approvals <small>by owner</small> [
              {approvals?.length > 0 ? approvals?.length : "..."}]
            </h2>
          </Stack>
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
                          <Box sx={{ display: "flex", alignItems: "center" }}>
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
                                address.slice(0, 8) +
                                  "..." +
                                  address.slice(-8))(row[0])}
                            </Link>
                            &nbsp;
                            {((address) =>
                              nfds[address]?.name ? address.slice(0, 4) : "")(
                              row[0]
                            )}
                            &nbsp;
                            <CopyToClipboard
                              text={row[0]}
                              onCopy={() => {
                                notify(
                                  `Copied address ${row[0].slice(
                                    0,
                                    4
                                  )}...${row[0].slice(-4)} to clipboard!`
                                );
                              }}
                            >
                              <ContentCopy fontSize="small" />
                            </CopyToClipboard>
                          </Box>
                        </StyledTableCell>
                        <StyledTableCell>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
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
                                address.slice(0, 8) +
                                  "..." +
                                  address.slice(-8))(row[1])}
                            </Link>
                            &nbsp;
                            {((address) =>
                              nfds[address]?.name ? address.slice(0, 4) : "")(
                              row[1]
                            )}
                            &nbsp;
                            <CopyToClipboard
                              text={row[1]}
                              onCopy={() => {
                                notify(
                                  `Copied address ${row[1].slice(
                                    0,
                                    4
                                  )}...${row[1].slice(-4)} to clipboard!`
                                );
                              }}
                            >
                              <ContentCopy fontSize="small" />
                            </CopyToClipboard>
                          </Box>
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
      </>
    )
  );
};

const TokenHolders = ({
  chart,
  addresses,
  setAddresses,
  token,
  holders: tokenHolders,
  nfds,
}) => {
  const tokenAddr = algosdk.getApplicationAddress(token?.appId || 0);
  const holders = React.useMemo(() => {
    return tokenHolders.filter(([a, b]) => a != tokenAddr);
  }, [token.appId]);

  const { CopyToClipboard } = Copy;
  const notify = (msg) => toast(msg);
  const [page, setPage] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
      <>
        <Box sx={{ textAlign: "left", margin: 1 }}>
          <Stack
            direction="row"
            gap={1}
            style={{ alignItems: "center", justifyContent: "flex-start" }}
          >
            <h2>Holders [{holders?.length > 0 ? holders?.length : "..."}]</h2>
            <PieChartIcon color="primary" onClick={() => setShowModal(true)} />
          </Stack>
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
                          <Box sx={{ display: "flex", alignItems: "center" }}>
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
                                address.slice(0, 8) +
                                  "..." +
                                  address.slice(-8))(row[0])}
                            </Link>
                            &nbsp;
                            {((address) =>
                              nfds[address]?.name ? address.slice(0, 4) : "")(
                              row[0]
                            )}
                            &nbsp;
                            <CopyToClipboard
                              text={row[0]}
                              onCopy={() => {
                                notify(
                                  `Copied address ${row[0].slice(
                                    0,
                                    4
                                  )}...${row[0].slice(-4)} to clipboard!`
                                );
                              }}
                            >
                              <ContentCopy fontSize="small" />
                            </CopyToClipboard>
                          </Box>
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
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box style={modalBoxStyle}>{chart}</Box>
        </Modal>
      </>
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
  const { CopyToClipboard } = Copy;
  const notify = (msg) => toast(msg);
  const [addrTo, setAddrTo] = React.useState("");
  const [addrFrom, setAddrFrom] = React.useState("");
  const [txnType, setTxnType] = React.useState("");
  const [pageTx, setTxPage] = React.useState(0);
  const [rowsTxPerPage, setTxRowsPerPage] = React.useState(10);
  const filteredTransactions = React.useMemo(() => {
    return transactions?.filter(
      (tx) =>
        (addrTo === "" || tx[4] === addrTo) &&
        (addrFrom === "" || tx[3] === addrFrom) &&
        (txnType === "" || tx[6] === txnType)
    );
  });
  const csvData = React.useMemo(() => {
    const csvData = [
      ["txId", "block", "timestamp", "from", "to", "amount", "type"],
      ...filteredTransactions.map(
        ([txId, block, timestamp, from, to, amount, type]) => [
          txId,
          block,
          moment.unix(timestamp).format(),
          from,
          to,
          Number(amount) / 10 ** token.decimals,
          type,
        ]
      ),
    ];
    return csvData;
  }, [filteredTransactions]);
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
          {filteredTransactions?.length > 0
            ? filteredTransactions?.length
            : "..."}
          ]
        </h2>
        <h3>Filter by address</h3>
        <Grid container>
          <Grid item xs={6}>
            <Stack direction="row" gap={1}>
              <TextField
                id="address-from"
                label="Address From"
                variant="outlined"
                size="small"
                onChange={(e) => setAddrFrom(e.target.value)}
              />
              <TextField
                id="address-to"
                label="Address To"
                variant="outlined"
                size="small"
                onChange={(e) => setAddrTo(e.target.value)}
              />
              <TypeFilter onChange={(t) => setTxnType(t)} />
            </Stack>
          </Grid>
          <Grid
            sx={{ display: "flex", justifyContent: "flex-end" }}
            item
            xs={6}
          >
            <CSVLink
              data={csvData}
              filename={`${token.symbol}-${Date.now()}.csv`}
            >
              <Button>Export to CSV</Button>
            </CSVLink>
          </Grid>
        </Grid>
        <TableContainer sx={{ mt: 3 }} component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>TxID</StyledTableCell>
                <StyledTableCell>Block</StyledTableCell>
                <StyledTableCell>Timestamp</StyledTableCell>
                <StyledTableCell align="left">Type</StyledTableCell>
                <StyledTableCell align="right">From</StyledTableCell>
                <StyledTableCell align="right">To</StyledTableCell>
                <StyledTableCell align="right">Amount</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTransactions?.length > 0 ? (
                (rowsTxPerPage > 0
                  ? filteredTransactions?.slice(
                      pageTx * rowsTxPerPage,
                      pageTx * rowsTxPerPage + rowsTxPerPage
                    )
                  : filteredTransactions
                ).map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      <Link
                        target="_blank"
                        to={`https://voi.observer/explorer/transaction/${row[0]}`}
                      >
                        {((str) => str.slice(0, 4) + "..." + str.slice(-4))(
                          row[0]
                        )}
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row[1]}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {moment.unix(row[2]).format()}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="left">
                      <Chip size="small" variant="outlined" label={row[6]} />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Link
                          style={{
                            fontWeight:
                              (addresses ?? []).includes(row[3]) && "bold",
                          }}
                          onClick={() => {
                            setAddresses(
                              Array.from(
                                new Set([...(addresses ?? []), row[3]])
                              )
                            );
                          }}
                        >
                          {((address) =>
                            nfds[address]?.name ||
                            address.slice(0, 8) + "..." + address.slice(-8))(
                            row[3]
                          )}
                        </Link>
                        &nbsp;
                        {((address) =>
                          nfds[address]?.name ? address.slice(0, 4) : "")(
                          row[3]
                        )}
                        &nbsp;
                        <CopyToClipboard
                          text={row[3]}
                          onCopy={() => {
                            notify(
                              `Copied address ${row[3].slice(
                                0,
                                4
                              )}...${row[3].slice(-4)} to clipboard!`
                            );
                          }}
                        >
                          <ContentCopy fontSize="small" />
                        </CopyToClipboard>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Link
                          style={{
                            fontWeight:
                              (addresses ?? []).includes(row[4]) && "bold",
                          }}
                          onClick={() => {
                            setAddresses(
                              Array.from(
                                new Set([...(addresses ?? []), row[4]])
                              )
                            );
                          }}
                        >
                          {((address) =>
                            nfds[address]?.name ||
                            address.slice(0, 8) + "..." + address.slice(-8))(
                            row[4]
                          )}
                        </Link>
                        &nbsp;
                        {((address) =>
                          nfds[address]?.name ? address.slice(0, 4) : "")(
                          row[4]
                        )}
                        &nbsp;
                        <CopyToClipboard
                          text={row[4]}
                          onCopy={() => {
                            notify(
                              `Copied address ${row[4].slice(
                                0,
                                4
                              )}...${row[4].slice(-4)} to clipboard!`
                            );
                          }}
                        >
                          <ContentCopy fontSize="small" />
                        </CopyToClipboard>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {Number(
                        fawd(bn(row[5].toString()), token.decimals)
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
                  count={filteredTransactions?.length}
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return value == index && children;
}

const Token = ({
  addresses,
  setAddresses,
  token,
  transactions,
  holders,
  nfds,
  approvals,
}) => {
  const [node] = getCurrentNode();
  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filteredHolders = React.useMemo(
    () =>
      addresses ? holders.filter((h) => addresses.includes(h[0])) : holders,
    [addresses]
  );

  const renderPieChart = (title, data) => {
    return (
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={{
          title: title,
          pieHole: 0.4,
          is3D: false,
        }}
      />
    );
  };
  const holdersChart = renderPieChart("Token Holders", [
    ["Account", "Amount"],
    ...(addresses ? filteredHolders : holders)
      .map(([address, amount]) => [address.slice(0, 4), Number(amount)])
      .filter(([address, amount]) => amount > 0),
  ]);
  return (
    // Token Info
    <Stack sx={{ margin: 1 }}>
      {token && (
        <Stack direction="row" style={{ alignItems: "start" }} gap={2}>
          {registeredToken(node, token.appId) && (
            <img src={tokenURL(node, token.appId)} width="200" height="200" />
          )}
          <Stack>
            <Stack direction="row" style={{ alignItems: "baseline" }}>
              <Typography variant="h1">{token.symbol}</Typography>
            </Stack>
            <Stack direction="column" gap="1em" style={{ textAlign: "left" }}>
              <code style={{ display: "inline-block" }}>
                {token.appId && <span>Id: {token.appId}</span>} <br />
                {token.name && `Name: ${token.name}`}
                <br />
                {token.symbol && `Symbol: ${token.symbol}`}
                <br />
                Decimals: {token.decimals.toString()}
                <br />
                Total Supply:{" "}
                {Number(
                  fawd(token.totalSupply, token.decimals)
                ).toLocaleString()}
                <br />
                Circulating Supply: {token.circulatingSupply.toString()}
                <br />
                Date of creation:{" "}
                {transactions?.length > 0
                  ? moment.unix(transactions.slice(-1)[0][2]).format("LLL")
                  : "-"}
                <br />
                Created at round:{" "}
                {transactions?.length > 0
                  ? Number(transactions.slice(-1)[0][1]).toLocaleString()
                  : "-"}
              </code>
            </Stack>
          </Stack>
        </Stack>
      )}
      {((tok) =>
        tok &&
        tok.profile && (
          <Box sx={{ mt: 3 }}>
            <p style={{ textAlign: "left" }}>
              {tok.profile}&nbsp;
              {((tok) =>
                tok &&
                tok.url && (
                  <>
                    <br />
                    <br />
                    <span>
                      More Information:&nbsp;
                      <a
                        target="_blank"
                        href={tok.url}
                        rel="noopener noreferrer nofollow"
                      >
                        {tok.url}
                      </a>
                    </span>
                  </>
                ))(registeredToken(node, token.appId))}
            </p>
          </Box>
        ))(registeredToken(node, token.appId))}
      <Tabs
        sx={{ m: 0, backgroundColor: "aliceblue", mt: 3 }}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="Holders" />
        <Tab label="Approvals" />
        <Tab label="Transactions" />
      </Tabs>
      <Box
        direction="row"
        gap="1em"
        style={{ textAlign: "left" }}
        sx={{ mt: 2 }}
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
            label={`${((address) =>
              nfds[address]?.name ||
              address.slice(0, 8) + "..." + address.slice(-8))(address)} ${
              nfds[address] ? address.slice(0, 4) : ""
            }`}
          />
        ))}
        {addresses?.length > 1 && (
          <Chip label="Clear" onClick={() => setAddresses(null)} />
        )}
      </Box>
      <TabPanel value={value} index={0}>
        <TokenHolders
          chart={holdersChart}
          addresses={addresses}
          setAddresses={setAddresses}
          token={token}
          holders={
            addresses
              ? holders.filter((h) => addresses.includes(h[0]))
              : holders
          }
          nfds={nfds}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
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
            //.filter(([owner, spender, amount]) => amount > 0n)
            //.sort((a, b) => b[2] - a[2])
          )}
          nfds={nfds}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TokenTransactions
          addresses={addresses}
          setAddresses={setAddresses}
          token={token}
          transactions={
            addresses
              ? transactions.filter(
                  (t) => addresses.includes(t[3]) || addresses.includes(t[4])
                )
              : transactions
          }
          nfds={nfds}
        />
      </TabPanel>
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
  const paramNfd = searchParams.get("nfd");
  React.useEffect(() => {
    if (paramAddr) setAddresses(paramAddr.split(","));
  }, [paramAddr]);
  React.useEffect(() => {
    if (paramNfd) {
      (async () => {
        const nfd = await NFDService.getNFDByName(paramNfd);
        const { caAlgo, owner, unverifiedCaAlgo } = nfd;
        const addresses = new Set();
        addresses.add(owner);
        if (caAlgo) {
          caAlgo.forEach((address) => addresses.add(address));
        }
        if (unverifiedCaAlgo) {
          unverifiedCaAlgo.forEach((address) => addresses.add(address));
        }
        setAddresses(Array.from(addresses));
      })();
    }
  }, [paramNfd]);
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

      /*
      let state;
      const stateR = await ci.state();
      if (stateR.success) {
        state = stateR.returnValue;
      }
      */

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
      const tm = {
        name: assetName,
        tokenId: appIdN,
        symbol,
        decimals,
        totalSupply,
      };
      // ---

      /*
      const nonCirculating = (
        await Promise.all([
          ci.arc200_balanceOf(state.manager),
          ci.arc200_balanceOf(state.manager),
        ])
      ).reduce((acc, val) => acc + val.returnValue, 0n);
      const circulatingSupply = Number(
        fawd((token.totalSupply - nonCirculating).toString(), token.decimals)
      ).toLocaleString();
      */
      const circulatingSupply = 0;
      const circulatingSupplyN = 0;
      const holders = {
        [zeroAddress]: tm.totalSupply,
      };
      const ttxns = transferEvent.events;
      const addresses = new Set();
      for (const [, , , from, to, amount] of ttxns) {
        addresses.add(from);
        addresses.add(to);
        if (holders[from]) holders[from] -= amount;
        else holders[from] = -amount;
        if (holders[to]) holders[to] += amount;
        else holders[to] = amount;
      }
      const balances = Object.entries(holders)
        .filter((el) => el[0] !== zeroAddress)
        .map(([address, amount]) => [address, fawd(amount, tm.decimals)]);
      balances.sort(([a1, a2], [b1, b2]) => {
        if (a2 === b2) return a1.localeCompare(b1);
        return b2 - a2;
      });
      const atxns = approvalEvent.events;
      atxns.sort((a, b) => b[1] - a[1]);
      const approvalS = new Set();
      const approvals = [];
      atxns
        .map(([, , , owner, spender, amount]) => [owner, spender, amount])
        .forEach(([owner, spender, amount]) => {
          const key = `${owner}-${spender}`;
          if (!approvalS.has(key)) {
            approvalS.add(key);
            approvals.push([
              owner,
              spender,
              formatWithDecimals(amount, tm.decimals),
            ]);
          }
        });
      approvals.sort((a, b) => b[2] - a[2]);
      const ctxns = [
        ...ttxns.map((data) => [...data, "Transfer"]),
        ...atxns.map((data) => [...data, "Approval"]),
      ];
      ctxns.sort((a, b) => b[1] - a[1]);

      await NFDService.getNFDByAddressBatch(Array.from(addresses));
      const tokenAddr = algosdk.getApplicationAddress(appIdN);
      setToken({
        ...tm,
        appId: appIdN,
        decimals: Number(tm.decimals),
        circulatingSupply,
      });
      setEvents(events);
      setHolders(
        balances.filter(([a, b]) => ![zeroAddress, tokenAddr].includes(a))
      );
      setTransactions(ctxns);
      setApprovals(approvals);
      setNfds(NFDService.getNFDs());
    })();
  }, []);
  return token && holders && transactions && nfds && approvals ? (
    <>
      <Token
        addresses={addresses}
        setAddresses={setAddresses}
        token={token}
        transactions={transactions}
        holders={holders}
        nfds={nfds}
        approvals={approvals.filter(([owner, spender, amount]) => amount > 0)}
      />
    </>
  ) : (
    <LoadingIndicator message={loading.message} progress={loading.progress} />
  );
}

export default Page;
