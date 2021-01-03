import React from "react";
import Styles from "./jobview.module.scss";
import { connect } from "react-redux";
import SideBar from "./components/sidebar";
import CostItems from "./components/costitems";
import JobProjects from "./components/projectjobs";
import FilesAndNotes from "./components/filesandnotes";
import Forms from "./components/forms";
import JobActivity from "./components/jobactivity";
import JobView from "./components/jobview";

const SecondaryJobPage = (props) => {
  const {
    showViewJobCostItems,
    showViewJobForms,
    showViewJobFilesAndNotes,
    showViewJobJobActivity,
    showViewJobProjectJobs,
  } = props.viewJob;
  const renderPage = () => {
    if (showViewJobCostItems) {
      return <CostItems />;
    }
    if (showViewJobProjectJobs) {
      return <JobProjects />;
    }
    if (showViewJobFilesAndNotes) {
      return <FilesAndNotes />;
    }
    if (showViewJobForms) {
      return <Forms />;
    }
    if (showViewJobJobActivity) {
      return <JobActivity />;
    }
    return <JobView />;
  };
  return (
    <div className={` ${Styles.jobview} page`}>
      <SideBar />
      {renderPage()}
    </div>
  );
};
const mapStateToProps = (state) => {
  const { viewJob } = state;
  return {
    viewJob,
  };
};
export default connect(mapStateToProps, {})(SecondaryJobPage);
