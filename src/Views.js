import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import ReactLoading from "react-loading";

import About from "./about/About";
import Skills from "./skills/Skills";

import { AdminPage, Page } from "./common/wrappers";
import Home from "./home/Home";
import Pdf from "./pdf/Pdf";
import { Board, Listing } from "./cards/Cards";
import { CardsItemDetailed } from "./cards/CardsItem";
import { CardForm, CardTable } from "./cards/CardsForm";

import "./scss/Form.scss";
import { SkillForm, SkillsTable } from "./skills/SkillsForm";
import { checkAuthentication, submitCredentials, submitData } from "./common/core/data";
import { AboutForm, AboutTable } from "./about/AboutForm";
import { LoginForm } from "./common/forms";
import { FormButton, LogButton } from "./common/buttons";
import { EducationTitle, ExperienceTitle, ProjectsTitle, TimelineTitle } from "./common/titles";
import { useLocation } from "react-router";
import { Component } from "react";

const Status = {
  Ready: "ready",
  Loading: "loading",
  Error: "error",
};

export const LoaderPage = () => (
  <Page title="loading-page">
    <ReactLoading type="bubbles" color="#000000" />
  </Page>
);

export const ErrorPage = ({ error, status }) => (
  <Page title="error-page" copyright>
    <h1>Error {status && ` ${status}`}</h1>
    <h2>{error.message}</h2>
  </Page>
);

export const NotFoundPage = () => {
  const location = useLocation();
  return <ErrorPage error={new Error(`${location.pathname} does not exist`)} status={404} />;
};

export const CardsDetailedPage = ({ item }) => (
  <Page title="item-page" className="backlog page" copyright>
    <CardsItemDetailed item={item} />
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
    <Listing id="projects" title={<ProjectsTitle />} items={props.data.items.projects} />
    <Listing id="experience" title={<ExperienceTitle />} items={props.data.items.experience} />
    <Listing id="education" title={<EducationTitle />} items={props.data.items.education} />
    <Board
      id="kanban"
      title={<TimelineTitle />}
      subtitles={[ExperienceTitle, EducationTitle, ProjectsTitle]}
      data={{
        experience: props.data.items.experience,
        education: props.data.items.education,
        projects: props.data.items.projects,
      }}
    />
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

export class AdminHelmet extends Component {
  constructor(props) {
    super(props);
    this.state = { status: Status.Loading, error: undefined };
  }

  async componentDidMount() {
    try {
      await checkAuthentication();
      this.setState({ status: Status.Ready });
    } catch (error) {
      this.setState({ status: Status.Error, error: error });
    }
  }

  render() {
    switch (this.state.status) {
      case Status.Loading:
        return <LoaderPage />;
      case Status.Ready:
        return <AdminPage>{this.props.children}</AdminPage>;
      default:
        return <Redirect to="/edit/login" />;
    }
  }
}

export const LoginPage = () => (
  <AdminPage>
    <Formik initialValues={{ username: "", password: "" }} onSubmit={submitCredentials}>
      <Form className="edit-form">
        <LoginForm />
        <LogButton />
      </Form>
    </Formik>
  </AdminPage>
);

export const CardEditPage = ({ initial, name, index }) => {
  const [, key] = name.split(".");
  return (
    <AdminHelmet>
      <Formik initialValues={initial} onSubmit={submitData}>
        {({ values }) => (
          <Form className="edit-form">
            <CardForm name={name} values={values.items[key]} index={index} />
          </Form>
        )}
      </Formik>
    </AdminHelmet>
  );
};

export const SkillEditPage = ({ initial, index }) => (
  <AdminHelmet>
    <Formik initialValues={initial} onSubmit={submitData}>
      {({ values }) => (
        <Form className="edit-form">
          <SkillForm name="items.skills" values={values.items.skills} index={index} />
        </Form>
      )}
    </Formik>
  </AdminHelmet>
);

export const AboutEditPage = ({ initial }) => (
  <AdminHelmet>
    <Formik initialValues={initial} onSubmit={submitData}>
      {({ values }) => (
        <Form className="edit-form">
          <AboutForm values={values} />
        </Form>
      )}
    </Formik>
  </AdminHelmet>
);

export const EditPage = ({ data }) => (
  <AdminHelmet>
    <Formik initialValues={data} onSubmit={submitData}>
      {({ values }) => (
        <Form className="edit-table">
          <AboutTable />
          <CardTable
            id="portfolio-table"
            name="items.projects"
            items={values.items.projects}
            title={<ProjectsTitle />}
          />
          <CardTable
            id="history-table"
            name="items.experience"
            items={values.items.experience}
            title={<ExperienceTitle />}
          />
          <CardTable
            id="history-table"
            name="items.education"
            items={values.items.education}
            title={<EducationTitle />}
          />
          <SkillsTable name="items.skills" items={values.items.skills} />
          <FormButton />
        </Form>
      )}
    </Formik>
  </AdminHelmet>
);
