import React, {Component} from 'react';
import '../scss/Timeline.scss'
import '../scss/Backlog.scss'
import DateText from "../common/DateText";
import LocationText from "../common/LocationText";
import TimelineCategory from "./TimelineCategory";
import CompanyText from "../common/CompanyText";
import titleToLabel from "../common/core/tags";

export default class TimelineItem extends Component {

    constructor(props) {
        super(props);
        this.state = {showText: false};
    }

    render() {
        const props = this.props;
        return (
            <div className="backlog-item">
                <div className="backlog-tags-list">
                    {[TimelineCategory[props.category], ...(props.tags || [])].map(tag => (
                        <div className={`tag ${titleToLabel(tag)}`} key={tag}>
                            {tag}
                        </div>))}
                </div>
                <h4><DateText start={props.start} end={props.end}/></h4>
                <h2>{props.title}</h2>
                <h3><CompanyText url={props.company.url} name={props.company.name}/></h3>
                <h3><LocationText location={props.location} county={false}/></h3>
                <p className="backlog-item-brief">{props.brief}</p>
                <ul className="backlog-item-items">
                    {
                        props.items.map(item => <li>{item}</li>)
                    }
                </ul>
                <span className="circle"/>

            </div>
        );
    }
}