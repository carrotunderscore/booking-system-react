import React from "react";
import '../../src/index.css';
import { useState } from "react";
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';



export default function AdminPage() {
    const [startTime, setStartTime] = useState("00:00");
    const [endTime, setEndTime] = useState("00:00");

    const handleValueChange_startTime = value => {
        console.log(value && value.format('HH:mm:ss'));
        setStartTime(value && value.format('HH:mm:ss'));
    };
    const handleValueChange_endTime = value => {
        console.log(value && value.format('HH:mm:ss'));
        setEndTime(value && value.format('HH:mm:ss'));
    };


    return (
        <div className="admin-main-div">
            <div className="admin-customer-div">
                <h1>ADMIN</h1>
            </div>
            <h1>Book cleaning</h1>
            <div className="admin-booking-div">
                <p>Start-time</p>
                <TimePicker showSecond={false} onChange={handleValueChange_startTime}  />
                <br />
                <p>End-time</p>
                <TimePicker showSecond={false} onChange={handleValueChange_endTime} />
            </div>

            <div className="admin-customer-div">
                <h1>Add customer</h1>
                <label className="register-label">
                    <div className="admin-name-div">
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
            </div>
        </div>
    )
}