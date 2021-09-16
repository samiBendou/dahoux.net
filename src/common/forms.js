import React, { Fragment } from "react";
import { FastField, FieldArray } from "formik";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const KeyValueForm = ({ title, id, type }) => (
  <div className="form-group">
    <label htmlFor={id}>{title}</label>
    <FastField id={id} name={id} type={type || "text"} />
  </div>
);

const TextAreaForm = ({ title, id }) => (
  <div className="form-text">
    <label htmlFor={id}>{title}</label>
    <FastField as="textarea" spellCheck={true} id={id} name={id} type="text" />
  </div>
);

const LocationForm = ({ prefix }) => (
  <div>
    <KeyValueForm id={`${prefix}.zip`} title="Zip Code" />
    <KeyValueForm id={`${prefix}.country`} title="Country" />
  </div>
);

const CompanyForm = ({ prefix }) => (
  <div>
    <KeyValueForm id={`${prefix}.name`} title="Name" />
    <KeyValueForm id={`${prefix}.url`} title="Link" />
  </div>
);

const DurationForm = ({ prefix }) => (
  <div>
    <KeyValueForm id={`${prefix}.start`} type="date" title="Start" />
    <KeyValueForm id={`${prefix}.end`} type="date" title="End" />
  </div>
);

const ArrayForm = ({ name, array, render, initial, className }) => (
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

export { KeyValueForm, TextAreaForm, ArrayForm, LocationForm, CompanyForm, DurationForm as DateForm };
