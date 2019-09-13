import React from "react";
import About from "./about/About";
import {Container, Jumbotron} from "react-bootstrap";
import Skills from "./skills/Skills";
import Timeline from "./timeline/Timeline";
import Contact from "./contact/Contact";

const Page = (props) => (
    <div>
        <About data={props.data}/>
        <Container>
            <Skills items={props.data.items.skills}/>
            <Timeline items={props.data.items.timeline}/>
            <Jumbotron id="contact">
                <Contact
                    mail={props.data.mail}
                />
            </Jumbotron>
            <h6 className="copyright-text">© Sami Dahoux 2019, All Rights Reserved</h6>
        </Container>
    </div>
);

export default Page;