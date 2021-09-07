import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "../pdf/Pdf";
import React from "react";

const LinkBar = (props) => {
  return (
    <span className="links-bar">
      <a href={props.data.urls.linkedin}>
        <FaLinkedin />
      </a>
      &nbsp;
      <a href={props.data.urls.github}>
        <FaGithub />
      </a>
      &nbsp;
      <PDFDownloadLink
        document={<Pdf data={props.data} />}
        fileName={`${props.data.lastName}_${props.data.firstName}_resume.pdf`}
      >
        {() => <FaFilePdf />}
      </PDFDownloadLink>
    </span>
  );
};

export default LinkBar;
