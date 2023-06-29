import { useCallback, useEffect, useState } from "react";
import { useWallet } from "@txnlab/use-wallet";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import ChildService from "../../services/ChildService.ts";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SubscriptionProviders from "../SubscriptionProviders/index.js";
import SubscriptionSubscribers from "../SubscriptionSubscribers/index.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function SubscriptionDialog(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { providers, activeAccount } = useWallet();
  const [token, setToken] = useState({});
  const [tokenAmount, setTokenAmount] = useState("");
  const [accountAddress, setAccountAddress] = useState("");
  const [doSubmit, setDoSubmit] = useState(false);
  const handleSubmit = async () => {
    if (!activeAccount) {
      providers[0].connect();
    }
    setDoSubmit(true);
  };
  useEffect(() => {
    if (!activeAccount) return;
    if (!doSubmit) return;
    ChildService.deposit(
      token,
      activeAccount.address,
      accountAddress,
      tokenAmount
    );
    setDoSubmit(false);
  }, [activeAccount, doSubmit]);
  return (
    <div className="SendDialog">
      <Dialog fullScreen={true} open={props.open} onClose={props.onClose}>
        <DialogTitle>Subscriptions</DialogTitle>
        <DialogContent
          style={
            {
              /*
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            */
            }
          }
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Services" {...a11yProps(0)} />
              <Tab label="My Subscriptions" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <SubscriptionProviders />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SubscriptionSubscribers />
          </TabPanel>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.setOpen(false)}>Close</Button>
          <Button onClick={handleSubmit}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SubscriptionDialog;
