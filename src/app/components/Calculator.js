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
          initialValues={{
            email: "john.doe@gmail.com",
            firstName: "John",
            lastName: "Doe",
            dateOfAccident: new Date(),
            numOfVisitsToRehab: 60,
            timeAtRehabInHours: 1,
            timeDrivingtoRehabPerAVisitRndTrip: 1,
            timeWithAtty: 1,
            timeAtAccident: 2,
            timeRentingACar: 1,
            timeDoingRehabPerADay: 1,
            dateRehabIsFinished: new Date(),
            hourlyWageForOccupation: 40,
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
                    to ask for compensation for a whiplash injury. We are here to
                    accurately identify your lost wages.
                  </p>
                </div>
              </div>
              <div className="form row justify-content-center">
                <div className="form-group ml-2 col-sm-3">
                  <label className="mr-2 lbl" htmlFor="dateOfAccident">
                    Date of Accident
                  </label>
                  <DatePicker
                    selected={values.dateOfAccident}
                    autoFocus
                    dateFormat="MMMM d, yyyy"
                    className="form-control"
                    name="dateOfAccident"
                    onChange={(date) => setFieldValue("dateOfAccident", date)}
                  />
                </div>
                <div className="form-group ml-2 col-sm-3">
                  <label className="mr-2 lbl" htmlFor="dateRehabIsFinished">
                    Date Rehab is Finished
                  </label>
                  <DatePicker
                    selected={values.dateRehabIsFinished}
                    dateFormat="MMMM d, yyyy"
                    className="form-control"
                    name="startDate"
                    onChange={(date) =>
                      setFieldValue("dateRehabIsFinished", date)
                    }
                  />
                </div>
              </div>
              <div className="form row justify-content-center">
                <div className="form-group ml-2 col-sm-3">
                  <label htmlFor="numOfVisitsToRehab">
                    Number of Visits to Physical Therapy
                  </label>
                  <Field
                    type="number"
                    className="form-control"
                    name="numOfVisitsToRehab"
                    value={values.numOfVisitsToRehab}
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
                  <label htmlFor="timeDrivingtoRehabPerAVisitRndTrip">
                    Total Time Going to PT/Visit in Hours<sup>*</sup>
                  </label>
                  <Field
                    type="number"
                    className="form-control"
                    name="timeDrivingtoRehabPerAVisitRndTrip"
                    value={values.timeDrivingtoRehabPerAVisitRndTrip}
                  />
                </div>
                <div className="form-group ml-2 col-sm-3">
                  <label htmlFor="timeDoingRehabPerADay">
                    Time Doing PT at Home/Day in Hours<sup>*</sup>
                  </label>
                  <Field
                    type="number"
                    className="form-control"
                    name="timeDoingRehabPerADay"
                    value={values.timeDoingRehabPerADay}
                  />
                </div>
              </div>
              <div className="form row justify-content-center">
                <div className="form-group ml-2 col-sm-3">
                  <label htmlFor="timeWithAtty">
                    Time with Attorney in Hours<sup>*</sup>
                  </label>
                  <Field
                    type="number"
                    className="form-control"
                    name="timeWithAtty"
                    value={values.timeWithAtty}
                  />
                </div>
                <div className="form-group ml-2 col-sm-3">
                  <label htmlFor="timeAtAccident">
                    Time at Accident in Hours<sup>*</sup>
                  </label>
                  <Field
                    type="number"
                    className="form-control"
                    name="timeAtAccident"
                    value={values.timeAtAccident}
                  />
                </div>
              </div>
              <div className="form row justify-content-center">
                <div className="form-group ml-2 col-sm-3">
                  <label htmlFor="timeRentingACar">
                    Time Renting a Car in Hours<sup>*</sup>
                  </label>
                  <Field
                    type="number"
                    className="form-control"
                    name="timeRentingACar"
                    value={values.timeRentingACar}
                  />
                </div>
                <div className="form-group ml-2 col-sm-3">
                  <label htmlFor="hourlyWageForOccupation">
                    Hourly Income for Occupation<sup>*</sup>
                  </label>
                  <Field
                    type="number"
                    className="form-control"
                    name="hourlyWageForOccupation"
                    value={values.hourlyWageForOccupation}
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
                            values.hourlyWageForOccupation *
                            (Number(values.timeAtAccident) +
                              Number(values.timeRentingACar) +
                              Number(values.timeWithAtty) +
                              (((values.dateRehabIsFinished -
                                values.dateOfAccident) /
                                86400000) *
                                Number(values.timeDoingRehabPerADay) +
                                (Number(
                                  values.timeDrivingtoRehabPerAVisitRndTrip
                                ) +
                                  Number(values.timeAtRehabInHours)) *
                                  Number(values.numOfVisitsToRehab))))
                      )
                      //do a multipler of the average age of death in the us in 2020 * 2 for double entry of lost opportunites
                    }
                  </div>
                </div>
              </div>
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
  }
}

export default Calculator;
