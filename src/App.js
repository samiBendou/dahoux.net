import "./scss/App.scss";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import Modal from "react-modal";

import Loader from "./Loader";
import {
  HomePage,
  PortfolioPage,
  ResumePage,
  CardDetailedPage,
  EditPage,
  LoginPage,
  AboutEditPage,
  CardEditPage,
  SkillEditPage,
} from "./Views";
import { slugifyString } from "./common/core/url";
import { cloneData, getData, preprocessData } from "./common/core/data";

Modal.setAppElement("#root");

const Router = ({ data, preprocessed }) => (
  <Switch>
    <Route exact path="/" component={() => <HomePage data={data} />} />
    <Route exact path="/portfolio" component={() => <PortfolioPage data={data} />} />
    <Route path="/resume" component={() => <ResumePage data={data} />} />
    {data.items.education.map((item) => (
      <Route
        key={`/education/${slugifyString(item.title, item.start)}`}
        path={`/education/${slugifyString(item.title, item.start)}`}
        component={() => <CardDetailedPage item={item} />}
      />
    ))}
    {data.items.experience.map((item) => (
      <Route
        key={`/experience/${slugifyString(item.title, item.start)}`}
        path={`/experience/${slugifyString(item.title, item.start)}`}
        component={() => <CardDetailedPage item={item} />}
      />
    ))}
    {data.items.projects.map((item) => (
      <Route
        key={`/projects/${slugifyString(item.title, item.start)}`}
        path={`/projects/${slugifyString(item.title, item.start)}`}
        component={() => <CardDetailedPage item={item} />}
      />
    ))}
    <Route exact path="/admin/login" component={LoginPage} />
    <Route exact path="/admin/" component={() => <EditPage data={preprocessed} />} />
    <Route exact path="/admin/general" component={() => <AboutEditPage initial={preprocessed} />} />
    {data.items.education.map((item, index) => (
      <Route
        key={`/admin/education/${slugifyString(item.title, item.start)}`}
        path={`/admin/education/${slugifyString(item.title, item.start)}`}
        component={() => <CardEditPage initial={preprocessed} name="items.education" index={index} />}
      />
    ))}
    {data.items.experience.map((item, index) => (
      <Route
        key={`/admin/experience/${slugifyString(item.title, item.start)}`}
        path={`/admin/experience/${slugifyString(item.title, item.start)}`}
        component={() => <CardEditPage initial={preprocessed} name="items.experience" index={index} />}
      />
    ))}
    {data.items.projects.map((item, index) => (
      <Route
        key={`/admin/projects/${slugifyString(item.title, item.start)}`}
        path={`/admin/projects/${slugifyString(item.title, item.start)}`}
        component={() => <CardEditPage initial={preprocessed} name="items.projects" index={index} />}
      />
    ))}
    {data.items.skills.map((item, index) => (
      <Route
        key={`/admin/skills/${slugifyString(item.label)}`}
        path={`/admin/skills/${slugifyString(item.label)}`}
        component={() => <SkillEditPage initial={preprocessed} index={index} />}
      />
    ))}
  </Switch>
);

const Status = {
  Ready: "ready",
  Loading: "loading",
  Error: "error",
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { status: Status.Loading, error: undefined, data: undefined };
  }

  async componentDidMount() {
    try {
      const data = await getData("bendou");
      const preprocessed = preprocessData(cloneData(data));
      this.setState({ status: Status.Ready, data: data, preprocessed: preprocessed });
    } catch (error) {
      this.setState({ status: Status.Error, error: error });
    }
  }

  render() {
    switch (this.state.status) {
      case Status.Loading:
        return <Route path="/" component={Loader} />;
      case Status.Ready:
        return <Router data={this.state.data} preprocessed={this.state.preprocessed} />;
      case Status.Error:
        console.error(this.state.error);
        return (
          <div>
            Something went wrong!
            <br />
            {this.state.error.toString()}
          </div>
        );
      default:
        return <div>Unexpected application status! {this.state.status}</div>;
    }
  }
}
