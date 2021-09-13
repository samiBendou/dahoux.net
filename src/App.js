import "./scss/App.scss";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import Modal from "react-modal";

import Loader from "./Loader";
import { HomePage, PortfolioPage, ResumePage, CardDetailedPage } from "./Views";
import { slugifyString } from "./common/core/url";

Modal.setAppElement("#root");

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
      const res = await fetch("/api/portfolio/bendou");
      const text = await res.text();
      if (res.status !== 200) {
        this.setState({ status: Status.Error, error: new Error(`${res.status} - ${text}`) });
        return Promise.reject(text);
      }
      const object = JSON.parse(text);
      this.setState({ status: Status.Ready, data: object });
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  render() {
    const data = this.state.data;
    switch (this.state.status) {
      case Status.Loading:
        return <Route path="/" component={Loader} />;
      case Status.Ready:
        return (
          <Switch>
            <Route exact path="/" component={() => <HomePage data={data} />} />
            <Route exact path="/portfolio" component={() => <PortfolioPage data={data} />} />
            <Route path="/resume" component={() => <ResumePage data={data} />} />
            {[...data.items.timeline, ...data.items.portfolio].map((item) => (
              <Route
                key={`/timeline/${slugifyString(item.title, item.start)}`}
                path={`/timeline/${slugifyString(item.title, item.start)}`}
                component={() => <CardDetailedPage item={item} />}
              />
            ))}
          </Switch>
        );
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
