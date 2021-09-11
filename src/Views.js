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
import { TimelineItem } from "./timeline/TimelineItem";

export const TimelineItemPage = (props) => (
  <div>
    <Nav />
    <main id="item-page" className="backlog page">
      <TimelineItem
        category={props.item.category}
        tags={props.item.tags}
        url={props.item.url}
        title={props.item.title}
        brief={props.item.brief}
        items={props.item.items}
        start={props.item.start}
        end={props.item.end}
        key={props.item.title + props.item.start}
        id={props.item.title + props.item.start}
        company={props.item.company}
        location={props.item.location}
      />
    </main>
    <footer>
      <Copyright />
    </footer>
  </div>
);

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
