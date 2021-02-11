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
        <Route path='/jobs/add/costitems' component={CostItems} />
        <Route path='/jobs/add/jobprojects' component={JobProjects} />
        <Route path='/jobs/add/filesandnotes' component={FilesAndNotes} />
        <Route path='/jobs/add/forms' component={Forms} />
        <Route path='/jobs/add/' exact component={AddJob} />
        <Redirect to='/jobs/add/' />
      </Switch>
    </div>
  );
};

export default SecondaryJobPage;
