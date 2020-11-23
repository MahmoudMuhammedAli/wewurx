import React from "react";
import Styles from "./jobs.module.scss";
import MainJobPage from "./components/mainjobpage";
import SecondaryJobPage from "./components/secondaryjobpage";
import { connect } from "react-redux";

const Jobs = (props) => {
  const renderComponents = () => {
    if (props.shouldDisplaySecondaryPage) return <SecondaryJobPage />;

    return <MainJobPage />;
  };

  return <>{renderComponents()}</>;
};
const mapStateToProps = (state) => {
  return {
    shouldDisplaySecondaryPage:
      state.jobs.shouldDisplayJobs.shouldDisplaySecondaryPage,
  };
};
export default connect(mapStateToProps)(Jobs);
