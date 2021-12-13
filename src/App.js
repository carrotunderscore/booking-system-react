import React from "react";

import {Link, BrowserRouter as Router} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
    console.log("APP");
    return (
        <>
            <div className="App">
                <LoginPage/>
            </div>
        </>
    );
}

