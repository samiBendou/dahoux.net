import React, {Component} from "react";
import AboutList from "./AboutList";
import {FaEnvelope, FaFilePdf, FaGithub, FaLinkedin} from "react-icons/fa";
import BirthdayText from "../common/BirthdayText";
import LocationText from "../common/LocationText";
import Pdf from "../pdf/Pdf";
import {PDFDownloadLink} from "@react-pdf/renderer";

export default class AboutText extends Component {
    render() {
        const data = this.props.data;
        return (
            <div className="about-text">
                <h1 className="about-head">
                    {`${data.firstName} ${data.lastName}`}<br/>
                    <small>{data.quote}</small>
                </h1>

                <BirthdayText birthday={data.birthday}/>
                <LocationText location={data.location} county={true}/>

                <div className="about-list">
                    <AboutList items={data.items.about}/>
                </div>
                <h3 className="about-icons">
                    <a href={data.urls.linkedin}><FaLinkedin/></a>&nbsp;
                    <a href={data.urls.github}><FaGithub/></a>&nbsp;
                    <a href={data.urls.contact}><FaEnvelope/></a>&nbsp;
                    <PDFDownloadLink document={<Pdf data={data}/>} fileName={`${data.lastName}_${data.firstName}_resume.pdf`}>
                        {() => <FaFilePdf/>}
                    </PDFDownloadLink>
                </h3>
            </div>
        );
    }
};
