import React from "react";
import "../../../../../../shared/pages-sidebar/page-sidebar.scss";
import Styles from "./sidebar.module.scss";

import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <aside className={`${Styles.sidebar} sidebar`}>
      <Link to='/jobs' className='sidebar__link'>
        {" "}
        <i className='fa fa-angle-left fa-lg'></i>
        <span>Job</span>
      </Link>
      <Link to='/jobs/add' className='sidebar__button'>
        Jobs
      </Link>
      <Link to='/jobs/add/costitems' className='sidebar__button'>
        Cost Items
      </Link>
      <Link to='/jobs/add/projectjobs' className='sidebar__button'>
        Project Jobs
      </Link>
      <Link to='/jobs/add/filesandnotes' className='sidebar__button'>
        Files & Notes
      </Link>
      <Link to='/jobs/add/forms' className='sidebar__button'>
        Forms
      </Link>
      <button className='sidebar__buttonBottom sidebar__button'>Save</button>
      <button className='sidebar__buttonBottom sidebar__button'>Cancel</button>
    </aside>
  );
};
export default SideBar;
