import React from "react";
import "../../../../../../shared/pages-sidebar/page-sidebar.scss";
import Styles from "./sidebar.module.scss";

import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <aside className={`${Styles.sidebar} sidebar`}>
      <Link to='/system/jobs' className='sidebar__link'>
        {" "}
        <i className='fa fa-angle-left fa-lg'></i>
        <span>Job</span>
      </Link>
      <Link to='/system/jobs/add' className='sidebar__button'>
        Jobs
      </Link>
      <Link to='/system/jobs/add/costitems' className='sidebar__button'>
        Cost Items
      </Link>
      <Link to='/system/jobs/add/projectjobs' className='sidebar__button'>
        Project Jobs
      </Link>
      <Link to='/system/jobs/add/filesandnotes' className='sidebar__button'>
        Files & Notes
      </Link>
      <Link to='/system/jobs/add/forms' className='sidebar__button'>
        Forms
      </Link>
      <button className='sidebar__button--bottom sidebar__button'>Save</button>
      <button className='sidebar__button--bottom sidebar__button'>
        Cancel
      </button>
    </aside>
  );
};
export default SideBar;
