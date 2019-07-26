import React from 'react';
import '../scss/Skills.scss';

const SkillsItem = (props) => {
    return (
        <li
            style={{width: `${props.level}%`}}
        >
            <p>{props.label}<span>{props.level}</span></p>
        </li>
    );
};

export default SkillsItem
