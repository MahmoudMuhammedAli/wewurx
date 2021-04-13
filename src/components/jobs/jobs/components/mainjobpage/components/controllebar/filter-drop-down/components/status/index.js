import React from "react";
import Styles from "./status.module.scss";
import { reduxForm, Field } from "redux-form";
import Priority from "../priority";

const renderField = ({ input, type, label, id, color }) => {
  return (
    <div className={Styles.status__checkboxrow}>
      <div className={Styles.status__inputwrapper}>
        <input
          className={Styles.status__inputwrapper__input}
          id={id}
          type={type}
          {...input}
        />
        <div className={` ${Styles.status__labelwrapper}`}>
          <label
            htmlFor={id}
            style={{ backgroundColor: `var(${color}) ` }}
          ></label>
        </div>
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
};

const Status = ({ change }) => {
  const changeAllFieldValue = (value) => {
    change("pending", value);
    change("scheduled", value);
    change("travelling", value);
    change("inProgress", value);
    change("completed", value);
    change("onHold", value);
    change("attention", value);
    change("cancelled", value);
    change("external", value);
  };
  const checkAllFields = () => {
    changeAllFieldValue(true);
  };
  const unCheckAllFields = () => {
    changeAllFieldValue(false);
  };
  const handleAllChange = (e) => {
    const allNextStatus = e.target.checked;
    change("all", allNextStatus);

    if (allNextStatus) {
      return checkAllFields();
    }
    unCheckAllFields();
  };
  return (
    <div className={Styles.status}>
      <div className={Styles.status__status}>
        <h4 className={Styles.status__heading}>Status</h4>
        <div>
          <div
            className={`${Styles.status__labelwrapperUnColored} ${Styles.status__labelwrapper}`}
          >
            <Field
              component='input'
              type='checkbox'
              id='all'
              name='all'
              onChange={handleAllChange}
              className={Styles.status__labelwrapper__checkbox}
            />
          </div>
          <div className={Styles.status__inputwrapper}>
            <label htmlFor='all'>All</label>
          </div>
        </div>
        <Field
          component={renderField}
          type='checkbox'
          label='Pending'
          id='jobFilterPending'
          color='--color-pending'
          name='pending'
        />
        <Field
          component={renderField}
          type='checkbox'
          label='Scheduled'
          id='jobFilterScheduled'
          color='--color-scheduled'
          name='scheduled'
        />
        <Field
          component={renderField}
          type='checkbox'
          label='In progress'
          id='jobQuoteInProgress'
          color='--color-inProgress'
          name='inProgress'
        />
        <Field
          component={renderField}
          type='checkbox'
          label='Completed'
          id='jobQuoteCompleted'
          color='--color-completed'
          name='completed'
        />
        <Field
          component={renderField}
          type='checkbox'
          label='On hold'
          id='jobQuoteOnHold'
          color='--color-onHold'
          name='onHold'
        />
        <Field
          component={renderField}
          type='checkbox'
          label='Attention'
          id='jobQuoteAttention'
          color='--color-attention'
          name='attention'
        />
        <Field
          component={renderField}
          type='checkbox'
          label='Cancelled'
          id='jobQuoteCancelled'
          color='--color-cancelled'
          name='cancelled'
        />
        <Field
          component={renderField}
          type='checkbox'
          label='External'
          id='jobQuoteExternal'
          color='--color-external'
          name='external'
        />
      </div>

      <Priority />
    </div>
  );
};

export default reduxForm({ form: "jobStatusFilter" })(Status);
