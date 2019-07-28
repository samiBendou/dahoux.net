import React from 'react';
import '../scss/Timeline.scss'
import DateText from "../common/DateText";

const TimelineItem = (props) => {
    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
            <span className="tag" style={{background: props.category.color}}>
                {props.category.tag}
            </span>
                <DateText date={props.date} duration={props.duration}/>
                <p>{props.title}</p>
                <p>{props.text}</p>
                {props.link && (
                    <a
                        href={props.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {props.link.text}
                    </a>
                )}
                <span className="circle"/>
            </div>
        </div>
    )
};

export default TimelineItem;