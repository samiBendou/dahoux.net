import { FastField } from "formik";
import React, { Fragmen } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { slugifyString } from "../common/core/url";
import { ArrayForm, CompanyForm, DateForm, KeyValueForm, TextAreaForm } from "../common/forms";

const GeneralInfoForm = ({ name, index }) => (
  <div>
    <h4>General infos</h4>
    <KeyValueForm title="Title" id={`${name}.${index}.title`} />
    <KeyValueForm title="Link" id={`${name}.${index}.url`} />
    <KeyValueForm title="Tags" id={`${name}.${index}.tags`} type="text" />
    <KeyValueForm title="Category" id={`${name}.${index}.category`} />
    <h5>Company</h5>
    <CompanyForm prefix={`${name}.${index}.company`} />
    <h2>Dates</h2>
    <DateForm prefix={`${name}.${index}`} />
  </div>
);

const DescriptionForm = ({ name, values, index }) => (
  <div>
    <h4>Description</h4>
    <div>
      <TextAreaForm title="Brief" id={`${name}.${index}.brief`} />
      <TextAreaForm title="Description" id={`${name}.${index}.description`} />
      <h5>Key points</h5>
      <ArrayForm
        name={`${name}.${index}.items`}
        array={values[index].items}
        initial={""}
        render={(idx) => <FastField as="textarea" type="text" name={`${name}.${index}.items.${idx}`} />}
      />
    </div>
  </div>
);

const CardForm = ({ name, values, index }) => {
  return (
    <div className="form-card edit-form">
      <h3>{values[index].title} </h3>
      <Fragment>
        <GeneralInfoForm name={name} index={index} />
        <DescriptionForm name={name} values={values} index={index} />
        <div className="btn-bar">
          <button className="btn-submit" type="submit">
            Submit
          </button>
        </div>
      </Fragment>
    </div>
  );
};

const CardLinkForm = ({ values, index }) => {
  return (
    <div className="form-card">
      <h3>
        <Link to={`/admin/timeline/${slugifyString(values[index].title, values[index].start)}`}>
          {values[index].title}
        </Link>
      </h3>
    </div>
  );
};

const CardsListForm = ({ name, values }) => (
  <ArrayForm
    name={name}
    array={values}
    initial={{ title: "New Item", tags: [], brief: "", items: [], start: "", end: "", url: "" }}
    render={(index) => <CardLinkForm name={name} values={values} index={index} />}
  />
);

export { CardForm, CardsListForm as CardList };
