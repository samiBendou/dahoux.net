import React from 'react';
import '../scss/Timeline.scss'

const TimelineItem = (props) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{background: props.category.color}}>
                {props.category.tag}
            </span>
            <time>{props.date}</time>
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
);

export default TimelineItem;