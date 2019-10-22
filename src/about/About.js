import React from 'react';
import {Jumbotron} from "react-bootstrap";
import '../scss/About.scss';
import AboutText from "./AboutText";

const About = (props) => {
    return (
        <div id="about">
            <img className="about-picture" width="100%" alt="profile" src={props.data.urls.picture}/>
            <Jumbotron className="about-jumbotron">
                <div className="about-content">
                    <div className="about-thumbnail">
                        <img width="100%" alt="profile" src={props.data.urls.picture}/>
                    </div>
                    <AboutText data={props.data}/>
                </div>
            </Jumbotron>
        </div>
    )
};

export default About;