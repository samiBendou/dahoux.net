import React from 'react';
import SkillsList from './SkillsList';
import '../scss/Skills.scss';
import {FaWrench} from "react-icons/fa";

const Skills = (props) => {
    const items = props.items;
    const categories = new Array(...(new Set(items.map(item => item.category))));
    const itemsByCategory = new Map(categories.map(category => [category, []]));
    items.forEach(item => itemsByCategory.get(item.category).push(item));
    return (
        <div id="skills" style={{textAlign: "center"}}>
            <h1 className="text-header"><FaWrench style={{verticalAlign: "top"}}/>  Skills</h1>
            <div className="skills-list">
                {
                    categories.map((category) => category < 6 ? (
                        <SkillsList className="skills-stack" items={itemsByCategory.get(category)}/>
                    ) : null)
                }
            </div>
        </div>)
}

export default Skills;