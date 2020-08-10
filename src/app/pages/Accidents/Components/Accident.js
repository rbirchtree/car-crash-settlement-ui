import React, { useState } from "react";
import Moment from "react-moment";
import { numberFormat } from "../../../../utils/numCurrency";

// settlement estitmate
const Accident = (props) => {
  const { setShow } = props;

  function onButtonClick() {
    setShow(false);
  }

  const {
    accidentDate,
    accidentTime,
    visitsToRehab,
    timeAtRehabinhours,
    rehabTravelTime,
    attorneyTime,
    carRentalTime,
    rehabTimePerDay,
    rehabEndDate,
    hourlyWage,
    occupation,
    zipCodeOfAccident,
    insurance,
    age,
    settlementAmt,
    notes,
  } = props.val;

  let numsVisits = parseInt(visitsToRehab);
  let timeAtR = parseInt(timeAtRehabinhours);
  let timeDrivingToR = parseInt(rehabTravelTime);
  let tAtty = parseInt(attorneyTime);
  let tAccident = parseInt(accidentTime);
  let tRentCar = parseInt(carRentalTime);
  let tDoingRPerADay = parseInt(rehabTimePerDay);
  let wage = parseInt(hourlyWage);
  let userAge = parseInt(age);

  const doa = new Date(accidentDate);
  const drif = new Date(rehabEndDate);
  const totalDaysInRehab = (drif - doa) / 86400000;
  console.log(totalDaysInRehab);
  return (
    <ul>
      <li>
        Date of Accident:
        <Moment format="MM/DD/YYYY">{accidentDate}</Moment>
      </li>
      <li>
        Date Rehab is Finished:
        <Moment format="MM/DD/YYYY">{rehabEndDate}</Moment>
      </li>
      <li>Number of Visits to Rehab: {visitsToRehab}</li>
      <li>Hourly Wage for Occupation: ${hourlyWage}</li>
      <li>Occupation: {occupation}</li>
      <li>Age: {age}</li>
      <li>Insurance: {insurance}</li>
      <li>Zip Code of Accident: {zipCodeOfAccident}</li>
      <li>Notes: {notes}</li>
      <li>Gross Settlement Amount: {numberFormat(settlementAmt)}</li>
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
      <button onClick={onButtonClick}>Go Back</button>
    </ul>
  );
};

export default Accident;
