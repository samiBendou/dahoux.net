import React from 'react';
import {Jumbotron} from "react-bootstrap";
import '../scss/About.scss';
import AboutText from "./AboutText";

const About = (props) => {
    return (
        <div id="about">
            <img className="about-picture" width="100%" alt="profile" src={props.urls.picture}/>
            <Jumbotron style={{paddingTop: 0, paddingBottom: 0, paddingRight: 0, borderRadius:0, paddingLeft:0}}>
                <div className="about-content">
                    <div className="about-thumbnail">
                        <img width="100%" alt="profile" src={props.urls.picture}/>
                    </div>
                    <AboutText
                        firstName={props.firstName}
                        lastName={props.lastName}
                        quote={props.quote}
                        urls={props.urls}
                        items={props.items}
                        location={props.location}
                        birthday={props.birthday}
                    />
                </div>
            </Jumbotron>
        </div>
    )
};

export default About;