import React from "react";
import data from "./data.json";
import firebase from "config/firebase";
import { v4 as uuidv4 } from "uuid";

let db = firebase.firestore();
let dataRef = db.collection("accidents");

export default function uploadData() {
  const uploadData = () => {
    console.log("uploading sample data");
    data.forEach((val) => {
      let id = uuidv4();
      let pubData = {
        id: id,
        zipcodeofaccident: val.zipcodeofaccident,
        settlementamt: val.settlementamt,
        numofvisitstorehab: val.numofvisitstorehab,
        notes: val.notes,
      };

      dataRef
        .doc(id)
        .set(pubData)
        .then(function () {
          let data = { ...val };
          data.id = id;
          dataRef.doc(`${id}/data/private`).set(val);
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Test Features/ Misc Items</h1>
      <button onClick={uploadData}>Upload Sample Data</button>
    </div>
  );
}
