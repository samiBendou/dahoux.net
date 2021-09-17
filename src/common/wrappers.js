import React, { useState } from "react";
import { CopyrightText } from "./texts";
import { AdminNav, Nav } from "../nav/Nav";
import slugify from "slugify";
import { Component } from "react";
import { postAuthentication } from "./core/data";

export const Page = ({ title, children, copyright, className }) => (
  <div>
    <Nav />
    <main id={title} className={className}>
      {children}
    </main>
    <footer>{copyright && <CopyrightText />}</footer>
  </div>
);

const Status = {
  Ready: "ready",
  Loading: "loading",
  Error: "error",
};

export const AdminPage = ({ children, copyright }) => {
  return (
    <div>
      <AdminNav />
      <main id="edit-page">{children}</main>
      <footer>{copyright && <CopyrightText />}</footer>
    </div>
  );
};

export const Section = ({ id, title, children }) => (
  <section id={id || slugify(title).toLowerCase()}>
    <h1 className="title">{title}</h1>
    <div className="inner">{children}</div>
  </section>
);
