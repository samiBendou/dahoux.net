import React from "react";
import SkillsList from "./SkillsList";
import "../scss/Skills.scss";
import { FaWrench } from "react-icons/fa";

const Skills = (props) => {
  const items = props.items;
  const categories = new Array(...new Set(items.map((item) => item.category)));
  const itemsByCategory = new Map(categories.map((category) => [category, []]));
  items.forEach((item) => itemsByCategory.get(item.category).push(item));
  return (
    <section id="skills">
      <h1 className="title">
        <FaWrench className="icon" /> Skills
      </h1>
      <div className="inner">
        {categories.map((category) => (
          <SkillsList key={category} items={itemsByCategory.get(category)} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
