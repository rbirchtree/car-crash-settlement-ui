import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { validateEmail } from "utils/validateEmail";

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    submitMsg: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (values.displayName === "") {
      setValues({ ...values, submitMsg: "Please enter a name" });
      setIsLoading(false);
    } else if (!validateEmail(values.email)) {
      setValues({ ...values, submitMsg: "Please enter a valid email" });
      setIsLoading(false);
    } else if (!checkPasswords()) {
      setIsLoading(false);
    } else {
      (async () => {
        let user = await firebase.functions().httpsCallable("createUser");
        user({
          email: values.email,
          password: values.password,
          displayName: values.displayName,
        })
          .then((user) => {
            console.log(user);
            setValues({
              ...values,
              submitMsg:
                "Account created. Returning to login page... Login to Continue",
            });
            setIsLoading(false);
            setTimeout(() => {
              props.setSignin();
            }, 1500);
          })
          .catch((err) => {
            console.log("err:", err);
            setIsLoading(false);
            setValues({
              ...values,
              submitMsg:
                "An error has occurred. Try refreshing your browser and trying again.\n If the error persists, contact support",
            });
          });
      })();
    }
  };

  function checkPasswords() {
    if (values.password === "") {
      setValues({ ...values, submitMsg: "Please enter a password" });
      return false;
    } else if (values.password !== values.confirmPassword) {
      setValues({ ...values, submitMsg: "Passwords do not match" });
      return false;
    }
    return true;
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                value={values.displayName}
                onChange={handleInputChange}
                name="displayName"
                variant="outlined"
                required
                fullWidth
                id="displayName"
                label="Display Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={values.email}
                onChange={handleInputChange}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={values.password}
                onChange={handleInputChange}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={values.confirmPassword}
                onChange={handleInputChange}
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          {isLoading ? (
            <>
              <div style={{ color: "red" }}>This may take a moment...</div>
              <CircularProgress />
            </>
          ) : (
            <Button
              type="submit"
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          )}
          <div style={{ color: "red" }}>
            <div>{values.submitMsg}</div>
          </div>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" onClick={props.setSignin} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <br />
    </Container>
  );
}
