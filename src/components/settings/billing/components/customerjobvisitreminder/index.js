import React from "react";
import Styles from "../quotefollowupemails/quotefollowupemails.module.scss";
// reminder your are using the style from the quotefollowupemails component
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
      <label className={Styles.followupemails__select__label}>Prior work</label>
    </div>
  );
};

const CustomerJobVisitReminder = (props) => {
  return (
    <div className={Styles.followupemails}>
      <h3 className={Styles.followupemails__heading}>
        Customer job visit reminders
      </h3>
      <div className={Styles.followupemails__isenabled}>
        <label
          htmlFor='customerJobVisitReminderIsEnabled'
          className={Styles.followupemails__isenabled__label}
        >
          Enabled{" "}
        </label>
        <Field
          name='isEnabled'
          component='input'
          type='checkbox'
          className={Styles.followupemails__isenabled__input}
          id='customerJobVisitReminderIsEnabled'
        />
      </div>
      <div className={Styles.followupemails__sendafter}>
        <label className={Styles.followupemails__sendafter__label}>Send</label>
        <Field
          component='input'
          type='number'
          name='priorWorkValue'
          className={` ${Styles.followupemails__sendafter__inputNumber} ${Styles.followupemails__sendafter__input}`}
        />
      </div>
      <Field component={renderSelector} name='priorWorkWeight' />
      <p className={Styles.followupemails__info}>
        {" "}
        To edit email template
        <Link to='/settings/company/templates'> - Template Section</Link>
      </p>
    </div>
  );
};

export default reduxForm({ form: "customerJobVisitReminder" })(
  CustomerJobVisitReminder
);
