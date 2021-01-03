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
        Files and notes
      </button>
      <button
        onClick={() => props.showViewJobJobActivity()}
        className={`${Styles.sidebar__button}`}
      >
        Job activity
      </button>
      <Link
        to='/invoices'
        className={`${Styles.sidebar__buttonBottom} ${CustomStyles.sidebar__link}`}
      >
        Go to Invoices
      </Link>
      <Link
        className={`${Styles.sidebar__buttonBottom} ${CustomStyles.sidebar__link}`}
        to='/job/view/2983'
      >
        Job Report
      </Link>
      <Link
        className={`${Styles.sidebar__buttonBottom} ${CustomStyles.sidebar__link}`}
        to='/job/view/2983'
      >
        Convert to Quote
      </Link>
      <button
        className={`${Styles.sidebar__buttonBottom} ${CustomStyles.sidebar__link}`}
      >
        Delete
      </button>
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
