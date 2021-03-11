import React from "react";
import About from "./about/About";
import Skills from "./skills/Skills";
import Timeline from "./timeline/Timeline";
import Projects from "./portfolio/Projects";

const Page = (props) => (
    <div>
        <About data={props.data}/>
        <Skills items={props.data.items.skills}/>
        <Projects items={props.data.items.portfolio}/>
        <Timeline items={props.data.items.timeline}/>
        <p className="copyright-text">© Sami Dahoux 2021 - All Rights Reserved</p>
    </div>
);

export default Page;