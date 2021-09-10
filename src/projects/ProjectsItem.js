import React, { Component } from "react";
import "../scss/Projects.scss";
import "../scss/Backlog.scss";
import DateText from "../common/DateText";
import { FaExternalLinkAlt } from "react-icons/fa";
import titleToLabel from "../common/core/tags";

export default class ProjectsItem extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: false };
  }

  render() {
    const props = this.props;
    return (
      <div className="item">
        <h2 className="name">
          <a href={props.url}>
            <FaExternalLinkAlt className="icon" /> {props.title}
          </a>
        </h2>
        <h4>
          <DateText start={props.start} end={props.end} />
        </h4>
        <div className="tags-list">
          {props.tags.map((tag) => (
            <div className={`tag ${titleToLabel(tag)}`} key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <p className="brief">{props.brief}</p>
        <ul className="items-list">
          {props.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
