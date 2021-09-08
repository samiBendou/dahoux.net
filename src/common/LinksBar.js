import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "../pdf/Pdf";
import React from "react";

const LinkBar = (props) => {
  return (
    <span className="links-bar">
      <a href={props.data.urls.linkedin}>
        <FaLinkedin className="links-bar-button" />
      </a>
      &nbsp;
      <a href={props.data.urls.github}>
        <FaGithub className="links-bar-button" />
      </a>
      &nbsp;
      <PDFDownloadLink
        document={<Pdf data={props.data} />}
        fileName={`${props.data.lastName}_${props.data.firstName}_resume.pdf`}
      >
        {() => <FaFilePdf className="links-bar-button" />}
      </PDFDownloadLink>
    </span>
  );
};

export default LinkBar;
