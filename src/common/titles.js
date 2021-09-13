import React from "react";
import { Fragment } from "react";

const PageTitle = () => (
  <span>
    <em>bendou</em>.space
  </span>
);

const IconTitle = ({ icon, title }) => (
  <Fragment>
    <span className="icon">{icon}</span> {title}
  </Fragment>
);

export { PageTitle, IconTitle };
