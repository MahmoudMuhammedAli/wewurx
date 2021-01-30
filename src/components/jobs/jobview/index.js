import React from "react";
import Styles from "./jobview.module.scss";
import SideBar from "./components/sidebar";
import CostItems from "./components/costitems";
import JobProjects from "./components/projectjobs";
import FilesAndNotes from "./components/filesandnotes";
import Forms from "./components/forms";
import JobActivity from "./components/jobactivity";
import JobView from "./components/jobview";
import { Switch, Route, Redirect } from "react-router-dom";

const JobViewPage = (props) => {
  return (
    <div className={` ${Styles.jobview} page`}>
      <SideBar />

      <Switch>
        <Route path='/jobs/view/:id' exact component={JobView} />
        <Route path='/jobs/view/:id/costitems' component={CostItems} />
        <Route path='/jobs/view/:id/jobprojects' component={JobProjects} />
        <Route path='/jobs/view/:id/filesandnotes' component={FilesAndNotes} />
        <Route path='/jobs/view/:id/forms' component={Forms} />
        <Route path='/jobs/view/:id/jobactivity' component={JobActivity} />
        <Redirect to='/jobs/view/:id' />
      </Switch>
    </div>
  );
};

export default JobViewPage;
