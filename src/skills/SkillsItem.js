import React from 'react';
import '../scss/Skills.scss';
import SkillsCategory from "./SkillsCategory";

const SkillsItem = (props) => {
    return (
        <div className="skills-item-container">
            <div
                className={`skills-item ${SkillsCategory[props.category]
                    .toLowerCase()
                    .replace(" ", "-")
                    .replace("&", "")
                    .replace(" ", "")}`}
            >
                <h6 style={{margin: 0}}>{props.label} {props.mention ? `- ${props.mention}` : ''}</h6>
            </div>
        </div>
    );
};

export default SkillsItem
