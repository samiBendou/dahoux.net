import React from "react";
import About from "./about/About";
import Skills from "./skills/Skills";
import Timeline from "./timeline/Timeline";
import Projects from "./projects/Projects";

import Home from "./home/Home";

import Pdf from "./pdf/Pdf";
import { PDFViewer } from "@react-pdf/renderer";
import Copyright from "./common/Copyright";
import Nav from "./nav/Nav";
import Kanban from "./kanban/Kanban";

export const HomePage = (props) => (
  <div>
    <Nav />
    <main id="home-page">
      <Home data={props.data} />
    </main>
    <footer>
      <Copyright />
    </footer>
  </div>
);

export const PortfolioPage = (props) => (
  <div>
    <Nav />
    <main id="portfolio-page">
      <About data={props.data} />
      <Skills items={props.data.items.skills} />
      <Projects items={props.data.items.portfolio} />
      <Timeline items={props.data.items.timeline} />
      <Kanban data={props.data} />
    </main>
    <footer>
      <Copyright />
    </footer>
  </div>
);

export const ResumePage = (props) => (
  <div>
    <Nav />
    <main id="resume-page">
      <PDFViewer
        style={{
          position: "absolute",
          border: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <Pdf data={props.data} />
      </PDFViewer>
    </main>
  </div>
);
