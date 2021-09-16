import React from "react";
import SkillsList from "./SkillsList";
import "../scss/Skills.scss";
import { FaWrench } from "react-icons/fa";
import { IconTitle } from "../common/titles";
import { Section } from "../common/wrappers";

const Skills = (props) => {
  const items = props.items;
  const categories = new Array(...new Set(items.map((item) => item.category)));
  const itemsByCategory = new Map(categories.map((category) => [category, []]));
  items.forEach((item) => itemsByCategory.get(item.category).push(item));
  return (
    <Section id="skills" title={<IconTitle icon={<FaWrench className="icon" />} title="Skills" />}>
      {categories.map((category) => (
        <SkillsList key={category} items={itemsByCategory.get(category)} category={category} />
      ))}
    </Section>
  );
};

export default Skills;
