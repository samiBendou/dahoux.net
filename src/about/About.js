import React from 'react';
import AboutList from './AboutList';
import {Jumbotron} from "react-bootstrap";
import {FaFacebook, FaLinkedin, FaGithub} from "react-icons/fa";
import '../scss/About.scss';

const About = (props) => {
    return (
        <div id="about">
            <img className="about-picture" width="100%" alt="profile" src={props.urls.picture}/>
            <Jumbotron style={{paddingTop:0, paddingBottom:0, paddingRight:0}}>
                <div className="about-content">
                    <div className="about-text">
                        <h1>
                            {`${props.firstName} ${props.lastName}`}<br/>
                            <small>{props.quote}</small>
                        </h1>
                        <AboutList items={props.items}/>

                        <h3 className="about-icons">
                            <a href={props.urls.facebook}><FaFacebook/></a>
                            <a href={props.urls.linkedin}><FaLinkedin/></a>
                            <a href={props.urls.github}><FaGithub/></a>
                        </h3>
                    </div>
                    <div className="about-thumbnail">
                        <img width="50%" alt="profile" src={props.urls.picture}/>
                    </div>
                </div>

            </Jumbotron>
        </div>
    )
};

export default About;