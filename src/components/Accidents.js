import React, { useState, useEffect } from "react";
import { numberFormat } from "./numCurrency";
import Accident from './Accident';
const Accidents = () => {

  const [hasError, setErrors] = useState(false);
  const [accidents, setAccidents] = useState([]);
  const [accident, setAccident] = useState({});
  const [filter, setFilter] = useState(false);
  const [show, setShow] = useState(false);
    
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
  
  function clickView(val){
    console.log(val)
    
    setShow(!show)
    if (show){
      setAccident({})
    } else {
      setAccident(val)
    }
  }

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
  
  if (show){
    
    return (<Accident val={accident} />)
  } else {
    return (
      // if opereator to return accident component and a callback
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
                  Detail View
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
                  <button onClick={() => clickView({accident})}>Detail View</button>
                </tr>
              ))}
  
          </tbody>
        </table>
      </div>
    );
  }
  
};
export default Accidents;