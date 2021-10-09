import "../scss/Cards.scss";

import React from "react";
import CardsList from "./CardsList";
import { Section } from "../common/wrappers";

const Column = ({ title, kind, items }) => (
  <div className="column">
    <h2 className="title">{title}</h2>
    <CardsList kind={kind} items={items} />
  </div>
);

export const Listing = ({ id, title, kind, items }) => (
  <Section id={id} title={title}>
    <CardsList kind={kind} items={items} />
  </Section>
);

export const Board = ({ id, title, kinds, subtitles, data }) => {
  return (
    <Section id={id} title={title}>
      {Object.keys(data).map((key, index) => (
        <Column key={key} kind={kinds[index]} title={subtitles[index]()} items={data[key]} />
      ))}
    </Section>
  );
};
