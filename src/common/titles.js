import React from "react";
import { Fragment } from "react";
import { FaUserCircle, FaWrench } from "react-icons/fa";

const PageTitle = () => (
  <span>
    <em>bendou</em>.space
  </span>
);

const AboutTitle = () => <IconTitle icon={<FaUserCircle className="icon" />} title="About" />;
const SkillsTitle = () => <IconTitle icon={<FaWrench className="icon" />} title="Skills" />;

const IconTitle = ({ icon, title }) => (
  <Fragment>
    <span className="icon">{icon}</span> {title}
  </Fragment>
);

export { PageTitle, IconTitle, AboutTitle, SkillsTitle };
