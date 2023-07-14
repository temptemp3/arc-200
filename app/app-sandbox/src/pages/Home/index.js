import { Stack, Typography } from "@mui/material";
import { useWallet } from "@txnlab/use-wallet";
import * as React from "react";
import Blink from "react-blink-text";
import AccountBalances from "../../components/AccountBalances";
import Connect from "../../components/Connect";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import defaultTokens from "../../config/defaultTokens";
import { useNavigate } from "react-router-dom";
import { makeStdLib } from "../../utils/reach";

const stdlib = makeStdLib();
const fc = stdlib.formatCurrency;

const [node] = (localStorage.getItem("node") || "algorand-testnet::").split(
  ":"
);

function Balances(props) {
  const { activeAccount } = useWallet();
  const navigate = useNavigate();
  const [tokens, setTokens] = React.useState(props.tokens);
  const [appId, setAppId] = React.useState(0);
  const [manage, setManage] = React.useState(false);
  const [balance, setBalance] = React.useState(null);
  React.useEffect(() => {
    if (!activeAccount) return;
    if (balance) return;
    (async () => {
      const acc = await stdlib.connectAccount({ addr: activeAccount.address });
      const balance = await stdlib.balanceOf(acc);
      setBalance(balance);
    })();
  }, [activeAccount]);
  console.log({ balance });
  return (
    <>
      <div>
        {balance && <div>{fc(balance)}</div>}
        <Typography variant="h6">Balances</Typography>
        <Button
          variant="outlined"
          onClick={() => {
            try {
              const token = parseInt(window.prompt("Enter appId"));
              if (!token) return;
              const newTokens = Array.from(new Set([...tokens, token]));
              setTokens(newTokens);
              const storedTokens = JSON.parse(
                localStorage.getItem("tokens") ||
                  `${JSON.stringify(defaultTokens)}`
              );
              localStorage.setItem(
                "tokens",
                JSON.stringify({
                  ...storedTokens,
                  [node]: newTokens,
                })
              );
            } catch (e) {
              console.log(e);
            }
          }}
        >
          Add Token
        </Button>
        <Button
          variant="outlined"
          sx={{ ml: 1 }}
          onClick={() => {
            navigate("/mint");
          }}
        >
          Mint
        </Button>
        <Button
          variant="outlined"
          sx={{ margin: 1 }}
          onClick={() => {
            setManage(!manage);
          }}
        >
          Manage
        </Button>
        <Box sx={{ ml: 1 }}>
          <AccountBalances
            manage={manage}
            tokens={tokens}
            onSetAppId={setAppId}
          />
        </Box>
      </div>
    </>
  );
}

function Home() {
  const { activeAccount } = useWallet();
  const tokens = JSON.parse(
    localStorage.getItem("tokens") || `${JSON.stringify(defaultTokens)}`
  );
  console.log({ tokens });
  return activeAccount ? <Balances tokens={tokens[node]} /> : <Connect />;
}

export default Home;
