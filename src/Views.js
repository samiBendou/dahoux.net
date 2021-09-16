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
import { CardList } from "./kanban/CardForm";

import "./scss/Form.scss";
import { SkillsListForm } from "./skills/SkillsForm";
import { submitData } from "./common/core/data";

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
  <div id="login-page">
    <form method="POST" action="/api/admin/auth">
      <div className="form-group">
        <label htmlFor="usernameInput">Username</label>
        <input name="username" type="text" className="form-control" id="usernameInput" />
      </div>

      <div className="form-group">
        <label htmlFor="passwordInput">Password</label>
        <input name="password" type="password" className="form-control" id="passwordInput" placeholder="Password" />
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  </div>
);

export const EditPage = ({ data }) => {
  if (!document.cookie.includes("AuthToken")) {
    return <Redirect from="/admin/" to="/admin/login" />;
  }
  return (
    <AdminPage>
      <div>
        <Formik
          initialValues={data}
          onSubmit={submitData}
          render={({ values }) => (
            <Form className="edit-form">
              <h2>About</h2>
              <h3>
                <Link to="/admin/general">Edit infos</Link>
              </h3>
              <section>
                <h2>Projects</h2>
                <CardList name="items.portfolio" values={values.items.portfolio} />
              </section>
              <section>
                <h2>History</h2>
                <CardList name="items.timeline" values={values.items.timeline} />
              </section>
              <section>
                <h2>Skills</h2>
                <SkillsListForm name="items.skills" values={values.items.skills} />
              </section>
            </Form>
          )}
        ></Formik>
      </div>
    </AdminPage>
  );
};
