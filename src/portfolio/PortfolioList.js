import React from 'react';
import PortfolioItem from './PortfolioItem'

const PortfolioList = ({items}) => {
    return (<div className="portfolio-container">
        {items.map((item) => (
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