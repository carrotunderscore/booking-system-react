import React from "react";
import '../../src/index.css';
import { useState } from "react";
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import axios from "axios";



const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email().required("Email is required"),
    phoneNumber: yup.number().required("Email is required"),
    socialID: yup.number().required("Social ID is required"),
    company: yup.string(),
    companyID: yup.number(),
    address: yup.string().required("Address is required"),
});

export default function AdminPage() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = async (data) => {
        if (startTime === null || endTime === null) {
            alert("You must pick a time")
        }
        else {
            const timeAddedToData = { ...data, ...{ ['startTime']: startTime, ["endTime"]: endTime } };

            const test = ["Robert"]
            console.log(timeAddedToData)
            axios.post("http://localhost:3001/bookCustomer", timeAddedToData)
                .then(() => {
                    console.log("Success!")
                })
                .catch(errors => (console.log(errors)))
        }
    }

    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const handleValueChange_startTime = value => {
        console.log(value && value.format('HH:mm:ss'));
        setStartTime(value && value.format('HH:mm:ss'));
    };
    const handleValueChange_endTime = value => {
        console.log(value && value.format('HH:mm:ss'));
        setEndTime(value && value.format('HH:mm:ss'));
    };

    //console.log(startTime);
    //console.log(endTime);

    return (
        <div className="admin-main-div">
            <form onSubmit={handleSubmit(submitForm)} >
                <div className="admin-customer-div">
                    <h1>ADMIN</h1>
                </div>
                <h1>Book cleaning</h1>
                <div className="admin-booking-div">
                    <p>Start-time</p>
                    <TimePicker autoComplete="off" name="startTimeForm" showSecond={false} onChange={handleValueChange_startTime} />

                    <p>End-time</p>
                    <TimePicker autoComplete="off" name="endTimeForm" showSecond={false} onChange={handleValueChange_endTime} />
                </div>

                <div className="admin-customer-div">
                    <h1>Book customer</h1>
                    <label className="register-label">
                        <div className="admin-name-div">

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

                            Address:
                            <input type="text" name="address"
                                {...register('address')} />
                            <p className="error-message">{errors.address?.message}</p>

                            Social ID:
                            <input type="text" name="socialID"
                                {...register('socialID')} />
                            <p className="error-message">{errors.socialID?.message}</p>

                            Company (Optional):
                            <input type="text" name="Company"
                                {...register('Company')} />
                            <p className="error-message">{errors.Company?.message}</p>

                            Organization ID (Optional):
                            <input type="text" name="companyID"
                                {...register('companyID')} />
                            <p className="error-message">{errors.companyID?.message}</p>

                        </div>
                    </label>
                </div>
                <input type="submit" value="Submit" className="admin-submit"/>
            </form>
        </div>
    )
}