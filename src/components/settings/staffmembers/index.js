import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ManagementUser from "./components/managementuser";
import UserManagement from "./components/usermanagement";
import UserView from "./components/userview";
import Styles from "./staffmembers.module.scss";

const StaffMembers = (props) => {
  return (
    <div className={Styles.staffmembers}>
      <Switch>
        <Route
          path='/settings/staffmembers/usermanagement'
          component={UserManagement}
        />
        <Route
          path='/settings/staffmembers/managementuser'
          exact
          component={ManagementUser}
        />
        <Route
          path='/settings/staffmembers/managementuser/:id'
          component={UserView}
        />
        <Redirect to='/settings/staffmembers/usermanagement' />
      </Switch>
    </div>
  );
};

export default StaffMembers;
