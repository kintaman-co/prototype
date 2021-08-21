import firebase from "firebase/app";
import "firebase/auth"; // If you need it

const firebaseConfig = {
  apiKey: "AIzaSyCBMZ6CYngh5WJHJ1WOSVE8apcg76puCUA",
  authDomain: "easytime-4eec6.firebaseapp.com",
  databaseURL: "https://easytime-4eec6-default-rtdb.firebaseio.com",
  projectId: "easytime-4eec6",
  storageBucket: "easytime-4eec6.appspot.com",
  messagingSenderId: "378810746955",
  appId: "1:378810746955:web:ffa936b8aed6a54802e5ce",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
