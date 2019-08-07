import React from "react";
import day from "./day";

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
        string = `${renderMonth(date.getMonth())}/${date.getFullYear()}, ${props.duration} days`;
    } else if (props.duration < 365) {
        string = `${renderMonth(date.getMonth())}/${date.getFullYear()}, ${props.duration / day.month} months`;
    } else {
        string = `${date.getFullYear()}-${date.getFullYear() + props.duration / day.year}, ${props.duration / day.year} years`;
    }
    return <time>{string}</time>;
};

export default DateText;