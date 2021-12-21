import React, {Component} from 'react';
import {Col, Container, Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ReactCreditCards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css"

class Payment extends Component {
    constructor(idk) {
        super(idk);
    }

    state = {
        isOpen: false, cvc: '', expiry: '', focus: '', name: '', number: '',
    };

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    handleInputFocus = (e) => {
        this.setState({focus: e.target.name});
    }

    handleInputChange = (e) => {
        let {name, value} = e.target;

        if (name === "number") {
            const numberMaxLength = 16;
            if (value.length > numberMaxLength) {
                value = value.substring(0, numberMaxLength);
            }
            //console.log("number: " + value)

        } else if (name === "name") {
            const nameMaxLength = 255;
            if (value.length > nameMaxLength) {
                value = value.substring(0, nameMaxLength);
            }
            //console.log("name: " + value)

        } else if (name === "expiry") {
            const expiryMaxLength = 4;
            if (value.length > expiryMaxLength) {
                value = value.substring(0, expiryMaxLength);
            }
            //console.log("expiry: " + value)

        } else if (name === "cvc") {
            const cvcMaxLength = 3;
            if (value.length > cvcMaxLength) {
                value = value.substring(0, cvcMaxLength);
            }
            //console.log("cvc: " + value)
        }

        this.setState({[name]: value});
    }

    paymentAlert() {
        alert("Kort accepterat.")
    }

    render() {

        return (<>
                <Modal.Dialog className={"paymentModal pb-4"}>
                    
                    <Modal.Header closeButton>
                        <Modal.Title>Kortbetalning</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Ange dina kortuppgifter.</p>

                        <div id="PaymentForm">
                            <ReactCreditCards
                                cvc={this.state.cvc}
                                expiry={this.state.expiry}
                                focused={this.state.focus}
                                name={this.state.name}
                                number={this.state.number}
                            />

                            <div className="loginFormDiv mt-4 mx-auto p-3 background-positive-primary">
                                <Form>

                                    <Container className="flex-column p-2">
                                        <Form.Group className="mb-3 text-color-light"
                                                    controlId="numberNameExpiryCvc">
                                            <Form.Label>Kortnummer</Form.Label>
                                            <Form.Control maxLength="16" min="0" max="9999999999999999"
                                                          className="number" name="number" type="number"
                                                          placeholder="16 siffror" onChange={this.handleInputChange}
                                                          onFocus={this.handleInputFocus}/>

                                            <Form.Label>Namn</Form.Label>
                                            <Form.Control maxLength="255" className="name" name="name" type="text"
                                                          placeholder="Namn på kortet"
                                                          onChange={this.handleInputChange}
                                                          onFocus={this.handleInputFocus}/>

                                            <div className="col">
                                                <Form.Label>Månad / år</Form.Label>
                                                <Form.Control maxLength="4" min="0" max="9999"
                                                              className="expiry"
                                                              name="expiry" type="number" placeholder="4 siffror"
                                                              onChange={this.handleInputChange}
                                                              onFocus={this.handleInputFocus}/>


                                                <Form.Label>CVC</Form.Label>
                                                <Form.Control maxLength="3" min="000" max="999"
                                                              className="cvc"
                                                              name="cvc" type="number" placeholder="3 siffror"
                                                              onChange={this.handleInputChange}
                                                              onFocus={this.handleInputFocus}/>
                                            </div>
                                            <Form.Check className="checkboxRemember pt-2" label="Kom ihåg kort"/>
                                        </Form.Group>
                                    </Container>
                                </Form>
                            </div>


                        </div>


                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Stäng</Button>
                        <Button variant="primary" onClick={this.paymentAlert}>Betala</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </>)
    }
}

export default Payment