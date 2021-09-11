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
import { FaTimes } from "react-icons/fa";
import ExternalLinkText from "../common/ExternalLInkText";

const TimelineHead = ({ item, openModal, closeModal }) => {
  function handleClick(event) {
    let isLink = event.target.parentNode.nodeName === "A";
    if (event.target.nodeName === "path") {
      isLink = event.target.parentNode.parentNode.nodeName === "A";
    }
    !isLink && openModal && openModal();
  }

  const category = TimelineCategory[item.category] || "";
  const tags = [...(item.tags || []), ...(category ? [category] : [])];
  return (
    <div onClick={handleClick}>
      <div className="top">
        <div className="tags-list">
          {tags.map((tag) => (
            <div className={`tag ${titleToLabel(tag)}`} key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <button className="quit" onClick={closeModal}>
          <FaTimes className="icon" />
        </button>
      </div>

      <h1 className="name">{item.title}</h1>
      <h4>
        <DateText start={item.start} end={item.end} />
      </h4>
      {item.company && (
        <h3>
          <CompanyText url={item.company.url} name={item.company.name} />
        </h3>
      )}
      {item.location && (
        <h3>
          <LocationText location={item.location} county={false} />
        </h3>
      )}

      <h4>
        {item.url && <ExternalLinkText url={item.url} title="View More" />}
        {!item.url && <NavLink to={`/timeline/${slugifyString(item.title, item.start)}`}>View More</NavLink>}
      </h4>
    </div>
  );
};

const TimelineDetails = ({ item }) => (
  <div>
    <h2>Description</h2>
    <p className="item-brief">{item.brief}</p>
    <h2>Key points</h2>
    <ul className="items-list">
      {item.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const TimelineCard = ({ item }) => {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <div className="item card">
      <TimelineHead openModal={openModal} item={item} />
      <Modal className="backlog modal" isOpen={open} onRequestClose={closeModal} shouldCloseOnOverlayClick={true}>
        <TimelineItem closeModal={closeModal} item={item} />
      </Modal>
    </div>
  );
};

const TimelineItem = ({ item, closeModal }) => {
  return (
    <div className="item">
      <TimelineHead closeModal={closeModal} item={item} />
      <TimelineDetails item={item} />
    </div>
  );
};

export { TimelineItem, TimelineCard };
