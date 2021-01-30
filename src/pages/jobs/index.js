import React from "react";
import Styles from "./jobs.module.scss";
import { NavLink as Link, Switch, Route, Redirect } from "react-router-dom";

import JobsComponent from "../../components/jobs/jobs";
import Quotes from "../../pages/quotes";
import Invoices from "../../pages/invoices";
import Purchases from "../../pages/purchases";
import ViewJob from "../../components/jobs/jobview";

const Jobs = (props) => {
  const { jobs } = props;
  return (
    <div className={`${Styles.jobs}`}>
      <div className={`${Styles.bar}`}>
        <Link
          to='/jobs/quotes'
          className={`${Styles.bar__link}`}
          activeClassName={Styles.bar__linkActive}
        >
          Quotes
        </Link>
        <Link
          to='/jobs'
          className={`${Styles.bar__link} ${Styles.bar__link}`}
          activeClassName={Styles.bar__linkActive}
          exact
        >
          Jobs
        </Link>
        <Link
          to='/jobs/invoices'
          className={`${Styles.bar__link}`}
          activeClassName={Styles.bar__linkActive}
        >
          Invoices
        </Link>
        <Link
          to='/jobs/purchases'
          className={`${Styles.bar__link}`}
          activeClassName={Styles.bar__linkActive}
        >
          Purchases
        </Link>
      </div>
      <Switch></Switch>
      <JobsComponent />
      <Route path='/jobs/quotes' component={Quotes} />
      <Route path='/jobs/invoices' component={Invoices} />
      <Route path='/jobs/purchases' component={Purchases} />
      <Route path='/jobs/view/:id' component={ViewJob} />
      <Redirect to='/jobs' />
    </div>
  );
};

export default Jobs;
