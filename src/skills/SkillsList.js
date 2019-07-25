import React, {Component} from 'react';
import SkillsItem from './SkillsItem';

export default class SkillsList extends Component {
    constructor(props) {
        super(props);
        this.state = {collapsed: true, hidden: true};
    }

    componentDidMount= () => {
        this.restartTimers();
    };

    restartTimers = () => {
        setTimeout(() => this.setState({collapsed: false}), 0);
        setTimeout(() => this.setState({hidden: false}), 700);
    };

    renderListWithItems = (items) => {
        const className = `${this.state.collapsed ? 'collapsed' : ''} ${this.state.hidden ? 'hidden' : ''}`;
        return (
            <div className = {className}>
                <ul className="skills">
                    {items.map((item) =>
                        <SkillsItem
                            label={item.label}
                            level={item.level}
                            type={item.type}
                            key={item.label}
                        />)}
                </ul>
            </div>);
    };

    render() {
        return this.renderListWithItems(this.props.items);
    }
}