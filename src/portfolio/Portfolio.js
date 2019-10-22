import React from 'react';
import {FaDraftingCompass} from "react-icons/fa";
import PortfolioList from "./PortfolioList";

const Portfolio = (props) => (
    <div id="portfolio">
        <h1 className="text-header"><FaDraftingCompass style={{verticalAlign: "top"}}/> Portfolio</h1>
        <PortfolioList items={props.items}/>
    </div>
);

export default Portfolio;