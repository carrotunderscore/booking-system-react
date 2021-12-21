import CustomerBookingsPage from "./CustomerBookingsPage";
import axios from "axios";
import { useState, useEffect } from "react";
import getEmailFromToken from "../utils/CustomerUtils";
import { Navigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function HomePage() {
  const customerEmail = getEmailFromToken();

  const [customer, setCustomer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getCustomerByEmail = () => {
    axios
      .post("http://localhost:3001/getcustomer", {
        customerEmail: customerEmail,
      })
      .then((response) => {
        setCustomer(response.data[0]);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getCustomerByEmail();
  }, []);

  if (customerEmail == null) {
    return <Navigate to="/" />;
  }

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <div className="d-flex justify-content-center my-5">
        <Card className="text-center w-50">
          <Card.Header className="background-positive-primary text-color-light ">
            Bokningar
          </Card.Header>
          <Card.Body className="background-secondary  d-flex flex-column align-items-center">
            <h1>{customer.first_name}s bokningar</h1>

            <CustomerBookingsPage customer={customer} />
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
