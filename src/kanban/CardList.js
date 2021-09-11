import React from "react";
import { CardBrief } from "./CardItem";
import "../scss/Backlog.scss";

const CardList = ({ items }) => {
  const sortedItems = items.slice().sort((a, b) => new Date(b.start) - new Date(a.start));
  return (
    <div className="backlog">
      {sortedItems.map((item) => (
        <CardBrief item={item} key={item.title + item.start} id={item.title + item.start} />
      ))}
    </div>
  );
};

export default CardList;
