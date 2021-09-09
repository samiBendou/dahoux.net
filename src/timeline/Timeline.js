import React from "react";
import TimelineList from "./TimelineList";
import { FaBriefcase } from "react-icons/fa";

const Timeline = (props) => (
  <div id="timeline">
    <h1 className="title">
      <FaBriefcase className="icon-header" /> Timeline
    </h1>
    <TimelineList items={props.items} />
  </div>
);

export default Timeline;
