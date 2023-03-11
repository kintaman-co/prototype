import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCBMZ6CYngh5WJHJ1WOSVE8apcg76puCUA",
  authDomain: "easytime-4eec6.firebaseapp.com",
  databaseURL: "https://easytime-4eec6-default-rtdb.firebaseio.com",
  projectId: "easytime-4eec6",
  storageBucket: "easytime-4eec6.appspot.com",
  messagingSenderId: "378810746955",
  appId: "1:378810746955:web:ffa936b8aed6a54802e5ce",
};


export const app = initializeApp(firebaseConfig);
