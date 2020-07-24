import React from "react";
// settlement estitmate
const Accident = (props) => {
    const {dateofaccident, numofvisitstorehab ,timeatrehabinhours, timedrivingtorehabperavisitrndtrip, timewithatty, timeataccident, timerentingacar, timedoingrehabPeraday, daterehabisfinished, hourlywageforoccupation ,occupation, zipcodeofaccident, insurance, age, settlementamt, notes} = props.val.accident
    
    return (
        <ul >
            <li>{daterehabisfinished}</li>
            <li>{numofvisitstorehab}</li>
            <li>{hourlywageforoccupation}</li>
            <li>{occupation}</li>
            <li>{age}</li>
            <li>{insurance}</li>
            <li>{zipcodeofaccident}</li>
            <li>{notes}</li>
            <li>{settlementamt}</li>
            <li>Estimate</li>
        </ul>
    )
}

export default Accident;