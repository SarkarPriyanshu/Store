import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// {
//   apiKey: "AIzaSyBFhz-c1iKn7_op2gvijlg-hfGRLyxYW60",
//   authDomain: "store-3af6a.firebaseapp.com",
//   projectId: "store-3af6a",
//   storageBucket: "store-3af6a.appspot.com",
//   messagingSenderId: "336010865678",
//   appId: "1:336010865678:web:e527e8df16c42aedfb605f",
//   measurementId: "G-RTSCLE719E"
// };
