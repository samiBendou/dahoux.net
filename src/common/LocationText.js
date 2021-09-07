import React from "react";
import { FaMapMarker } from "react-icons/fa";
import { renderLocationText, renderLocationURL } from "./core/location";

const LocationText = (props) => {
  return (
    <span className="text-location">
      <a href={renderLocationURL(props.location)}>
        <FaMapMarker className="icon-header" />
      </a>
      <span> {renderLocationText(props.location, props.county)}</span>
    </span>
  );
};

export default LocationText;
