import axios from "axios";
import { useState } from "react";

export default function CustomerBookingsPage() {
  const [bookingsList, setbookingsList] = useState([]);

  const getBookings = () => {
    axios
      .post("http://localhost:3001/customerbookings", { customerID: "12345" })
      .then((response) => {
        setbookingsList(response.data);
        console.log(bookingsList);
      });
  };

  const deleteBooking = (bookingID) => {
    axios
      .delete(`http://localhost:3001/deletebooking/${bookingID}`)
      .then((response) => {
        getBookings();
      });
  };

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
      <button onClick={getBookings}>show Booking</button>
    </div>
  );
}
