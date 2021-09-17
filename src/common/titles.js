import React from "react";
import { Fragment } from "react";
import { FaBriefcase, FaCalendarAlt, FaDraftingCompass, FaGraduationCap, FaUserCircle, FaWrench } from "react-icons/fa";

export const PageTitle = () => (
  <span>
    <em>bendou</em>.space
  </span>
);

export const AboutTitle = () => <IconTitle icon={<FaUserCircle />} title="About" />;

export const SkillsTitle = () => <IconTitle icon={<FaWrench />} title="Skills" />;

export const ProjectsTitle = () => <IconTitle icon={<FaDraftingCompass />} title="Projects" />;

export const HistoryTitle = () => <IconTitle icon={<FaBriefcase />} title="History" />;

export const EducationTitle = () => <IconTitle icon={<FaGraduationCap />} title="Education" />;

export const ExperienceTitle = () => <IconTitle icon={<FaBriefcase />} title="Experience" />;

export const TimelineTitle = () => <IconTitle icon={<FaCalendarAlt />} title="Timeline" />;

export const IconTitle = ({ icon, title }) => (
  <Fragment>
    <span className="icon">{icon}</span> {title}
  </Fragment>
);
