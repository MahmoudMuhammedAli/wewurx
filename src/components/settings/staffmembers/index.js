import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ManagementUser from "./components/managementuser";
import UserManagement from "./components/usermanagement";
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
          component={ManagementUser}
        />
        <Redirect to='/settings/staffmembers/usermanagement' />
      </Switch>
    </div>
  );
};

export default StaffMembers;
