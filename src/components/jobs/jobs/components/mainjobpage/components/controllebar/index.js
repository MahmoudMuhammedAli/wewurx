import React from "react";
import Styles from "./controllebar.module.scss";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div className={`${Styles.controlbar__search}`}>
    <span>Reset</span>
    <div className={`${Styles.controlbar__search__input}`}>
      <input {...input} placeholder={placeholder} type={type} />
      <i className='fa fa-search fa-lg'></i>
    </div>
  </div>
);
const jobsActions = [
  "Mark Completed",
  "Mark Scheduled",
  "Create Invoice",
  "Mark Completed and Create Invoice",
  "Export Jobs",
  "Import Jobs",
];
const renderJobsActions = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input} className={Styles.controlbar__actions__select}>
      {jobsActions.map((val) => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const ControllBar = (props) => {
  const handleSubmit = (values) => {};
  return (
    <form
      onSubmit={props.handleSubmit(handleSubmit)}
      className={`${Styles.controlbar}`}
    >
      <div className={`${Styles.controlbar__actions}`}>
        <Field component={renderJobsActions} name='action' />
        <button
          className={`${Styles.controlbar__actions__apply} ${Styles.controlbar__actions__button}`}
        >
          Apply
        </button>
        <Link
          className={`${Styles.controlbar__actions__addjob} ${Styles.controlbar__actions__button}`}
          to='/system/jobs/add'
        >
          <i className='fa fa-plus fa-lg'></i> Add Job
        </Link>
      </div>
      <Field component={renderField} name='search' placeholder='Keyword' />
    </form>
  );
};

export default reduxForm({
  form: "mainJobPageController",
})(ControllBar);
