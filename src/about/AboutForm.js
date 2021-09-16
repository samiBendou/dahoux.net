import { FastField } from "formik";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrayForm, KeyValueForm, LocationForm, TextAreaForm } from "../common/forms";
import { AboutTitle } from "../common/titles";
import { Section } from "../common/wrappers";

const GeneralInfoForm = () => (
  <div>
    <h2>Basic info</h2>
    <KeyValueForm id="username" title="Username" />
    <KeyValueForm id="firstName" title="First Name" />
    <KeyValueForm id="lastName" title="Last Name" />
    <KeyValueForm id="mail" title="Email Address" />
    <KeyValueForm id="birthday" type="date" title="Birthday" />
  </div>
);

const DescriptionForm = ({ values }) => (
  <div>
    <h2>Description</h2>
    <h3>Summary</h3>
    <TextAreaForm id="quote" title="Quote" />
    <TextAreaForm id="brief" title="Brief" />
    <h3>About</h3>
    <ArrayForm
      className="about-list"
      name="items.about"
      array={values.items.about}
      initial={{ title: "", text: "" }}
      render={(index) => (
        <Fragment>
          <FastField spellcheck="true" type="text" name={`items.about.${index}.title`} />
          <FastField as="textarea" spellcheck="true" type="text" name={`items.about.${index}.text`} />
        </Fragment>
      )}
    />
  </div>
);

const LinksForm = () => (
  <div>
    <h2>Links</h2>
    <KeyValueForm id="urls.portfolio" title="Portfolio" type="url" />
    <KeyValueForm id="urls.github" title="GitHub" type="url" />
    <KeyValueForm id="urls.linkedin" title="Linkedin" type="url" />
  </div>
);

const AboutForm = ({ values }) => (
  <div className="edit-form">
    <GeneralInfoForm />
    <DescriptionForm values={values} />
    <h2>Location</h2>
    <LocationForm prefix="location" />
    <LinksForm />
    <div className="btn-bar">
      <button className="btn-submit" type="submit">
        Submit
      </button>
    </div>
  </div>
);

const AboutTable = () => (
  <Section id="about-table" title={<AboutTitle />}>
    <h3>
      <Link to="/admin/general">Edit infos</Link>
    </h3>
  </Section>
);

export { AboutForm, AboutTable };
