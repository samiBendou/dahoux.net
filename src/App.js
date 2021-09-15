import "./scss/App.scss";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import Modal from "react-modal";

import Loader from "./Loader";
import { HomePage, PortfolioPage, ResumePage, CardDetailedPage, EditPage, LoginPage } from "./Views";
import { slugifyString } from "./common/core/url";
import { SkillForm } from "./skills/SkillsForm";
import { Form, Formik } from "formik";
import { cloneData, getData, preprocessData, submitData } from "./common/core/data";
import { CardForm } from "./kanban/CardForm";
import AboutForm from "./about/AboutForm";
import { AdminNav } from "./nav/Nav";
import { AdminPage } from "./common/wrappers";

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
    const data = this.state.data;
    const preprocessed = this.state.preprocessed;
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
            <Route exact path="/admin/login" component={LoginPage} />
            <Route exact path="/admin/" component={() => <EditPage data={preprocessed} />} />
            <Route
              exact
              path="/admin/general"
              component={() => (
                <AdminPage>
                  <Formik
                    className="edit-form"
                    initialValues={preprocessed}
                    onSubmit={submitData}
                    render={({ values }) => (
                      <Form className="edit-form">
                        <AboutForm values={values} />
                      </Form>
                    )}
                  ></Formik>
                </AdminPage>
              )}
            />
            {data.items.timeline.map((item, index) => (
              <Route
                key={`/admin/timeline/${slugifyString(item.title, item.start)}`}
                path={`/admin/timeline/${slugifyString(item.title, item.start)}`}
                component={() => (
                  <AdminPage>
                    <Formik
                      initialValues={preprocessed}
                      onSubmit={submitData}
                      render={({ values }) => (
                        <Form className="edit-form">
                          <CardForm name="items.timeline" values={values.items.timeline} index={index} />
                        </Form>
                      )}
                    ></Formik>
                  </AdminPage>
                )}
              />
            ))}
            {data.items.portfolio.map((item, index) => (
              <Route
                key={`/admin/timeline/${slugifyString(item.title, item.start)}`}
                path={`/admin/timeline/${slugifyString(item.title, item.start)}`}
                component={() => (
                  <AdminPage>
                    <Formik
                      initialValues={preprocessed}
                      onSubmit={submitData}
                      render={({ values }) => (
                        <Form className="edit-form">
                          <CardForm name="items.portfolio" values={values.items.portfolio} index={index} />
                        </Form>
                      )}
                    ></Formik>
                  </AdminPage>
                )}
              />
            ))}
            {data.items.skills.map((item, index) => (
              <Route
                key={`/admin/skills/${slugifyString(item.label)}`}
                path={`/admin/skills/${slugifyString(item.label)}`}
                component={() => (
                  <AdminPage>
                    <Formik
                      initialValues={preprocessed}
                      onSubmit={submitData}
                      render={({ values }) => (
                        <Form className="edit-form">
                          <SkillForm name="items.skills" values={values.items.skills} index={index} />
                        </Form>
                      )}
                    ></Formik>
                  </AdminPage>
                )}
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
