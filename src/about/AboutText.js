import React, {Component} from "react";
import AboutList from "./AboutList";
import {FaLinkedin, FaGithub, FaEnvelope, FaFilePdf} from "react-icons/fa";
import SkillsList from "../skills/SkillsList";
import BirthdayText from "../common/BirthdayText";
import AddressText from "../common/AddressText";

export default class AboutText extends Component {

    async downloadPdf() {
        const html = (await (await fetch("http://http://dahoux.net")).text());

        // eslint-disable-next-line no-undef
        SejdaJsApi.htmlToPdf({
            filename: `${this.props.firstName}_${this.props.lastName}_resume.pdf`,
            /* leave blank for one long page */
            pageSize: "a4",
            publishableKey: "api_public_7545edc01f204628a3858d335c1c13d9",
            htmlCode: html,
            /* url: window.location.href */
            always: function(){
                // PDF download should have started
                console.log("Download has started");
            }
        });
    }

    render() {
        const props = this.props;
        return (
        <div className="about-text">
            <h1 className="about-head">
                {`${props.firstName} ${props.lastName}`}<br/>
                <small>{props.quote}</small>
            </h1>

            <BirthdayText birthday={props.birthday}/>
            <AddressText location={props.location} county={true}/>

            <div className="about-list">
                <AboutList items={props.items.about}/>
            </div>
            <div className="about-skills">
                <SkillsList items={props.items.skills.filter(item => item.category === 1)} count={3}/>
            </div>
            <h3 className="about-icons">
                <a href={props.urls.linkedin}><FaLinkedin/></a>&nbsp;
                <a href={props.urls.github}><FaGithub/></a>&nbsp;
                <a href={props.urls.contact}><FaEnvelope/></a>&nbsp;
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" onClick={this.downloadPdf}><FaFilePdf/></a>&nbsp;
            </h3>
        </div>
    );}
};
