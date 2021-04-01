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
          path='/system/settings/staffmembers/usermanagement'
          component={UserManagement}
        />
        <Route
          path='/system/settings/staffmembers/managementuser'
          exact
          component={ManagementUser}
        />
        <Route
          path='/system/settings/staffmembers/managementuser/:id'
          component={UserView}
        />
        <Redirect to='/system/settings/staffmembers/usermanagement' />
      </Switch>
    </div>
  );
};

export default StaffMembers;
