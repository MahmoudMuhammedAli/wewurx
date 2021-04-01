import React from "react";
import Styles from "./jobs.module.scss";
import MainJobPage from "./components/mainjobpage";
import AddJob from "./components/add-job";
import { Redirect, Route, Switch } from "react-router-dom";

const Jobs = (props) => {
  return (
    <Switch>
      <Route path='/system/jobs/add' component={AddJob} />
      <Route path='/system/jobs/' exact component={MainJobPage} />
      <Redirect to='/system/jobs/add' />
    </Switch>
  );
};

export default Jobs;
