import React from 'react';
import TimelineList from './TimelineList'
import {FaBriefcase} from "react-icons/fa";

const Timeline = (props) => (
    <div>
        <h3 className="timeline-header"><FaBriefcase style={{verticalAlign: "top"}}/> Timeline</h3>
        <TimelineList items={props.items}/>
    </div>
);

export default Timeline;