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
import { getAlgorandClients } from "../../utils/algorand";
import arc200 from "arc200js";

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
      <div>
        <Typography variant="h6">Balances</Typography>
        <Button
          variant="outlined"
          sx={{ ml: 1 }}
          onClick={async () => {
            const tokenIdStr = window.prompt("Enter token id");
            if (!tokenIdStr) return;
            const tokenId = parseInt(tokenIdStr);

            const { algodClient, indexerClient } = getAlgorandClients();
            const ci = new arc200(tokenId, algodClient, indexerClient);
            const tokenR = await ci.getMetadata();

            if (tokenR.success) {
              const newTokenIds = Array.from(new Set([...tokenIds, tokenId]));
              setTokenIds(newTokenIds);
              const storedTokens = JSON.parse(
                localStorage.getItem("tokens") ||
                  `${JSON.stringify(defaultTokens)}`
              );
              localStorage.setItem(
                "tokens",
                JSON.stringify({
                  ...storedTokens,
                  [node]: newTokenIds,
                })
              );
              return;
            }
            const asset = await indexerClient
              .lookupAssetByID(tokenId)
              .do()
              .catch(() => {});
            if (asset) {
              const acc = await stdlib.connectAccount({
                addr: activeAccount.address,
              });
              await acc.tokenAccepted(tokenId);
              return;
            }
            return alert(`Token '${tokenId}' not found`);
          }}
        >
          Add
        </Button>
        <Button
          variant="outlined"
          sx={{ ml: 1 }}
          onClick={() => {
            try {
              const token = parseInt(window.prompt("Enter appId"));
              if (!token) return;
              const newTokens = Array.from(new Set([...tokenIds, token]));
              setTokenIds(newTokens);
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
          Add VRC200
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
