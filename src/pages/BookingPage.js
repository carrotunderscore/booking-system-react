import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function BookingPage() {
    return (<>
        <div className="d-flex justify-content-center my-5">
        <Card className="text-center w-50">
            <Card.Header style={{backgroundColor: "#9FBCEB", color: "#FEFFFD"}}>Featured</Card.Header>
            <Card.Body style={{backgroundColor: "#CFD8DC"}}>
                <Card.Title>Special title treatment</Card.Title>
                <input type="text"/>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button style={{backgroundColor: "#123A7A"}}>SUBMIT</Button>
            </Card.Body>
        </Card>
        </div>
    </>)
};