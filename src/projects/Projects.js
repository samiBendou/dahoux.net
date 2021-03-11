import React from 'react';
import {FaDraftingCompass} from "react-icons/fa";
import ProjectsList from "./ProjectsList";

const Projects = (props) => (
    <div id="projects">
        <h1 className="text-header"><FaDraftingCompass className="icon-header"/> Projects</h1>
        <ProjectsList items={props.items}/>
    </div>
);

export default Projects;