import React, { useState } from "react";
import "../scss/History.scss";
import "../scss/Projects.scss";
import "../scss/Backlog.scss";
import DateText from "../common/DateText";
import LocationText from "../common/LocationText";
import CardCategory from "./CardCategory";
import CompanyText from "../common/CompanyText";
import titleToLabel from "../common/core/tags";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import { slugifyString } from "../common/core/url";
import { FaTimes } from "react-icons/fa";
import ExternalLinkText from "../common/ExternalLInkText";

const CardHead = ({ item, openModal, closeModal }) => {
  function handleClick(event) {
    let isLink = event.target.parentNode.nodeName === "A";
    if (event.target.nodeName === "path") {
      isLink = event.target.parentNode.parentNode.nodeName === "A";
    }
    !isLink && openModal && openModal();
  }

  const category = CardCategory[item.category] || "";
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

const CardDetails = ({ item }) => (
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

const CardBrief = ({ item }) => {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <div className="item card">
      <CardHead openModal={openModal} item={item} />
      <Modal className="backlog modal" isOpen={open} onRequestClose={closeModal} shouldCloseOnOverlayClick={true}>
        <CardDetailed closeModal={closeModal} item={item} />
      </Modal>
    </div>
  );
};

const CardDetailed = ({ item, closeModal }) => {
  return (
    <div className="item">
      <CardHead closeModal={closeModal} item={item} />
      <CardDetails item={item} />
    </div>
  );
};

export { CardDetailed, CardBrief };
