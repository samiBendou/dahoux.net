import React from "react";
import {FaExternalLinkAlt} from "react-icons/fa";

const CompanyText = (props) => {
    return (
        <h6>
            <a href={props.url}><FaExternalLinkAlt style={{verticalAlign: "top"}}/></a>
            <span> {props.name}</span>
        </h6>);
};

export default CompanyText;