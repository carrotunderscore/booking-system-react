import React from "react";
import "./App.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  console.log("APP");
  return (
    <div className="App">
      <h1>HEJ FRÅN APP.JS</h1>
      <RegisterPage></RegisterPage>
    </div>
  );
}
