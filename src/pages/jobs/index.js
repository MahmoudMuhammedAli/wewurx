import React from "react";
import { connect } from "react-redux";
import Styles from "./jobs.module.scss";
import { Link } from "react-router-dom";
import {
  showInvoices,
  showJobs,
  showPurchases,
  showQuotes,
} from "../../actions";
import JobsComponent from "../../components/jobs/jobs";

const Jobs = (props) => {
  const { jobs } = props;
  return (
    <div className={`${Styles.jobs} page`}>
      <div className={`${Styles.bar}`}>
        <Link to='/quotes' className={`${Styles.bar__link}`}>
          Quotes
        </Link>
        <Link
          to='/'
          className={`${Styles.bar__link} ${Styles.bar__link} active`}
        >
          Jobs
        </Link>
        <Link to='/invoices' className={`${Styles.bar__link}`}>
          Invoices
        </Link>
        <Link to='/purchases' className={`${Styles.bar__link}`}>
          Purchases
        </Link>
      </div>

      {jobs.shouldDisplayJobs && (
        <div>
          <JobsComponent />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
  };
};

export default connect(mapStateToProps, {
  showQuotes,
  showJobs,
  showInvoices,
  showPurchases,
})(Jobs);
