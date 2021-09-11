import React from "react";
import { FaDraftingCompass } from "react-icons/fa";
import { Listing } from "./Kanban";

const Projects = ({ items }) => (
  <Listing id="projects" icon={<FaDraftingCompass className="icon" />} title="Projects" items={items} />
);

export default Projects;
