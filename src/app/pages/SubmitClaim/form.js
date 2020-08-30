import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import { numberFormat } from "utils/numCurrency";

import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";

import "react-datepicker/dist/react-datepicker.css";
import Helmet from "react-helmet";
import axios from "axios";
import { lambdaAPIurl as URL } from "config/aws.js";

import MoneyField from "./Components/MoneyField.js";
import NumberField from "./Components/NumberField.js";

import DB from "dbFunctions/directConnect/accidentData";

const styles = {
  Grid: { padding: "20px" },
  TextField: {
    width: "50px",
  },
  TextFieldInput: {
    textAlign: "center",
  },
  Button: {
    color: "white",
    backgroundColor: "teal",
    border: "none",
    borderRadius: "4px",
    padding: "8px",
  },
};

const SubmitClaim = ({ data }) => {
  const history = useHistory();
  const user = useSelector((state) => state.userReducer.user);
  const [url, setUrl] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [values, setValues] = useState({
    email: "john.doe@gmail.com",
    firstName: "John",
    lastName: "Doe",
    accidentDate: new Date(),
    visitsToRehab: 60,
    timeAtRehabInHours: 1,
    rehabTravelTime: 1,
    attorneyTime: 1,
    accidentTime: 2,
    carRentalTime: 1,
    zipCodeOfAccident: 12345,
    rehabTimePerDay: 1,
    rehabEndDate: new Date(),
    hourlyWage: 40,
    age: 42,
    settlementAmt: 0,
    notes: "",
  });

  useEffect(() => {
    (async function IIFE() {
      if (user) {
        //todo: need to change user.uid to AWS cognito id
        const accidentEndpoint = `${URL}/accidents/${user.uid}`;
        setUrl(accidentEndpoint);
        axios({
          method: "get",
          url: accidentEndpoint,
        }).then(function (response) {
          console.log("response", response.data);
          let data = response.data.Item;
          if (data) {
            console.log("data", data);
            data.accidentDate = new Date(data.accidentDate);
            data.rehabEndDate = new Date(data.rehabEndDate);
            setValues(data);
          }
        });
      }
    })();
  }, [user]);

  const handleTextChange = (e) => {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleNumChange = (e) => {
    let { name, value } = e.target;
    let number = value.replace(/([^0-9]+)/gi, "");

    if (number > 0 || number.length == 0) {
      let integer = parseInt(number, 10) || "";
      setValues({
        ...values,
        [name]: integer,
      });
    }
  };

  const setSettlementAmt = (amt) => {
    setValues({
      ...values,
      settlementAmt: amt,
    });
  };

  const onSubmit = () => {};

  return (
    <div className="container">
      <Helmet>
        <title>A Better Settlement</title>
        <meta
          name="description"
          content="Personal Injury Whiplash Settlement Calculator"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abettersettlement.com" />
        <meta
          property="og:description"
          content="Personal Injury Whiplash Settlement Calculator"
        />
      </Helmet>

      <form onSubmit={onSubmit} style={{ margin: "auto" }}>
        <div style={{ textAlign: "center" }}>
          <h1>Submit Your Claim</h1>
        </div>
        <Grid
          container
          justify="space-around"
          style={{ textAlign: "left", margin: "auto", width: "100%" }}
        >
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item xs={12} sm={6} style={styles.Grid}>
              <KeyboardDatePicker
                margin="normal"
                id="date-of-accident"
                label="Date of Accident"
                format="MM/dd/yyyy"
                value={values.accidentDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6} style={styles.Grid}>
              <KeyboardDatePicker
                margin="normal"
                id="rehab-end-date"
                label="Rehab End Date"
                format="MM/dd/yyyy"
                value={values.rehabEndDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>

          <NumberField
            label="Number of Visits to Physical Therapy: "
            name="visitsToRehab"
            value={values.visitsToRehab}
            onChange={handleNumChange}
          />

          <NumberField
            label="Time at Physical Therapy per Visit: "
            name="timeAtRehabInHours"
            value={values.timeAtRehabInHours}
            onChange={handleNumChange}
            unit="hrs"
          />

          <NumberField
            label="Victim Age: "
            name="age"
            value={values.age}
            onChange={handleNumChange}
          />

          <NumberField
            label="Car Rental Time: "
            name="carRentalTime"
            value={values.carRentalTime}
            onChange={handleNumChange}
            unit="hrs"
          />

          <NumberField
            label="Car Rental Time: "
            name="carRentalTime"
            value={values.carRentalTime}
            onChange={handleNumChange}
            unit="hrs"
          />

          <NumberField
            label="Zip Code of Accident: "
            name="zipCodeOfAccident"
            value={values.zipCodeOfAccident}
            onChange={handleNumChange}
          />

          <Grid item xs={12} sm={6} style={styles.Grid}>
            <span>Hourly Income: </span>
            <MoneyField
              amt={values.hourlyWage}
              setAmt={(amt) => {
                setValues({
                  ...values,
                  hourlyWage: amt,
                });
              }}
              fieldStyles={styles.TextField}
            />
          </Grid>

          <Grid item xs={12} sm={6} style={styles.Grid}>
            <span>Settlement Amount: </span>
            <MoneyField
              amt={values.settlementAmt}
              setAmt={(amt) => {
                setValues({
                  ...values,
                  settlementAmt: amt,
                });
              }}
              fieldStyles={styles.TextField}
            />
          </Grid>
        </Grid>

        <TextField
          style={{ width: "100%" }}
          label="Notes"
          name={"notes"}
          value={values.notes}
          variant="outlined"
          multiline
          rows={4}
          onChange={handleTextChange}
        />
        <div style={{ width: "100%", textAlign: "center" }}>
          <br />
          <button style={styles.Button}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default connect()(SubmitClaim);
