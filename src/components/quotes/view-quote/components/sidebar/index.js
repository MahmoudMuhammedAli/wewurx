import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import AddFileButton from "./components/add-file-button";
import Styles from "./sidebar.module.scss";

const SideBar = ({ id }) => {
  const location = useLocation();
  const currentPage = location.pathname.includes("cost-items")
    ? "cost-items"
    : location.pathname.includes("files-and-notes")
    ? "files-and-notes"
    : "maininfo";
  console.log(currentPage, "from current page");
  return (
    <div className='sidebar'>
      <Link to='/system/jobs/quotes' className='sidebar__link'>
        <i className='fa fa-angle-left '></i> Quotes
      </Link>
      <NavLink
        activeClassName='sidebar__button--active'
        to={`/system/jobs/quotes/${id}/view`}
        className={`sidebar__button`}
        exact
      >
        Quote
      </NavLink>
      <NavLink
        activeClassName='sidebar__button--active'
        to={`/system/jobs/quotes/${id}/view/cost-items`}
        className={`sidebar__button`}
      >
        Cost Items
      </NavLink>
      <NavLink
        activeClassName='sidebar__button--active'
        to={`/system/jobs/quotes/${id}/view/files-and-notes`}
        className={`sidebar__button`}
      >
        Files And Notes
      </NavLink>
      <div
        className={Styles.sidebar__discoloredbuttonContainer}
        style={{
          display: `${currentPage === "maininfo" ? "block" : "none"}`,
        }}
      >
        <button
          className={`sidebar__button sidebar__button--bottom ${Styles.sidebar__discoloredbutton} ${Styles.sidebar__discoloredbuttonAccepted}`}
        >
          Accepted?
        </button>
        <button
          className={`sidebar__button sidebar__button--bottom ${Styles.sidebar__discoloredbutton} ${Styles.sidebar__discoloredbuttonRejected}`}
        >
          Rejected?
        </button>
        <span className={Styles.sidebar__discoloredbuttonRejected__line}></span>
      </div>

      <button
        className={`sidebar__button sidebar__button--bottom`}
        style={{
          display: `${currentPage === "maininfo" ? "block" : "none"}`,
        }}
      >
        Peview Quote
      </button>
      <div
        style={{
          display: `${currentPage === "files-and-notes" ? "block" : "none"}`,
        }}
      >
        <AddFileButton />
      </div>

      <button className={`sidebar__button sidebar__button--bottom`}>
        Send Quote
      </button>
      <button
        className={`sidebar__button sidebar__button--bottom`}
        style={{
          display: `${currentPage === "cost-items" ? "block" : "none"}`,
        }}
      >
        Add item +
      </button>

      <Link
        style={{
          display: `${currentPage === "maininfo" ? "block" : "none"}`,
        }}
        to={`/system/jobs/quotes/${id}/edit`}
        className={`sidebar__button sidebar__button--bottom`}
      >
        Edit Quote
      </Link>
      <button
        style={{
          display: `${currentPage === "maininfo" ? "block" : "none"}`,
        }}
        className={`sidebar__button sidebar__button--bottom sidebar__button sidebar__button--danger`}
      >
        Delete Quote
      </button>
    </div>
  );
};

export default SideBar;
