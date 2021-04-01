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
          to='/system/jobs/quotes'
          className={`${Styles.bar__link}`}
          activeClassName={Styles.bar__linkActive}
        >
          Quotes
        </Link>
        <Link
          to='/system/jobs'
          className={`${Styles.bar__link} ${Styles.bar__link}`}
          activeClassName={Styles.bar__linkActive}
          exact
        >
          Jobs
        </Link>
        <Link
          to='/system/jobs/invoices'
          className={`${Styles.bar__link}`}
          activeClassName={Styles.bar__linkActive}
        >
          Invoices
        </Link>
        <Link
          to='/system/jobs/purchases'
          className={`${Styles.bar__link}`}
          activeClassName={Styles.bar__linkActive}
        >
          Purchases
        </Link>
      </div>
      <Switch>
        <Route path='/system/jobs/quotes' component={Quotes} />
        <Route path='/system/jobs/invoices' component={Invoices} />
        <Route path='/system/jobs/purchases' component={Purchases} />
        <Route path='/system/jobs/view/:id' component={ViewJob} />
        <Route path='/system/jobs/' component={JobsComponent} />
        <Redirect to='/system/jobs' />
      </Switch>
    </div>
  );
};

export default Jobs;
