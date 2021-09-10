import "../scss/Kanban.scss";
import React from "react";
import { FaBriefcase, FaCalendarAlt, FaDraftingCompass, FaGraduationCap } from "react-icons/fa";
import TimelineList from "../timeline/TimelineList";
import ProjectsList from "../projects/ProjectsList";

const Kanban = (props) => {
  const timeline = props.data.items.timeline;
  const experiences = timeline.filter((item) => item.category === 0);
  const formations = timeline.filter((item) => item.category === 1);

  return (
    <section id="kanban">
      <h1 className="title">
        <FaCalendarAlt className="icon" /> Timeline
      </h1>
      <div className="columns">
        <div className="column">
          <h2 className="title">
            <FaBriefcase className="icon" /> Experience
          </h2>
          <TimelineList items={experiences} />
        </div>
        <div className="column">
          <h2 className="title">
            <FaGraduationCap className="icon" /> Education
          </h2>
          <TimelineList items={formations} />
        </div>

        <div className="column">
          <h2 className="title">
            <FaDraftingCompass className="icon" /> Projects
          </h2>
          <ProjectsList items={props.data.items.portfolio} />
        </div>
      </div>
    </section>
  );
};

export default Kanban;
