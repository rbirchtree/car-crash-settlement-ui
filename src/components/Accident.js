import React from "react";
// settlement estitmate
const Accident = (props) => {
    const {dateOfAccident, numOfVisitsToRehab ,timeAtRehabInHours, timeDrivingtoRehabPerAVisitRndTrip, timeWithAtty, timeAtAccident, timeRentingACar, timeDoingRehabPerADay, dateRehabIsFinished, hourlyWageForOccupation ,occupation, zipCodeOfAccident, insurance, age, settlementAmt, notes} = props.val.accident
    
    console.log('props this is it.',props.val.accident.id)
    return (
        <ul >
            <li>{dateRehabIsFinished}</li>
            <li>{numOfVisitsToRehab}</li>
            <li>{hourlyWageForOccupation}</li>
            <li>{occupation}</li>
            <li>{age}</li>
            <li>{insurance}</li>
            <li>{zipCodeOfAccident}</li>
            <li>{notes}</li>
            <li>{settlementAmt}</li>
            <li>Estimate</li>
        </ul>
    )
}

// date of accident,, date rehab is finished, num of visits to rehab
//  hourly wage for occupation, occupation, settlementmat, notes, insurance
// zipcode of accident, age
// INSERT INTO USERDATA (dateOfAccident, numOfVisitsToRehab ,timeAtRehabInHours,
//      timeDrivingtoRehabPerAVisitRndTrip, 
//     timeWithAtty, timeAtAccident, timeRentingACar, 
//     timeDoingRehabPerADay, dateRehabIsFinished, 
//     hourlyWageForOccupation ,occupation,
//     zipCodeOfAccident, insurance, age, settlementAmt,notes)
//     VALUES ('4/14/2018', 16, 1,1,1,2,1,1,'04/14/18',8,'Retired',78634, 'ACME', 83, 5000,'He was hit by a van while parked'); 
export default Accident;