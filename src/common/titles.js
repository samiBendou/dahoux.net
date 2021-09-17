import React from "react";
import { Fragment } from "react";
import { FaUserCircle, FaWrench } from "react-icons/fa";

export const PageTitle = () => (
  <span>
    <em>bendou</em>.space
  </span>
);

export const AboutTitle = () => <IconTitle icon={<FaUserCircle className="icon" />} title="About" />;

export const SkillsTitle = () => <IconTitle icon={<FaWrench className="icon" />} title="Skills" />;

export const IconTitle = ({ icon, title }) => (
  <Fragment>
    <span className="icon">{icon}</span> {title}
  </Fragment>
);
