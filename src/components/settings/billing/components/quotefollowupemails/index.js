import React from "react";
import Styles from "./quotefollowupemails.module.scss";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

const renderSelector = ({ input, meta: { touched, error } }) => {
  return (
    <div className={Styles.followupemails__select}>
      <select
        className={` ${Styles.followupemails__sendafter__inputSelect} ${Styles.followupemails__sendafter__input}`}
      >
        <option value='days'>days</option>
        <option value='hours'>hr</option>
      </select>
      <label className={Styles.followupemails__select__label}>
        (Unless status changes)
      </label>
    </div>
  );
};

const QuoteFollowUpEmails = (props) => {
  return (
    <div className={Styles.followupemails}>
      <h3 className={Styles.followupemails__heading}>
        Quote auto follow up emails
      </h3>
      <div className={Styles.followupemails__isenabled}>
        <label
          htmlFor='quoteFollowUpEmailsIsEnabled'
          className={Styles.followupemails__isenabled__label}
        >
          Enabled{" "}
        </label>
        <Field
          name='isEnabled'
          component='input'
          type='checkbox'
          className={Styles.followupemails__isenabled__input}
          id='quoteFollowUpEmailsIsEnabled'
        />
      </div>
      <div className={Styles.followupemails__sendafter}>
        <label className={Styles.followupemails__sendafter__label}>
          Send follow up emails after
        </label>
        <Field
          component='input'
          type='number'
          name='sendAfterDurationValue'
          className={` ${Styles.followupemails__sendafter__inputNumber} ${Styles.followupemails__sendafter__input}`}
        />
      </div>
      <Field component={renderSelector} name='sendAfterDurationWeight' />
      <p className={Styles.followupemails__info}>
        {" "}
        To edit email template
        <Link to='/settings/company/templates'> - Template Section</Link>
      </p>
    </div>
  );
};

export default reduxForm({ form: "quoteFollowUpEmails" })(QuoteFollowUpEmails);
