import React, { useState, useEffect } from "react";
import { numberFormat } from "./numCurrency";
import Accident from './Accident';
import { Link}  from "react-router-dom";
const Accidents = () => {

  const [hasError, setErrors] = useState(false);
  const [accidents, setAccidents] = useState([]);
  const [filter, setFilter] = useState(false);
  
    
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(process.env.REACT_APP_URL);
      res
        .json()
        .then(res => setAccidents(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  },[]);
  
  function clickSort(val){
    setFilter(!filter)
    let newArr
    if (filter){
      newArr = accidents.sort((a,b) => {
        return a[val] - b[val];
      });
    } else {
      newArr = accidents.sort((a,b) => {
        return b[val] - a[val];
      });
    }
    setAccidents([...newArr]);

  }

  return (
    <div>
      <h1>Car Crash Data</h1>
      <table>
        <thead>
          <tr>
            <th>
              <button type="button" 
              onClick={() => clickSort('zipcodeofaccident')}
              // className={getClassNamesFor('zipcodeofaccident')}
              >
                Zip Code of Accident
              </button>
            </th>
            <th>
              <button 
              type="button" 
              onClick={() => clickSort('settlementamt')}
              // className={getClassNamesFor('settlementamt')}
              >
                Settlement Amount
              </button>  
            </th>
            <th>
              <button 
              type="button" 
              onClick={() => clickSort('numofvisitstorehab')}
              >
              Number of Visits to Rehab
              </button>  
            </th>
            <th>
              <button 
              type="button" 
              onClick={() => clickSort('notes')}
              >
                Notes
              </button>  
            </th>
          </tr>
        </thead>
        <tbody>
            {accidents.map((accident,index) => (
              <tr key={index}>
                <td>{accident.zipcodeofaccident}</td>
                <td>{numberFormat(accident.settlementamt)}</td>
                <td>{accident.numofvisitstorehab}</td>
                <td>{accident.notes}</td>
                <td><Accident id={accident.id}/></td>
              </tr>
            ))}

        </tbody>
      </table>
    </div>
  );
};
export default Accidents;