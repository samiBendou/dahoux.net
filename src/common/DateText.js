import React from "react";
import {renderDate} from "./core/date.js";

const DateText = (props) => (
    <time>{renderDate(new Date(props.start), new Date(props.end))}</time>
);

export default DateText;