import React from "react";
import { reduxForm } from "redux-form";
import CheckBoxWithLabel from "../checkbox-with-label";
import Styles from "./job-type.module.scss";

const JobType = (props) => {
  const jobTypes = [
    { name: "standardJobs", label: "Standard Jobs" },
    { name: "recurringJobs", label: "Recurring jobs" },
    { name: "revisits", label: "Revisits" },
    { name: "projectJobs", label: "Project jobs" },
  ];

  const renderJobTypes = () => {
    return jobTypes.map(({ name, label }) => (
      <CheckBoxWithLabel name={name} label={label} key={name} id={name} />
    ));
  };
  return (
    <div className={Styles.jobtype}>
      <h3 className={Styles.jobtype__heading}>
        <CheckBoxWithLabel name='all' label='All' />
      </h3>
      <div className={Styles.jobtype__types}>{renderJobTypes()}</div>
    </div>
  );
};

export default reduxForm({ form: "jobTypeFilter" })(JobType);
