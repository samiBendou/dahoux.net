import React, {Component} from 'react';
import SkillsList from './SkillsList';
import {Collapse, Button} from "react-bootstrap";
import '../scss/Skills.scss';

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
        const sortedItems = this.props.items.slice().sort((a, b) => a.level - b.level),
            bestItems = sortedItems.slice(-1),
            otherItems = sortedItems.slice(0, -1);
        return (
            <div id="skills" style={{textAlign: "center"}}>
                <SkillsList items={bestItems}/>
                <Button
                    onClick={this.onClick}
                    aria-controls="skills-list"
                    aria-expanded={showAllSkills}
                >
                    Read more</Button>
                <Collapse in={showAllSkills}>
                    <div id="skills-list" className="skills">
                        <SkillsList items={otherItems} />
                    </div>
                </Collapse>
                <div/>
            </div>)
    }
}