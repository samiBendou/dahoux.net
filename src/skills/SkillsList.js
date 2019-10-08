import React, {Component} from 'react';
import SkillsItem from './SkillsItem';

const getBestItems = (items, count) => {
    return items.slice().sort((a, b) => a.level - b.level).slice(-count);
};

export default class SkillsList extends Component {
    constructor(props) {
        super(props);
        this.state = {collapsed: true, hidden: true};
    }

    componentDidMount() {
        setTimeout(() => this.setState({collapsed: false}), 0);
        setTimeout(() => this.setState({hidden: false}), 700);
    }

    fetchItems(items) {
        return (this.props.count ? getBestItems(items, this.props.count) : items).filter(item => item.level > 0);
    }

    render() {
        const items = this.fetchItems(this.props.items);
        const className = `${this.state.collapsed ? 'collapsed' : ''} ${this.state.hidden ? 'hidden' : ''}`;
        return (
            <div className={className}>
                {/*
                <div className="skills-scale" style={{display: "flex", flexDirection: "row"}}>
                    <div>0</div>
                    <div style={{flexGrow:1, textAlign: "right"}}>10</div>
                </div>
                */}
                <div className="skills">
                    {items.map((item) =>
                        <SkillsItem
                            label={item.label}
                            level={item.level}
                            type={item.type}
                            key={item.label}
                        />)}
                </div>
            </div>);
    }
}