import React from "react";
import Styles from "./status.module.scss";
import { reduxForm, Field } from "redux-form";

const renderField = ({ input, type, label, id, color }) => {
  return (
    <div className={Styles.status__checkboxrow}>
      <div className={` ${Styles.status__labelwrapper}`}>
        <label
          htmlFor={id}
          style={{ backgroundColor: `var(${color}) ` }}
        ></label>
      </div>
      <div className={Styles.status__inputwrapper}>
        <input
          {...input}
          type={type}
          id={id}
          className={Styles.status__inputwrapper__input}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
};

const Status = ({ change }) => {
  const changeAllFieldValue = (value) => {
    change("draft", value);
    change("draftCompleted", value);
    change("sent", value);
    change("onHold", value);
    change("rejected", value);
    change("accepted", value);
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
          />
        </div>
        <div className={Styles.status__inputwrapper}>
          <label htmlFor='all'>All</label>
        </div>
      </div>
      <Field
        component={renderField}
        type='checkbox'
        label='Draft'
        id='draftedQuotes'
        color='--quote-color-draft'
        name='draft'
      />
      <Field
        component={renderField}
        type='checkbox'
        label='DraftCompleted'
        id='drafteCompletedQuotes'
        color='--quote-color-draft-completed'
        name='draftCompleted'
      />
      <Field
        component={renderField}
        type='checkbox'
        label='Sent'
        id='sentQuotes'
        color='--quote-color-sent'
        name='sent'
      />
      <Field
        component={renderField}
        type='checkbox'
        label='On-Hold'
        id='onHoldQuotes'
        color='--quote-color-onHold'
        name='onHold'
      />
      <Field
        component={renderField}
        type='checkbox'
        label='Rejected'
        id='rejectedQuotes'
        color='--quote-color-rejected'
        name='rejected'
      />
      <Field
        component={renderField}
        type='checkbox'
        label='Accepted'
        id='acceptedQuotes'
        color='--quote-color-accepted'
        name='accepted'
      />
    </div>
  );
};

export default reduxForm({ form: "quoteStatusFilter" })(Status);
