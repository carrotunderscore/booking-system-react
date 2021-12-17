import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>

                <div className="Header column container-fluid background-positive-primary text-color-light pt-1">
                    <Row>
                        <Col>
                            <h1 style={{fontFamily: "'Poppins', sans-serif"}}>Städfirman AB</h1>
                        </Col>

                        <Col/>

                        <Col>
                            <div className="HeaderLinks text-end mt-4">
                                <Link style={{color: "#FEFFFD", textDecoration: "none"}} to="/home">HOME</Link>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Link style={{color: "#FEFFFD", textDecoration: "none"}} to="/book">BOOK</Link>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Link style={{color: "#FEFFFD", textDecoration: "none"}} to="/register">REGISTER</Link>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Link style={{color: "#FEFFFD", textDecoration: "none"}} to="/admin">ADMIN</Link>
                            </div>
                        </Col>
                    </Row>

                </div>
            </>
        );
    }
}

export default Header;
