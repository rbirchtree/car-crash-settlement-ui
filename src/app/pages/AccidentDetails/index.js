import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Moment from "react-moment";
import { numberFormat } from "utils/numCurrency";
import { lambdaAPIurl as URL } from "config/aws.js";
import axios from "axios";
import Helmet from "react-helmet";

export default function AccidentDetails(props) {
  const {
    match: { params },
  } = props;

  const [vals, setVals] = useState({
    accidentDate: null,
    accidentTime: null,
    visitsToRehab: null,
    timeAtRehabinhours: null,
    rehabTravelTime: null,
    attorneyTime: null,
    carRentalTime: null,
    rehabTimePerDay: null,
    rehabEndDate: null,
    hourlyWage: null,
    occupation: null,
    zipCodeOfAccident: null,
    insurance: null,
    age: null,
    settlementAmt: null,
    notes: null,
  });

  let numsVisits = parseInt(vals.visitsToRehab);
  let timeAtR = parseInt(vals.timeAtRehabinhours);
  let timeDrivingToR = parseInt(vals.rehabTravelTime);
  let tAtty = parseInt(vals.attorneyTime);
  let tAccident = parseInt(vals.accidentTime);
  let tRentCar = parseInt(vals.carRentalTime);
  let tDoingRPerADay = parseInt(vals.rehabTimePerDay);
  let wage = parseInt(vals.hourlyWage);
  let userAge = parseInt(vals.age);

  const doa = new Date(vals.accidentDate);
  const drif = new Date(vals.rehabEndDate);
  const totalDaysInRehab = (drif - doa) / 86400000;

  useEffect(() => {
    const getAccidentEndpoint = `${URL}/accidents/${params.id}`;
    (async function IIFE() {
      axios({
        method: "get",
        url: getAccidentEndpoint,
      }).then(function (response) {
        //todo: cache protected data in redux store
        console.log("response", response.data);
        let item = response.data.Item;
        console.log("item", item);
        setVals(item);
        console.log("vals", vals);
      });
    })();
  }, []);

  return (
    <Grid container direction="row" justify="center">
      <Helmet>
        <title>Accident Settlements</title>
        <meta
          name="description"
          content="What is the average settlement for a car crash accident?"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abettersettlement.com" />
        <meta
          property="og:description"
          content="What is the average settlement for a car crash accident?"
        />
      </Helmet>
      <div style={{ textAlign: "left" }}>
        <div>
          <h1>Accident Details</h1>
          <ul>
            <li>
              Date of Accident:
              <Moment format="MM/DD/YYYY">{vals.accidentDate}</Moment>
            </li>
            <li>
              Date Rehab is Finished:
              <Moment format="MM/DD/YYYY">{vals.rehabEndDate}</Moment>
            </li>
            <li>Number of Visits to Rehab: {vals.visitsToRehab}</li>
            <li>Hourly Wage for Occupation: ${vals.hourlyWage}</li>
            <li>Occupation: {vals.occupation}</li>
            <li>Age: {vals.age}</li>
            <li>Insurance: {vals.insurance}</li>
            <li>Zip Code of Accident: {vals.zipCodeOfAccident}</li>
            <li>Notes: {vals.notes}</li>
            <li>Gross Settlement Amount: {numberFormat(vals.settlementAmt)}</li>
            <li>
              Estimate Using Formula:
              {numberFormat(
                (1 + (79 - userAge) / 79) *
                  (wage * 2) *
                  (tAtty +
                    tAccident +
                    tRentCar +
                    (totalDaysInRehab * tDoingRPerADay +
                      (timeDrivingToR + timeAtR) * numsVisits))
              )}
            </li>
          </ul>
        </div>
      </div>
    </Grid>
  );
}
