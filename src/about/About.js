import React from 'react';
import AboutList from './AboutList';
import {Jumbotron} from "react-bootstrap";
import {FaFacebook, FaLinkedin, FaGithub, FaUser} from "react-icons/fa";

const About = (props) => {
    const centered={textAlign:"center"};
    return (
        <div id="about">
            <img width="100%" alt="profile" src={props.urls.picture}/>
            <Jumbotron>
                <h1 style={centered}>About me <FaUser/></h1>
                <h1>
                    {`${props.firstName} ${props.lastName}`}<br/>
                    <small>{props.quote}</small>
                </h1>
                <AboutList items={props.items}/>
                <h3 style={centered}>
                    <a href={props.urls.facebook}><FaFacebook/></a>
                    <a href={props.urls.linkedin}><FaLinkedin/></a>
                    <a href={props.urls.github}><FaGithub/></a>
                </h3>
            </Jumbotron>
        </div>
    )
};

export default About;