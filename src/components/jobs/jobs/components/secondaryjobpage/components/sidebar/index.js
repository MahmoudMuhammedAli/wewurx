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

const SideBar = (props) => {
  return (
    <aside className={Styles.sidebar}>
      <button onClick={props.showJobs} className={`${Styles.sidebar__link}`}>
        {" "}
        <i className="fa fa-arrow-left fa-lg"></i>
        <span>Job</span>
      </button>
      <button
        onClick={props.showAddJobs}
        className={`${Styles.sidebar__button}`}
      >
        Jobs
      </button>
      <button
        onClick={props.showCostItems}
        className={`${Styles.sidebar__button}`}
      >
        Cost Items
      </button>
      <button
        onClick={props.showAddJobProjects}
        className={`${Styles.sidebar__button}`}
      >
        Project Jobs
      </button>
      <button
        onClick={props.showFilesAndNotes}
        className={`${Styles.sidebar__button}`}
      >
        Files & Notes
      </button>
      <button onClick={props.showForms} className={`${Styles.sidebar__button}`}>
        Forms
      </button>
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
