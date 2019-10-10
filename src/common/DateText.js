import React from "react";
import {renderDate} from "./core/date.js";

const DateText = (props) => (
    <time>{renderDate(new Date(props.date), props.duration)}</time>
);

export default DateText;