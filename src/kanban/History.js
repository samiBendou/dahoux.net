import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { Listing } from "./Kanban";

const History = ({ items }) => (
  <Listing id="history" icon={<FaBriefcase className="icon" />} title="History" items={items} />
);

export default History;
