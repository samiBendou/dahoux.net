import React from 'react';
import ProjectsItem from './ProjectsItem'

const ProjectsList = ({items}) => {
    const sortedItems = items.slice().sort((a, b) => new Date(b.start) - new Date(a.start));
    return (
        <div className="projects-list">
            {sortedItems.map((item) => (
                <ProjectsItem
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

export default ProjectsList;