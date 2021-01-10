import React from "react";
import Styles from "./joboptions.module.scss";
import { Field, reduxForm } from "redux-form";

const JobOptions = (props) => {
  return (
    <div className={Styles.joboptions}>
      <h3 className={Styles.joboptions__heading}>Job options</h3>
      <label className={Styles.joboptions__label}>
        Automatically assign job ID to recurring jobs{" "}
        <Field
          name='recurringAfter'
          component='input'
          type='number'
          className={Styles.joboptions__label__input}
        />{" "}
        days ahead of when it is due.
      </label>
      <br />
      <label className={Styles.joboptions__label}>
        <Field component='input' type='checkbox' name='isReminderAddable' />{" "}
        Allow adding a reminder from within a job.
      </label>
    </div>
  );
};

export default reduxForm({ form: "jobOptions" })(JobOptions);
