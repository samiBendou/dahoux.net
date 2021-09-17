import "./scss/App.scss";
import React from "react";
import { Route } from "react-router-dom";
import {
  HomePage,
  PortfolioPage,
  ResumePage,
  CardsDetailedPage,
  EditPage,
  LoginPage,
  AboutEditPage,
  CardEditPage,
  SkillEditPage,
  NotFoundPage,
} from "./Views";
import { slugifyString } from "./common/core/url";
import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

const CardsRouter = ({ items }) => (
  <Fragment>
    {items.map((item) => (
      <Route
        key={`/timeline/${slugifyString(item.title, item.start)}`}
        exact
        path={`/timeline/${slugifyString(item.title, item.start)}`}
        component={() => <CardsDetailedPage item={item} />}
      />
    ))}
  </Fragment>
);

const PublicRouter = ({ data }) => (
  <Fragment>
    <Route exact path="/" component={() => <HomePage data={data} />} />
    <Route exact path="/portfolio" component={() => <PortfolioPage data={data} />} />
    <Route path="/resume" component={() => <ResumePage data={data} />} />
    <CardsRouter items={data.items.experience} />
    <CardsRouter items={data.items.education} />
    <CardsRouter items={data.items.projects} />
  </Fragment>
);

const CardsEditRouter = ({ items, initial, name }) => (
  <Fragment>
    {items.map((item, index) => (
      <Route
        key={`/edit/timeline/${slugifyString(item.title, item.start)}`}
        exact
        path={`/edit/timeline/${slugifyString(item.title, item.start)}`}
        component={() => <CardEditPage initial={initial} name={name} index={index} />}
      />
    ))}
  </Fragment>
);

const SkillsEditRouter = ({ items, initial }) => (
  <Fragment>
    {items.map((item, index) => (
      <Route
        key={`/edit/skills/${slugifyString(item.label)}`}
        exact
        path={`/edit/skills/${slugifyString(item.label)}`}
        component={() => <SkillEditPage initial={initial} index={index} />}
      />
    ))}
  </Fragment>
);

const EditRouter = ({ data, initial }) => (
  <Fragment>
    <Route exact path="/edit/" component={() => <EditPage data={initial} />} />
    <Route exact path="/edit/login" component={LoginPage} />
    <Route exact path="/edit/general" component={() => <AboutEditPage initial={initial} />} />
    <CardsEditRouter items={data.items.experience} initial={initial} name="items.experience" />
    <CardsEditRouter items={data.items.education} initial={initial} name="items.education" />
    <CardsEditRouter items={data.items.projects} initial={initial} name="items.projects" />
    <SkillsEditRouter items={data.items.skills} initial={initial} />
  </Fragment>
);

const MainRouter = ({ data, initial }) => {
  return (
    <BrowserRouter>
      <PublicRouter data={data} />
      <EditRouter data={data} initial={initial} />
      <Route path="/*" component={NotFoundPage} />
    </BrowserRouter>
  );
};

export default MainRouter;
