import firebase from "config/firebase";

let dataRef = firebase.firestore().collection("data");

const getAllData = () => {
  return dataRef
    .get()
    .then(function (querySnapshot) {
      let data = {};
      querySnapshot.forEach(function (doc) {
        data[doc.id] = doc.data();
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

export default {
  getAllData,
  getDataById,
};
