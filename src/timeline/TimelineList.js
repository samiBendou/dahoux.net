import React from 'react';
import TimelineItem from './TimelineItem'

const TimelineList = ({items}) => {
    const sortedItems = items.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    return (<div className="timeline-container">
        {sortedItems.map((item) => (
            <TimelineItem
                category={item.category}
                title={item.title}
                text={item.text}
                date={item.date}
                duration={item.duration}
                key={item.title + "&" + item.date}
                company={item.company}
                location={item.location}
            />
        ))}
    </div>);
};



export default TimelineList;