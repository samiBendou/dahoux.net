import React, {Component} from 'react';
import '../scss/Projects.scss'
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
            <div className="projects-item">
                <h2><a href={props.url}><FaExternalLinkAlt className="icon-header"/></a> {props.title}</h2>
                <h4><DateText start={props.start} end={props.end}/></h4>
                <div className="projects-tags-list">
                    {props.tags.map(tag => (
                        <div className={`projects-tag ${titleToLabel(tag)}`} key={tag}>
                            {tag}
                        </div>))}
                </div>
                <p className="projects-text">{props.brief}</p>
                <ul>
                    {
                        props.items.map(item => <li>{item}</li>)
                    }
                </ul>

            </div>
        );
    }
}