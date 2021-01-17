import React from "react";
import { connect } from "react-redux";
import Styles from "./sidebar.module.scss";
import {
  showAddJobProjects,
  showAddJobs,
  showCostItems,
  showFilesAndNotes,
  showForms,
  showJobs,
} from "../../../../../../../actions";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <aside className={Styles.sidebar}>
      <Link to='/jobs' className={`${Styles.sidebar__link}`}>
        {" "}
        <i className='fa fa-arrow-left fa-lg'></i>
        <span>Job</span>
      </Link>
      <Link to='/jobs/add' className={`${Styles.sidebar__button}`}>
        Jobs
      </Link>
      <Link to='/jobs/add/costitems' className={`${Styles.sidebar__button}`}>
        Cost Items
      </Link>
      <Link to='/jobs/add/projectjobs' className={`${Styles.sidebar__button}`}>
        Project Jobs
      </Link>
      <Link
        to='/jobs/add/filesandnotes'
        className={`${Styles.sidebar__button}`}
      >
        Files & Notes
      </Link>
      <Link to='/jobs/add/forms' className={`${Styles.sidebar__button}`}>
        Forms
      </Link>
      <button
        className={`${Styles.sidebar__buttonBottom} ${Styles.sidebar__button}`}
      >
        Save
      </button>
      <button
        className={`${Styles.sidebar__buttonBottom} ${Styles.sidebar__button}`}
      >
        Cancel
      </button>
    </aside>
  );
};
export default connect(null, {
  showAddJobProjects,
  showAddJobs,
  showCostItems,
  showFilesAndNotes,
  showForms,
  showJobs,
})(SideBar);
