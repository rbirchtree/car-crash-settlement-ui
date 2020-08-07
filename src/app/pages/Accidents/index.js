import React, { useState, useRef, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { numberFormat } from "../../../utils/numCurrency";
import Accident from "./Components/Accident";
import { Button } from "reactstrap";

import DB from "dbFunctions/directConnect/accidentData";

import ModalComp from "app/components/Modal";

import "scss/Tables.scss";

const Accidents = () => {
  const user = useSelector((state) => state.userReducer.user);

  const [hasError, setErrors] = useState(false);
  const [accidents, setAccidents] = useState([]);
  const [accident, setAccident] = useState({});
  const [filter, setFilter] = useState(false);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // async function fetchData() {
    //   const res = await fetch(process.env.REACT_APP_URL);
    //   res
    //     .json()
    //     .then((res) => setAccidents(res))
    //     .catch((err) => setErrors(err));
    // }
    // fetchData();

    (async function IIFE() {
      const res = await DB.getAllData();
      console.log("res", res);
      setAccident(res);
    })();
  }, []);

  function clickView(val) {
    if (user) {
      setShow(!show);
      if (show) {
        setAccident({});
      } else {
        setAccident(val);
      }
    } else {
      setOpen(true);
      console.log("you must be logged in to see this");
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

  const ModalBody = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <h4 style={{ color: "red" }}>Error:</h4>
        <div>You must be signed in to see this page</div>
        <Button
          color="danger"
          onClick={() => {
            setOpen(false);
          }}
        >
          Close
        </Button>
      </div>
    );
  };

  if (show) {
    return <Accident show={show} setShow={setShow} val={accident} />;
  } else {
    return (
      <>
        <ModalComp
          open={open}
          handleClose={() => {
            setOpen(false);
          }}
          children={ModalBody()}
        />
        {/* if opereator to return accident component and a callback */}
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
      </>
    );
  }
};
export default connect()(Accidents);
