import React from "react";
import "../scss/About.scss";
import { FaUserCircle } from "react-icons/fa";
import LocationText from "../common/LocationText";
import LinksBar from "../common/LinksBar";

const About = (props) => {
  const data = props.data;
  return (
    <div id="about">
      <h1 id="about-header" className="title">
        <FaUserCircle className="icon-header" /> About
      </h1>

      <div id="about-inner">
        <div id="about-first">
          <h1 id="about-name" className="about-left-item">
            {`${data.firstName} ${data.lastName}`}
          </h1>

          <h2 id="about-title" className="about-left-item">
            {data.quote}
          </h2>

          <h2 id="about-links" className="about-left-item">
            <LinksBar data={data} />
          </h2>

          <h3 id="about-location" className="about-left-item">
            <LocationText location={data.location} county={true} />
          </h3>
        </div>

        <div id="about-second">
          {data.items.about.map((item) => (
            <span key={item.text}>
              <h2 className="about-right-item">{item.title}</h2>
              <p className="about-right-item">{item.text}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
