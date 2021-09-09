import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const CompanyText = (props) => {
  return (
    <span className="text-company">
      <a href={props.url}>
        <FaExternalLinkAlt className="icon" />

        <span> {props.name}</span>
      </a>
    </span>
  );
};

export default CompanyText;
