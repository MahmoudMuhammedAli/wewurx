import React from "react";
import Styles from "./settings.module.scss";
import SideBar from "../../components/settings/sidebar";
import CompanyInfo from "../../components/settings/companyinfo";
import { Redirect, Route, Switch } from "react-router-dom";
import Billing from "../../components/settings/billing";
import QuotesAndInvoices from "../../components/settings/quotesandinvoices";
import Subscription from "../../components/settings/subscription";
import TopBar from "../../components/settings/topbar";
import StaffMembers from "../../components/settings/staffmembers";
import JobTemplates from "../../components/settings/jobtemplates";
import ConnectCalender from "../../components/settings/connectcalender";
import Integrations from "../../components/settings/integrations";

const Settings = (props) => {
  return (
    <div className={`${Styles.settings}`}>
      <TopBar />
      <Switch>
        <Route path='/system/settings/company'>
          <SideBar />
          <Switch>
            <Route
              path='/system/settings/company/companyinfo'
              exact
              component={CompanyInfo}
            />
            <Route
              path='/system/settings/company/billing'
              component={Billing}
            />
            <Route
              path='/system/settings/company/quotesandinvoices'
              component={QuotesAndInvoices}
            />
            <Route
              path='/system/settings/company/subscription'
              component={Subscription}
            />
            <Redirect to='/system/settings/company/companyinfo' />
          </Switch>
        </Route>
        <Route path='/system/settings/staffmembers' component={StaffMembers} />
        <Route path='/system/settings/jobtemplates' component={JobTemplates} />
        <Route
          path='/system/settings/connectcalender'
          component={ConnectCalender}
        />
        <Route path='/system/settings/integrations' component={Integrations} />
        <Redirect to='/system/settings/company' />
      </Switch>
    </div>
  );
};
export default Settings;
