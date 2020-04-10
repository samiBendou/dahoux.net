import {Button, Collapse} from "react-bootstrap";
import React from "react";

const CollapseText = (props) => {
    const button = (
        <Button
            variant="link"
            className="collapse-more"
            onClick={props.onClick}
            aria-controls={props.id}
            aria-expanded={props.showText}
        >
            <span className="collapse-more-text">Read {props.showText ? "Less" : "More"}</span>
        </Button>
    );
    const collapse = (
        <Collapse in={props.showText}>
            <div id={props.id} className={"collapse-text"}>
                <ul>
                    {
                        props.items.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                </ul>
            </div>
        </Collapse>
    );
    return (
        <div>
            <p className="timeline-item-brief">{props.brief}</p>
            {props.after ? collapse : button}
            {props.after ? button : collapse}

        </div>
    );
};

export default CollapseText;