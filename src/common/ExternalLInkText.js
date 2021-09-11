import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ExternalLinkText = ({ url, title }) => {
  return (
    <span className="text-location">
      <a href={url}>
        <FaExternalLinkAlt className="icon" />

        <span> {title}</span>
      </a>
    </span>
  );
};

export default ExternalLinkText;
