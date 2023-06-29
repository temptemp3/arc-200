import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useWallet } from "@txnlab/use-wallet";
import * as React from "react";
import AccountBalance from "../../components/AccountBalance";
import AccountAvailable from "../../components/AccountAvailable";
import AccountPayment from "../../components/AccountPayment";
import SubscriptionService from "../../services/SubscriptionService";
import { makeStdLib } from "../../utils/reach";
import { fromSome } from "../../utils/common";
import { zeroAddress } from "../../utils/algorand";
import ChildService from "../../services/ChildService";
import AssetService from "../../services/AssetService";
import moment from "moment";
import MasterService from "../../services/MasterService";
import Blink from "react-blink-text";
import ARC200Service from "../../services/ARC200Service";
import SendIcon from "@mui/icons-material/Send";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useParams } from "react-router-dom";


const stdlib = makeStdLib();
const pc = stdlib.parseCurrency;
const bn = stdlib.bigNumberify;
const bn2n = stdlib.bigNumberToNumber;

const admins = [
  "OJUQOEPFOEZUP3JJIF6OAV4RZQL6HQMBDIXODGSXNEIH7TTR353IMJEL24",
  "6YUFOMLDMS22SCAOLOJSU65MVMGNWUTI2TN5UTQQ5WZ47DVQKUW5CTXM7Y",
];

const exclude = [227793889, 227800537, 227802852];

const title = "ARC200";
const version = ""; // V1

const User = (props) => {
  return (
    <div className="Home">
      <Stack>
        <Stack direction="row" style={{ alignItems: "baseline" }}>
          <Typography variant="h1">{title}</Typography>
          <small>{version}</small>
        </Stack>
        <Stack direction="column" gap="1em" style={{ textAlign: "left" }}>
          <code style={{ display: "inline-block" }}>
            {props.name && `Name: ${props.name}`}
            <br />
            {props.symbol && `Symbol: ${props.symbol}`}
            <br />
            {props.decimals && `Decimals: ${props.decimals}`}
            <br />
            {props.totalSupply && `Total Supply: ${props.totalSupply}`}
            <br />
          </code>
          {props.holder && (
            <span style={{ overflow: "hidden" }}>Holder: {props.holder}</span>
          )}
          {props.balance &&
            props.symbol &&
            `Balance: ${props.balance} ${props.symbol}`}
        </Stack>
      </Stack>
    </div>
  );
};

function Page() {
  const { id } = useParams();
  console.log(id);
  const { activeAccount } = useWallet();
  const [token, setToken] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      const tokenId =
        "6X7XJO6FX3SHUK2OUL46QBQDSNO67RAFK6O73KJD4IVOMTSOIYANOIVWNU";
      const tokenMetadata = await ARC200Service.getTokenMetadata(
        zeroAddress,
        tokenId
      );
      const balance = stdlib.formatWithDecimals(
        await ARC200Service.balanceOf(
          "6X7XJO6FX3SHUK2OUL46QBQDSNO67RAFK6O73KJD4IVOMTSOIYANOIVWNU",
          id
        ),
        parseInt(tokenMetadata.decimals)
      );
      const token = { ...tokenMetadata, balance, holder: id };
      setToken(token);
    })();
  }, [activeAccount]);
  console.log({ token });
  return <User {...token} />;
}

export default Page;
