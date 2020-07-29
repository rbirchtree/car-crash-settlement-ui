import React from "react";
import Moment from 'react-moment';
import { numberFormat } from "../../../../utils/numCurrency";

// settlement estitmate
const Accident = (props) => {
    const {
      dateofaccident,
      numofvisitstorehab,
      timeatrehabinhours,
      timedrivingtorehabperavisitrndtrip,
      timewithatty,
      timeataccident,
      timerentingacar,
      timedoingrehabperaday,
      daterehabisfinished,
      hourlywageforoccupation,
      occupation,
      zipcodeofaccident,
      insurance,
      age,
      settlementamt,
      notes,
    } = props.val.accident;

    let numsVisits = parseInt(numofvisitstorehab);
    let timeAtR = parseInt(timeatrehabinhours);
    let timeDrivingToR = parseInt(timedrivingtorehabperavisitrndtrip);
    let tAtty = parseInt(timewithatty);
    let tAccident = parseInt(timerentingacar);
    let tRentCar = parseInt(timerentingacar);
    let tDoingRPerADay = parseInt(timedoingrehabperaday);
    let wage = parseInt(hourlywageforoccupation)
    let userAge = parseInt(age);
    
    const doa = new Date(dateofaccident);
    const drif = new Date(daterehabisfinished);
    const totalDaysInRehab = (drif-doa)/86400000;
    console.log(totalDaysInRehab)
    return (
      <ul>
        <li>
          Date of Accident:
          <Moment format="MM/DD/YYYY">{dateofaccident}</Moment>
        </li>
        <li>
          Date Rehab is Finished:
          <Moment format="MM/DD/YYYY">{daterehabisfinished}</Moment>
        </li>
        <li>Number of Visits to Rehab: {numofvisitstorehab}</li>
        <li>Hourly Wage for Occupation: ${hourlywageforoccupation}</li>
        <li>Occupation: {occupation}</li>
        <li>Age: {age}</li>
        <li>Insurance: {insurance}</li>
        <li>Zip Code of Accident: {zipcodeofaccident}</li>
        <li>Notes: {notes}</li>
        <li>Gross Settlement Amount: {numberFormat(settlementamt)}</li>
        <li>
          Estimate Using Formula:
          {numberFormat(
            (1 + (79 - userAge) / 79) *
              (wage *
              2) *
              (tAtty +
                tAccident +
                tRentCar +
                (totalDaysInRehab * tDoingRPerADay +
                  (timeDrivingToR + timeAtR) * numsVisits))
          )}
        </li>
      </ul>
    );
}

export default Accident;