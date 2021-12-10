import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css";

export default function BookingPage() {
	const minDate = new Date().toLocaleDateString("se-SE");
	console.log(minDate);

	return (
		<>
			<div className="d-flex justify-content-center my-5">
				<Card className="text-center w-50">
					<Card.Header className="background-positive-primary text-color-light">
						Booking
					</Card.Header>
					<Card.Body className="background-secondary">
						<Card.Title>Book cleaning</Card.Title>
						<label htmlFor="date">Date: </label>
						<input type="date" min={minDate} name="date" required />
						<Card.Text>Some text here</Card.Text>
						<Button className="background-positive-secondary">
							BOOK
						</Button>
					</Card.Body>
				</Card>
			</div>
		</>
	);
}
