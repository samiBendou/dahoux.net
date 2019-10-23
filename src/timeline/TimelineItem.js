import React, {Component} from 'react';
import '../scss/Timeline.scss'
import DateText from "../common/DateText";
import LocationText from "../common/LocationText";
import TimelineCategory from "./TimelineCategory";
import CollapseText from "../common/CollapseText";
import CompanyText from "../common/CompanyText";

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
        const onClick = this.onClick;
        return (
            <div className="timeline-item">
                <div className={`timeline-item-content ${showText ? "show" : ""}`}>
                    <span className={`timeline-tag ${TimelineCategory[props.category].toLowerCase()}`}>
                        {TimelineCategory[props.category]}
                    </span>
                    <DateText start={props.start} end={props.end}/>
                    <h4>{props.title}</h4>
                    <LocationText location={props.location} county={false}/>
                    <CompanyText url={props.company.url} name={props.company.name}/>
                    <CollapseText
                        onClick={onClick}
                        showText={showText}
                        brief={props.brief}
                        items={props.items}
                        id={props.id}
                    />
                    <span className="circle"/>
                </div>
            </div>
        );
    }
}