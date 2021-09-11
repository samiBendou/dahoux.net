import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { Listing } from "../kanban/Kanban";

const Timeline = ({ items }) => (
  <Listing id="timeline" icon={<FaBriefcase className="icon" />} title="Timeline" items={items} />
);

export default Timeline;
