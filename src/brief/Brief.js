import React from 'react';
import {FaUserCircle} from "react-icons/fa";

const Brief = (props) => (
    <div id="brief">
        <h1 className="text-header"><FaUserCircle style={{verticalAlign: "top"}}/> Brief</h1>
        <p className="text-brief" style={{fontSize:"18pt"}}>{props.brief}</p>
    </div>
);

export default Brief;