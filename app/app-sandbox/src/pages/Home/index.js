import { Typography } from "@mui/material";
import { useWallet } from "@txnlab/use-wallet";
import * as React from "react";
import AccountBalances from "../../components/AccountBalances";
import Connect from "../../components/Connect";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import defaultTokens from "../../config/defaultTokens";
import { useNavigate, useParams } from "react-router-dom";
import { makeStdLib } from "../../utils/reach";
import { DEFAULT_NODE } from "../../config/defaultLocalStorage";
import TokenDialog from "../../components/TokenDialog/index.js";

const stdlib = makeStdLib();

const [node] = (localStorage.getItem("node") || DEFAULT_NODE).split(":");

function Balances(props) {
  const navigate = useNavigate();
  const params = useParams();
  const [tokenIds, setTokenIds] = React.useState(props.tokens);
  const [tokens, setTokens] = React.useState(null);
  const [, setAppId] = React.useState(0);
  const [manage, setManage] = React.useState(false);
  const { activeAccount } = useWallet();
  const [tokenDialogOpen, setTokenDialogOpen] = React.useState(false);
  const addrTo = params.addr;
  const amount = params.amt;
  const note = params.note;
  return params?.addr && params.amt && params.note ? (
    <div align="left">
      <button
        onClick={async () => {
          if (false) return; // TODO: check if note is valid
          const addr = activeAccount.address;
          const acc = await stdlib.connectAccount({
            addr,
          });
          await stdlib.transfer(acc, addrTo, amount, undefined, {
            note: new TextEncoder().encode(note, "utf-8"),
          });
          alert("Transaction successful!");
        }}
      >
        Sign transaction
      </button>
      <br />
      Click button above to sign a payment transaction of with
      <br />
      note: "{note}"<br />
      address: "{addrTo}"<br />
      amount: {amount}
    </div>
  ) : (
    <>
      <TokenDialog
        open={tokenDialogOpen}
        setOpen={setTokenDialogOpen}
        tokenIds={tokenIds}
        setTokenIds={setTokenIds}
        tokens={tokens}
        setTokens={setTokens}
      />
      <div>
        <Typography variant="h6">Balances</Typography>
        <Button
          variant="outlined"
          sx={{ ml: 1 }}
          onClick={() => setTokenDialogOpen(true)}
        >
          Add
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
            tokenIds={tokenIds}
            tokens={tokens}
            setTokens={setTokens}
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
