import React from "react"
import {Accordion, Button} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import SkillsList from "./SkillsList";
import '../scss/Skills.scss';

function capitalizeFirstLetter(string) {
    // noinspection JSUnresolvedFunction
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const SkillsAccordion = (props) => {
    const categories = new Array(...(new Set(props.items.map(item => item.category))));
    const items = new Map(categories.map(category => [category, []]));
    props.items.forEach(item => items.get(item.category).push(item));
    return (
        <Accordion>
            {
                categories.map((category, index) => (
                    <Card className="skills-accordion-card" key={category}>
                        <div>
                            <Accordion.Toggle as={Button} variant="link" eventKey={index.toString()}>
                                {capitalizeFirstLetter(category)}
                            </Accordion.Toggle>
                        </div>
                        <Accordion.Collapse eventKey={index.toString()}>
                            <div>
                                <SkillsList items={items.get(category)}/>
                            </div>
                        </Accordion.Collapse>
                    </Card>
                ))
            }
        </Accordion>
    );
};

export default SkillsAccordion