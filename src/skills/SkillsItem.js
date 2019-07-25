import React from 'react';
import './Skills.scss';

/*
const TypeColors = {
    Technical: "grey",
    Management: "blue",
    Science: "green",
    Language: "red"
};
*/

const SkillsItem = (props) => {
    return (
        <li className="bouncing"
            style={{width: `${props.level}%`}}
        >
            <p>{props.label}<span>{props.level}</span></p>
        </li>
    );
};

export default SkillsItem
