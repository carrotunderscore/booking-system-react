import React from "react";
import '../../src/index.css';
import { useState } from "react";
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import axios from "axios";
import RegisterForm from "../components/registerForm";
import BookCleaning from "../components/bookCleaning";
import DeleteForm from "../components/DeleteForm";





export default function AdminPage() {

    const [showRegister, setShowRegister] = React.useState(false)
    const onClickRegister = () => {
        if(showRegister === true){setShowRegister(false)} 
        else{setShowRegister(true)}
    }
    const [showDelete, setShowDelete] = React.useState(false)
    const onClickDelete = () => {
        if(showDelete === true){setShowDelete(false)}
        else{setShowDelete(true)}
    }
    const [showBooking, setShowBooking] = React.useState(false)
    const onClickBooking = () => {
        if(showBooking === true){setShowBooking(false)}
        else{setShowBooking(true)}
    }

    return (
        <div className="admin-main-div">
            <div className="register-customer-div">
                <h1>Register customer</h1>
                <input type="submit" value="show-register" onClick={onClickRegister} />
                {showRegister !== false ? <RegisterForm /> : null}
                
            </div>
            <div className="delete-customer-div">
                <h1>Delete customer</h1>
                <input type="submit" value="show-register" onClick={onClickDelete} />
                {showDelete !== false ? <DeleteForm /> : null}
                
            </div>
            <div className="book-customer-div">
                <h1>Book customer</h1>
                <input type="submit" value="show-booking" onClick={onClickBooking} />
                {showBooking !== false ? <BookCleaning /> : null}
            </div>
        </div>
    )
}