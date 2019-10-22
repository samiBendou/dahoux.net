import React from 'react';
import TimelineItem from './TimelineItem'

const TimelineList = ({items}) => {
    const sortedItems = items.slice().sort((a, b) => new Date(b.end) - new Date(a.end));
    return (<div className="timeline-container">
        {sortedItems.map((item) => (
            <TimelineItem
                category={item.category}
                title={item.title}
                brief={item.brief}
                items={item.items}
                start={item.start}
                end={item.end}
                key={item.title + "&" + item.start}
                id={item.title + "&" + item.start}
                company={item.company}
                location={item.location}
            />
        ))}
    </div>);
};



export default TimelineList;