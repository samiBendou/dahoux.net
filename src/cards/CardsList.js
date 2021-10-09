import React from "react";
import { CardsItemBrief } from "./CardsItem";
import "../scss/Backlog.scss";

const CardsList = ({ items, kind }) => {
  const sortedItems = items.slice().sort((a, b) => new Date(b.start) - new Date(a.start));
  return (
    <div className="backlog">
      {sortedItems.map((item) => (
        <CardsItemBrief item={item} kind={kind} key={item.title + item.start} id={item.title + item.start} />
      ))}
    </div>
  );
};

export default CardsList;
