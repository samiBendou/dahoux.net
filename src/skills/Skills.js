import React, {Component} from 'react';
import SkillsList from './SkillsList';
import {Collapse, Button} from "react-bootstrap";
import '../scss/Skills.scss';
import SkillsAccordion from "./SkillsAccordion";

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {showAllSkills: false};
    }

    onClick = () => {
        this.setState({showAllSkills: !this.state.showAllSkills});
    };

    render() {
        const showAllSkills = this.state.showAllSkills;
        const items = this.props.items;
        return (
            <div id="skills" style={{textAlign: "center"}}>
                <div className="skills-best">
                    <SkillsList items={items.filter(item => item.category === 1)} count={3}/>
                </div>
                <Button
                    size="lg"
                    className="skills-more"
                    onClick={this.onClick}
                    aria-controls="skills-list"
                    aria-expanded={showAllSkills}
                >
                    {showAllSkills ? "Less" : "More"} Skills</Button>
                <div>
                    <Collapse in={showAllSkills}>
                        <div id="skills-list" className="skills skills-accordion">
                            <SkillsAccordion items={items}/>
                        </div>
                    </Collapse>
                </div>
            </div>)
    }
}