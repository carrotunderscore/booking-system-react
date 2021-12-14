import React from "react";
import '../../src/index.css';
import axios from "axios";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import Header from "../components/Header";
import Footer from "../components/Footer";

const schema = yup.object().shape({
    mail: yup.string().required("Mail is required."),
    password: yup.string().min(6).max(40).required("Password is required."),
});

export default function LoginPage() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        console.log(data)
        axios.post("http://localhost:3001/login", data)
            .then(( response) => {
                console.log(response.data)
                if (response.data === "OK") {
                    console.log("Success!")
                    alert("DAMN IT WORKS!")
                }
            })
            .catch(errors => (console.log(errors)))
    }

    return (
        <div className="login-main-div">
            <Header/>
            <div className="login-main-h1">
                <h1>Login</h1>
            </div>
            <form onSubmit={handleSubmit(submitForm)} className="login-form" action="../../post" method="post">
                <div className="mail-div">

                    Mail:
                    <input type="email" name="mail" {...register('mail')} placeholder="Mail..."/>
                    <p className="error-message"> {errors.username?.message}</p>

                    Password:
                    <input type="password"
                           name="password" {...register('password', {required: "You must enter a password."})} />
                    <p className="error-message"> {errors.password?.message}</p>
                </div>

                <input type="submit" value="Submit" className="register-submit"/>


            </form>
        </div>
    )
}