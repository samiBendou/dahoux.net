import React from "react";
import SkillsCategory from "./SkillsCategory";
import titleToLabel from "../common/core/tags";

const SkillsList = (props) => {
  const sortedItems = props.items.sort((a, b) => b.level - a.level);
  const slicedItems = props.count ? sortedItems.slice(0, props.count) : sortedItems;
  const category = SkillsCategory[props.category];
  return (
    <div className="skills-list">
      <h2 className={`skills-title ${titleToLabel(category)}`}>{category}</h2>
      {slicedItems.map((item) => (
        <h3 key={item.label} className={`skills-item ${titleToLabel(SkillsCategory[item.category])}`}>
          {item.label} {item.mention ? `- ${item.mention}` : ""}
        </h3>
      ))}
    </div>
  );
};

export default SkillsList;
