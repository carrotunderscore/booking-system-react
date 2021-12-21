import React from "react";
import '../../src/stylings/registerForm.css';
import axios from "axios";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

export default function RegisterForm() {

    const schema = yup.object().shape({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        email: yup.string().email().required("Email is required"),
        phoneNumber: yup.number().test('len', 'Max 6 numbers', (val) => val.toString().length <= 10).required(),
        socialID: yup.number().required("Social ID is required"),
        companyName: yup.string(),
        address: yup.string().required("Address is required"),
        password: yup.string().min(6).max(40).required("Passwords must be identical"),
        repeatPassword: yup.string().oneOf([yup.ref("password"), null], 'Passwords must match'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        console.log(data)
        axios.post("http://localhost:3001/registerCustomer", data)
            .then(() => {
                console.log("Success!")
            })
            .catch(errors => (console.log(errors)))
    }

    return (
        <div className="register-main-div">
            <form onSubmit={handleSubmit(submitForm)} className="register-form"
                action="../../post" method="post">
                <h1>Registrera</h1>
                <div className="name-div">
                    <p>Förnamn:</p>
                    <input className="register-form-field" type="text" name="firstName"
                        {...register('firstName')} placeholder="First Name..." />
                    <p className="error-message">{errors.firstName?.message}</p>

                    <p>Efternamn:</p>
                    <input className="register-form-field" type="text" name="lastName"
                        {...register('lastName')} />
                    <p className="error-message">{errors.lastName?.message}</p>

                    <p>E-mail:</p>
                    <input className="register-form-field" type="text" name="email"
                        {...register('email')} />
                    <p className="error-message">{errors.email?.message}</p>

                    <p>Telefon-nummer:</p>
                    <input className="register-form-field" type="text" name="phoneNumber"
                        {...register('phoneNumber')} />
                    <p className="error-message">{errors.phoneNumber?.message}</p>

                    <p>Personnummer / Organisations-nummer:</p>
                    <input className="register-form-field" type="text" name="socialID"
                        {...register('socialID')} />
                    <p className="error-message">{errors.socialID?.message}</p>

                    <p>Lösenord:</p>
                    <input className="register-form-field" type="password" name="password"
                        {...register('password', { required: "You must enter a password." })} />
                    <p className="error-message">{errors.password?.message}</p>

                    <p>Upprepa lösenord:</p>
                    <input className="register-form-field" type="password" name="repeatPassword"
                        {...register('password', { required: "Passwords must be identical." })} />
                    <p className="error-message">{errors.confirmPassword && "Passwords must be identical"}</p>

                    <p>Företags-namn (Valfritt):</p>
                    <input className="register-form-field" type="text" name="companyName"
                        {...register('companyName')} />
                    <br/>
                    <p>Address:</p>
                    <input className="register-form-field" type="text" name="address"
                        {...register('address')} />
                    <p className="error-message">{errors.address?.message}</p>

                    <p>Kund-typ</p>
                    <select className="customerType" name="customerType" id="customer-type"
                        {...register('customerType')}>
                        <option value="0">Företag</option>
                        <option value="1">Privat</option>
                    </select>
                    <p>{errors.customerType?.message}</p>

                    <input type="submit" value="Submit" className="register-submit" />
                </div>

            </form >
        </div>
    )

}