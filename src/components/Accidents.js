import React, { useState, useEffect } from "react";
import { numberFormat } from "./numCurrency";
import Accident from "./Accident";
import { Button } from "reactstrap";

import "scss/Tables.scss";

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
        .then((res) => setAccidents(res))
        .catch((err) => setErrors(err));
    }

    fetchData();
  }, []);

  function clickView(val) {
    console.log(val);

    setShow(!show);
    if (show) {
      setAccident({});
    } else {
      setAccident(val);
    }
  }

  function clickSort(val) {
    setFilter(!filter);
    let newArr;
    if (filter) {
      newArr = accidents.sort((a, b) => {
        return a[val] - b[val];
      });
    } else {
      newArr = accidents.sort((a, b) => {
        return b[val] - a[val];
      });
    }
    setAccidents([...newArr]);
  }

  const HeaderItem = (param, text) => {
    return (
      <th style={{ cursor: "pointer" }} onClick={() => clickSort(param)}>
        {text}
      </th>
    );
  };

  const TableBody = () => {
    return accidents.map((accident, index) => (
      <tr key={index}>
        <td>{accident.zipcodeofaccident}</td>
        <td>{numberFormat(accident.settlementamt)}</td>
        <td>{accident.numofvisitstorehab}</td>
        <td className="text-left">{accident.notes}</td>
        <td>
          <Button color="info" onClick={() => clickView({ accident })}>
            View
          </Button>
        </td>
      </tr>
    ));
  };

  if (show) {
    return <Accident val={accident} />;
  } else {
    return (
      // if opereator to return accident component and a callback
      <div style={{ textAlign: "center" }}>
        <h1>Car Crash Data</h1>
        <div style={{ overflow: "auto" }}>
          <table className="tablesView">
            <thead>
              <tr>
                {HeaderItem("zipcodeofaccident", "ZIP Code")}
                {HeaderItem("settlementamt", "Settlement")}
                {HeaderItem("numofvisitstorehab", "Visits to Rehab")}
                {HeaderItem("notes", "Notes")}
                {HeaderItem("notes", "Details")}
              </tr>
            </thead>
            <tbody className="text-center">{TableBody()}</tbody>
          </table>
        </div>
      </div>
    );
  }
};
export default Accidents;
