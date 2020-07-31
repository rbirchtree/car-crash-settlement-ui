import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";

import AuthModal from "./Auth/AuthModal";

import Logo from "media/StandardPack/website_logo_transparent_background.png";

import { setUser, setUserToken } from "../../redux/actions/userActions.js";

import firebase from "config/firebase";

import "scss/NavbarFooter.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 99,
    position: "sticky",
    top: "0",
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const logout = () => {
    firebase.auth().signOut();
    dispatch(setUser(null));
    dispatch(setUserToken(null));
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      {user ? (
        <MenuItem>Logout</MenuItem>
      ) : (
        <MenuItem
          onClick={() => {
            setOpen(true);
            handleMenuClose();
          }}
        >
          Login
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link className="nav-link text-dark" to="/about">
          About
        </Link>
      </MenuItem>
      <MenuItem>
        <Link className="nav-link text-dark" to="/faq">
          FAQ
        </Link>
      </MenuItem>
      <MenuItem>
        <Link className="nav-link text-dark" to="/data">
          Data
        </Link>
      </MenuItem>
      <MenuItem>
        <Link className="nav-link text-dark" to="/tutorial">
          Tutorial
        </Link>
      </MenuItem>
      <MenuItem>
        <Link className="nav-link text-dark" to="/">
          Calculator
        </Link>
      </MenuItem>

      {user ? (
        <MenuItem className="nav-link text-dark">
          <Link className="nav-link text-dark" to="/">
            Logout
          </Link>
        </MenuItem>
      ) : (
        <MenuItem
          className="nav-link text-dark"
          onClick={() => {
            setOpen(true);
            handleMenuClose();
          }}
        >
          <Link className="nav-link text-dark" to="/">
            Login
          </Link>
        </MenuItem>
      )}

      {/* <MenuItem onClick={handleProfileMenuOpen}>
        <span>Sign In</span>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </MenuItem> */}
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AuthModal
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
      />

      <AppBar className="appbar" position="static">
        <Toolbar variant="dense">
          <Link to="/">
            <img src={Logo} width="120" alt="A Better Settlement" />
          </Link>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link className="nav-link navbar-item" to="/about">
              About
            </Link>
            <Link className="nav-link navbar-item" to="/faq">
              FAQ
            </Link>
            <Link className="nav-link navbar-item" to="/data">
              Data
            </Link>
            <Link className="nav-link navbar-item" to="/tutorial">
              Tutorial
            </Link>
            <Link className="nav-link navbar-item" to="/">
              Calculator
            </Link>

            {user ? (
              <Link className="nav-link navbar-item" onClick={logout}>
                Logout
              </Link>
            ) : (
              <Link
                className="nav-link navbar-item"
                onClick={() => {
                  setOpen(true);
                  handleMenuClose();
                }}
              >
                Login
              </Link>
            )}

            {/* <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default connect()(Navbar);
