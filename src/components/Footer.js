import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";

class Footer extends Component {
    render() {
        const Mailto = (email) => {
            return (
                <a style={{color:"#FEFFFD", textDecoration:"none"}} href={`mailto:${email}?subject=Hej Stadfirman`}>kontakt@stadfirman.se</a>
            );
        };

        return (
            <>
                <div
                    className="Footer column container-fluid fixed-bottom background-positive-primary text-color-light">
                    <Row>
                        <Col/>
                        <Col>
                            <div className="FooterContact text-center pt-1 pb-2">
                                <Mailto email="kontakt@stadfirman.se">
                                    kontakt@stadfirman.se
                                </Mailto>
                            </div>
                        </Col>
                        <Col/>
                    </Row>
                </div>
            </>
        );
    }
}

export default Footer;