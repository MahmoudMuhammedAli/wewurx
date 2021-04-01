import React from "react";
import Styles from "./secondaryjobpage.module.scss";
import SideBar from "./components/sidebar";
import CostItems from "./components/costitems";
import JobProjects from "./components/projectjobs";
import FilesAndNotes from "./components/filesandnotes";
import Forms from "./components/forms";
import AddJob from "./components/addjob";
import { Redirect, Route, Switch } from "react-router-dom";

const SecondaryJobPage = (props) => {
  return (
    <div className={Styles.secondaryJobPage}>
      <SideBar />
      <Switch>
        <Route path='/system/jobs/add/costitems' component={CostItems} />
        <Route path='/system/jobs/add/jobprojects' component={JobProjects} />
        <Route
          path='/system/jobs/add/filesandnotes'
          component={FilesAndNotes}
        />
        <Route path='/system/jobs/add/forms' component={Forms} />
        <Route path='/system/jobs/add/' exact component={AddJob} />
        <Redirect to='/system/jobs/add/' />
      </Switch>
    </div>
  );
};

export default SecondaryJobPage;
