import React from 'react';
import {Col, Jumbotron, Row} from "react-bootstrap";
import {FaBirthdayCake, FaMapMarker, FaEnvelope} from "react-icons/fa";
import '../scss/Contact.scss';

const msPerYear = (1000 * 60 * 60 * 24 * 365);

const Contact = (props) => {
    const age = Math.floor((new Date() - props.birthday) / msPerYear);
    return (
        <Jumbotron id="contact">
            <Row className="row">
                <Col xs={2}><FaBirthdayCake/></Col>
                <Col>{age} years</Col>
            </Row>
            <Row className="row">
                <Col xs={2}><FaMapMarker/></Col>
                <Col>{props.location.city}, {props.location.zip}</Col>
            </Row>
            <Row className="row">
                <Col xs={2}><FaEnvelope/></Col>
                <Col>{props.mail}</Col>
            </Row>
        </Jumbotron>
    );
};

export default Contact;