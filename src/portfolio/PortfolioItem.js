import React, {Component} from 'react';
import '../scss/Portfolio.scss'
import DateText from "../common/DateText";
import CollapseText from "../common/CollapseText";
import {FaExternalLinkAlt} from "react-icons/fa";

export default class PortfolioItem extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: false};
    }

    onClick = () => {
        this.setState({showText: !this.state.showText})
    };

    render() {
        const props = this.props, showText = this.state.showText;
        return (
            <div className={`portfolio-item`}>
                <h4><a href={props.url}><FaExternalLinkAlt style={{verticalAlign: "top"}}/></a> {props.title}</h4>
                {props.tags.map(tag => (
                    <span className={`portfolio-tag ${tag}`} key={tag}>
                        {tag}
                    </span>
                ))}
                <p><DateText start={props.start} end={props.end}/></p>
                <p>{props.brief}</p>
                <CollapseText onClick={this.onClick} showText={showText} brief={""} items={props.items}/>
            </div>
        );
    }
}