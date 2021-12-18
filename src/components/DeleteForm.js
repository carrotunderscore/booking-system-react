import React from "react";
import '../../src/stylings/deleteForm.css';
import axios from "axios";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

export default function DeleteForm() {

    const schema = yup.object().shape({
        email: yup.string().email().required("Email is required"),
        socialID: yup.number().required("Social ID is required"),
        password: yup.string().min(6).max(40).required("Passwords must be identical"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        const areYouSure = window.confirm('Are you sure you want to delete user?')
        if (areYouSure === true) {
            console.log(data)
            axios.delete(`http://localhost:3001/deleteCustomer/${data.email}`)
                .then(() => {
                    console.log("Success!")
                })
                .catch(errors => (console.log(errors)))
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitForm)} className="delete-form"
                action="../../post" method="post">

                E-mail:
                <input type="text" name="email"
                    {...register('email')} />
                <p className="error-message">{errors.email?.message}</p>

                Personal ID / Company ID:
                <input type="text" name="socialID"
                    {...register('socialID')} />
                <p className="error-message">{errors.socialID?.message}</p>

                Password:
                <input type="password" name="password" className="password-delete"
                    {...register('password', { required: "You must enter a password." })} />
                <p className="error-message">{errors.password?.message}</p>

                <input type="submit" value="Submit" className="delete-submit" />

            </form>
        </div>
    )
}