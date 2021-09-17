import "../scss/Cards.scss";

import React from "react";
import CardsList from "./CardsList";
import { TimelineTitle } from "../common/titles";
import { Section } from "../common/wrappers";

const Column = ({ title, items }) => (
  <div className="column">
    <h2 className="title">{title}</h2>
    <CardsList items={items} />
  </div>
);

export const Listing = ({ id, title, items }) => (
  <Section id={id} title={title}>
    <CardsList items={items} />
  </Section>
);

export const Board = ({ id, titles, data }) => {
  return (
    <Section id={id} title={<TimelineTitle />}>
      {Object.keys(data).map((key, index) => (
        <Column key={key} title={titles[index]()} items={data[key]} />
      ))}
    </Section>
  );
};
