import "./scss/App.scss";
import React, { Component } from "react";
import Modal from "react-modal";
import { ErrorPage, LoaderPage } from "./Views";
import { cloneData, getData, preprocessData } from "./common/core/data";
import MainRouter from "./Routes";

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
        return <LoaderPage />;
      case Status.Ready:
        return <MainRouter data={this.state.data} initial={this.state.preprocessed} />;
      case Status.Error:
        return <ErrorPage error={this.state.error} status={this.state.error.status} />;
      default:
        return <ErrorPage error={new Error(`Unexpected status ${this.state.status}`)} />;
    }
  }
}
