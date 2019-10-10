import React from "react";
import {FaBirthdayCake} from "react-icons/fa";
import {renderAge} from "./core/date";

const BirthdayText = (props) => {
    return (
        <h6>
            <FaBirthdayCake style={{verticalAlign: "top"}}/>
            <span> {renderAge(new Date(props.birthday))} years</span>
        </h6>)
};

export default BirthdayText;