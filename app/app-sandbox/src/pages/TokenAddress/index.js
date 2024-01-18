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
import LoadingIndicator from "../../components/LoadingIndicator";
import { useWallet } from "@txnlab/use-wallet";
import { makeStdLib } from "../../utils/reach";
import ARC200Service from "../../services/ARC200Service";
import { Link, useParams } from "react-router-dom";
import { displayTokenValue } from "../../utils/algorand";
import NFDService from "../../services/NFDService";
import moment from "moment";

const stdlib = makeStdLib();
const fa = stdlib.formatAddress;
const fawd = stdlib.formatWithDecimals;
const bn = stdlib.bigNumberify;
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

const Token = ({
  address,
  balance,
  token,
  transactions,
  walletTransactions,
  nfds,
}) => {
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
            Circulating Supply:{" "}
            {displayTokenValue({ ...token, amount: token.circulatingSupply })}
            <br />
            Date of creation:{" "}
            {transactions?.length > 0
              ? moment.unix(transactions.slice(-1)[0][4]).format("L")
              : "-"}
            <br />
            Created at round:{" "}
            {transactions?.length > 0 ? transactions.slice(-1)[0][0] : "-"}
          </code>
        </Stack>
      </Stack>
      <Box sx={{ textAlign: "left" }}>
        <h2>Balance</h2>
        <h3>For: {((address) => nfds[address]?.name || address)(address)}</h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">Amount</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <StyledTableCell align="right">
                  <small>
                    {displayTokenValue({
                      ...token,
                      amount: fawd(balance, token.decimals),
                    })}
                  </small>
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ textAlign: "left" }}>
        <h2>Transactions</h2>
        <h3>For: {((address) => nfds[address]?.name || address)(address)}</h3>
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
              {walletTransactions?.length > 0 ? (
                walletTransactions?.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      <small>{row[0]}</small>
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      <small>
                        {row[4] > 0 ? (
                          <div>
                            {row[4]}
                            <br />({moment.unix(row[4]).fromNow()})
                          </div>
                        ) : (
                          "-"
                        )}
                      </small>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <small>
                        {((address) => nfds[address]?.name || address)(row[1])}
                      </small>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <small>
                        {((address) => nfds[address]?.name || address)(row[2])}
                      </small>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <small>
                        {displayTokenValue({
                          ...token,
                          amount: fawd(row[3], token.decimals),
                        })}
                      </small>
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
  const [transactions, setTransactions] = React.useState(null);
  const [walletTransactions, setWalletTransactions] = React.useState([]);
  const [roundTimes, setRoundTimes] = React.useState(null);
  const [balance, setBalance] = React.useState(null);
  const [nfds, setNfds] = React.useState(null);
  const loading = React.useMemo(() => {
    if (!roundTimes) return { message: "Loading round times...", progress: 10 };
    if (!token) return { message: "Loading token metadata...", progress: 30 };
    if (!transactions)
      return { message: "Loading transactions...", progress: 50 };
    if (!balance) return { message: "Loading balance...", progress: 70 };
    if (!nfds) return { message: "Loading NFDs...", progress: 90 };
    return null;
  }, [roundTimes, token, balance, transactions, nfds]);
  React.useEffect(() => {
    (async () => {
      const { indexer } = await stdlib.getProvider();
      const txns = await indexer
        .searchForTransactions()
        .applicationID(appId)
        .limit(0)
        .do();
      const roundTimes = {};
      for (const txn of txns?.transactions) {
        const confirmedRound = txn["confirmed-round"];
        const roundTime = txn["round-time"];
        roundTimes[confirmedRound] = roundTime;
      }
      setRoundTimes(roundTimes);
    })();
  }, []);
  React.useEffect(() => {
    if (!token) return;
    if (!roundTimes) return;
    (async () => {
      const ret = (await ARC200Service.getTransferEvents(appId))
        .map(({ when, what }) => {
          return [
            bn2n(when),
            fa(what[0]),
            fa(what[1]),
            bn2bi(what[2]).toString(),
            bn2n(when) in roundTimes ? roundTimes[bn2n(when)] : 0,
          ];
        })
        .reverse();
      setTransactions(ret);
      setWalletTransactions(
        ret.filter(([_, from, to, __]) => from === address || to === address)
      );
    })();
  }, [token, roundTimes]);
  React.useEffect(() => {
    (async () => {
      const tokenMetadata = await ARC200Service.getTokenMetadata(appId);
      const nonCirculating = (
        await Promise.all([
          ARC200Service.balanceOf(appId, tokenMetadata.zeroAddress),
          ARC200Service.balanceOf(appId, tokenMetadata.manager),
        ])
      ).reduce((acc, val) => acc.add(val), bn(0));
      const circulatingSupplyBn = bn(tokenMetadata.totalSupply).sub(
        nonCirculating
      );
      const token = {
        ...tokenMetadata,
        appId,
        circulatingSupply: fawd(circulatingSupplyBn, tokenMetadata.decimals),
      };
      setToken(token);
    })();
  }, []);
  React.useEffect(() => {
    ARC200Service.balanceOf(appId, address).then(setBalance);
  }, []);
  return token && balance && transactions && nfds ? (
    <Token
      address={address}
      token={token}
      balance={balance}
      nfds={nfds}
    />
  ) : (
    <LoadingIndicator message={loading.message} progress={loading.progress} />
  );
}

export default Page;
