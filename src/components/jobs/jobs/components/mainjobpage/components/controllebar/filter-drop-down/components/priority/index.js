import React from "react";
import Styles from "./priority.module.scss";
import { reduxForm, Field } from "redux-form";

const renderField = ({ input, type, label, id, color }) => {
  return (
    <div className={Styles.priority__checkboxrow}>
      <div className={Styles.priority__inputwrapper}>
        <input
          className={Styles.priority__inputwrapper__input}
          id={id}
          type={type}
          {...input}
        />

        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
};

const Priority = ({ change }) => {
  const changeAllFieldValue = (value) => {
    change("urgent", value);
    change("normal", value);
    change("low", value);
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
      <h4 className={Styles.priority__heading}>Priority</h4>
      <div>
        <div
          className={`${Styles.priority__labelwrapperUnColored} ${Styles.priority__labelwrapper}`}
        >
          <Field
            component='input'
            type='checkbox'
            id='allPriority'
            name='all'
            onChange={handleAllChange}
            className={Styles.priority__labelwrapper__checkbox}
          />
        </div>
        <div className={Styles.priority__inputwrapper}>
          <label htmlFor='allPriority'>All</label>
        </div>
      </div>
      <Field
        component={renderField}
        type='checkbox'
        label='Urgent'
        id='jobFilterUrgent'
        name='urgent'
      />
      <Field
        component={renderField}
        type='checkbox'
        label='Scheduled'
        id='jobFilterNormal'
        name='normal'
      />
      <Field
        component={renderField}
        type='checkbox'
        label='In progress'
        id='jobQuoteLow'
        name='low'
      />
    </div>
  );
};

export default reduxForm({ form: "jobPriorityFilter" })(Priority);
