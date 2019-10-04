import React from 'react';
import '../scss/Skills.scss';

const SkillsItem = (props) => {
    return (
        <li
            style={{width: `${props.level * 10}%`}}
        >
            <h6>{props.label}</h6>
        </li>
    );
};

export default SkillsItem
