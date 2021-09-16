import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { slugifyString } from "../common/core/url";
import { ArrayForm, KeyValueForm } from "../common/forms";
import { SkillsTitle } from "../common/titles";
import { Section } from "../common/wrappers";

const SkillForm = ({ values, name, index }) => {
  return (
    <div className="skills-row edit-form">
      <h3>{values[index].label} </h3>
      <Fragment>
        <KeyValueForm id={`${name}.${index}.label`} title="Label" />
        <KeyValueForm id={`${name}.${index}.level`} title="Level" />
        <KeyValueForm id={`${name}.${index}.category`} title="Category" />
        <div className="btn-bar">
          <button className="btn-submit" type="submit">
            Submit
          </button>
        </div>
      </Fragment>
    </div>
  );
};

const SkillLinkForm = ({ values, index }) => {
  return (
    <div className="form-card">
      <h3>
        <Link to={`/admin/skills/${slugifyString(values[index].label)}`}>{values[index].label}</Link>
      </h3>
    </div>
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

const SkillsTable = ({ items, name }) => (
  <Section id="skills-table" title={<SkillsTitle />}>
    <SkillsListForm name={name} values={items} />
  </Section>
);

export { SkillForm, SkillsTable };
