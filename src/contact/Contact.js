import React from 'react';
import {FaEnvelope} from "react-icons/fa";
import '../scss/Contact.scss';
import MailForm from "./MailForm";

const Contact = (props) =>
    (
        <div>
            <h1 className="text-header"><FaEnvelope style={{verticalAlign: "top"}}/> Contact</h1>
            <MailForm mail={props.mail}/>
        </div>
    );

export default Contact;
