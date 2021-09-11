import React from "react";
import Copyright from "./Copyright";
import Nav from "../nav/Nav";

const Page = ({ title, children, copyright, className }) => (
  <div>
    <Nav />
    <main id={title} className={className}>
      {children}
    </main>
    <footer>{copyright && <Copyright />}</footer>
  </div>
);

const Section = ({ id, title, children }) => (
  <section id={id}>
    <h1 className="title">{title}</h1>
    {children}
  </section>
);

export { Page, Section };
