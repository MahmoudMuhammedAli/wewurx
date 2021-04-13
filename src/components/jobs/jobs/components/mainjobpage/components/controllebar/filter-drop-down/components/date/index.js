import React from "react";
import Styles from "./date.module.scss";
import { reduxForm, Field } from "redux-form";

const renderSelect = (options) => ({ input }) => {
  return (
    <select {...input} className={Styles.date__select}>
      {options.map(({ name, value }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

const DatePage = (props) => {
  const dateOptions = [
    { name: "All Dates", value: "allDates" },
    { name: "Last 7 days", value: "last7Days" },
    { name: "Last 14 days", value: "last14Days" },
    { name: "Last 30 days", value: "last30Days" },
  ];
  return (
    <div className={Styles.date}>
      <h3 className={Styles.date__heading}>Date range</h3>
      <Field name='options' component={renderSelect(dateOptions)} />
    </div>
  );
};

export default reduxForm({ form: "quoteDateFilter" })(DatePage);
