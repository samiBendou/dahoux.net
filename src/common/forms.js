import React, { Fragment } from "react";
import { FastField, FieldArray } from "formik";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

export const FormButton = () => (
  <div className="btn-bar">
    <button className="btn-submit" type="submit">
      Submit
    </button>
  </div>
);

export const LogButton = () => (
  <div className="btn-bar">
    <button className="btn-login" type="submit">
      Login
    </button>
  </div>
);

export const KeyValueForm = ({ title, id, type }) => (
  <div className="form-group">
    <label htmlFor={id}>{title}</label>
    <FastField id={id} name={id} type={type || "text"} />
  </div>
);

export const TextAreaForm = ({ title, id }) => (
  <div className="form-group">
    <label htmlFor={id}>{title}</label>
    <FastField as="textarea" spellCheck={true} id={id} name={id} type="text" />
  </div>
);

export const LocationForm = ({ prefix }) => (
  <div>
    <KeyValueForm id={`${prefix}.zip`} title="Zip Code" />
    <KeyValueForm id={`${prefix}.country`} title="Country" />
  </div>
);

export const CompanyForm = ({ prefix }) => (
  <div>
    <KeyValueForm id={`${prefix}.name`} title="Name" />
    <KeyValueForm id={`${prefix}.url`} title="Link" />
  </div>
);

export const DurationForm = ({ prefix }) => (
  <div>
    <KeyValueForm id={`${prefix}.start`} type="date" title="Start" />
    <KeyValueForm id={`${prefix}.end`} type="date" title="End" />
  </div>
);

export const LoginForm = () => (
  <div>
    <KeyValueForm id="username" title="Username" />
    <KeyValueForm id="password" title="Password" type="password" />
  </div>
);

export const ArrayForm = ({ name, array, render, initial, className }) => (
  <div className={className}>
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <Fragment>
          {array && array.length > 0 ? (
            array.map((item, index) => (
              <div key={index} className="form-row">
                <div className="inner">{render(index)}</div>
                <div className="action">
                  <button type="button" onClick={() => arrayHelpers.remove(index)}>
                    <FaMinusCircle />
                  </button>
                  &nbsp;
                  <button type="button" onClick={() => arrayHelpers.insert(index, initial)}>
                    <FaPlusCircle />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <button type="button" onClick={() => arrayHelpers.push(initial)}>
              Add
            </button>
          )}
        </Fragment>
      )}
    />
  </div>
);
