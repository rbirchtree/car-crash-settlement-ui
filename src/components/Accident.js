import React from "react";
// settlement estitmate
const Accident = (props) => {
    const {dateOfAccident, numOfVisitsToRehab ,timeAtRehabInHours, timeDrivingtoRehabPerAVisitRndTrip, timeWithAtty, timeAtAccident, timeRentingACar, timeDoingRehabPerADay, dateRehabIsFinished, hourlyWageForOccupation ,occupation, zipCodeOfAccident, insurance, age, settlementAmt, notes} = props.val.accident
    
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

export default Accident;