import React from "react";
import Styles from "./recurrence.module.scss";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import RecurrenceSettings from "../recurrenceSettings";

const recurrenceOptions = [
  { name: "None", value: "none" },
  { name: "Every Day", value: "everyDay" },
  { name: "Every Week", value: "everyWeek" },
  { name: "Every Year", value: "everyYear" },
  { name: "Every Month", value: "everyMonth" },
  { name: "custom", value: "custom" },
];
const renderRecurrenceOptions = ({ input, meta: { error, touched } }) => {
  return (
    <select {...input} className={Styles.recurrence__select}>
      {recurrenceOptions.map(({ name, value }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

const Recurrence = (props) => {
  return (
    <div className={Styles.recurrence}>
      <span className={Styles.recurrence__label}>Recurrence</span>
      <Field component={renderRecurrenceOptions} name='recurrenceValue' />
      <RecurrenceSettings recurrenceValue={props.recurrenceValue} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recurrenceValue: state.form.addJob?.values?.recurrenceValue,
  };
};
export default connect(mapStateToProps)(
  reduxForm({ form: "addJob" })(Recurrence)
);
