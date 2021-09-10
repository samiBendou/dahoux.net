import React from "react";
import { FaDraftingCompass } from "react-icons/fa";
import ProjectsList from "./ProjectsList";

const Projects = (props) => (
  <section id="projects">
    <h1 className="title">
      <FaDraftingCompass className="icon" /> Projects
    </h1>
    <ProjectsList items={props.items} />
  </section>
);

export default Projects;
