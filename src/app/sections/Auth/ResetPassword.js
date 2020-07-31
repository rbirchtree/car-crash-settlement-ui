import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { validateEmail } from "utils/validateEmail";

import firebase from "config/firebase";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ResetPassword(props) {
  const classes = useStyles();
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [values, setValues] = useState({
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const sendResetEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMsg("");

    if (!validateEmail(values.email)) {
      setErrMsg("Please enter a valid email");
      setIsLoading(false);
    } else {
      setErrMsg("");
    }
    firebase
      .auth()
      .sendPasswordResetEmail(values.email, {
        url: "www.replacelater.com",
      })
      .then((res) => {
        console.log("res", res);
        setSuccessMsg(
          "We have sent an email with instruction on how to reset your password."
        );
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setIsLoading(false);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            value={values.email}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          {!isLoading ? (
            <Button
              onClick={sendResetEmail}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Reset Password
            </Button>
          ) : (
            <>
              <div style={{ color: "red" }}>This may take a moment...</div>
              <CircularProgress />
            </>
          )}
          <div style={{ color: "red" }}>{errMsg || successMsg}</div>
          <Grid
            container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid item xs>
              <Link href="#" onClick={props.setSignin} variant="body2">
                Login
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" onClick={props.setSignup} variant="body2">
                Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
