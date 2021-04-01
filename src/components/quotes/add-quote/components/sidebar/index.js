import React from "react";
import { Link, NavLink } from "react-router-dom";

const SideBar = (props) => {
  return (
    <div className='sidebar'>
      <Link to='/system/jobs/quotes' className='sidebar__link'>
        <i className='fa fa-angle-left '></i> Quotes
      </Link>
      <NavLink to='/system/jobs/quotes/add' className={`sidebar__button`}>
        Quote
      </NavLink>
      <NavLink
        to='/system/jobs/quotes/add/costitems'
        className={`sidebar__button`}
      >
        Cost Items
      </NavLink>
      <NavLink
        to='/system/jobs/quotes/add/filesandnotes'
        className={`sidebar__button`}
      >
        Files And Notes
      </NavLink>
      <button className={`sidebar__button sidebar__buttonBottom`}>Save</button>
      <button className={`sidebar__button sidebar__buttonBottom`}>
        Cancel
      </button>
    </div>
  );
};

export default SideBar;
