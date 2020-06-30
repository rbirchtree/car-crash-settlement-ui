import React, { useState, useEffect, useMemo } from "react";



const Planets = () => {

  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState([]);


    //get data loaded
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(process.env.REACT_APP_URL);
      res
        .json()
        .then(res => setPlanets(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  },[]);
  
  
  return (

      <table>
        <caption>Our Car Accidents</caption>
        <thead>
          <tr>
            <th>
              <button type="button" 
              // onClick={() => requestSort('zipcodeofaccident')}
              // className={getClassNamesFor('zipcodeofaccident')}
              >
                zipcodeofaccident
              </button>
            </th>
            <th>
              <button 
              type="button" 
              // onClick={() => requestSort('settlementamt')}
              // className={getClassNamesFor('settlementamt')}
              >
                Settlement
              </button>  
            </th>
            <th>
              <button 
              type="button" 
              // onClick={() => requestSort('numofvisitstorehab')}
              // className={getClassNamesFor('numofvisitstorehab')}
              >
              numofvisitstorehab
              </button>  
            </th>
          </tr>
        </thead>
        <tbody>
            {planets.map((planet,index) => (
              <tr key={index}>
                <td>{planet.zipcodeofaccident}</td>
                <td>{planet.settlementamt}</td>
                <td>{planet.numofvisitstorehab}</td>
              </tr>
            ))}

        </tbody>
      </table>
    
  );
};
export default Planets;