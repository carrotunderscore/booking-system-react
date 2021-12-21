import React from "react";
import '../../src/index.css';
import RegisterForm from "../components/registerForm";
import {Navigate} from "react-router-dom";
import getEmailFromToken from "../utils/CustomerUtils";



export default function RegisterPage() {
    return (
        <div>
            <RegisterForm/>
        </div>
    )
}