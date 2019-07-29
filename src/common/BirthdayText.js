import React from "react";
import ms from "./ms";
import {FaBirthdayCake} from "react-icons/fa";

const BirthdayText = (props) => {
    return <h6><FaBirthdayCake/> {Math.floor((new Date() - props.birthday) / ms.year)} years</h6>
};

export default BirthdayText;