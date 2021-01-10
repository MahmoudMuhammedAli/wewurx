import React from "react";
import { reduxForm, Field } from "redux-form";
import Styles from "./actionbar.module.scss";

const actionOptions = [
  { name: "Mark Completed", value: "markCompleted" },
  { name: "Create Invoice", value: "createInvoice" },
  { name: "Export CSV", value: "exportCSV" },
  { name: "View in Job List", value: "viewInJobList" },
];

const renderActionOPtions = () => {
  return (
    <select className={Styles.actionbar__select}>
      {actionOptions.map(({ name, value }) => (
        <option value={value} key={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

const ActionBar = (props) => {
  return (
    <div className={` viewjob__page  ${Styles.actionbar}`}>
      <label className={Styles.actionbar__label}>
        <Field name='checkAll' component='input' type='checkbox' />
        All
      </label>
      <Field name='selectedAction' component={renderActionOPtions} />
      <button className={Styles.actionbar__button}>Apply</button>
    </div>
  );
};
export default reduxForm({ form: "viewjobProjectJobsActionBar" })(ActionBar);
