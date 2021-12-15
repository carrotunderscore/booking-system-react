import React from 'react';
import {Link, BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styling/colors.css";
import {Route, Routes} from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import RegisterPage from "./pages/RegisterPage";
import BookingPage from "./pages/BookingPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";


export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<LoginPage/>}/>
                <Route exact path="/book" element={<BookingPage/>}/>
                <Route exact path="/admin" element={<AdminPage/>}/>
                <Route exact path="/register" element={<RegisterPage/>}/>
            </Routes>
        </div>
    );
}

