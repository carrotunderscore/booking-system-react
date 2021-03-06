import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner, Card, Button, Container, Col, Row } from "react-bootstrap";

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

  function hasPaid(paid) {
    if (paid > 0) {
      return "ja";
    }

    return "nej";
  }

  return (
    <div>
      {bookingsList.map((booking, index) => {
        return (
          <div key={booking.booking_id}>
            <Card className="mb-3" style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title>#{booking.booking_id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {formatDate(booking.start_date_time)}
                </Card.Subtitle>
                <Container>
                  <Row>
                    <Col>Adress : {booking.adress}</Col>
                    <Col>Pris : {booking.price}</Col>
                  </Row>

                  <Row>
                    <Col>Typ av Service : {booking.service_type}</Col>
                    <Col>Har betalt : {hasPaid(booking.paid)}</Col>
                  </Row>
                </Container>
                <Card.Text></Card.Text>

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
