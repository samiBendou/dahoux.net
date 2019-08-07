import React, {Component} from 'react';
import '../scss/Timeline.scss'
import DateText from "../common/DateText";
import AddressText from "../common/AddressText";
import {Button, Collapse} from "react-bootstrap";
import TimelineCategory from "./TimelineCategory";

export default class TimelineItem extends Component {

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
            <div className="timeline-item">
                <div className="timeline-item-content">
            <span className={`timeline-tag ${TimelineCategory[props.category].title.toLowerCase()}`}>
                {TimelineCategory[props.category].title}
            </span>
                    <DateText date={props.date} duration={props.duration}/>
                    <h4>{props.title}</h4>
                    <AddressText location={props.location}/>
                    <a href={props.company.url}>{props.company.name}</a>

                    <Button
                        variant="link"
                        className="timeline-more"
                        onClick={this.onClick}
                        aria-controls="timeline-text"
                        aria-expanded={showText}
                    >
                        Read {showText ? "Less" : "More"}
                    </Button>

                    <Collapse in={showText}>
                        <div id="timeline-text">
                            <p>{props.text}</p>
                        </div>
                    </Collapse>
                    <span className="circle"/>
                </div>
            </div>
        );
    }
}