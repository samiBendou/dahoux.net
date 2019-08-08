import React from 'react';
import {FaEnvelope} from "react-icons/fa";
import '../scss/Contact.scss';
import MailForm from "../common/MailForm";

const Contact = (props) =>
    (
        <div>
            <h3 className="contact-header"><FaEnvelope style={{verticalAlign: "top"}}/> Contact</h3>
            <MailForm mail={props.mail}/>
        </div>
    );

export default Contact;
