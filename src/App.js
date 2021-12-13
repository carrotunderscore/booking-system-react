import React from "react";

import {Link, BrowserRouter as Router} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <div className="App">
      <h1>HEJ FRÅN APP.JS</h1>
      <LoginPage/> 
    </div>
  );
}

