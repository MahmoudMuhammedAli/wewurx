import React from "react";
import Styles from "./jobs.module.scss";
import MainJobPage from "./components/mainjobpage";
import SecondaryJobPage from "./components/secondaryjobpage";
import { Route } from "react-router-dom";

const Jobs = (props) => {
  // return <>{renderComponents()}</>;
  return (
    <>
      <Route path='/jobs/add' component={SecondaryJobPage} />
      <Route path='/jobs' exact component={MainJobPage} />
    </>
  );
};

export default Jobs;
