import React from "react";
import { TimelineCard } from "./TimelineItem";
import "../scss/Backlog.scss";

const TimelineList = ({ items }) => {
  const sortedItems = items.slice().sort((a, b) => new Date(b.start) - new Date(a.start));
  return (
    <div className="backlog">
      {sortedItems.map((item) => (
        <TimelineCard item={item} key={item.title + item.start} id={item.title + item.start} />
      ))}
    </div>
  );
};

export default TimelineList;
