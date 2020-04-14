import React from 'react';
import '../scss/Skills.scss';

const SkillsItem = (props) => {
    return (
        <div className="skills-item-container">
            <div
                className="skills-item" style={{width: "100%"}}
            >
                <h6 style={{margin: 0}}>{props.label} {props.mention ? `- ${props.mention}` : ''}</h6>
            </div>
        </div>
    );
};

export default SkillsItem
