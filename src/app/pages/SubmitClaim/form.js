import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { Button } from "reactstrap";
import DatePicker from "react-datepicker";
import { numberFormat } from "utils/numCurrency";
import TextField from "@material-ui/core/TextField";

import "react-datepicker/dist/react-datepicker.css";
import Helmet from "react-helmet";
import axios from "axios";
import { lambdaAPIurl as URL } from "config/aws.js";

import DB from "dbFunctions/directConnect/accidentData";

const SubmitClaim = ({ data }) => {
  const history = useHistory();
  const user = useSelector((state) => state.userReducer.user);
  const [url, setUrl] = useState(null);
  const [initVals, setInitVals] = useState({
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
            setInitVals(data);
          }
        });
      }
    })();
  }, [user]);

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

      <form onSubmit={onSubmit}>
        <div className="text-center form-group ml-2 col-sm-7">
          <h1>Submit Your Claim</h1>
        </div>
      </form>
    </div>
  );
};

export default connect()(SubmitClaim);
