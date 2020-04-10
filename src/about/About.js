import React from 'react';
import {Jumbotron} from "react-bootstrap";
import '../scss/About.scss';
import AboutText from "./AboutText";
import AboutList from "./AboutList";

const About = (props) => {
    return (
        <div id="about">
            <Jumbotron className="about-jumbotron">
                <div className="about-content">
                    <div className="about-thumbnail">
                        <img width="100%" alt="profile" src={props.data.urls.picture}/>
                    </div>
                    <AboutText data={props.data}/>
                    <div className="about-list" id="outer-about-list">
                        <AboutList items={props.data.items.about}/>
                    </div>
                </div>
            </Jumbotron>
        </div>
    )
};

export default About;