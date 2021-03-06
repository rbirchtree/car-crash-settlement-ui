import React, { useState, useRef, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { numberFormat } from "../../../utils/numCurrency";
import Accident from "./Components/Accident";
import UploadClaimBTN from "./Components/UploadClaimBTN";
import { Button } from "reactstrap";

import DB from "dbFunctions/directConnect/accidentData";

import ModalComp from "app/components/Modal";
import { lambdaAPIurl as URL } from "config/aws.js";

import axios from "axios";

const Accidents = () => {
  const user = useSelector((state) => state.userReducer.user);
  let history = useHistory();

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

    const getAccidentsEndpoint = `${URL}/accidents`;

    (async function IIFE() {
      axios({
        method: "get",
        url: getAccidentsEndpoint,
      }).then(function (response) {
        console.log("response", response);
        let data = response.data;
        setPrivData(data);
        setAccidents(data);
      });

      // const pubData = await DB.getPublicData();
      // setAccidents(pubData);
      // if (user) {
      //   const privData = await DB.getPrivateData();
      //   setPrivData(privData);
      // }
    })();
  }, []);

  function clickView(id) {
    if (user) {
      history.push(`accidents/${id}`);
    } else {
      setOpen(true);
      console.log("you must be logged in to see this");
    }
  }

  function clickSort(val) {
    let sorted;

    if (typeof accidents[0][val] === "string") {
      sorted = accidents.sort((a, b) => {
        if (!filter) [b, a] = [a, b];
        return a[val].toUpperCase().localeCompare(b[val].toUpperCase());
      });
    } else {
      sorted = accidents.sort((a, b) => {
        if (!filter) [b, a] = [a, b];
        return a[val] - b[val];
      });
    }

    setAccidents(sorted);
    setFilter(!filter);
  }

  const HeaderItem = (param, text) => {
    return (
      <th style={{ cursor: "pointer" }} onClick={() => clickSort(param)}>
        {text}
      </th>
    );
  };

  const TableBody = () => {
    return accidents.map((accident) => {
      return (
        <tr key={accident.id}>
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
      );
    });
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
          <>
            {accidents[user.uid] ? (
              <UploadClaimBTN text="Edit Claim Data" />
            ) : (
              <UploadClaimBTN type="primary" text="Upload Claim Data" />
            )}
          </>
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
                <th>Details</th>
              </tr>
            </thead>
            <tbody className="text-center">{TableBody()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default connect()(Accidents);