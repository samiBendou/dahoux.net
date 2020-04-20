import React, {Component} from 'react';
import SkillsList from './SkillsList';
import {Button, Collapse} from "react-bootstrap";
import '../scss/Skills.scss';
import SkillsAccordion from "./SkillsAccordion";
import {FaWrench} from "react-icons/fa";

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
                <h1 className="text-header"><FaWrench style={{verticalAlign: "top"}}/>  Skills</h1>
                <div className="skills-best">
                    <SkillsList items={items.filter(item => item.category > 2 && item.category < 6)  } count={10} showScale={false}/>
                </div>
                <Button
                    className="skills-more"
                    onClick={this.onClick}
                    aria-controls="skills-list"
                    aria-expanded={showAllSkills}
                >
                    <h4 className={"skills-button"}>View More</h4>
                </Button>
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