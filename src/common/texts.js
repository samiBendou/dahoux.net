import Emoji from "a11y-react-emoji";
import React from "react";
import { FaBirthdayCake, FaExternalLinkAlt, FaMapMarker } from "react-icons/fa";
import { renderAge, renderDate } from "./core/date";
import { renderLocationText, renderLocationURL } from "./core/location";

export const CopyrightText = () => <h2 id="copyright">© Sami Dahoux 2017-2021, All Rights Reserved</h2>;

export const BirthdayText = (props) => {
  return (
    <span className="text-birthday">
      <FaBirthdayCake className="icon" />
      <span> {renderAge(new Date(props.birthday))} years old</span>
    </span>
  );
};

export const CompanyText = (props) => {
  return (
    <span className="text-company">
      <a href={props.url}>
        <FaExternalLinkAlt className="icon" />

        <span> {props.name}</span>
      </a>
    </span>
  );
};

export const DateText = (props) => (
  <time>{renderDate(new Date(props.start), props.end ? new Date(props.end) : undefined)}</time>
);

export const LocationText = (props) => {
  return (
    <span className="text-location">
      <a href={renderLocationURL(props.location)}>
        <FaMapMarker className="icon" />
      </a>
      <span> {renderLocationText(props.location, props.county)}</span>
    </span>
  );
};

export const ExternalLinkText = ({ url, title }) => {
  return (
    <span className="text-location">
      <a href={url}>
        <FaExternalLinkAlt className="icon" />

        <span> {title}</span>
      </a>
    </span>
  );
};

export const EmojiText = (props) => (
  <h2>
    <Emoji symbol={props.symbol} />
    <br />
    {props.children}
  </h2>
);
