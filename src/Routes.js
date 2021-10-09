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
} from "./Pages";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";

const CardsRouter = ({ prefix, items }) => [
  <Route key={prefix} exact path={`/${prefix}/:id`} component={() => <CardsDetailedPage items={items} />} />,
];

const PublicRouter = ({ data }) => [
  <Route key="0" exact path="/" component={() => <HomePage data={data} />} />,
  <Route key="1" exact path="/portfolio" component={() => <PortfolioPage data={data} />} />,
  <Route key="2" exact path="/resume" component={() => <ResumePage data={data} />} />,
  ...CardsRouter({ prefix: "experience", items: data.items.experience }),
  ...CardsRouter({ prefix: "education", items: data.items.education }),
  ...CardsRouter({ prefix: "projects", items: data.items.projects }),
];

const CardsEditRouter = ({ prefix, name, items, initial }) => [
  <Route
    key={`edit/${prefix}`}
    exact
    path={`/edit/${prefix}/:id`}
    component={() => <CardEditPage items={items} initial={initial} name={name} />}
  />,
];

const SkillsEditRouter = ({ items, initial }) => [
  <Route
    key={`edit/skills`}
    exact
    path={`/edit/skills/:id`}
    component={() => <SkillEditPage items={items} initial={initial} />}
  />,
];

const EditRouter = ({ data, initial }) => [
  <Route key="0" exact path="/edit/" component={() => <EditPage data={initial} />} />,
  <Route key="1" exact path="/edit/login" component={LoginPage} />,
  <Route key="2" exact path="/edit/general" component={() => <AboutEditPage initial={initial} />} />,
  ...CardsEditRouter({ prefix: "experience", name: "items.experience", items: data.items.experience, initial }),
  ...CardsEditRouter({ prefix: "education", name: "items.education", items: data.items.education, initial }),
  ...CardsEditRouter({ prefix: "projects", name: "items.projects", items: data.items.projects, initial }),
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
