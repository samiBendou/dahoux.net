import React from 'react';
import {FaEnvelope} from "react-icons/fa";
import '../scss/Contact.scss';
import MailForm from "./MailForm";
import {Jumbotron} from "react-bootstrap";

const Contact = (props) =>
    (
        <Jumbotron id="contact">
            <h1 className="text-header"><FaEnvelope style={{verticalAlign: "top"}}/> Contact</h1>
            <MailForm mail={props.mail}/>
        </Jumbotron>
    );

export default Contact;
