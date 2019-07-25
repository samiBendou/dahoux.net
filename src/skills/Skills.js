import React, {Component} from 'react';
import SkillsList from './SkillsList';
import SkillsBestOf from './SkillsBestOf';
import Button from "react-bootstrap/Button";

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
            <div id="skills" style={{textAlign: "center", transition: "all 1s"}}>
                {showAllSkills ? <SkillsList items={items}/> : <SkillsBestOf items={items}/>}
                <Button type="button" onClick={this.onClick}>Read more</Button>
            </div>);
    }
};