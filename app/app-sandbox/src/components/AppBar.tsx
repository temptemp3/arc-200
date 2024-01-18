import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { useWallet } from "@txnlab/use-wallet";
import { Button } from "@mui/material";
import { makeStdLib } from "../utils/reach.js";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import * as Copy from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import NFDService from "../services/NFDService";
import SettingsIcon from "@mui/icons-material/Settings";
import { DEFAULT_NODE } from "../config/defaultLocalStorage.js";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const stdlib = makeStdLib();

const MyAppBar = () => {
  const navigate = useNavigate();
  const {
    providers,
    activeAccount,
    connectedActiveAccounts,
    connectedAccounts,
  } = useWallet();
  const [algorand, setAlgorand] = React.useState<any>(null);
  const { CopyToClipboard } = Copy;
  const notify = (msg: string) => toast(msg);
  const menuId = "primary-search-account-menu";

  const [displayName, setDisplayName] = React.useState<string | null>(null);

  React.useEffect(() => {
    const algorand = (window as any).algorand;
    if (!algorand) {
      throw new Error("no wallets are installed!");
    }
    setAlgorand(algorand);
  }, []);

  React.useEffect(() => {
    if (!activeAccount) return;
    (async () => {
      try {
        await NFDService.requestNFDByAddress(activeAccount.address);
      } catch (e) {}
      setDisplayName(
        ((address) =>
          NFDService.getNFDByAddress(address)?.[address]?.name ||
          address.slice(0, 4) + "...")(activeAccount.address)
      );
    })();
  }, [activeAccount]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {activeAccount && (
        <MenuItem>
          {activeAccount.address.slice(0, 4)}...
          {activeAccount.address.slice(-4)}
          &nbsp;
          <ContentCopyIcon
            onClick={() => {
              notify(
                `Copied address ${activeAccount.address.slice(
                  0,
                  4
                )}...${activeAccount.address.slice(-4)} to clipboard!`
              );
            }}
          />
        </MenuItem>
      )}
      {connectedActiveAccounts.length > 1 && <Divider />}
      {connectedActiveAccounts
        .filter((account) => account.address !== activeAccount?.address)
        .map((account) => (
          <MenuItem
            onClick={() => {
              providers
                .find((p) => p.isActive)
                .setActiveAccount(account.address);
              window.location.reload();  
            }}
          >
            {account.address.slice(0, 4)}...
            {account.address.slice(-4)}
          </MenuItem>
        ))}
      <Divider />
      <MenuItem
        onClick={() => {
          activeAccount &&
            providers &&
            providers
              .find(
                (p) =>
                  (p.metadata.id !== "custom" &&
                    p.metadata.id === activeAccount?.providerId) ||
                  p.metadata.id === "custom"
              )
              .disconnect()
              .then(() => {
                handleMenuClose();
                window.location.reload();
              });
        }}
      >
        Disconnect
      </MenuItem>
    </Menu>
  );
  return (
    <AppBar
      position="fixed"
      sx={{ top: "auto", bottom: 0, backgroundColor: "#000000" }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="home"
          sx={{ mr: 2 }}
          onClick={() => navigate("/")}
        >
          <HomeIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="home"
          sx={{ mr: 2 }}
          onClick={() => navigate("/config")}
        >
          <SettingsIcon />
        </IconButton>
        {false && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Box sx={{ flexGrow: 1 }} />
        {!activeAccount ? (
          providers?.map((provider) => (
            <Box
              sx={{
                display: {
                  xs: "flex",
                  alignItems: "center",
                  gap: "1em",
                },
              }}
            >
              <Button
                variant="text"
                style={{ color: "white" }}
                onClick={() => {
                  provider.connect().then(() => {
                    window.location.reload();
                  });
                }}
              >
                <img
                  style={{ height: "30px", filter: "grayscale(1)" }}
                  src={provider.metadata.id === "defly" ? "/avatar.png" : provider.metadata.icon}
                />
              </Button>
            </Box>
          ))
        ) : (
          <>
            <Box
              sx={{
                display: {
                  xs: "flex",
                  //md: "flex",
                  alignItems: "center",
                  gap: "1em",
                },
              }}
            >
              {displayName && <strong>{displayName}</strong>}
              {providers &&
                activeAccount &&
                providers
                  .filter((p) => p.metadata.id !== activeAccount.providerId)
                  .map((provider) => (
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={() => {
                        provider.setActiveProvider();
                        window.location.reload();
                      }}
                      color="inherit"
                    >
                      {provider.metadata.id === "defly" ? (
                        <img
                          style={{
                            height: "30px",
                            filter: "grayscale(1)",
                          }}
                          src={"/avatar.png"}
                        />
                      ) : (
                        <img
                          style={{
                            height: "30px",
                            filter: "grayscale(1)",
                          }}
                          src={provider.metadata.icon}
                        />
                      )}
                    </IconButton>
                  ))}
              {providers &&
                activeAccount &&
                providers.map(
                  (provider) =>
                    ((provider.metadata.id !== "custom" &&
                      provider.metadata.id === activeAccount.providerId) ||
                      (provider.metadata.id === "custom" &&
                        provider.metadata.name === activeAccount.name)) && (
                      <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                      >
                        <img
                          style={{
                            height: "30px",
                            filter:
                              (provider.metadata.id !== "custom" &&
                                provider.metadata.id ===
                                  activeAccount.providerId) ||
                              provider.metadata.id === "custom"
                                ? ""
                                : "grayscale(1)",
                          }}
                          src={
                            provider.metadata.id === "defly"
                              ? "/avatar.png"
                              : provider.metadata.icon
                          }
                        />
                      </IconButton>
                    )
                )}
            </Box>
          </>
        )}
      </Toolbar>
      {renderMenu}
    </AppBar>
  );
};

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MyAppBar />
    </Box>
  );
}
