import React from "react";
import About from "./about/About";
import Skills from "./skills/Skills";
import Timeline from "./timeline/Timeline";
import Projects from "./projects/Projects";

import Home from "./home/Home";
import Pdf from "./pdf/Pdf";
import { PDFViewer } from "@react-pdf/renderer";
import { Board, Listing } from "./kanban/Kanban";
import { TimelineItem } from "./timeline/TimelineItem";
import { Page } from "./common/wrappers";

export const TimelineItemPage = (props) => (
  <Page title="item-page" className="backlog page" copyright>
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
  </Page>
);

export const HomePage = (props) => (
  <Page title="home-page" copyright>
    <Home data={props.data} />
  </Page>
);

export const PortfolioPage = (props) => (
  <Page title="portfolio-page" copyright>
    <About data={props.data} />
    <Skills items={props.data.items.skills} />
    <Projects items={props.data.items.portfolio} />
    <Timeline items={props.data.items.timeline} />
    <Board data={props.data} />
  </Page>
);

export const ResumePage = (props) => (
  <Page title="resume-page">
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
  </Page>
);
