import "../scss/Kanban.scss";
import React from "react";
import { FaBriefcase, FaCalendarAlt, FaDraftingCompass, FaGraduationCap } from "react-icons/fa";
import CardList from "./CardList";
import { IconTitle } from "../common/titles";
import { Section } from "../common/wrappers";

const Listing = ({ icon, id, title, items }) => (
  <Section id={id} title={<IconTitle icon={icon} title={title} />}>
    <CardList items={items} />
  </Section>
);

const Column = ({ icon, title, items }) => (
  <div className="column">
    <h2 className="title">
      <IconTitle icon={icon} title={title} />
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
    <Section id="kanban" title={<IconTitle icon={<FaCalendarAlt />} title="Timeline" />}>
      <div className="inner">
        <Column icon={<FaBriefcase />} title="Experience" items={experiences} />
        <Column icon={<FaGraduationCap />} title="Education" items={formations} />
        <Column icon={<FaDraftingCompass />} title="Projects" items={projects} />
      </div>
    </Section>
  );
};

export { Board, Listing, Column };
