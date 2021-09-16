import "../scss/About.scss";
import React from "react";
import LocationText from "../common/LocationText";
import LinksBar from "../common/LinksBar";
import { Section } from "../common/wrappers";
import { AboutTitle } from "../common/titles";

const About = (props) => {
  const data = props.data;
  return (
    <Section id="about" title={<AboutTitle />}>
      <div className="first">
        <h1 className="name left-item">{`${data.firstName} ${data.lastName}`}</h1>

        <h2 className="quote left-item">{data.quote}</h2>

        <h2 className="left-item">
          <LinksBar data={data} />
        </h2>

        <h3 className="location left-item">
          <LocationText location={data.location.resolved} county={true} />
        </h3>
      </div>

      <div className="second">
        {data.items.about.map((item) => (
          <span key={item.text}>
            <h2 className="right-item">{item.title}</h2>
            <p className="right-item">{item.text}</p>
          </span>
        ))}
      </div>
    </Section>
  );
};

export default About;
