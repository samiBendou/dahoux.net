import React from "react";
import {FaExternalLinkAlt} from "react-icons/fa";

const CompanyText = (props) => {
    return (
        <span className="text-company">
            <a href={props.url}><FaExternalLinkAlt className="icon-header"/></a>
            <span> {props.name}</span>
        </span>);
};

export default CompanyText;