import React from "react";
import TimelineList from "./TimelineList";
import { FaBriefcase } from "react-icons/fa";

const Timeline = (props) => (
  <section id="timeline">
    <h1 className="title">
      <FaBriefcase className="icon" /> Timeline
    </h1>
    <TimelineList items={props.items} />
  </section>
);

export default Timeline;
