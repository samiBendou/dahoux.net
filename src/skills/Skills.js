import React from "react";
import SkillsList from "./SkillsList";
import "../scss/Skills.scss";
import "../scss/Tags.scss";
import { SkillsTitle } from "../common/titles";
import { Section } from "../common/wrappers";

const Skills = (props) => {
  const items = props.items;
  const categories = new Array(...new Set(items.map((item) => item.category)));
  const itemsByCategory = new Map(categories.map((category) => [category, []]));
  items.forEach((item) => itemsByCategory.get(item.category).push(item));
  return (
    <Section id="skills" title={<SkillsTitle />}>
      {categories.map((category) => (
        <SkillsList key={category} items={itemsByCategory.get(category)} category={category} />
      ))}
    </Section>
  );
};

export default Skills;
