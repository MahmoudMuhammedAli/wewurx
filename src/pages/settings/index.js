import React from "react";
import Styles from "./settings.module.scss";
import SideBar from "../../components/settings/sidebar";
import CompanyInfo from "../../components/settings/companyinfo";
import { Redirect, Route, Switch } from "react-router-dom";
import Billing from "../../components/settings/billing";
import QuotesAndInvoices from "../../components/settings/quotesandinvoices";
import Subscription from "../../components/settings/subscription";

const Settings = (props) => {
  return (
    <div className={`${Styles.settings} page page-ml page-mt`}>
      <SideBar />
      <Switch>
        <Route path='/settings/companyinfo' exact component={CompanyInfo} />
        <Route path='/settings/billing' component={Billing} />
        <Route
          path='/settings/quotesandinvoices'
          component={QuotesAndInvoices}
        />
        <Route path='/settings/subscription' component={Subscription} />
        <Redirect to='/settings/companyinfo' />
      </Switch>
    </div>
  );
};
export default Settings;
