import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { slugifyString } from "../common/core/url";
import { ArrayForm, KeyValueForm } from "../common/forms";
import { SkillsTitle } from "../common/titles";
import { Section } from "../common/wrappers";
import { FormButton } from "../common/buttons";

export const SkillForm = ({ values, name, index }) => {
  return (
    <div className="inner">
      <h3>{values[index].label} </h3>
      <Fragment>
        <KeyValueForm id={`${name}.${index}.label`} title="Label" />
        <KeyValueForm id={`${name}.${index}.level`} title="Level" />
        <KeyValueForm id={`${name}.${index}.category`} title="Category" />
        <FormButton />
      </Fragment>
    </div>
  );
};

const SkillLinkForm = ({ values, index }) => {
  return (
    <Fragment>
      <h3>
        <Link to={`/edit/skills/${slugifyString(values[index].label)}`}>{values[index].label}</Link>
      </h3>
    </Fragment>
  );
};

const SkillsListForm = ({ name, values }) => (
  <ArrayForm
    className="skills-list"
    name={name}
    array={values}
    initial={{ label: "New Skill", level: 0, category: 0 }}
    render={(index) => <SkillLinkForm index={index} values={values} />}
  />
);

export const SkillsTable = ({ items, name }) => (
  <Section id="skills-table" title={<SkillsTitle />}>
    <SkillsListForm name={name} values={items} />
  </Section>
);
