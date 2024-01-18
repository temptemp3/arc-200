import React, { useEffect, useMemo } from "react";
import { useWallet } from "@txnlab/use-wallet";
import { getCurrentNode, makeStdLib } from "../../utils/reach";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Tabs,
  Tab,
  InputAdornment,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider,
  Skeleton,
  Paper,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import algosdk from "algosdk";
import CONTRACT from "arccjs";
import { getAlgorandClients } from "../../utils/algorand";

const schema = {
  name: "ARC-72",
  description: "Smart Contract NFT Interface",
  methods: [
    {
      name: "_reachp_0",
      args: [{ type: "uint64" }, { type: "(byte[67],address)" }],
      returns: { type: "void" },
    },
    {
      name: "_reachp_2",
      args: [{ type: "uint64" }, { type: "(byte,byte[96])" }],
      returns: { type: "void" },
    },
    {
      name: "arc72_approve",
      args: [{ type: "address" }, { type: "uint256" }],
      returns: { type: "void" },
    },
    {
      name: "arc72_balanceOf",
      args: [{ type: "address" }],
      returns: { type: "uint256" },
      readonly: true,
    },
    {
      name: "arc72_getApproved",
      args: [{ type: "uint256" }],
      returns: { type: "address" },
      readonly: true,
    },
    {
      name: "arc72_isApprovedForAll",
      args: [{ type: "address" }, { type: "address" }],
      returns: { type: "bool" },
      readonly: true,
    },
    {
      name: "arc72_ownerOf",
      args: [{ type: "uint256" }],
      returns: { type: "address" },
      readonly: true,
    },
    {
      name: "arc72_setApprovalForAll",
      args: [{ type: "address" }, { type: "bool" }],
      returns: { type: "void" },
    },
    {
      name: "arc72_tokenByIndex",
      args: [{ type: "uint256" }],
      returns: { type: "uint256" },
      readonly: true,
    },
    {
      name: "arc72_tokenURI",
      args: [{ type: "uint256" }],
      returns: { type: "byte[256]" },
      readonly: true,
    },
    {
      name: "arc72_totalSupply",
      args: [],
      returns: { type: "uint256" },
      readonly: true,
    },
    {
      name: "arc72_transferFrom",
      args: [{ type: "address" }, { type: "address" }, { type: "uint256" }],
      returns: { type: "void" },
    },
    {
      name: "burn",
      args: [{ type: "uint256" }],
      returns: { type: "void" },
    },
    { name: "close", args: [], returns: { type: "void" } },
    {
      name: "deleteNftDataBox",
      args: [{ type: "uint256" }],
      returns: { type: "void" },
    },
    {
      name: "deleteOperatorDataBox",
      args: [{ type: "address" }, { type: "address" }],
      returns: { type: "void" },
    },
    {
      name: "grant",
      args: [{ type: "address" }],
      returns: { type: "void" },
    },
    {
      name: "manager",
      args: [],
      returns: { type: "address" },
      readonly: true,
    },
    {
      name: "mintTo",
      args: [
        { type: "address" },
        { type: "byte[256]" },
        { type: "uint256" },
        { type: "byte[256]" },
        { type: "uint64" },
      ],
      returns: { type: "uint256" },
    },
    {
      name: "state",
      args: [],
      returns: { type: "(address,uint256,uint256)" },
      readonly: true,
    },
    {
      name: "supportsInterface",
      args: [{ type: "byte[4]" }],
      returns: { type: "byte" },
      readonly: true,
    },
    { name: "touch", args: [], returns: { type: "void" } },
  ],
  events: [
    {
      name: "arc72_Approval",
      args: [{ type: "address" }, { type: "address" }, { type: "uint256" }],
    },
    {
      name: "arc72_ApprovalForAll",
      args: [{ type: "address" }, { type: "address" }, { type: "bool" }],
    },
    {
      name: "arc72_Transfer",
      args: [{ type: "address" }, { type: "address" }, { type: "uint256" }],
    },
  ],
};

const theme = createTheme({
  palette: {
    divider: "#C7C7C7", // Define the divider color
  },
});

const useStyles = makeStyles((theme) => ({
  textFieldRoot: {
    paddingRight: 0, // Remove right padding for TextField
  },
  selectRoot: {
    border: 0,
    borderBottom: `1px solid transparent`,
    //backgroundColor: "transparent",
    borderRadius: "0",
    /*
    padding: "8px 0", // Adjust padding as needed
    "& .MuiSelect-select": {
      paddingRight: 0,
    },
    */
  },
}));

