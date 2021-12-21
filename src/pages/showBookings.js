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
        axios.get("http://localhost:3001/getBookings")
        .then((response) => {
            setbookingsList(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    };

    return (
        <div className="bookings-main-div">
            <button onClick={getBookings}>Visa bokningar</button>
            {bookingsList.map((booking, index) => {
                return (
                    <div className="customer-bookings-div">
                      
                        <div className="customer-bookings-box">
                            <h3 className="booking-field" >Namn: {booking.first_name + " " + booking.last_name}</h3>
                            <h4 className="booking-field">Adress: {booking.adress}</h4>
                            <h4 className="booking-field">Datum: {
                            booking.start_date_time.split("T").map((line, index) => (
                                (index === 1) ? 
                                <div>{line.substr(0, 5)}</div> :
                                <div>{line.substr(0, 10)}</div>
                            ))}</h4>
                            
                            <h4 className="booking-field">E-mail: {booking.mail}</h4>
                            <h4 className="booking-field">Service: {booking.service_type}</h4>
                            <h4 className="booking-field">Pris: {booking.price} KR</h4>
                            <h4 className="booking-field"> Meddelande: {booking.message}</h4>

                            <h4 className="booking-field">Status: {
                            (booking.status === 1) ? 
                            <div> Färdig </div> :
                            <div> Inte påbörjad</div>
                            }</h4>

                            <h4 className="booking-field">{
                                (booking.is_company === 0) ?
                                    <div className="alert alert-danger" role="alert">
                                        Kund-type: Privat
                                    </div> :
                                    <div> Kund-type: Företag
                                        <h4>Organisations-nummer: {booking.org_number}</h4>
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