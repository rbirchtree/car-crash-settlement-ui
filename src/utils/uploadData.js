const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCzop2rqm-Tr256wMh8zXOeXvga_4Fo6ps",
  authDomain: "abettersettlement-auth.firebaseapp.com",
  databaseURL: "https://abettersettlement-auth.firebaseio.com",
  projectId: "abettersettlement-auth",
  storageBucket: "abettersettlement-auth.appspot.com",
  messagingSenderId: "695864066807",
  appId: "1:695864066807:web:a91f7224b1118f3f8fc9f2",
  measurementId: "G-RT5KH20LQZ",
});

var db = firebase.firestore();

const { data } = require("./data.js");

data.forEach(function (obj) {
  const {
    id,
    dateofaccident,
    numofvisitstorehab,
    timeatrehabinhours,
    timedrivingtorehabperavisitrndtrip,
    timewithatty,
    timeataccident,
    timerentingacar,
    timedoingrehabperaday,
    daterehabisfinished,
    hourlywageforoccupation,
    occupation,
    zipcodeofaccident,
    insurance,
    age,
    settlementamt,
    notes,
  } = obj;

  db.collection("data")
    .add({
      id,
      dateofaccident,
      numofvisitstorehab,
      timeatrehabinhours,
      timedrivingtorehabperavisitrndtrip,
      timewithatty,
      timeataccident,
      timerentingacar,
      timedoingrehabperaday,
      daterehabisfinished,
      hourlywageforoccupation,
      occupation,
      zipcodeofaccident,
      insurance,
      age,
      settlementamt,
      notes,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
