import React from "react";
import ReactDOM from 'react-dom';
import '../../src/index.css';


// Add to database ------------------------------------------------

export default function RegisterPage() {
    function handleSubmit() {
        alert("HEJHEJ")
    }
    return (
        <div className="register-main-div">
            <div className="register-main-h1">
                <h1>Register</h1>
            </div>
            <form onSubmit={handleSubmit} className="register-form">
                <label className="register-label">
                    <div className="name-div">
                        First name:
                        <input type="text" />
                        <br /><br />
                        Last name:
                        <input type="text" />
                        <br /><br />
                        E-mail:
                        <input type="text" />
                        <br /><br />
                        Personal ID / Company ID:
                        <input type="text" />
                        <br /><br />
                    </div>
                </label>
                <label>
                    <div className="company-div">
                        Password:
                        <input type="password" />
                        <br /><br />
                        Repeat password:
                        <input type="password" />
                        <br /><br />
                        Company name (Optional):
                        <input type="text" />
                        <br /><br />
                        Address:
                        <input type="text" />
                        <br /><br />
                        Customer type:
                        <input type="text" />
                        <br /><br />
                    </div>
                </label>
                <label className="checkbox">I agree to the terms
                    <input type="checkbox" />
                    <span></span>
                </label>
                <input type="submit" value="Submit" />
            </form >
        </div>

    )
}