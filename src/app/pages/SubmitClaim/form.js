import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import CircularProgress from "@material-ui/core/CircularProgress";

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
  const [submitting, setSubmitting] = useState(false);

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

  //put required fields in object below
  const [errors, setErrors] = useState({
    accidentDate: null,
    visitsToRehab: null,
    timeAtRehabInHours: null,
    hourlyWage: null,
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
        })
          .then(function (response) {
            console.log("response", response.data);
            let data = response.data.Item;
            if (data) {
              console.log("data", data);
              data.accidentDate = new Date(data.accidentDate);
              data.rehabEndDate = new Date(data.rehabEndDate);
              setValues(data);
            }
          })
          .catch((err) => {
            console.log("err", err);
          });
      }
    })();
  }, [user]);

  const handleDateChange = (name, date) => {
    setValues({
      ...values,
      [name]: date,
    });
  };

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

  const handleZipChange = (e) => {
    let { name, value } = e.target;
    let number = value.replace(/([^0-9]+)/gi, "");

    if ((number > 0 && number.length < 6) || number.length == 0) {
      let integer = parseInt(number, 10) || "";
      setValues({
        ...values,
        [name]: integer,
      });
    }
  };

  const validate = () => {
    let errs = {};
    let fields = Object.keys(errors);

    fields.forEach((field) => {
      console.log("field", field);
      console.log("values[field]", values[field]);
      if (values[field] == null || values[field] == "")
        errs[field] = `Required Field`;
    });

    setErrors(errs);
    return Object.keys(errs).length;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (validate()) return;

    setSubmitting(true);

    axios
      .post(url, values)
      .then((res) => {
        console.log(res);
        setSubmitting(false);
        history.push("/data");
      })
      .catch((err) => {
        console.log("err", err);
        setSubmitting(false);
      });
  };

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

      <div style={{ textAlign: "center" }}>
        {values.id ? <h1>Edit Your Claim</h1> : <h1>Submit Your Claim</h1>}
      </div>
      <form onSubmit={onSubmit}>
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
                onChange={(event) => {
                  handleDateChange("accidentDate", event);
                }}
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
                onChange={(event) => {
                  handleDateChange("rehabEndDate", event);
                }}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>

          <NumberField
            label="Zip Code of Accident: "
            name="zipCodeOfAccident"
            value={values.zipCodeOfAccident}
            onChange={handleZipChange}
          />

          <NumberField
            label="Time at Accident: "
            name="accidentTime"
            value={values.accidentTime}
            onChange={handleNumChange}
            unit="hrs"
            error={errors.accidentTime}
          />

          <NumberField
            label="Victim Age: "
            name="age"
            value={values.age}
            onChange={handleNumChange}
          />

          <NumberField
            label="Number of Visits to Physical Therapy: "
            name="visitsToRehab"
            value={values.visitsToRehab}
            onChange={handleNumChange}
          />

          <NumberField
            label="Time Traveling to Rehab: "
            name="rehabTravelTime"
            value={values.rehabTravelTime}
            onChange={handleNumChange}
            unit="hrs each visit"
            error={errors.rehabTravelTime}
          />

          <NumberField
            label="Time at Physical Therapy: "
            name="timeAtRehabInHours"
            value={values.timeAtRehabInHours}
            onChange={handleNumChange}
            unit="hrs each visit"
            error={errors.timeAtRehabInHours}
          />

          <NumberField
            label="Time during Physical Therapy at Home: "
            name="rehabTimePerDay"
            value={values.rehabTimePerDay}
            onChange={handleNumChange}
            unit="hrs/day"
            error={errors.rehabTimePerDay}
          />

          <NumberField
            label="Car Rental Time: "
            name="carRentalTime"
            value={values.carRentalTime}
            onChange={handleNumChange}
            unit="hrs"
          />

          <NumberField
            label="Time with Attorney: "
            name="attorneyTime"
            value={values.attorneyTime}
            onChange={handleNumChange}
            unit="hrs"
          />

          <MoneyField
            label="Hourly Income: "
            amt={values.hourlyWage}
            setAmt={(amt) => {
              setValues({
                ...values,
                hourlyWage: amt,
              });
            }}
          />

          <MoneyField
            label="Settlement Amount: "
            amt={values.settlementAmt}
            setAmt={(amt) => {
              setValues({
                ...values,
                settlementAmt: amt,
              });
            }}
          />
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
          {submitting ? (
            <CircularProgress />
          ) : (
            <button style={styles.Button} onClick={onSubmit}>
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default connect()(SubmitClaim);
