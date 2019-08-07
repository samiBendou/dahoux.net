import React from "react";
import ms from "./ms";

const renderMonth = (month) => {
    const shifted = month + 1;
    return `${shifted > 9 ? '' : '0'}${shifted}`;
};

const DateText = (props) => {
    const date = new Date(props.date);
    let string;
    if (props.duration === undefined) {
        string = `${renderMonth(date.getMonth())}/${date.getFullYear()}`;
    }
    if (props.duration < 2) {
        string = date.toDateString();
    } else if (props.duration < 60) {
        string = `${renderMonth(date.getMonth())}/${date.getFullYear()} - ${props.duration} days`;
    } else if (props.duration < 365) {
        string = `${date.getFullYear()} - ${props.duration / ms.month} months`;
    } else {
        string = `${date.getFullYear()} - ${props.duration / ms.month} years`;
    }
    return <time>{string}</time>;
};

export default DateText;