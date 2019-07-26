import React from 'react';
import TimelineItem from './TimelineItem'

const TimelineList = ({items}) =>
    (<div className="timeline-container">
            {items.map((item, index) => (
                <TimelineItem
                    category={item.category}
                    text={item.text}
                    date={item.date}
                    key={item.link.url}
                    link={item.link}
                    />
            ))}
        </div>);


export default TimelineList;