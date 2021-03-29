import React from "react";
import { Link, NavLink } from "react-router-dom";
import Styles from "./sidebar.module.scss";

const SideBar = ({ id }) => {
  return (
    <div className='sidebar'>
      <Link to='/jobs/quotes' className='sidebar__link'>
        <i className='fa fa-angle-left '></i> Quotes
      </Link>
      <NavLink
        activeClassName='sidebar__button--active'
        to={`/jobs/quotes/${id}/view`}
        className={`sidebar__button`}
        exact
      >
        Quote
      </NavLink>
      <NavLink
        activeClassName='sidebar__button--active'
        to={`/jobs/quotes/${id}/view/cost-items`}
        className={`sidebar__button`}
      >
        Cost Items
      </NavLink>
      <NavLink
        activeClassName='sidebar__button--active'
        to={`/jobs/quotes/${id}/view/files-and-notes`}
        className={`sidebar__button`}
      >
        Files And Notes
      </NavLink>
      <div className={Styles.sidebar__discoloredbuttonContainer}>
        <button
          className={`sidebar__button sidebar__buttonBottom ${Styles.sidebar__discoloredbutton} ${Styles.sidebar__discoloredbuttonAccepted}`}
        >
          Accepted?
        </button>
        <button
          className={`sidebar__button sidebar__buttonBottom ${Styles.sidebar__discoloredbutton} ${Styles.sidebar__discoloredbuttonRejected}`}
        >
          Rejected?
        </button>
        <span className={Styles.sidebar__discoloredbuttonRejected__line}></span>
      </div>

      <button className={`sidebar__button sidebar__buttonBottom`}>
        Peview Quote
      </button>
      <button className={`sidebar__button sidebar__buttonBottom`}>
        Send Quote
      </button>

      <Link
        to={`/jobs/quotes/${id}/edit`}
        className={`sidebar__button sidebar__buttonBottom`}
      >
        Edit Quote
      </Link>
      <button
        className={`sidebar__button sidebar__buttonBottom sidebar__button sidebar__buttonBottomDanger`}
      >
        Delete Quote
      </button>
    </div>
  );
};

export default SideBar;
