import React from "react";
import { Formik, Field, Form } from "formik";
import DatePicker from "react-datepicker";
import axios from "axios";
import { numberFormat } from "../../utils/numCurrency";
import "react-datepicker/dist/react-datepicker.css";
import Helmet from "react-helmet";

class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>A Better Settlement</title>
          <meta
            name="description"
            content="Personal Injury Whiplash Calculator for A Better Settlement"
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
          initialValues={{
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
            rehabTimePerDay: 1,
            rehabEndDate: new Date(),
            hourlyWage: 40,
            age: 42,
          }}
          onSubmit={(values, { setSubmitting }) => {
            axios
              .post(process.env.REACT_APP_URL, { values })
              .then(function (response) {
                // console.log(response);
              })
              .catch(function (error) {
                // console.log(error);
              });
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <Form>
              <div className="form row justify-content-center">
                <div className="text-center form-group ml-2 col-sm-7">
                  <h1>Whiplash Estimate</h1>
                  <p>
                    This is meant to provide an estimate of a reasonable demand
                    to ask for compensation for a whiplash injury using our <a href="https://www.udemy.com/course/representing-yourself-in-a-car-accident-whiplash-claim/?referralCode=00EDADA26CD7B328EA6B">course</a>. We are here
                    to accurately identify your lost wages.
                  </p>
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
                    Time with Attorney in Hours
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
                    Time at Accident in Hours
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
                    Time Renting a Car in Hours
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
                    Hourly Income for Occupation
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
                  <label className="lbl">
                    <b>Total: </b>
                  </label>
                  <div className="form-control">
                    {
                      numberFormat(
                        (1 + (79 - values.age) / 79) *
                          (2 *
                            values.hourlyWage *
                            (Number(values.accidentTime) +
                              Number(values.carRentalTime) +
                              Number(values.attorneyTime) +
                              (((values.rehabEndDate - values.accidentDate) /
                                86400000) *
                                Number(values.rehabTimePerDay) +
                                (Number(values.rehabTravelTime) +
                                  Number(values.timeAtRehabInHours)) *
                                  Number(values.visitsToRehab))))
                      )
                      //do a multipler of the average age of death in the us in 2020 * 2 for double entry of lost opportunites
                    }
                  </div>
                </div>
              </div>
              <div className="form row justify-content-center">
                <div className="form-group ml-2 col-sm-3 mb-2">
                  <sup>
                    *PT means physical therapy
                  </sup>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Calculator;
