import React, { lazy, useEffect, useMemo } from "react";
import { useWallet, PROVIDER_ID } from "@txnlab/use-wallet";
import { getCurrentNode, getGenesisHash } from "../../utils/reach";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
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
  ButtonGroup,
} from "@mui/material";
import { makeStdLib } from "../../utils/reach";
import { makeStyles } from "@mui/styles";
import algosdk from "algosdk";
import CONTRACT from "arccjs";
import { getAlgorandClients } from "../../utils/algorand";
import { useParams } from "react-router-dom";
import { mp200Schema, arc72Schema } from "../../abis";
import SalesHistoryTable from "../../components/SalesHistoryTable";

const stdlib = makeStdLib();

const mp200CtcInfo = 26944604;

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

/*
 * prepareString
 * - prepare string (strip trailing null bytes)
 * @param str: string to prepare
 * @returns: prepared string
 */
const prepareString = (str) => {
  const index = str.indexOf("\x00");
  if (index > 0) {
    return str.slice(0, str.indexOf("\x00"));
  } else {
    return str;
  }
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return value == index && children;
}

const ipfsToGateway = (url) => {
  if (url.indexOf("ipfs://") !== 0) return url;
  const gatewayURL = `https://ipfs.io/ipfs/${url.slice(7)}`;
  return gatewayURL;
};

const { algodClient, indexerClient } = getAlgorandClients("voi-testnet");

