import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { Button } from "reactstrap";
import DatePicker from "react-datepicker";
import { numberFormat } from "utils/numCurrency";
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
            data.accidentDate = data.accidentDate.toDate();
            data.rehabEndDate = data.rehabEndDate.toDate();
            setInitVals(data);
          }
        });
      }
    })();
  }, [user]);

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
      <Formik
        enableReinitialize={true}
        initialValues={initVals}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);

          axios
            .post(url, initVals)
            .then((res) => console.log(res))
            .catch((err) => console.log("err", err));

          // DB.addData(values, user.uid);

          setSubmitting(false);
          history.push("data");
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <div className="form row justify-content-center">
              <div className="text-center form-group ml-2 col-sm-7">
                <h1>Submit Your Claim</h1>
              </div>
            </div>
            <div className="form row justify-content-center">
              <div className="form-group ml-2 col-sm-3">
                <label className="mr-2 lbl" htmlFor="accidentDate">
                  Date of Accident
                </label>
                <DatePicker
                  selected={values.accidentDate}
                  autoFocus
                  dateFormat="MMMM d, yyyy"
                  className="form-control"
                  name="accidentDate"
                  onChange={(date) => setFieldValue("accidentDate", date)}
                />
              </div>
              <div className="form-group ml-2 col-sm-3">
                <label className="mr-2 lbl" htmlFor="rehabEndDate">
                  Date Rehab is Finished
                </label>
                <DatePicker
                  selected={values.rehabEndDate}
                  dateFormat="MMMM d, yyyy"
                  className="form-control"
                  name="startDate"
                  onChange={(date) => setFieldValue("rehabEndDate", date)}
                />
              </div>
            </div>
            <div className="form row justify-content-center">
              <div className="form-group ml-2 col-sm-3">
                <label htmlFor="visitsToRehab">
                  Number of Visits to Physical Therapy
                </label>
                <Field
                  type="number"
                  className="form-control"
                  name="visitsToRehab"
                  value={values.visitsToRehab}
                />
              </div>
              <div className="form-group ml-2 col-sm-3">
                <label htmlFor="timeAtRehabInHours">
                  Time at PT Per a Visit in Hours<sup>*</sup>
                </label>
                <Field
                  type="number"
                  className="form-control"
                  name="timeAtRehabInHours"
                  value={values.timeAtRehabInHours}
                />
              </div>
            </div>
            <div className="form row justify-content-center">
              <div className="form-group ml-2 col-sm-3">
                <label htmlFor="rehabTravelTime">
                  Total Time Going to PT/Visit in Hours<sup>*</sup>
                </label>
                <Field
                  type="number"
                  className="form-control"
                  name="rehabTravelTime"
                  value={values.rehabTravelTime}
                />
              </div>
              <div className="form-group ml-2 col-sm-3">
                <label htmlFor="rehabTimePerDay">
                  Time Doing PT at Home/Day in Hours<sup>*</sup>
                </label>
                <Field
                  type="number"
                  className="form-control"
                  name="rehabTimePerDay"
                  value={values.rehabTimePerDay}
                />
              </div>
            </div>
            <div className="form row justify-content-center">
              <div className="form-group ml-2 col-sm-3">
                <label htmlFor="attorneyTime">
                  Time with Attorney in Hours<sup>*</sup>
                </label>
                <Field
                  type="number"
                  className="form-control"
                  name="attorneyTime"
                  value={values.attorneyTime}
                />
              </div>
              <div className="form-group ml-2 col-sm-3">
                <label htmlFor="accidentTime">
                  Time at Accident in Hours<sup>*</sup>
                </label>
                <Field
                  type="number"
                  className="form-control"
                  name="accidentTime"
                  value={values.accidentTime}
                />
              </div>
            </div>
            <div className="form row justify-content-center">
              <div className="form-group ml-2 col-sm-3">
                <label htmlFor="carRentalTime">
                  Time Renting a Car in Hours<sup>*</sup>
                </label>
                <Field
                  type="number"
                  className="form-control"
                  name="carRentalTime"
                  value={values.carRentalTime}
                />
              </div>
              <div className="form-group ml-2 col-sm-3">
                <label htmlFor="hourlyWage">
                  Hourly Income for Occupation<sup>*</sup>
                </label>
                <Field
                  type="number"
                  className="form-control"
                  name="hourlyWage"
                  value={values.hourlyWage}
                />
              </div>
            </div>
            <div className="form row justify-content-center">
              <div className="form-group ml-2 col-sm-3">
                <label htmlFor="age">Age of Victim</label>
                <Field
                  type="number"
                  className="form-control"
                  name="age"
                  value={values.age}
                />
              </div>
              <div className="form-group ml-2 col-sm-3">
                <label htmlFor="settlementAmt">Settlement Amount</label>
                <Field
                  type="number"
                  className="form-control"
                  name="settlementAmt"
                  value={values.settlementAmt}
                />
              </div>
            </div>

            <div className="form row justify-content-center">
              <div className="form-group ml-2 col-sm-3">
                <label htmlFor="zipCodeOfAccident">Zip Code of Accident</label>
                <Field
                  type="number"
                  className="form-control"
                  name="zipCodeOfAccident"
                  value={values.zipCodeOfAccident}
                />
              </div>
            </div>

            <div className="form row justify-content-center">
              <div>
                <label htmlFor="age">Notes</label>
                <Field
                  type="text"
                  className="form-control"
                  name="notes"
                  value={values.notes}
                />
              </div>
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </div>
            <br />
            <div className="form row justify-content-center">
              <div className="form-group ml-2 col-sm-3 mb-2">
                <sup>
                  *PT means physical therapy and all time are in hours when
                  asked in the questions.
                </sup>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default connect()(SubmitClaim);