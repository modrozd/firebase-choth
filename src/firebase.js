import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCPYq1IWLPvPaS2qb5zJL2r_rIahh_CQB4",

  authDomain: "choth-386e9.firebaseapp.com",

  projectId: "choth-386e9",

  storageBucket: "choth-386e9.appspot.com",

  messagingSenderId: "388110294487",

  appId: "1:388110294487:web:f19ab13b9d57cc6f20bf92",

  measurementId: "G-GPKHJW6YKJ",
});

export default firebaseConfig;
