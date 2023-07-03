import { Stack, Typography } from "@mui/material";
import { useWallet } from "@txnlab/use-wallet";
import * as React from "react";
import Blink from "react-blink-text";
import AccountBalances from "../../components/AccountBalances";
import Connect from "../../components/Connect";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import defaultTokens from "../../config/defaultTokens";

const [node] = (localStorage.getItem("node") || "algorand-testnet::").split(
  ":"
);

function Balances(props) {
  const [tokens, setTokens] = React.useState(props.tokens);
  const [appId, setAppId] = React.useState(0);
  const [manage, setManage] = React.useState(false);
  return (
    <>
      <div>
        <Typography variant="h6">Balances</Typography>
        <Button
          variant="outlined"
          onClick={() => {
            try {
              const token = parseInt(window.prompt("Enter appId"));
              if (!token) return;
              const newTokens = Array.from(new Set([...tokens, token]));
              setTokens(newTokens);
              const tokens = JSON.parse(
                localStorage.getItem("tokens") || defaultTokens[node] // TODO centralize arc200 token id
              );

              localStorage.setItem(
                "tokens",
                JSON.stringify({
                  ...tokens,
                  [node]: newTokens,
                })
              );
            } catch (e) {
              console.log(e);
            }
          }}
        >
          +
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
        <Box sx={{ margin: 1 }}>
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
  return activeAccount ? <Balances tokens={tokens[node]} /> : <Connect />;
}

export default Home;
