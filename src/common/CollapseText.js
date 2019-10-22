import {Button, Collapse} from "react-bootstrap";
import React from "react";

const CollapseText = (props) => (
    <div>
        <Button
            variant="link"
            className="collapse-more"
            onClick={props.onClick}
            aria-controls={props.id}
            aria-expanded={props.showText}
        >
            <span className="collapse-more-text">Read {props.showText ? "Less" : "More"}</span>
        </Button>
        <Collapse in={props.showText}>
            <div id={props.id} className={"collapse-text"}>
                <p>{props.brief}</p>
                <ul>
                    {
                        props.items.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                </ul>
            </div>
        </Collapse>
    </div>
);

export default CollapseText;