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
        string = `${date.getFullYear()}/${renderMonth(date.getMonth())}`;
    }
    if (props.duration < 2) {
        string = date.toDateString();
    } else if (props.duration < 60) {
        string = `${date.getFullYear()}/${renderMonth(date.getMonth())}, ${props.duration} days`;
    } else if (props.duration < 730) {
        string = `${date.getFullYear()}/${renderMonth(date.getMonth())}, ${Math.round(props.duration / day.month)} months`;
    } else {
        string = `${date.getFullYear()}-${date.getFullYear() + props.duration / day.year}, ${props.duration / day.year} years`;
    }
    return <time>{string}</time>;
};

export default DateText;