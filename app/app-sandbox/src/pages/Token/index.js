import * as React from "react";
import PropTypes from 'prop-types';
import { Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useWallet } from "@txnlab/use-wallet";
import { makeStdLib } from "../../utils/reach";
import ARC200Service from "../../services/ARC200Service";
import { useParams } from "react-router-dom";
import { zeroAddress } from "../../utils/algorand";

const stdlib = makeStdLib();
const fa = stdlib.formatAddress;
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
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const User = (props) => {
  const { activeAccount } = useWallet();
  const [page, setPage] = React.useState(0);
  const [pageTx, setTxPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rowsTxPerPage, setTxRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props?.holders?.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  const handleTxChangePage = (event, newPage) => {
    setTxPage(newPage);
  };

  const handleTxChangeRowsPerPage = (event) => {
    setTxRowsPerPage(parseInt(event.target.value, 10));
    setTxPage(0);
  };
  return (
    <Box sx={{margin: 1}}>
      <Stack>
        <Stack direction="row" style={{ alignItems: "baseline" }}>
          <Typography variant="h1">{props.symbol}</Typography>
        </Stack>
        <Stack direction="column" gap="1em" style={{ textAlign: "left" }}>
          <code style={{ display: "inline-block" }}>
            {props.name && `Name: ${props.name}`}
            <br />
            {props.symbol && `Symbol: ${props.symbol}`}
            <br />
            {typeof props.decimals === "number" &&
              `Decimals: ${props.decimals}`}
            <br />
            {props.totalSupply && `Total Supply: ${props.totalSupply}`}
            <br />
          </code>
          {props.balance &&
            props.symbol &&
            `Balance: ${props.balance} ${props.symbol}`}
        </Stack>
      </Stack>
      <h2>Holders [{props?.holders?.length > 0 ? props?.holders?.length : "..."}]</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized pagination table">
          <TableHead>
            <TableRow>
              <StyledTableCell>address</StyledTableCell>
              <StyledTableCell align="right">balance</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
            ? props?.holders?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : props?.holders).map((row) => (
              <StyledTableRow key={row[0]}>
                <StyledTableCell component="th" scope="row">{row[0]}</StyledTableCell>
                <StyledTableCell align="right">{Number(row[1] / props.totalSupply).toFixed(2)}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={props?.holders?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
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
      <h2>
        Transactions{" "}
        [{props?.transactions?.length > 0 ? props?.transactions?.length : "..."}]
      </h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>block</StyledTableCell>
              <StyledTableCell align="right">from</StyledTableCell>
              <StyledTableCell align="right">to</StyledTableCell>
              <StyledTableCell align="right">amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsTxPerPage > 0
            ? props?.transactions?.slice(pageTx * rowsTxPerPage, pageTx * rowsTxPerPage + rowsTxPerPage)
            : props?.transactions).map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">{row[0]}</StyledTableCell>
                <StyledTableCell align="right">{row[1]}</StyledTableCell>
                <StyledTableCell align="right">{row[2]}</StyledTableCell>
                <StyledTableCell align="right">{row[3]}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={props?.transactions?.length}
                rowsPerPage={rowsTxPerPage}
                page={pageTx}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
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
  );
};

function Page() {
  const { id: appId } = useParams();
  const { activeAccount } = useWallet();
  const [token, setToken] = React.useState(null);
  const [transactions, setTransactions] = React.useState([]);
  const [holders, setHolders] = React.useState([]);
  React.useEffect(() => {
    if (!activeAccount) return;
    if (!token) return;
    (async () => {
      const ret = (await ARC200Service.getTransferEvents(appId))
        .map(({ when, what }) => {
          return [
            bn2n(when),
            fa(what[0]),
            fa(what[1]),
            bn2bi(what[2]).toString(),
          ];
        })
        .reverse();
      const holders = {
        [zeroAddress]: Number(token.totalSupply),
      };
      for (const [_, from, to, amountStr] of ret) {
        const amount = Number(amountStr);
        if (holders[from]) holders[from] -= amount;
        else holders[from] = -amount;
        if (holders[to]) holders[to] += amount;
        else holders[to] = amount;
      }
      const balances = Object.entries(holders);
      balances.sort(([a1, a2], [b1, b2]) => {
        if (a2 === b2) return a1.localeCompare(b1);
        return b2 - a2;
      });
      setHolders(balances);
      setTransactions(ret);
    })();
  }, [activeAccount, token]);
  React.useEffect(() => {
    (async () => {
      const tokenMetadata = await ARC200Service.getTokenMetadata(appId);
      const token = { ...tokenMetadata };
      setToken(token);
    })();
  }, [activeAccount]);
  return <User {...token} transactions={transactions} holders={holders} />;
}

export default Page;
