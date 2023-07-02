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
import { Link, useParams } from "react-router-dom";
import { displayTokenValue } from "../../utils/algorand";
import NFDService from "../../services/NFDService";

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
            {token.appId && (
              <span>
                Id: <Link to={`/token/${token.appId}`}>{token.appId}</Link>
              </span>
            )}
            <br />
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
            Circulating Supply: 1234
            <br />
            Date of creation: 07/01/2023
            <br />
            Created at round: 31020682
          </code>
        </Stack>
      </Stack>
      <Box sx={{ textAlign: "left" }}>
        <h2>Transactions</h2>
        <h3>
          For: {NFDService.getNFDByAddress(address)?.[address]?.name || address}
        </h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Block</StyledTableCell>
                <StyledTableCell>Timestamp</StyledTableCell>
                <StyledTableCell align="right">From</StyledTableCell>
                <StyledTableCell align="right">To</StyledTableCell>
                <StyledTableCell align="right">Amount</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions?.length > 0 ? (
                transactions?.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row[0]}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row[4]}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {((address) =>
                        NFDService.getNFDByAddress(address)?.[address]?.name ||
                        address)(row[1])}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {((address) =>
                        NFDService.getNFDByAddress(address)?.[address]?.name ||
                        address)(row[2])}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {displayTokenValue({
                        ...token,
                        amount: fawd(row[3], token.decimals),
                      })}
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              ) : (
                <StyledTableRow>
                  <StyledTableCell colSpan={5} align="center" height={184}>
                    Loading...
                  </StyledTableCell>
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

function Page() {
  const { id: appId, addr: address } = useParams();
  const [token, setToken] = React.useState(null);
  const [transactions, setTransactions] = React.useState([]);
  const [version, setVersion] = React.useState(0);
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
            bn2n(what[3]),
          ];
        })
        .filter(([_, from, to, __]) => from === address || to === address) // !!!
        .reverse();
      setTransactions(ret);
    })();
  }, [token]);
  React.useEffect(() => {
    if (!transactions) return;
    (async () => {
      const addresses = Array.from(
        new Set(transactions.map(([, from, to]) => [from, to]).flat())
      );
      let doReload = false;
      for (const address of addresses) {
        const nfd = NFDService.getNFDByAddress(address);
        if (nfd?.owner === address) continue;
        const res = NFDService.fetchNFDByAddress(address);
        if (res) {
          doReload = true;
        }
      }
      if (doReload) {
        setVersion(1);
      }
    })();
  }, [transactions]);
  React.useEffect(() => {
    (async () => {
      const tokenMetadata = await ARC200Service.getTokenMetadata(appId);
      const token = { ...tokenMetadata, appId };
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
