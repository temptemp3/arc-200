import { Typography, Stack } from "@mui/material";
import { useWallet } from "@txnlab/use-wallet";
import * as React from "react";
import Connect from "../../components/Connect";
import MintForm from "../../components/MintForm";

function Mint(props) {
  return (
    <div className="Home">
      <Stack direction="column" gap={3}>
        <Typography variant="h6">Mint</Typography>
        <MintForm />
      </Stack>
    </div>
  );
}

function Page() {
  const { activeAccount } = useWallet();
  return activeAccount ? <Mint /> : <Connect />;
}

export default Page;
