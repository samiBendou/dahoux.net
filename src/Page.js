import React from "react";
import About from "./about/About";
import {Container} from "react-bootstrap";
import Skills from "./skills/Skills";
import Timeline from "./timeline/Timeline";
import Contact from "./contact/Contact";
import Brief from "./brief/Brief";
import Portfolio from "./portfolio/Portfolio";

const Page = (props) => (
    <div>
        <About data={props.data}/>
        <Container>
            <Brief brief={props.data.brief}/>
            <Skills items={props.data.items.skills}/>
            <Portfolio items={props.data.items.portfolio}/>
            <Timeline items={props.data.items.timeline}/>
            <Contact mail={props.data.mail}/>
            <h6 className="copyright-text">© Sami Dahoux 2020, All Rights Reserved</h6>
        </Container>
    </div>
);

export default Page;