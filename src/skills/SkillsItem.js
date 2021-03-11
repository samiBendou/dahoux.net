import React from 'react';
import '../scss/Skills.scss';
import SkillsCategory from "./SkillsCategory";
import titleToLabel from "../common/core/tags";

const SkillsItem = (props) => {
    return (
            <h3 className={`skills-item ${titleToLabel(SkillsCategory[props.category])}`}>{props.label} {props.mention ? `- ${props.mention}` : ''}</h3>
    );
};

export default SkillsItem
