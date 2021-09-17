import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "../pdf/Pdf";
import React from "react";

export const FormButton = () => (
  <div className="btn-bar">
    <button className="btn-submit" type="submit">
      Submit
    </button>
  </div>
);

export const LogButton = () => (
  <div className="btn-bar">
    <button className="btn-login" type="submit">
      Login
    </button>
  </div>
);

export const LinksBar = (props) => {
  return (
    <div className="links-bar">
      <a href={props.data.urls.linkedin}>
        <FaLinkedin className="button" />
      </a>

      <a href={props.data.urls.github}>
        <FaGithub className="button" />
      </a>

      <a href={`mailto:${props.data.mail}`}>
        <FaEnvelope className="button" />
      </a>

      <PDFDownloadLink
        document={<Pdf data={props.data} />}
        fileName={`${props.data.lastName}_${props.data.firstName}_resume.pdf`}
      >
        {() => <FaFilePdf className="button" />}
      </PDFDownloadLink>
    </div>
  );
};
