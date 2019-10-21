import React from 'react';
import {FaUserCircle} from "react-icons/fa";

const Brief = (props) => (
    <div id="brief">
        <h1 className="text-header"><FaUserCircle style={{verticalAlign: "top"}}/> Brief</h1>
        <h5 className="text-brief"><em>{props.brief}</em></h5>
    </div>
);

export default Brief;