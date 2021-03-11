import React, {Component} from 'react';
import '../scss/Portfolio.scss'
import DateText from "../common/DateText";
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
        const onClick = this.onClick;
        const props = this.props, showText = this.state.showText;
        return (
            <div className={`portfolio-item ${showText ? "show" : ""}`}>
                <h4><a href={props.url}><FaExternalLinkAlt className="icon-header"/></a> {props.title}</h4>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    {props.tags.map(tag => (
                        <div className={`portfolio-tag ${tag}`} key={tag}>
                        {tag}
                    </div>
                    ))}
                </div>
                <p><DateText start={props.start} end={props.end}/></p>
                <p className="portfolio-text">{props.brief}</p>
                <p>{props.items}</p>
            </div>
        );
    }
}