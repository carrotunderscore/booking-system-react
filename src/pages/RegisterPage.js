import React from "react";
import '../../src/index.css';
import axios from "axios";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";


const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email().required("Email is required"),
    phoneNumber: yup.number().required("Email is required"),
    socialID: yup.number().required("Social ID is required"),
    address: yup.string().required("Address is required"),
    password: yup.string().min(6).max(40).required("Passwords must be identical"),
    repeatPassword: yup.string().oneOf([yup.ref("password"), null], 'Passwords must match'),
});

export default function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        console.log(data)
        axios.post("http://localhost:3001/registerCustomer", data )
            .then(() => {
                console.log("Success!")
            })
            .catch(errors => (console.log(errors)))
    }

    return (
        <div className="register-main-div">
            <div className="register-main-h1">
                <h1>Register</h1>
            </div>
            <form onSubmit={handleSubmit(submitForm)} className="register-form"
                action="../../post" method="post">
                <div className="name-div">
                    First name:
                    <input type="text" name="firstName"
                        {...register('firstName')} placeholder="First Name..." />
                    <p className="error-message">{errors.firstName?.message}</p>

                    Last name:
                    <input type="text" name="lastName"
                        {...register('lastName')} />
                    <p className="error-message">{errors.lastName?.message}</p>

                    E-mail:
                    <input type="text" name="email"
                        {...register('email')} />
                    <p className="error-message">{errors.email?.message}</p>

                    Phone number:
                    <input type="text" name="phoneNumber"
                        {...register('phoneNumber')} />
                    <p className="error-message">{errors.phoneNumber?.message}</p>

                    Personal ID / Company ID:
                    <input type="text" name="socialID"
                        {...register('socialID')} />
                    <p className="error-message">{errors.socialID?.message}</p>

                </div>
                <div className="company-div">
                    Password:
                    <input type="password" name="password"
                        {...register('password', { required: "You must enter a password." })} />
                    <p className="error-message">{errors.password?.message}</p>

                    Repeat password:
                    <input type="password" name="repeatPassword"
                        {...register('password', { required: "Passwords must be identical." })} />
                    <p className="error-message">{errors.confirmPassword && "Passwords must be identical"}</p>

                    Company name (Optional):
                    <input type="text" name="companyName" />

                    Address:
                    <input type="text" name="address"
                        {...register('address')} />
                    <p className="error-message">{errors.address?.message}</p>

                    Customer-type
                    <select name="customerType" id="customer-type"
                        {...register('customerType')}>
                        <option value="0">Company</option>
                        <option value="1">Private</option>
                    </select>
                    <p>{errors.customerType?.message}</p>

                    <input type="submit" value="Submit" className="register-submit"/>
                </div>

            </form >
        </div>
    )
}