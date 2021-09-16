import React from "react";
import Copyright from "./Copyright";
import { AdminNav, Nav } from "../nav/Nav";
import slugify from "slugify";

const Page = ({ title, children, copyright, className }) => (
  <div>
    <Nav />
    <main id={title} className={className}>
      {children}
    </main>
    <footer>{copyright && <Copyright />}</footer>
  </div>
);

const AdminPage = ({ children, copyright }) => (
  <div>
    <AdminNav />
    <main id="edit-page">{children}</main>
    <footer>{copyright && <Copyright />}</footer>
  </div>
);

const Section = ({ id, title, children }) => (
  <section id={id || slugify(title).toLowerCase()}>
    <h1 className="title">{title}</h1>
    <div className="inner">{children}</div>
  </section>
);

export { Page, AdminPage, Section };
