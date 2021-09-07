import React from "react";
import About from "./about/About";
import Skills from "./skills/Skills";
import Timeline from "./timeline/Timeline";
import Projects from "./projects/Projects";

const Page = (props) => (
  <div>
    <About data={props.data} />
    <Skills items={props.data.items.skills} />
    <Projects items={props.data.items.portfolio} />
    <Timeline items={props.data.items.timeline} />
    <h2 id="copyright">© Sami Dahoux 2021 - All Rights Reserved</h2>
  </div>
);

export default Page;
