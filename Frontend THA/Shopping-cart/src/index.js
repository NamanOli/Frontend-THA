import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyACMQgM6ohz3aLExcTKaJHdWsEyPho_77M",
    authDomain: "cart-e3981.firebaseapp.com",
    projectId: "cart-e3981",
    storageBucket: "cart-e3981.appspot.com",
    messagingSenderId: "585301107083",
    appId: "1:585301107083:web:e3df3c79242e7730ea8f8e"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
