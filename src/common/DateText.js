import React from "react";
import {renderDateString} from "./date.js";

const DateText = (props) => (
    <time>{renderDateString(new Date(props.date), props.duration)}</time>
);

export default DateText;