import React from "react";
import About from "./about/About";
import Skills from "./skills/Skills";
import Timeline from "./timeline/Timeline";
import Projects from "./projects/Projects";
import Home from "./home/Home";

import Pdf from "./pdf/Pdf";
import { PDFViewer } from "@react-pdf/renderer";
import Copyright from "./common/Copyright";
import NavBar from "./common/NavBar";

export const HomePage = (props) => (
  <div>
    <NavBar />
    <main id="home-page">
      <Home data={props.data} />
      <Copyright />
    </main>
  </div>
);

export const ResumePage = (props) => (
  <div>
    <NavBar />
    <main id="resume-page">
      <About data={props.data} />
      <Skills items={props.data.items.skills} />
      <Projects items={props.data.items.portfolio} />
      <Timeline items={props.data.items.timeline} />
      <Copyright />
    </main>
  </div>
);

export const ResumeDocument = (props) => (
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
);
