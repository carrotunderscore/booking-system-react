import axios from "axios";
import {useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";

export default function CustomerBookingsPage({customer}) {
    const [bookingsList, setbookingsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getBookings = async () => {
        axios
            .post("http://localhost:3001/customerbookings", {customerID: customer.customer_id})
            .then((response) => {
                setbookingsList(() => response.data);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        getBookings()
    }, []);


    const deleteBooking = async (bookingID) => {
        axios
            .delete(`http://localhost:3001/deletebooking/${bookingID}`)
            .then(() => {
                getBookings()
            });
    };

    if (isLoading) {
        return <>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </>
    }

    return (
        <div>
            {bookingsList.map((booking, index) => {
                return (
                    <div key={booking.booking_id}>
                        <h1>{booking.customer_id}</h1>
                        <h1>{booking.booking_id}</h1>
                        <button onClick={() => deleteBooking(booking.booking_id)}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
