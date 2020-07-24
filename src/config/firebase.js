import * as firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCzop2rqm-Tr256wMh8zXOeXvga_4Fo6ps",
  authDomain: "abettersettlement-auth.firebaseapp.com",
  databaseURL: "https://abettersettlement-auth.firebaseio.com",
  projectId: "abettersettlement-auth",
  storageBucket: "abettersettlement-auth.appspot.com",
  messagingSenderId: "695864066807",
  appId: "1:695864066807:web:a91f7224b1118f3f8fc9f2",
  measurementId: "G-RT5KH20LQZ",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
