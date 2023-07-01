import * as React from "react";
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useWallet } from "@txnlab/use-wallet";
import { makeStdLib } from "../../utils/reach";
import ARC200Service from "../../services/ARC200Service";
import { useParams } from "react-router-dom";
import { displayTokenValue } from "../../utils/algorand";

const stdlib = makeStdLib();
const fa = stdlib.formatAddress;
const fawd = stdlib.formatWithDecimals;
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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Token = ({ address, token, transactions }) => {
  return (
    <Box sx={{ margin: 1 }}>
      <Stack>
        <Stack direction="row" style={{ alignItems: "baseline" }}>
          <Typography variant="h1">{token.symbol}</Typography>
        </Stack>
        <Stack direction="column" gap="1em" style={{ textAlign: "left" }}>
          <code style={{ display: "inline-block" }}>
            {token.name && `Name: ${token.name}`}
            <br />
            {token.symbol && `Symbol: ${token.symbol}`}
            <br />
            {typeof token.decimals === "number" &&
              `Decimals: ${token.decimals}`}
            <br />
            {token.totalSupply &&
              `Total Supply: ${displayTokenValue({
                ...token,
                amount: fawd(token.totalSupply, token.decimals),
              })}`}
            <br />
          </code>
        </Stack>
      </Stack>
      <h2>Transactions</h2>
      <h3>For: {address}</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Block</StyledTableCell>
              <StyledTableCell align="right">From</StyledTableCell>
              <StyledTableCell align="right">To</StyledTableCell>
              <StyledTableCell align="right">
                Amount ({token.symbol})
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions?.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row[0]}
                </StyledTableCell>
                <StyledTableCell align="right">{row[1]}</StyledTableCell>
                <StyledTableCell align="right">{row[2]}</StyledTableCell>
                <StyledTableCell align="right">
                  {displayTokenValue({
                    ...token,
                    amount: fawd(row[3], token.decimals),
                  })}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

function Page() {
  const { id: appId, addr: address } = useParams();
  const [token, setToken] = React.useState(null);
  const [transactions, setTransactions] = React.useState([]);
  //const [holders, setHolders] = React.useState([]);
  React.useEffect(() => {
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
        .filter(([_, from, to, __]) => from === address || to === address) // !!!
        .reverse();
      setTransactions(ret);
    })();
  }, [token]);
  React.useEffect(() => {
    (async () => {
      const tokenMetadata = await ARC200Service.getTokenMetadata(appId);
      const token = { ...tokenMetadata };
      setToken(token);
    })();
  }, []);
  return (
    token && (
      <Token address={address} token={token} transactions={transactions} />
    )
  );
}

export default Page;
