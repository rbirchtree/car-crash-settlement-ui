import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import Modal from "@material-ui/core/Modal";

import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import ResetPassword from "./ResetPassword.js";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function AuthModal({ open, handleClose, children }) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  let [section, setSection] = useState("login");

  const setSignup = () => {
    setSection("signup");
  };

  const setSignin = () => {
    setSection("login");
  };

  const setPassReset = () => {
    setSection("reset");
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <>
          {section === "login" ? (
            <SignIn
              setSignup={setSignup}
              setPassReset={setPassReset}
              handleClose={handleClose}
            />
          ) : (
            <></>
          )}

          {section === "signup" ? <SignUp setSignin={setSignin} /> : <></>}

          {section === "reset" ? (
            <ResetPassword setSignin={setSignin} setSignup={setSignup} />
          ) : (
            <></>
          )}
        </>
      </div>
    </Modal>
  );
}

export default connect()(AuthModal);
