import React from "react";
import ms from "./ms";

const BirthdayText = (props) => {
    return <p>{Math.floor((new Date() - props.birthday) / ms.year)} years</p>
};

export default BirthdayText;