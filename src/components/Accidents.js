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
              <button 
              className="filterBtn"
              type="button" 
              onClick={() => clickSort('zipcodeofaccident')}
              >
                ZIP Code
              </button>
            </th>
            <th>
              <button
              className="filterBtn" 
              type="button" 
              onClick={() => clickSort('settlementamt')}
              >
                Settlement
              </button>  
            </th>
            <th>
              <button
              className="filterBtn visits" 
              type="button" 
              onClick={() => clickSort('numofvisitstorehab')}
              >
              Visits to Rehab
              </button>  
            </th>
            <th>
              <button
              className="filterBtn" 
              type="button" 
              onClick={() => clickSort('notes')}
              >
                Notes
              </button>  
            </th>
            <th>
              <button
              className="filterBtn"  
              type="button" 
              onClick={() => clickSort('notes')}
              >
                Edit
              </button>  
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
            {accidents.map((accident,index) => (
              <tr key={index}>
                <td>{accident.zipcodeofaccident}</td>
                <td>{numberFormat(accident.settlementamt)}</td>
                <td>{accident.numofvisitstorehab}</td>
                <td className="text-left">{accident.notes}</td>
                {/* <td><Accident id={accident.id}/></td> */}
                <Link to={`data/${accident.id}`}>Edit {accident.id}</Link>
              </tr>
            ))}

        </tbody>
      </table>
    </div>
  );
};
export default Accidents;