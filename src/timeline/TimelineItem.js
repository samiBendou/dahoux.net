import React, { useState } from "react";
import "../scss/Timeline.scss";
import "../scss/Projects.scss";
import "../scss/Backlog.scss";
import DateText from "../common/DateText";
import LocationText from "../common/LocationText";
import TimelineCategory from "./TimelineCategory";
import CompanyText from "../common/CompanyText";
import titleToLabel from "../common/core/tags";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import { slugifyString } from "../common/core/url";
import { FaExternalLinkAlt } from "react-icons/fa";

Modal.setAppElement("#root");

const TimelineHead = (props) => {
  const category = TimelineCategory[props.category] || "";
  const tags = [...(props.tags || []), ...(category ? [category] : [])];
  return (
    <div onClick={props.onClick}>
      <div className="tags-list">
        {tags.map((tag) => (
          <div className={`tag ${titleToLabel(tag)}`} key={tag}>
            {tag}
          </div>
        ))}
      </div>
      <h1 className="name">{props.title}</h1>
      <h4>
        <DateText start={props.start} end={props.end} />
      </h4>
      {props.company && (
        <h3>
          <CompanyText url={props.company.url} name={props.company.name} />
        </h3>
      )}
      {props.location && (
        <h3>
          <LocationText location={props.location} county={false} />
        </h3>
      )}

      <h4>
        {props.url && (
          <a href={props.url}>
            <FaExternalLinkAlt className="icon" /> View More
          </a>
        )}
        {!props.url && <NavLink to={`/timeline/${slugifyString(props.title, props.start)}`}>View More</NavLink>}
      </h4>
    </div>
  );
};

const TimelineDetails = (props) => (
  <div>
    <h2>Description</h2>
    <p className="item-brief">{props.brief}</p>
    <h2>Key points</h2>
    <ul className="items-list">
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const TimelineCard = (props) => {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true && !detailed);
  }

  function closeModal() {
    setOpen(false);
  }

  const detailed = props.detailed;

  return (
    <div className="item card">
      <TimelineHead
        onClick={openModal}
        category={props.category}
        tags={props.tags}
        url={props.url}
        title={props.title}
        brief={props.brief}
        items={props.items}
        start={props.start}
        end={props.end}
        company={props.company}
        location={props.location}
      />

      <Modal className="backlog modal" isOpen={open} onRequestClose={closeModal} shouldCloseOnOverlayClick={true}>
        <TimelineItem
          category={props.category}
          tags={props.tags}
          url={props.url}
          title={props.title}
          brief={props.brief}
          items={props.items}
          start={props.start}
          end={props.end}
          company={props.company}
          location={props.location}
        />
      </Modal>
    </div>
  );
};

const TimelineItem = (props) => {
  return (
    <div className="item">
      <TimelineHead
        category={props.category}
        tags={props.tags}
        url={props.url}
        title={props.title}
        start={props.start}
        end={props.end}
        company={props.company}
        location={props.location}
      />
      <TimelineDetails brief={props.brief} items={props.items} />
    </div>
  );
};

export { TimelineItem, TimelineCard };
