import React from "react";
import {FaMapMarker} from "react-icons/fa";
import {renderLocationText, renderLocationURL} from "./core/location";

const LocationText = (props) => {
    return (
        <h6>
            <a href={renderLocationURL(props.location)}><FaMapMarker style={{verticalAlign: "top"}}/></a>
            <span> {renderLocationText(props.location, props.county)}</span>
        </h6>);
};

export default LocationText;