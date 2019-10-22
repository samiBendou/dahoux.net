import React from "react";
import {renderDate} from "./core/date.js";

const DateText = (props) => (

    <time>{renderDate(new Date(props.start), props.end ? new Date(props.end) : undefined)}</time>
);

export default DateText;