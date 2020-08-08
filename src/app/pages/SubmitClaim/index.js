import React, { useState } from "react";
import { connect, useSelector } from "react-redux";

import TextField from "@material-ui/core/TextField";
import { MenuItem, InputLabel, Select, Grid } from "@material-ui/core";

import MomentUtils from "@date-io/moment";
import moment from "moment";

import Notes from "./Components/Notes";
import TimeRentingCar from "./Components/TimeRentingCar";
import Insurance from "./Components/Insurance";
import Age from "./Components/Age";
import Occupation from "./Components/Occupation";

import firebase from "config/firebase.js";

const SubmitClaim = () => {
  const [values, setValues] = useState({
    dateofaccident: "2014-02-01T00:00:00.000Z",
    numofvisitstorehab: 60,
    timeatrehabinhours: 1,
    timedrivingtorehabperavisitrndtrip: "1",
    timewithatty: "1",
    timeataccident: "2",
    timerentingacar: "1",
    timedoingrehabperaday: "1",
    daterehabisfinished: "2014-05-01T00:00:00.000Z",
    hourlywageforoccupation: 8,
    occupation: "Pizza Delivery Driver",
    zipcodeofaccident: 78738,
    insurance: "ALL-STATE",
    age: 28,
    settlementamt: 14000,
    notes: "Victim",
  });

  const [msg, setMsg] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleDateChange = (date) => {
    setValues({
      ...values,
      startMoment: moment(date),
      startTime: moment(date).format("hh:mm A"),
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Submit Claim</h1>
      <Grid container spacing={4} direction="column">
        <TimeRentingCar value={values.timerentingacar} onChange={onChange} />
        <Age value={values.age} onChange={onChange} />
        <Insurance value={values.insurance} onChange={onChange} />
        <Occupation value={values.occupation} onChange={onChange} />
        <Notes value={values.notes} onChange={onChange} />
      </Grid>
    </div>
  );
};

export default connect()(SubmitClaim);
