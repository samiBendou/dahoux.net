import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { renderAge } from "./core/date";

const BirthdayText = (props) => {
  return (
    <span className="text-birthday">
      <FaBirthdayCake className="icon" />
      <span> {renderAge(new Date(props.birthday))} years old</span>
    </span>
  );
};

export default BirthdayText;
