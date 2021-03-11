import React from 'react';
import '../scss/About.scss';
import {FaUserCircle} from "react-icons/fa";
import BirthdayText from "../common/BirthdayText";
import LocationText from "../common/LocationText";
import LinksBar from "../common/LinksBar";

const About = (props) => {
    const data = props.data;
    return (
        <div id="about">
            <h1 id="about-header" className="text-header"><FaUserCircle className="icon-header"/> Hello...</h1>

            <div id="about-inner">
                <div id="about-left">
                    <h1 id="about-name" className="about-left-item">
                        {`${data.firstName} ${data.lastName}`}<br/>
                    </h1>

                    <h2 id="about-title" className="about-left-item">
                        {data.quote}
                    </h2>

                    <h3 id="about-location" className="about-left-item">
                        <LocationText location={data.location} county={true}/>
                    </h3>

                    <h3 id="about-birthday" className="about-left-item">
                        <BirthdayText birthday={data.birthday}/>
                    </h3>

                    <h2 id="about-links" className="about-left-item">
                        <LinksBar data={data}/>
                    </h2>
                </div>

                <div id="about-right">
                {
                    data.items.about.map((item) =>
                        <span>
                            <h2 className="about-right-item">{item.title}</h2>
                            <p className="about-right-item">{item.text}</p>
                        </span>)
                }
                </div>
            </div>

            <p id="about-quote">{data.brief}</p>

        </div>
    )
};

export default About;