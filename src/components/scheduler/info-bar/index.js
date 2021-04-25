import React from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./info-bar.module.scss";

const options = [
  { name: "All", value: "all" },
  { name: "Today with time", value: "todayWithTime" },
  { name: "Today with time", value: "todayWithTime" },
  { name: "Today any time", value: "todayAnyTime" },
  { name: "Any day - Any time", value: "anyDayAnyTime" },
  { name: "Assigned to worker", value: "assignedToWorker" },
];
const renderFiltersSelector = ({ input }) => {
  return (
    <select {...input} className={Styles.infobar__select}>
      {options.map(({ name, value }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
};
const InfoBar = (props) => {
  return (
    <div className={Styles.infobar}>
      <div>
        <div className={Styles.infobar__unscheduled}>
          <span className={Styles.infobar__unscheduled__number}>1</span>
          Unscheduled jobs
        </div>
        <Field name='filter' component={renderFiltersSelector} />
        <button className={Styles.infobar__openbtn}>
          Open in panel <i className='fa fa-external-link'></i>
        </button>
      </div>

      <div className={Styles.infobar__checkboxes}>
        <label className={Styles.infobar__checkboxes__label}>
          Unscheduled jobs{" "}
          <Field name='unscheduleJobs' component='input' type='checkbox' />
        </label>
        <label className={Styles.infobar__checkboxes__label}>
          Calender <Field name='calender' component='input' type='checkbox' />
        </label>
        <label className={Styles.infobar__checkboxes__label}>
          Map view <Field name='mapView' component='input' type='checkbox' />
        </label>
      </div>
    </div>
  );
};

export default reduxForm({ form: "shcedulerInfoBar" })(InfoBar);