const NFTInfo = ({ collectionId, tokenId, owner }) => {
  // const [owner, setOwner] = React.useState(null);
  // useEffect(() => {
  //   if (owner) return;
  //   (async () => {
  //     const ci = new CONTRACT(collectionId, algodClient, indexerClient, schema);
  //     const ownerR = await ci.arc72_ownerOf(tokenId);
  //     if (!ownerR.success) return;
  //     setOwner(ownerR.returnValue);
  //   })();
  // });
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>CollectionId</TableCell>
          <TableCell align="right">{collectionId}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>TokenId</TableCell>
          <TableCell align="right">{tokenId}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Owner</TableCell>
          <TableCell align="right">
            {owner?.slice(0, 10)}...{owner?.slice(-10)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

const LazyNFTImage = lazy(() => import("../../components/NFTImage"));

const fee = 5;
const feeBi = 5n;
const ctcInfoMp200 = 26944604; // mp200

function NFTToken() {
  const { cid, tid } = useParams();
  const [node] = getCurrentNode();
  const { activeAccount } = useWallet();
  const [value, setValue] = React.useState(1);
  const [nfts, setNfts] = React.useState([]);
  const [forSale, setForSale] = React.useState([]);
  const [sold, setSold] = React.useState([]);
  const [owners, setOwners] = React.useState(null);
  const [tokens, setTokens] = React.useState(null);
  const [ctcInfo, setCtcInfo] = React.useState(null);
  const [owner, setOwner] = React.useState(null);
  const [controller, setController] = React.useState(null);
  const handleBuy = React.useCallback(
    async (lId, cId, tId, lAddr, lPrc) => {
      const ciMp200 = new CONTRACT(
        ctcInfoMp200,
        algodClient,
        indexerClient,
        mp200Schema,
        {
          addr: activeAccount.address,
        }
      );
      ciMp200.setFee(4000);
      ciMp200.setPaymentAmount((lPrc * (100n + feeBi)) / 100n);
      ciMp200.setAccounts([
        "G3MSA75OZEJTCCENOJDLDJK7UD7E2K5DNC7FVHCNOV7E3I4DTXTOWDUIFQ",
      ]);
      const buyNetR = await ciMp200.buyNet(lId);
      console.log({ buyNetR });
      if (!buyNetR.success) return;
      console.log({ buyNetR });
      await signTransaction(buyNetR.txns);
      alert("Purchase successful!");
    },
    [activeAccount]
  );
  useEffect(() => {
    if (!owner) return;
    (async () => {
      const ci = new CONTRACT(
        ctcInfoMp200,
        algodClient,
        indexerClient,
        mp200Schema
      );
      const evts = await ci.getEvents();
      const listings = evts.find((el) => el.name === "ListEvent").events;
      const sales = evts.find((el) => el.name === "BuyEvent").events;
      const deletes = evts.find(
        (el) => el.name === "DeleteNetListingEvent"
      ).events;
      const deleted = deletes.map(([txId, round, ts, lId]) => lId);
      const nfts = [];
      const sold = [];
      listings.forEach((el) => {
        const [txId, round, ts, lId, cId, tId, lAddr, [aT, lPrc]] = el;
        nfts.push([lId, cId, tId, lAddr, lPrc]);
      });
      nfts.reverse();
      sales.forEach((el) => {
        const [txId, round, ts, lId, cId, tId, lAddr, [aT, lPrc], bAddr] = el;
        sold.push([lId, cId, tId, lAddr, lPrc, bAddr]);
      });
      sold.reverse();
      setNfts(
        nfts.filter(
          ([lId, scId, stId, ...rst]) =>
            !deleted.includes(lId) &&
            Number(scId) === Number(cid) &&
            Number(tid) === Number(stId)
        )
      );
      setForSale(
        ((lIds) =>
          nfts.filter(
            ([lId, scId, stId, lAddr, ...rst]) =>
              !lIds.includes(lId) &&
              !deleted.includes(lId) &&
              Number(scId) === Number(cid) &&
              Number(tid) === Number(stId) &&
              lAddr === owner
          ))(sold.map(([slId, ...rst]) => slId))
      );
      setSold(
        sold.filter(
          ([lId, scId, stId, ...rst]) =>
            !deleted.includes(lId) &&
            Number(scId) === Number(cid) &&
            Number(tid) === Number(stId)
        )
      );
    })();
  }, [owner]);
  const signTransaction = React.useCallback(
    async (txns) => {
      if (!activeAccount) return;
      if (
        activeAccount.providerId === PROVIDER_ID.CUSTOM &&
        activeAccount.name === "kibisis"
      ) {
        const algorand = window.algorand;
        if (!algorand) {
          throw new Error("no wallets are installed!");
        }
        const wallets = algorand.getWallets();
        const wallet = await algorand.enable({
          genesisHash: getGenesisHash(node),
        });
        const { algodClient, indexerClient } = getAlgorandClients();
        const result = await window.algorand.signTxns({
          txns: txns.map((el) => {
            return {
              txn: el,
            };
          }),
        });
        let signedTransactionBytes;
        signedTransactionBytes = result.stxns.map(
          (stxn) => new Uint8Array(Buffer.from(stxn, "base64"))
        );
        const res = await algodClient
          .sendRawTransaction(signedTransactionBytes)
          .do();
        return res.txId;
      } else {
        const wtxns = txns.map((el) => {
          return {
            txn: el,
          };
        });
        await stdlib.signSendAndConfirm({ addr: activeAccount.address }, wtxns);
      }
    },
    [activeAccount]
  );
  // useEffect(() => {
  //   if (controller) return;
  //   (async () => {
  //     const ci = new CONTRACT(
  //       Number(cid),
  //       algodClient,
  //       indexerClient,
  //       arc72Schema
  //     );
  //     const arc72_getApprovedrR = await ci.arc72_getApproved(Number(tid));
  //     if (!arc72_getApprovedrR.success) return;
  //     const arc72_getApproved = arc72_getApprovedrR.returnValue;
  //     setController(arc72_getApproved);
  //   })();
  // });
  console.log({ controller });
  useEffect(() => {
    if (owner) return;
    (async () => {
      const ci = new CONTRACT(
        Number(cid),
        algodClient,
        indexerClient,
        arc72Schema
      );
      const ownerR = await ci.arc72_ownerOf(Number(tid));
      if (!ownerR.success) return;
      setOwner(ownerR.returnValue);
    })();
  });
  useEffect(() => {
    const ctcInfo = Number(cid);
    if (isNaN(ctcInfo)) return;
    setCtcInfo(ctcInfo);
  }, []);
  return !ctcInfo ? (
    "Collection not found"
  ) : (
    <>
      <h2 align="left" style={{ marginLeft: 10 }}>
        Collection AppId: <a href={`/#/nft/collection/${ctcInfo}`}>{ctcInfo}</a>
        <br />
        Collection Address:{" "}
        {algosdk.getApplicationAddress(ctcInfo).slice(0, 10)}...
        <br />
        TokenId: {tid}
      </h2>
      <Container sx={{ mt: 5 }} maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <LazyNFTImage collectionId={ctcInfo} tokenId={Number(tid)} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{ textAlign: "left" }}>
            <NFTInfo
              collectionId={ctcInfo}
              tokenId={Number(tid)}
              owner={owner}
            />
            {activeAccount?.address === owner && (
              <>
                <Button
                  size="large"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ borderRadius: 0 }}
                  onClick={async () => {
                    try {
                      const addr = prompt("Enter address to transfer to");
                      if (!addr) return;
                      const ci = new CONTRACT(
                        ctcInfo,
                        algodClient,
                        indexerClient,
                        arc72Schema,
                        {
                          addr: activeAccount?.address,
                        }
                      );
                      const arc72_ownerOfR = await ci.arc72_ownerOf(
                        Number(tid)
                      );
                      if (!arc72_ownerOfR.success) {
                        throw new Error("arc72_ownerOf failed in simulate");
                      }
                      if (
                        arc72_ownerOfR.returnValue !== activeAccount?.address
                      ) {
                        throw new Error("arc72_ownerOf returned wrong owner");
                      }

                      // TODO check mbr of ctcAddr

                      const accInfo = await algodClient
                        .accountInformation(
                          algosdk.getApplicationAddress(Number(cid))
                        )
                        .do();

                      if (accInfo.amount - accInfo["min-balance"] < 28500) {
                        const suggestedParams = await algodClient
                          .getTransactionParams()
                          .do();
                        const paymentTxn =
                          algosdk.makePaymentTxnWithSuggestedParamsFromObject({
                            from: activeAccount?.address,
                            to: algosdk.getApplicationAddress(Number(cid)),
                            amount: 28500,
                            suggestedParams,
                          });
                        await signTransaction([
                          Buffer.from(paymentTxn.toByte()).toString("base64"),
                        ]);
                      }

                      const arc72_transferFromR = await ci.arc72_transferFrom(
                        activeAccount?.address,
                        addr,
                        Number(tid)
                      );
                      if (!arc72_transferFromR.success) {
                        throw new Error(
                          "arc72_transferFrom failed in simulate"
                        );
                      }
                      const txns = arc72_transferFromR.txns;
                      const txId = await signTransaction(txns);
                      console.log({ txId });
                      alert("Transfer successful!");
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                >
                  Transfer
                </Button>
                <Button
                  color="success"
                  size="large"
                  fullWidth
                  variant="contained"
                  sx={{ borderRadius: 0, mt: 1 }}
                  onClick={async () => {
                    try {
                      const prcStr = prompt(
                        "Enter the amount you want to receive for nft"
                      );
                      if (!prcStr) {
                        throw new Error("Price not entered");
                      }
                      const prc = Number(prcStr);
                      if (isNaN(prc)) {
                        throw new Error("Price not a number");
                      }
                      const y_n = prompt(
                        `Enter y to confirm (Price: ${prc} VOI)`
                      );
                      if (y_n !== "y") {
                        throw new Error("User did not confirm");
                      }
                      const ci = new CONTRACT(
                        ctcInfo,
                        algodClient,
                        indexerClient,
                        arc72Schema,
                        {
                          addr: activeAccount?.address,
                        }
                      );
                      const ciMp200 = new CONTRACT(
                        mp200CtcInfo,
                        algodClient,
                        indexerClient,
                        mp200Schema,
                        {
                          addr: activeAccount?.address,
                        }
                      );
                      const arc72_ownerOfR = await ci.arc72_ownerOf(
                        Number(tid)
                      );
                      if (!arc72_ownerOfR.success) {
                        throw new Error("arc72_ownerOf failed in simulate");
                      }
                      if (
                        arc72_ownerOfR.returnValue !== activeAccount?.address
                      ) {
                        throw new Error("arc72_ownerOf returned wrong owner");
                      }
                      // -------------------------
                      // using arc72_setApprovalForAll
                      //const arc72_isApprovedForAllR = ci.arc72_isApprovedForAll(
                      //   activeAccount?.address,
                      //   algosdk.getApplicationAddress(Number(cid))
                      // );
                      // if (!arc72_isApprovedForAllR.success) {
                      //   throw new Error(
                      //     "arc72_isApprovedForAll failed in simulate"
                      //   );
                      // }
                      // do {
                      //   if (!arc72_isApprovedForAllR.returnValue) {
                      //     ci.setPaymentAmount(28500);
                      //     const setApprovalForAllR =
                      //       await ci.arc72_setApprovalForAll(
                      //         algosdk.getApplicationAddress(ctcInfo),
                      //         true
                      //       );
                      //     if (!setApprovalForAllR.success) {
                      //       break;
                      //     }
                      //     await signTransaction(setApprovalForAllR.txns);
                      //   }
                      // } while (0);
                      // -------------------------
                      const arc72_approveR = await ci.arc72_approve(
                        algosdk.getApplicationAddress(mp200CtcInfo),
                        Number(tid)
                      );
                      if (!arc72_approveR.success) {
                        throw new Error("arc72_approve failed in simulate");
                      }
                      await signTransaction(arc72_approveR.txns);

                      ciMp200.setPaymentAmount(60900);
                      const listNetR = await ciMp200.listNet(
                        Number(cid),
                        Number(tid),
                        Math.floor(prc * 1e6)
                      );
                      console.log({ listNetR });
                      if (!listNetR.success) {
                        throw new Error("listNet failed in simulate");
                      }
                      await signTransaction(listNetR.txns);
                      alert("Listing successful!");
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                >
                  Sell
                </Button>
                <Button
                  size="large"
                  fullWidth
                  variant="contained"
                  sx={{ borderRadius: 0, mt: 1 }}
                >
                  Unlist
                </Button>
              </>
            )}
            {controller === algosdk.getApplicationAddress(ctcInfoMp200) &&
              activeAccount?.address !== owner &&
              forSale &&
              forSale.length > 0 && (
                <Button
                  color="success"
                  size="large"
                  fullWidth
                  variant="contained"
                  onClick={() => handleBuy(...forSale[0])}
                >
                  Buy Now{` `}
                  {(
                    (Number(forSale[0][4]) * (100 + fee)) /
                    100 /
                    1e6
                  ).toLocaleString()}{" "}
                  VOI{` `}
                </Button>
              )}
            {sold && sold.length > 0 && (
              <Box sx={{ mt: 3 }}>
                <SalesHistoryTable
                  salesData={sold.map(([lId, cId, tId, lAddr, lPrc, bAddr]) => {
                    return {
                      id: lId,
                      date: "2022-01-01",
                      seller: `${lAddr.slice(0, 4)}...${lAddr.slice(-4)}`,
                      buyer: `${bAddr.slice(0, 4)}...${bAddr.slice(-4)}`,
                      amount: `${(Number(lPrc) / 1e6).toLocaleString()} VOI`,
                    };
                  })}
                />
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default NFTToken;
