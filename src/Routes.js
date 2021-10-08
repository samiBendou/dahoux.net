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
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";

const CardsRouter = ({ items }) =>
  items.map((item) => (
    <Route
      key={`/timeline/${slugifyString(item.title, item.start)}`}
      exact
      path={`/timeline/${slugifyString(item.title, item.start)}`}
      component={() => <CardsDetailedPage item={item} />}
    />
  ));

const PublicRouter = ({ data }) => [
  <Route key="0" exact path="/" component={() => <HomePage data={data} />} />,
  <Route key="1" exact path="/portfolio" component={() => <PortfolioPage data={data} />} />,
  <Route key="2" exact path="/resume" component={() => <ResumePage data={data} />} />,
  ...CardsRouter({ items: data.items.experience }),
  ...CardsRouter({ items: data.items.education }),
  ...CardsRouter({ items: data.items.projects }),
];

const CardsEditRouter = ({ items, initial, name }) =>
  items.map((item, index) => (
    <Route
      key={`/edit/timeline/${slugifyString(item.title, item.start)}`}
      exact
      path={`/edit/timeline/${slugifyString(item.title, item.start)}`}
      component={() => <CardEditPage initial={initial} name={name} index={index} />}
    />
  ));

const SkillsEditRouter = ({ items, initial }) =>
  items.map((item, index) => (
    <Route
      key={`/edit/skills/${slugifyString(item.label)}`}
      exact
      path={`/edit/skills/${slugifyString(item.label)}`}
      component={() => <SkillEditPage initial={initial} index={index} />}
    />
  ));

const EditRouter = ({ data, initial }) => [
  <Route key="0" exact path="/edit/" component={() => <EditPage data={initial} />} />,
  <Route key="1" exact path="/edit/login" component={LoginPage} />,
  <Route key="2" exact path="/edit/general" component={() => <AboutEditPage initial={initial} />} />,
  ...CardsEditRouter({ items: data.items.experience, initial: initial, name: "items.experience" }),
  ...CardsEditRouter({ items: data.items.education, initial: initial, name: "items.education" }),
  ...CardsEditRouter({ items: data.items.projects, initial: initial, name: "items.projects" }),
  ...SkillsEditRouter({ items: data.items.skills, initial: initial }),
];

const MainRouter = ({ data, initial }) => {
  return (
    <BrowserRouter>
      <Switch>
        {PublicRouter({ data: data })}
        {EditRouter({ data: data, initial: initial })}
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
