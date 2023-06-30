import { Stack, Typography } from "@mui/material";
import { useWallet } from "@txnlab/use-wallet";
import * as React from "react";
import Blink from "react-blink-text";
import AccountBalances from "../../components/AccountBalances";
import Connect from "../../components/Connect";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
              // TODO verify token
              const newTokens = Array.from(new Set([...tokens, token]));
              setTokens(newTokens);
              localStorage.setItem("tokens", JSON.stringify(newTokens));
            } catch (e) {
              console.log(e);
            }
          }}
        >
          +
        </Button>
        <Button variant="outlined"
          sx={{margin: 1}}
          onClick={() => {
            setManage(!manage);
          }}
        >
          Manage
        </Button>
        <Box sx={{margin: 1}}>
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
  const tokens = JSON.parse(localStorage.getItem("tokens") || "[249906631]");
  return activeAccount ? <Balances tokens={tokens} /> : <Connect />;
}

export default Home;
