import React from "react";
import Styles from "./recurrence.module.scss";
import { Field, reduxForm } from "redux-form";

const recurrenceOptions = [
  "None",
  "Every Day",
  "Every Weeks",
  "Every Year",
  "custom",
];
const renderRecurrenceOptions = ({ input, meta: { error, touched } }) => {
  return (
    <select {...input} className={Styles.dates__recurrence__select}>
      {recurrenceOptions.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};
const Recurrence = (props) => {
  return (
    <div className={Styles.dates__recurrence}>
      <span className={Styles.dates__recurrence__label}>Recurrence</span>
      <Field component={renderRecurrenceOptions} name='recurrenceValue' />
    </div>
  );
};
export default reduxForm({ form: "addCustomer" })(Recurrence);
