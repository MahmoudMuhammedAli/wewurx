import React from "react";
import "./system.scss";
import Jobs from "../../pages/jobs";
import Contacts from "../../pages/contacts";
import Settings from "../../pages/settings";
import Documents from "../../pages/documents";
import SideBar from "../../components/shared/sidebar";
import InfoBar from "../../components/shared/infobar";
import { Route, Switch, Redirect } from "react-router-dom";

import TermsAndConditions from "../../pages/consitionsandterms";
import Scheduler from "../scheduler";

const System = (props) => {
  return (
    <div className='system'>
      <SideBar />
      <InfoBar />
      <Switch>
        <Route path='/system/jobs' component={Jobs} />
        <Route path='/system/contacts' component={Contacts} />
        <Route path='/system/documents' component={Documents} />
        <Route path='/system/settings' component={Settings} />
        <Route
          path='/system/conditionsandterms'
          component={TermsAndConditions}
        />
        <Route path='/system/schedule' component={Scheduler} />
        <Redirect to='/system/jobs' />
      </Switch>
    </div>
  );
};

export default System;
