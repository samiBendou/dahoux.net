import React from 'react';
import PortfolioItem from './PortfolioItem'

const PortfolioList = ({items}) => {
    const sortedItems = items.slice().sort((a, b) => new Date(b.start) - new Date(a.start));
    return (<div className="portfolio-container">
        {sortedItems.map((item) => (
            <PortfolioItem
                tags={item.tags}
                title={item.title}
                start={item.start}
                end={item.end}
                brief={item.brief}
                items={item.items}
                url={item.url}
                key={item.title}
            />
        ))}
    </div>);
};

export default PortfolioList;