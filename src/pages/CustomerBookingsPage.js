import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner, Card, Button } from "react-bootstrap";

export default function CustomerBookingsPage({ customer }) {
  const [bookingsList, setbookingsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getBookings = async () => {
    axios
      .post("http://localhost:3001/customerbookings", {
        customerID: customer.customer_id,
      })
      .then((response) => {
        setbookingsList(() => response.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getBookings();
  }, []);

  const deleteBooking = async (bookingID) => {
    axios
      .delete(`http://localhost:3001/deletebooking/${bookingID}`)
      .then(() => {
        getBookings();
      });
  };

  if (isLoading) {
    return (
      <>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </>
    );
  }
  function formatDate(date) {
    const sliceDate = date.slice(0, 10) + " " + date.slice(11, 19);
    /* console.log(sliceDate); */
    return sliceDate;
  }
  return (
    <div>
      {bookingsList.map((booking, index) => {
        return (
          <div key={booking.booking_id}>
            <Card className="mb-3" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>#{booking.booking_id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {formatDate(booking.start_date_time)}
                </Card.Subtitle>
                <Card.Text>
                  Adress : {booking.adress}
                  <br />
                  Pris : {booking.price}
                  <br />
                  Typ av Service : {booking.service_type}
                </Card.Text>
                <Button
                  variant="danger"
                  onClick={() => deleteBooking(booking.booking_id)}
                  style={{
                    backgroundColor: "#AD5A4E",
                  }}
                >
                  Avboka
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
