import React from "react";
import { connect } from "react-redux";
import Styles from "../../../jobs/components/secondaryjobpage/components/sidebar/sidebar.module.scss";
import CustomStyles from "./sidebar.module.scss";
import {
  showViewJobCostItems,
  showViewJobProjectJobs,
  showViewJobForms,
  showViewJob,
  showViewJobFilesAndNotes,
  showViewJobJobActivity,
} from "../../../../../actions";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <div className={`${Styles.sidebar} ${CustomStyles.sidebar}`}>
      <Link
        to='/'
        className={`${Styles.sidebar__link} ${CustomStyles.sidebar__link}`}
      >
        {" "}
        <i className='fa fa-arrow-left fa-lg'></i>
        <span>Job</span>
      </Link>
      <button
        onClick={() => props.showViewJob()}
        className={`${Styles.sidebar__button}`}
      >
        Job
      </button>
      <button
        onClick={() => props.showViewJobCostItems()}
        className={`${Styles.sidebar__button}`}
      >
        Cost Items
      </button>
      <button
        onClick={() => props.showViewJobProjectJobs()}
        className={`${Styles.sidebar__button}`}
      >
        Project Jobs
      </button>
      <button
        onClick={() => props.showViewJobForms()}
        className={`${Styles.sidebar__button}`}
      >
        Forms
      </button>
      <button
        onClick={() => props.showViewJobFilesAndNotes()}
        className={`${Styles.sidebar__button}`}
      >
        FilesAndNotes
      </button>
      <button
        onClick={() => props.showViewJobJobActivity()}
        className={`${Styles.sidebar__button}`}
      >
        JobActivity
      </button>
      <Link to='/invoices'>Go to invoices</Link>
    </div>
  );
};

export default connect(null, {
  showViewJobCostItems,
  showViewJobForms,
  showViewJobFilesAndNotes,
  showViewJobProjectJobs,
  showViewJobJobActivity,
  showViewJob,
})(SideBar);
