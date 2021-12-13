import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styling/colors.css";
import AdminPage from "./pages/AdminPage";
import RegisterPage from "./pages/RegisterPage";
import BookingPage from "./pages/BookingPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <div className="App">
      {/*<h1>HEJ FRÅN APP.JS</h1>*/}
      {/*<LoginPage/>*/}
        <BookingPage/>
    </div>
  );
}

