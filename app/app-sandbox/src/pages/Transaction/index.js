import * as React from "react";
import { Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useWallet } from "@txnlab/use-wallet";
import { makeStdLib } from "../../utils/reach";
import ARC200Service from "../../services/ARC200Service";
import { useParams } from "react-router-dom";
//import { zeroAddress } from "../../utils/algorand";

const stdlib = makeStdLib();
const fa = stdlib.formatAddress;
const bn2n = stdlib.bigNumberToNumber;
const bn2bi = stdlib.bigNumberToBigInt;

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
  console.log("props", props)
  const { activeAccount } = useWallet();
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
      <h2>Transactions</h2>
      <h3>For: {activeAccount?.address}</h3>
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
            {props?.transactions?.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">{row[0]}</StyledTableCell>
                <StyledTableCell align="right">{row[1]}</StyledTableCell>
                <StyledTableCell align="right">{row[2]}</StyledTableCell>
                <StyledTableCell align="right">{row[3]}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/*<h2>Holders</h2>
      <ul>
        <li>addr:balance</li>
        {props?.holders?.map((el) => (
          <li>{el.join(":")}</li>
        ))}
        </ul>*/}
    </Box>
  );
};

function Page() {
  const { id: appId } = useParams();
  const { activeAccount } = useWallet();
  const [token, setToken] = React.useState(null);
  const [transactions, setTransactions] = React.useState([]);
  //const [holders, setHolders] = React.useState([]);
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
        .filter(
          ([_, from, to, __]) =>
            from === activeAccount.address || to === activeAccount.address
        ) // !!!
        .reverse();
      /*
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
      */
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
  return <User {...token} transactions={transactions} /*holders={holders}*/ />;
}

export default Page;
