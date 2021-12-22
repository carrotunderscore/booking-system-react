import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";
import Payment from "./Payment";

export default function PaymentModal(props) {
    function paymentAlert() {
        alert("Kort accepterat.")
        props.onHide()
    }

    return (
        <Modal
            {...props}
            className={"paymentModal pb-4"}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Kortbetalning
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Payment/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Stäng</Button>
                <Button variant="primary" onClick={paymentAlert}>Betala</Button>
            </Modal.Footer>
        </Modal>
    );
}