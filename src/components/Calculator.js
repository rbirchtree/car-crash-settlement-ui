import React from 'react';
import { useFormik } from 'formik';
import DatePicker from "./DatePicker";
import "react-datepicker/dist/react-datepicker.css";

const Calculator = () => {

  const formik = useFormik({
    initialValues: {
      email: 'john.doe@gmail.com',
      dateOfAccident:'05/1/2020',
      dateRehabIsFinished: '07/1/2020',
      firstName:'John',
      lastName:'Doe',
      numOfVisitsToRehab:'20',
      timeAtRehabInHours:'1',
      timeDrivingtoRehabPerAVisitRndTrip:'1',
      timeWithAtty:'1',
      timeAtAccident:'2',
      timeRentingACar:'1',
      timeDoingRehabPerADay:'1',
      hourlyWageForOccupation:'25',
      age:'42'
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null,2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <p>{formik.values.timeAtAccident * formik.values.hourlyWageForOccupation}</p>
      <ul>
          <li>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </li>
          <li>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </li>
          <li>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              />
            </li>
            <li>
              <label htmlFor="numOfVisitsToRehab">Number of Visits to Rehab</label>
              <input
                id="numOfVisitsToRehab"
                name="numOfVisitsToRehab"
                type="numOfVisitsToRehab"
                onChange={formik.handleChange}
                value={formik.values.numOfVisitsToRehab}
                />
              </li>
              <li>
              <label htmlFor="timeAtRehabInHours">Time at Rehab in Hours per a visit</label>
              <input
                id="timeAtRehabInHours"
                name="timeAtRehabInHours"
                type="timeAtRehabInHours"
                onChange={formik.handleChange}
                value={formik.values.timeAtRehabInHours}
              />
              </li>
              <li>
                <label htmlFor="timeAtRehabInHours">Time Driving to Rehab per a Visit Roundtrip</label>
                <input
                  id="timeDrivingtoRehabPerAVisitRndTrip"
                  name="timeDrivingtoRehabPerAVisitRndTrip"
                  type="timeDrivingtoRehabPerAVisitRndTrip"
                  onChange={formik.handleChange}
                  value={formik.values.timeDrivingtoRehabPerAVisitRndTrip}
                />
              </li>
              <li>
                <label htmlFor="timeWithAtty">Time with Attorney</label>
                <input
                  id="timeWithAtty"
                  name="timeWithAtty"
                  type="timeWithAtty"
                  onChange={formik.handleChange}
                  value={formik.values.timeWithAtty}
                />
              </li>
              <li>
                <label htmlFor="timeRentingACar">Time Renting a Car</label>
                <input
                  id="timeRentingACar"
                  name="timeRentingACar"
                  type="timeRentingACar"
                  onChange={formik.handleChange}
                  value={formik.values.timeRentingACar}
                />
              </li>
              <li>
                <label htmlFor="timeDoingRehabPerADay">Time Doing Rehab Exercises at Home Per a Day in Hours</label>
                <input
                  id="timeDoingRehabPerADay"
                  name="timeDoingRehabPerADay"
                  type="ttimeDoingRehabPerADay"
                  onChange={formik.handleChange}
                  value={formik.values.timeDoingRehabPerADay}
                />
              </li>
              <li>
                <label htmlFor="hourlyWageForOccupation">Hourly Wage for Occupation</label>
                <input
                  id="hourlyWageForOccupation"
                  name="hourlyWageForOccupation"
                  type="hourlyWageForOccupation"
                  onChange={formik.handleChange}
                  value={formik.values.hourlyWageForOccupation}
                /> 
              </li>  
              <li>
                <label htmlFor="age">Age of Victim</label>
                <input
                  id="age"
                  name="age"
                  type="age"
                  onChange={formik.handleChange}
                  value={formik.values.age}
                /> 
              </li>
          <button type="submit">Submit</button>
      </ul>
    </form>
  );
};

  export default Calculator;