import React from "react"
import {Accordion, Button} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import SkillsList from "./SkillsList";
import '../scss/Skills.scss';
import SkillsCategory from "./SkillsCategory";

const SkillsAccordion = (props) => {
    const categories = new Array(...(new Set(props.items.map(item => item.category))));
    const items = new Map(categories.map(category => [category, []]));
    props.items.forEach(item => items.get(item.category).push(item));
    return (
        <Accordion className="skills-accordion-cards">
            {
                categories.map((category, index) => (
                    <Card className="skills-accordion-card" key={category}>
                        <div>
                            <Accordion.Toggle as={Button} variant="link" eventKey={index.toString()}>
                                <h4>{SkillsCategory[category]}</h4>
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