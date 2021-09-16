import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { Link, Redirect } from "react-router-dom";
import { Formik, Form } from "formik";

import About from "./about/About";
import Skills from "./skills/Skills";
import History from "./kanban/History";
import Projects from "./kanban/Projects";

import { AdminPage, Page } from "./common/wrappers";
import Home from "./home/Home";
import Pdf from "./pdf/Pdf";
import { Board } from "./kanban/Kanban";
import { CardDetailed } from "./kanban/CardItem";
import { CardForm, CardList, CardTable } from "./kanban/CardForm";

import "./scss/Form.scss";
import { SkillsListForm, SkillsTable } from "./skills/SkillsForm";
import { submitCredentials, submitData } from "./common/core/data";
import { AboutForm, AboutTable } from "./about/AboutForm";
import { FormButton, KeyValueForm, LogButton, LoginForm } from "./common/forms";
import { Fragment } from "react";

export const CardDetailedPage = ({ item }) => (
  <Page title="item-page" className="backlog page" copyright>
    <CardDetailed item={item} key={item.title + item.start} id={item.title + item.start} />
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
    <History items={props.data.items.timeline} />
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
    <AdminPage>
      <Formik
        initialValues={initial}
        onSubmit={submitData}
        render={({ values }) => (
          <Form className="edit-form">
            <CardForm name={name} values={values.items[key]} index={index} />
          </Form>
        )}
      ></Formik>
    </AdminPage>
  );
};

export const SkillEditPage = ({ initial, index }) => (
  <AdminPage>
    <Formik
      initialValues={initial}
      onSubmit={submitData}
      render={({ values }) => (
        <Form className="edit-form">
          <CardForm name="items.skills" values={values.items.skills} index={index} />
        </Form>
      )}
    ></Formik>
  </AdminPage>
);

export const AboutEditPage = ({ initial }) => (
  <AdminPage>
    <Formik
      initialValues={initial}
      onSubmit={submitData}
      render={({ values }) => (
        <Form className="edit-form">
          <AboutForm values={values} />
        </Form>
      )}
    ></Formik>
  </AdminPage>
);

export const EditPage = ({ data }) => {
  if (!document.cookie.includes("AuthToken")) {
    return <Redirect from="/admin/" to="/admin/login" />;
  }
  return (
    <AdminPage>
      <Formik
        initialValues={data}
        onSubmit={submitData}
        render={({ values }) => (
          <Form className="edit-table">
            <AboutTable />
            <CardTable id="portfolio-table" name="items.portfolio" items={values.items.portfolio} title="Projects" />
            <CardTable id="history-table" name="items.timeline" items={values.items.timeline} title="History" />
            <SkillsTable name="items.skills" items={values.items.skills} />
            <FormButton />
          </Form>
        )}
      ></Formik>
    </AdminPage>
  );
};
