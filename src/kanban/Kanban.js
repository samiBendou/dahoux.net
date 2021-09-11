import "../scss/Kanban.scss";
import React from "react";
import { FaBriefcase, FaCalendarAlt, FaDraftingCompass, FaGraduationCap } from "react-icons/fa";
import CardList from "./CardList";
import { IconTitle } from "../common/titles";
import { Section } from "../common/wrappers";

const Listing = ({ icon, id, title, items }) => (
  <Section id={id} title={<IconTitle icon={icon} title={title}></IconTitle>}>
    <CardList items={items} />
  </Section>
);

const Column = ({ icon, title, items }) => (
  <div className="column">
    <h2 className="title">
      {icon} {title}
    </h2>
    <CardList items={items} />
  </div>
);

const Board = ({ data }) => {
  const timeline = data.items.timeline;
  const experiences = timeline.filter((item) => item.category === 0);
  const formations = timeline.filter((item) => item.category === 1);
  const projects = data.items.portfolio;

  return (
    <Section id="kanban" title={<IconTitle icon={<FaCalendarAlt className="icon" />} title="Timeline" />}>
      <div className="inner">
        <Column icon={<FaBriefcase className="icon" />} title="Experience" items={experiences} />
        <Column icon={<FaGraduationCap className="icon" />} title="Education" items={formations} />
        <Column icon={<FaDraftingCompass className="icon" />} title="Projects" items={projects} />
      </div>
    </Section>
  );
};

export { Board, Listing, Column };
