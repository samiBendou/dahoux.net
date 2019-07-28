import React from "react";
import AboutList from "./AboutList";
import {FaFacebook, FaLinkedin, FaGithub, FaAddressCard} from "react-icons/fa";
import SkillsList from "../skills/SkillsList";

const AboutText = (props) => {
    return (
        <div className="about-text">
            <h1>
                {`${props.firstName} ${props.lastName}`}<br/>
                <small>{props.quote}</small>
            </h1>
            <div className="about-list">
                <AboutList items={props.items.about}/>
            </div>
            <div className="about-skills">
                <SkillsList items={props.items.skills}/>
            </div>
            <h3 className="about-icons">
                <a href={props.urls.facebook}><FaFacebook/></a>
                <a href={props.urls.linkedin}><FaLinkedin/></a>
                <a href={props.urls.github}><FaGithub/></a>
                <a href={props.urls.contact}><FaAddressCard/></a>
            </h3>
        </div>
    );
};

export default AboutText;