import React from "react";
import { Fragment } from "react";
import { FaBriefcase, FaDraftingCompass, FaUserCircle, FaWrench } from "react-icons/fa";

export const PageTitle = () => (
  <span>
    <em>bendou</em>.space
  </span>
);

export const AboutTitle = () => <IconTitle icon={<FaUserCircle className="icon" />} title="About" />;

export const SkillsTitle = () => <IconTitle icon={<FaWrench className="icon" />} title="Skills" />;

export const ProjectsTitle = () => <IconTitle icon={<FaDraftingCompass />} title="Projects" />;

export const HistoryTitle = () => <IconTitle icon={<FaBriefcase />} title="History" />;

export const IconTitle = ({ icon, title }) => (
  <Fragment>
    <span className="icon">{icon}</span> {title}
  </Fragment>
);
