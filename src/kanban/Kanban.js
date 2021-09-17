import "../scss/Kanban.scss";

import React from "react";
import CardList from "./CardList";
import { EducationTitle, ExperienceTitle, ProjectsTitle, TimelineTitle } from "../common/titles";
import { Section } from "../common/wrappers";

const Listing = ({ id, title, items }) => (
  <Section id={id} title={title}>
    <CardList items={items} />
  </Section>
);

const Column = ({ title, items }) => (
  <div className="column">
    <h2 className="title">{title}</h2>
    <CardList items={items} />
  </div>
);

const Board = ({ data }) => {
  const timeline = data.items.timeline;
  const experiences = timeline.filter((item) => item.category === 0);
  const formations = timeline.filter((item) => item.category === 1);
  const projects = data.items.portfolio;

  return (
    <Section id="kanban" title={<TimelineTitle />}>
      <Column title={<ExperienceTitle />} items={experiences} />
      <Column title={<EducationTitle />} items={formations} />
      <Column title={<ProjectsTitle />} items={projects} />
    </Section>
  );
};

export { Board, Listing, Column };
