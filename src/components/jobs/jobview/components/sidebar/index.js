import React from "react";
import CustomStyles from "./sidebar.module.scss";
import { NavLink as Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <div className={`sidebar ${CustomStyles.sidebar}`}>
      <Link
        to='/system'
        className={`sidebar__link ${CustomStyles.sidebar__link}`}
      >
        {" "}
        <i className='fa fa-angle-left fa-lg'></i>
        <span>Job</span>
      </Link>
      <Link className={`sidebar__button`} to='/system/jobs/view/id/'>
        Job
      </Link>
      <Link to='/system/jobs/view/id/costitems' className={`sidebar__button`}>
        Cost Items
      </Link>
      <Link to='/system/jobs/view/id/projectjobs' className={`sidebar__button`}>
        Project Jobs
      </Link>
      <Link className={`sidebar__button`} to='/system/jobs/view/id/forms'>
        Forms
      </Link>
      <Link
        className={`sidebar__button`}
        to='/system/jobs/view/id/filesandnotes'
      >
        Files and notes
      </Link>
      <Link className={`sidebar__button`} to='/system/jobs/view/id/jobActivity'>
        Job activity
      </Link>
      <Link
        to='/invoices'
        className={`sidebar__button--bottom ${CustomStyles.sidebar__link}`}
      >
        Go to Invoices
      </Link>
      <Link
        className={`sidebar__button--bottom ${CustomStyles.sidebar__link}`}
        to='/job/view/id'
      >
        Job Report
      </Link>
      <Link
        className={`sidebar__button--bottom ${CustomStyles.sidebar__link}`}
        to='/job/view/id'
      >
        Convert to Quote
      </Link>
      <button
        className={`sidebar__button--bottom ${CustomStyles.sidebar__link}`}
      >
        Delete
      </button>
    </div>
  );
};

export default SideBar;
