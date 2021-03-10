import React from 'react';
import {Jumbotron} from "react-bootstrap";
import '../scss/About.scss';
import AboutText from "./AboutText";
import AboutList from "./AboutList";
import Brief from "../brief/Brief";
import {FaUserCircle} from "react-icons/fa";

const About = (props) => {
    return (
        <div id="about">
            <Jumbotron className="about-jumbotron">
                <h1 className="text-header"><FaUserCircle style={{verticalAlign: "top"}}/> Brief</h1>
                <div className="about-content">
                    <AboutText data={props.data}/>
                    <div className="about-list" id="outer-about-list">
                        <AboutList items={props.data.items.about}/>
                    </div>
                </div>
                <Brief brief={props.data.brief}/>
            </Jumbotron>
        </div>
    )
};

export default About;