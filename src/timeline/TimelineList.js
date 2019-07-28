import React from 'react';
import TimelineItem from './TimelineItem'

const TimelineList = ({items}) => {
    const sortedItems = items.slice().sort((a, b) => (a.date + a.duration) - (b.date + b.duration));
    return (<div className="timeline-container">
        {sortedItems.map((item) => (
            <TimelineItem
                category={item.category}
                title={item.title}
                text={item.text}
                date={item.date}
                duration={item.duration}
                key={item.title + "&" + item.date.toUTCString()}
                company={item.company}
                location={item.location}
            />
        ))}
    </div>);
};



export default TimelineList;