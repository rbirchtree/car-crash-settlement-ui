import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import firebase from "config/firebase";

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

export default function SignIn(props) {
  const classes = useStyles();
  const [errMsg, setErrMsg] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  //! need to make the session persistent
  const toggleInput = (e) => {
    setValues({ ...values, remember: !values.remember });
  };

  const login = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        setErrMsg(error.message);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
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
          <TextField
            value={values.password}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={toggleInput}
                value={!values.remember}
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            onClick={login}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" onClick={props.setPassReset} variant="body2">
                Forgot password?
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
      <div style={{ color: "red" }}>{errMsg}</div>
      <br />
    </Container>
  );
}
