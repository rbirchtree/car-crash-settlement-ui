import React, { useState, useRef, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { numberFormat } from "../../../utils/numCurrency";
import Accident from "./Components/Accident";
import UploadClaimBTN from "./Components/UploadClaimBTN";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

import DB from "dbFunctions/directConnect/accidentData";

import ModalComp from "app/components/Modal";

import "scss/Tables.scss";

const Accidents = () => {
  const user = useSelector((state) => state.userReducer.user);
  const history = useHistory();

  const [hasError, setErrors] = useState(false);
  const [accident, setAccident] = useState({});
  const [accidents, setAccidents] = useState([]);
  const [privData, setPrivData] = useState([]);
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
      const privData = await DB.getPrivateData();
      const pubData = await DB.getPublicData();
      console.log("pubData", pubData);
      console.log("private Data", privData);
      console.log("privData", privData);
      setPrivData(privData);
      setAccidents(pubData);
    })();
  }, []);

  function clickView(id) {
    let accident = privData[id];

    if (user) {
      setShow(!show);
      if (show) {
        setAccident({});
      } else {
        setAccident(accident);
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
        <td>{accident.zipCodeOfAccident}</td>
        <td>{numberFormat(accident.settlementAmt)}</td>
        <td>{accident.visitsToRehab}</td>
        <td className="text-left">{accident.notes}</td>
        <td>
          <Button color="info" onClick={() => clickView(accident.id)}>
            View
          </Button>
          {user && accident.id === user.uid ? (
            <UploadClaimBTN text="Edit" />
          ) : (
            <></>
          )}
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
          {user ? (
            <UploadClaimBTN type="primary" text="Upload Claim Data" />
          ) : (
            <></>
          )}
          {user && accidents[user.uid] ? (
            <UploadClaimBTN text="Edit Claim Data" />
          ) : (
            <></>
          )}

          <div style={{ overflow: "auto" }}>
            <table className="tablesView">
              <thead>
                <tr>
                  {HeaderItem("zipCodeOfAccident", "ZIP Code")}
                  {HeaderItem("settlementAmt", "Settlement")}
                  {HeaderItem("visitsToRehab", "Visits to Rehab")}
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
