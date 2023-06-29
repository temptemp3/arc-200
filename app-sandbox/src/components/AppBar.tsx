import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { useWallet } from "@txnlab/use-wallet";
import { Button } from "@mui/material";
import { makeStdLib } from "../utils/reach.js";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import * as Copy from "react-copy-to-clipboard";
import { toast } from "react-toastify";

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

export default function PrimarySearchAppBar() {
  const { CopyToClipboard } = Copy;

  const { providers, activeAccount } = useWallet();
  const notify = (msg: string) => toast(msg);

  console.log({ providers, activeAccount });
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";

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
      <MenuItem
        onClick={() => {
          activeAccount &&
            providers &&
            providers
              .find((p) => p.metadata.id === activeAccount?.providerId)
              .disconnect();
          handleMenuClose();
        }}
      >
        Disconnect
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="transparent"
        position="fixed"
        sx={{ top: "auto", bottom: 0 }}
      >
        <Toolbar>
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
                    src={provider.metadata.icon}
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
                {activeAccount.address.slice(0, 4)}...
                {activeAccount.address.slice(-4)}
                <CopyToClipboard
                  text={activeAccount.address}
                  onCopy={() => {
                    notify(
                      `Copied address ${activeAccount.address.slice(
                        0,
                        4
                      )}...${activeAccount.address.slice(-4)} to clipboard!`
                    );
                  }}
                >
                  <ContentCopyIcon />
                </CopyToClipboard>
                {providers &&
                  activeAccount &&
                  providers.map(
                    (provider) =>
                      provider.metadata.id === activeAccount.providerId && (
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
                                provider.metadata.id ===
                                activeAccount.providerId
                                  ? ""
                                  : "grayscale(1)",
                            }}
                            src={provider.metadata.icon}
                          />
                        </IconButton>
                      )
                  )}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
