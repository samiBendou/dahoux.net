import React from 'react';
import TimelineItem from './TimelineItem'

const TimelineList = ({items}) => {
    const inf = Number.POSITIVE_INFINITY;
    const sortedItems = items.slice().sort((a, b) => (b.duration || inf) - (a.duration || inf));
    return (<div className="timeline-container">
        {sortedItems.map((item) => (
            <TimelineItem
                category={item.category}
                title={item.title}
                text={item.text}
                start={item.start}
                duration={item.duration}
                key={item.title + "&" + item.start}
                company={item.company}
                location={item.location}
            />
        ))}
    </div>);
};



export default TimelineList;