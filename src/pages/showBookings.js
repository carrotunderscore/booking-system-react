import React from "react";
import '../stylings/showBookings.css';
import { useState } from "react";
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ShowBookings() {

    const [bookingsList, setbookingsList] = useState([]);

    const getBookings = () => {
        axios.get("http://localhost:3001/getBookings").then((response) => {
            setbookingsList(response.data)
            console.log(response.data);
        });
    };

    return (
        <div className="bookings-main-div">
            <button onClick={getBookings}>Show bookings</button>
            {bookingsList.map((booking, index) => {
                return (
                    <div className="customer-bookings-div">
                      
                        <div className="customer-bookings-box">
                            <h3>Name: {booking.first_name + " " + booking.last_name}</h3>
                            <h4>Adress: {booking.adress}</h4>
                            <h4>Date: {booking.start_date_time}</h4>
                            <h4>E-mail: {booking.mail}</h4>
                            <h4>Service: {booking.service_type}</h4>
                            <h4>Price: {booking.price} KR</h4>
                            <h4>Message: {booking.message}</h4>

                            <h4>Status: {booking.status}</h4>

                            <h4>{
                                (booking.is_company === 0) ?
                                    <div className="alert alert-danger" role="alert">
                                        Customer-type: Private
                                    </div> :
                                    <div> Customer-type: Company
                                        <h4>Organisation-number: {booking.org_number}</h4>
                                    </div>
                                }
                            </h4>


                        </div>
                    </div>
                )
            })}
        </div>
    )
}