const BridgeForm = () => {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] =
    React.useState("algorand-testnet");
  const [selectedDestinationOption, setSelectedDestinationOption] =
    React.useState("voi-testnet");
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  const handleSelectChange = (event) => {
    const newSelectedOption = event.target.value;
    if (newSelectedOption === selectedDestinationOption) {
      setSelectedDestinationOption(selectedOption);
    }
    setSelectedOption(newSelectedOption);
  };
  const handleDestinationSelectChange = (event) => {
    const newSelectedOption = event.target.value;
    if (newSelectedOption === selectedOption) {
      setSelectedOption(selectedDestinationOption);
    }
    setSelectedDestinationOption(newSelectedOption);
  };
  const tokenInfoLabel = useMemo(() => {
    switch (selectedOption) {
      case "algorand":
        return "NFT Asset Id";
      case "ethereum":
        return "Contract Address";
      case "solana":
        return "Contract Address";
      default:
        return "";
    }
  }, [selectedOption]);
  const menuItems = [
    //{ value: "algorand", label: "Algorand" },
    { value: "algorand-testnet", label: "Algorand Testnet" },
    //{ value: "ethereum", label: "Ethereum" },
    //{ value: "solana", label: "Solana" },
    { value: "voi-testnet", label: "Voi Testnet" },
  ];
  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ mb: 5, position: "fixed", top: 20, backgroundColor: "aqua" }}
      >
        Voi Bridge &gt;&gt;
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ display: "flex" }}>
            <TextField
              disabled={selectedOption === ""}
              sx={{ pr: 0, flexGrow: 1 }}
              className={classes.textFieldRoot}
              label={tokenInfoLabel}
              variant="outlined"
            />
            <Select
              sx={{ width: "175px", fontSize: "100%" }}
              variant="filled"
              className={classes.selectRoot}
              value={selectedOption}
              onChange={handleSelectChange}
            >
              {menuItems
                //.filter((el) => el.value !== selectedDestinationOption)
                .map((item) => (
                  <MenuItem value={item.value}>{item.label}</MenuItem>
                ))}
            </Select>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex" }}>
            <TextField
              disabled={selectedOption === ""}
              sx={{ pr: 0, flexGrow: 1 }}
              className={classes.textFieldRoot}
              label={"Destination Address"}
              variant="outlined"
            />
            <Select
              sx={{ width: "175px", fontSize: "100%" }}
              variant="filled"
              className={classes.selectRoot}
              value={selectedDestinationOption}
              onChange={handleDestinationSelectChange}
            >
              {menuItems
                //.filter((el) => el.value !== selectedOption)
                .map((item) => (
                  <MenuItem value={item.value}>{item.label}</MenuItem>
                ))}
            </Select>
          </Grid>

          {["ethereum", "solana"].includes(selectedOption) && (
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Token Id"
                variant="outlined"
                // Add more props as needed
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Voi Address"
              variant="outlined"
              // Add more props as needed
            />
          </Grid>
          {/* Add more form fields using TextField or other Material-UI components */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </ThemeProvider>
  );
};

const stdlib = makeStdLib();

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return value == index && children;
}

const ipfsToGateway = (url) => {
  const gatewayURL = `https://ipfs.io/ipfs/${url.slice(7)}`;
  return gatewayURL;
};

const NFTImage = ({ id }) => {
  const [url, setUrl] = React.useState("");
  useEffect(() => {
    const image = localStorage.getItem(`nft-image-${id}`);
    if (image) setUrl(image);
    else
      (async () => {
        const res = await fetch(
          `https://testnet-api.algonode.cloud/v2/assets/${id}`
        );
        const {
          params: { url },
        } = await res.json();
        if (url.indexOf("ipfs://") === 0) {
          if (url.indexOf("#arc3") !== -1) {
            const res = await fetch(ipfsToGateway(url));
            const { image } = await res.json();
            setUrl(ipfsToGateway(image));
            localStorage.setItem(`nft-image-${id}`, ipfsToGateway(image));
          } else {
            setUrl(ipfsToGateway(url));
            localStorage.setItem(`nft-image-${id}`, ipfsToGateway(url));
          }
        }
      })();
  }, [id]);
  console.log({ url });
  return <img style={{ width: "100%" }} src={url} />;
};

function Bridge() {
  const [node] = getCurrentNode();
  const { activeAccount } = useWallet();
  const [value, setValue] = React.useState(1);
  const [nfts, setNfts] = React.useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // EFFECT: set default tab after connecting wallet
  useEffect(() => {
    if (!activeAccount) setValue(0);
    else setValue(0);
  }, [activeAccount]);
  useEffect(() => {
    (async () => {
      const { algodClient, indexerClient } = getAlgorandClients("voi-testnet");
      const ctcInfo = 26169081;
      const ci = new CONTRACT(ctcInfo, algodClient, indexerClient, schema, {
        addr: "BRIDGEVGHEPVJLAY5X6MBI5AYTDC6WK2QXJCSEXBUOOQZXRLYDRDYVWUIE",
      });
      console.log({ ci });
      const tokenIds = (await ci.arc72_Transfer()).map((el) => Number(el[5]));
      const nfts = [];
      for (let i = 0; i < tokenIds.length; i++) {}

      setNfts(tokenIds.reverse());
    })();
  }, []);

  return (
    <>
      <Tabs
        sx={{ m: 0, mb: 5 }}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {/*
        <Tab label="Pending" />
        <Tab label="Complete" />
  */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <Container sx={{ mt: 5 }}>
          <BridgeForm />
        </Container>
      </TabPanel>
      {/*
      <TabPanel value={value} index={1}>
        <Container sx={{ mt: 5 }}>asdf</Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container sx={{ mt: 10 }}>asdf</Container>
      </TabPanel>
*/}
      <h2 align="left" style={{ marginLeft: 10 }}>
        Bridged NFTs
      </h2>
      {nfts.length > 0 ? (
        <Grid container spacing={2}>
          {nfts.map((el) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <a
                href={`https://app.dappflow.org/explorer/asset/${el}/transactions`}
                target="_blank"
              >
                <NFTImage id={el} />
              </a>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Skeleton />
      )}
    </>
  );
}

export default Bridge;
