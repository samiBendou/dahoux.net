import "./scss/App.scss";
import React, { Component } from "react";
import Loader from "./Loader";
import Page from "./Page";
import Pdf from "./pdf/Pdf";
import { PDFViewer } from "@react-pdf/renderer";
import { Route } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { status: "loading", error: undefined, data: undefined };
  }

  componentDidMount() {
    fetch("/api/portfolio/bendou")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        res.text().then((text) => {
          this.setState({
            status: "error",
            error: new Error(`${res.status} - ${text}`),
          });
        });
        return null;
      })
      .then((contents) => {
        if (contents === null) {
          return;
        }
        this.setState({ status: "ready", data: contents });
      })
      .catch((err) => this.setState({ status: "error", error: err }));
  }

  render() {
    const data = this.state.data;
    switch (this.state.status) {
      case "loading":
        return <Route exact path="/" component={Loader} />;
      case "ready":
        return (
          <div>
            <Route exact path="/" component={() => <Page data={data} />} />
            <Route
              path="/pdf"
              component={() => (
                <PDFViewer
                  style={{
                    position: "absolute",
                    border: 0,
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Pdf data={data} />
                </PDFViewer>
              )}
            />
          </div>
        );
      case "error":
        console.log(this.state.error);
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
