import React from "react";
import Styles from "./secondaryjobpage.module.scss";
import { connect } from "react-redux";
import SideBar from "./components/sidebar";
import CostItems from "./components/costitems";
import JobProjects from "./components/projectjobs";
import FilesAndNotes from "./components/filesandnotes";
import Forms from "./components/forms";
import AddJob from "./components/addjob";

const SecondaryJobPage = (props) => {
  const { shouldDisplaySecondaryPage } = props;
  const renderPage = () => {
    if (shouldDisplaySecondaryPage.shouldDisplayAddCostItems) {
      return <CostItems />;
    }
    if (shouldDisplaySecondaryPage.shouldDisplayAddJobProjects) {
      return <JobProjects />;
    }
    if (shouldDisplaySecondaryPage.shouldDisplayFilesAndNotes) {
      return <FilesAndNotes />;
    }
    if (shouldDisplaySecondaryPage.shouleDisplayForms) {
      return <Forms />;
    }
    return <AddJob />;
  };
  return (
    <div className = {Styles.secondaryJobPage}>
      <SideBar />
      {renderPage()}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    shouldDisplaySecondaryPage:
      state.jobs.shouldDisplayJobs.shouldDisplaySecondaryPage,
  };
};
export default connect(mapStateToProps, {})(SecondaryJobPage);
