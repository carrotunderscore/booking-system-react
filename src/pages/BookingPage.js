import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import {FloatingLabel, Form} from "react-bootstrap";
import axios from "axios";

export default function BookingPage() {
    const {minDate, maxDate} = getMinAndMaxDate();

    const customerID = "0"; //TODO: Gör så kundid hämtas från databasen eller token
    const [dateTimeSelected, setDateTimeSelected] = useState("");
    const [customerAdress, setCustomerAdress] = useState("");
    const [serviceType, setServiceType] = useState({value: "basic"});
    const [customerMessage, setCustomerMessage] = useState("");
    const [price, setPrice] = useState("2000");

    function handleServiceTypeChange(e) {
        setServiceType({value: e.target.value});
        switch (e.target.value) {
            case "window":
                setPrice("1000")
                break;
            case "basic":
                setPrice("2000")
                break;
            case "top":
                setPrice("3000")
                break;
            case "diamond":
                setPrice("4000")
                break;
            default:
                break;

        }
    }

    function handleDateTime(dateTime) {
        const sqlDateTime = formatToSqlDateTime(dateTime);

        setDateTimeSelected(sqlDateTime);
    }

    function handleSubmit(e) {
        e.preventDefault();

        axios
            .post("http://localhost:3001/bookcleaning", {
                customerID: customerID,
                startDateTime: dateTimeSelected,
                adress: customerAdress,
                serviceType: serviceType.value,
                price: price,
                message: customerMessage,
            })
            .then((result) => {
                alert(result.data);
            }).catch(e => console.log(e));
    }

    return (
        <>
            <div className="d-flex justify-content-center my-5">
                <Card className="text-center w-50">
                    <Card.Header className="background-positive-primary text-color-light">
                        Booking
                    </Card.Header>
                    <Card.Body className="background-secondary d-flex flex-column align-items-center">
                        <Form
                            onSubmit={handleSubmit}
                            className="w-50 justify-content-center"
                        >
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicCustomerID"
                            >
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="KundID"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="KundID"
                                        className="text-color-dark"
                                        value={customerID}
                                        disabled
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group
                                className="mb-2"
                                controlId="formBasicDate"
                            >
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Datum"
                                >
                                    <Form.Control
                                        type="datetime-local"
                                        placeholder="Date"
                                        className="text-color-dark"
                                        onChange={(event) =>
                                            handleDateTime(event.target.value)
                                        }
                                        min={
                                            minDate.toLocaleDateString(
                                                "se-SE"
                                            ) + "T00:00"
                                        }
                                        max={
                                            maxDate.toLocaleDateString(
                                                "se-SE"
                                            ) + "T23:59"
                                        }
                                        required
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicAdress"
                            >
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Adress"
                                    className="text-color-dark"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Adress"
                                        onChange={(e) =>
                                            setCustomerAdress(e.target.value)
                                        }
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicSelect"
                            >
                                <FloatingLabel
                                    controlId="floatingSelect"
                                    className="text-color-dark"
                                    label="Service"
                                >
                                    <Form.Select
                                        value={serviceType.value}
                                        aria-label="Service"
                                        className="text-color-dark"
                                        onChange={handleServiceTypeChange}
                                    >
                                        <option value="window">
                                            Fönstertvätt (1h)
                                        </option>
                                        <option value="basic">
                                            Basic städning (2h)
                                        </option>
                                        <option value="top">
                                            Top städning (3h)
                                        </option>
                                        <option value="diamond">
                                            Diamant städning (4h)
                                        </option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group>
                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    className="text-color-dark"
                                    label="Meddelande"
                                >
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Lämna ett meddelande här"
                                        style={{height: "100px"}}
                                        onChange={(e) =>
                                            setCustomerMessage(e.target.value)
                                        }
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Card.Subtitle className="mt-3 text-color-dark">Price: {price}</Card.Subtitle>
                            <Form.Group>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="background-positive-secondary mt-3"
                                >
                                    BOKA STÄDNING
                                </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

function formatToSqlDateTime(dateTimeSelected) {
    return dateTimeSelected.slice(0, 10) + " " + dateTimeSelected.slice(11, 16);
}

function getMinAndMaxDate() {
    const today = new Date();
    const minDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 2
    );
    const maxDate = new Date(
        minDate.getFullYear() + 2,
        minDate.getMonth(),
        minDate.getDate()
    );
    return {minDate, maxDate};
}
