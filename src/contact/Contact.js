import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import {FaBirthdayCake, FaMapMarker, FaEnvelope} from "react-icons/fa";
import '../scss/Contact.scss';
import BirthdayText from "../common/BirthdayText";
import AddressText from "../common/AddressText";
import MailText from "../common/MailText";

export default class Contact extends Component {

    render() {
        const props = this.props;
        return (
            <div>
                <Row className="row">
                    <Col xs={2}><FaBirthdayCake/></Col>
                    <Col><BirthdayText birthday={props.birthday}/></Col>
                </Row>
                <Row className="row">
                    <Col xs={2}><FaMapMarker/></Col>
                    <Col><AddressText location={props.location}/></Col>
                </Row>
                <Row className="row">
                    <Col xs={2}><FaEnvelope/></Col>
                    <Col><MailText mail={props.mail}/></Col>
                </Row>
            </div>
        );
    }
}