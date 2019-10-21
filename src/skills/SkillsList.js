import React, {Component} from 'react';
import SkillsItem from './SkillsItem';

export default class SkillsList extends Component {
    constructor(props) {
        super(props);
        this.state = {collapsed: true, hidden: true};
    }

    componentDidMount() {
        setTimeout(() => this.setState({collapsed: false}), 0);
        setTimeout(() => this.setState({hidden: false}), 700);
    }

    render() {
        const sortedItems = this.props.items.sort((a, b) => b.level - a.level);
        const slicedItems = this.props.count ? sortedItems.slice(0, this.props.count) : sortedItems;
        const filteredItems = slicedItems.filter(item => item.level > 0);
        const className = `${this.state.collapsed ? 'collapsed' : ''} ${this.state.hidden ? 'hidden' : ''}`;

        let scale = <span/>;
        if(this.props.showScale) {
            scale = (
                <div className="skills-scale" style={{display: "flex", flexDirection: "row"}}>
                    <div>0</div>
                    <div style={{flexGrow:1, textAlign: "right"}}>10</div>
                </div>
            );
        }

        return (
            <div className={className}>
                {scale}
                <div className="skills">
                    {filteredItems.map((item) =>
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