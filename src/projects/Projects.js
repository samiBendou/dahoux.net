import React from "react";
import { FaDraftingCompass } from "react-icons/fa";
import TimelineList from "../timeline/TimelineList";

const Projects = (props) => (
  <section id="projects">
    <h1 className="title">
      <FaDraftingCompass className="icon" /> Projects
    </h1>
    <TimelineList items={props.items} />
  </section>
);

export default Projects;
