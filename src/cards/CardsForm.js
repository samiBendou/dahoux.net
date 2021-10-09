import { FastField } from "formik";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  ArrayForm,
  CompanyForm,
  DurationForm,
  FormButton,
  KeyValueForm,
  LocationForm,
  TextAreaForm,
} from "../common/forms";
import { Section } from "../common/wrappers";

const GeneralInfoForm = ({ name, index }) => (
  <div>
    <h4>General infos</h4>
    <KeyValueForm title="Title" id={`${name}.${index}.title`} />
    <KeyValueForm title="Link" id={`${name}.${index}.url`} />
    <KeyValueForm title="Tags" id={`${name}.${index}.tags`} type="text" />
    <KeyValueForm title="Category" id={`${name}.${index}.category`} />
    <h5>Company</h5>
    <CompanyForm prefix={`${name}.${index}.company`} />
    <h5>Dates</h5>
    <DurationForm prefix={`${name}.${index}`} />
    <h5>Location</h5>
    <LocationForm prefix={`${name}.${index}.location`} />
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
    <div className="inner">
      <h3>{values[index].title} </h3>
      <Fragment>
        <GeneralInfoForm name={name} index={index} />
        <DescriptionForm name={name} values={values} index={index} />
        <FormButton />
      </Fragment>
    </div>
  );
};

const CardLinkForm = ({ values, index, name }) => {
  const [, key] = name.split(".");
  return (
    <Fragment>
      <h3>
        <Link to={`/edit/${key}/${values[index].id}`}>{values[index].title}</Link>
      </h3>
    </Fragment>
  );
};

const CardsListForm = ({ name, values }) => (
  <ArrayForm
    className="cards-list"
    name={name}
    array={values}
    initial={{
      id: values.length,
      category: name.indexOf("portfolio") === -1 ? 0 : undefined,
      title: "New Item",
      tags: "",
      brief: "",
      items: [],
      start: "",
      end: "",
      url: "",
      location: name.indexOf("portfolio") === -1 ? { zip: "", country: "" } : undefined,
      company: { url: "", name: "" },
    }}
    render={(index) => <CardLinkForm name={name} values={values} index={index} />}
  />
);

const CardTable = ({ items, id, title, name }) => (
  <Section id={id} title={title}>
    <CardsListForm name={name} values={items} />
  </Section>
);

export { CardForm, CardTable };
