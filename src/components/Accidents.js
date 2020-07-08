import React, { useState, useEffect } from "react";
import { numberFormat } from "./numCurrency";

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

      <table>
        <caption>Car Accidents Data</caption>
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
              Number of Visitis to Rehab
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
              </tr>
            ))}

        </tbody>
      </table>
    
  );
};
export default Accidents;