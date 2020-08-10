import firebase from "config/firebase";

let dataRef = firebase.firestore().collection("accidents");

const getPublicData = () => {
  return dataRef
    .get()
    .then(function (querySnapshot) {
      //! More than likely will need to be returned as an object
      let data = {};
      // let data = [];
      querySnapshot.forEach(function (doc) {
        data[doc.id] = doc.data();
        // data.push(doc.data());
      });
      return data;
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

const getPrivateData = () => {
  return dataRef
    .get()
    .then(function (querySnapshot) {
      let data = {};
      // let data = [];
      querySnapshot.forEach(async (doc) => {
        let privDoc = await dataRef.doc(`${doc.id}/data/private`).get();
        data[doc.id] = privDoc.data();
        // data.push(privDoc.data());
      });
      return data;
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

const getDataById = (id) => {
  return dataRef
    .doc(id)
    .get()
    .then((doc) => {
      return doc.data();
    })
    .catch((error) => {
      console.log("Error getting cached document:", error);
      return;
    });
};

const addData = (data, userId) => {
  let { zipCodeOfAccident, settlementAmt, visitsToRehab, notes } = data;

  let pubData = {
    id: userId,
    zipCodeOfAccident,
    settlementAmt,
    visitsToRehab,
    notes,
  };

  dataRef
    .doc(userId)
    .set(pubData)
    .then(function () {
      let privData = { ...data };
      privData.id = userId;
      dataRef.doc(`${userId}/data/private`).set(privData);
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
};

export default {
  getPublicData,
  getPrivateData,
  getDataById,
  addData,
};
