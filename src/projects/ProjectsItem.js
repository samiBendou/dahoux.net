import React, {Component} from 'react';
import '../scss/Projects.scss'
import '../scss/Backlog.scss'
import DateText from "../common/DateText";
import {FaExternalLinkAlt} from "react-icons/fa";
import titleToLabel from "../common/core/tags";

export default class ProjectsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: false};
    }

    render() {
        const props = this.props;
        return (
            <div className="backlog-item">
                <h2><a href={props.url}><FaExternalLinkAlt className="icon-header"/></a> {props.title}</h2>
                <h4><DateText start={props.start} end={props.end}/></h4>
                <div className="backlog-tags-list">
                    {props.tags.map(tag => (
                        <div className={`tag ${titleToLabel(tag)}`} key={tag}>
                            {tag}
                        </div>))}
                </div>
                <p className="backlog-item-brief">{props.brief}</p>
                <ul className="backlog-item-items">
                    {
                        props.items.map(item => <li>{item}</li>)
                    }
                </ul>
            </div>
        );
    }
}