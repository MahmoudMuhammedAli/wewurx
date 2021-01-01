import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./dates.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  selectJobDueDate,
  selectJobStartDate,
  selectJobEndDate,
} from "../../../../../../../../../actions";

import { connect } from "react-redux";
import Recurrence from "../recurrence";

const jobDurationWeights = ["Days", "Hours", "Minutes"];

const renderJobDurationWeightsSelector = ({
  input,
  meta: { touched, error },
}) => {
  return (
    <select {...input} className={Styles.dates__jobduration__jobweights}>
      {jobDurationWeights.map((weight) => (
        <option key={weight} value={weight.toLowerCase()}>
          {weight}
        </option>
      ))}
    </select>
  );
};

const Dates = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [scheduleStartDate, setScheduleStartDate] = useState(new Date());
  const [scheduleEndtDate, setScheduleEndDate] = useState(new Date());

  const handleDueDatePickerChange = (date) => {
    setStartDate(date);
    props.selectJobDueDate(date);
  };
  const handleScheduleStartDateChange = (date) => {
    setScheduleStartDate(date);
    props.selectJobStartDate(date);
  };
  const handleScheduleEndDateChange = (date) => {
    setScheduleEndDate(date);
    props.selectJobEndDate(date);
  };
  return (
    <div className={Styles.dates}>
      <h3 className={Styles.dates__heading}>Dates</h3>
      <div>
        <Field
          component='input'
          type='checkbox'
          name='allDayJobBooking'
          className={Styles.dates__checkbox}
        />
        <label>All day job booking?</label>
      </div>
      <div className={Styles.dates__jobduration}>
        <h4 className={Styles.dates__jobduration__heading}>Job duration</h4>
        <Field
          name='jobDurationValue'
          component='input'
          type='number'
          className={Styles.dates__jobduration__jobvalue}
        />
        <Field
          name='jobDurationWeight'
          component={renderJobDurationWeightsSelector}
        />
      </div>
      <div className={Styles.dates__duedate}>
        <h4 className={Styles.dates__duedate__heading}>Due date</h4>
        <DatePicker
          selected={startDate}
          onChange={handleDueDatePickerChange}
          showTimeSelect
          dateFormat='MMMM d, yyyy h:mm aa'
        />
      </div>
      <div className={Styles.dates__scheduledate}>
        <h4 className={Styles.dates__scheduledate__heading}>Schedule date</h4>

        <DatePicker
          selected={scheduleStartDate}
          onChange={handleScheduleStartDateChange}
          selectsStart
          showTimeSelect
          startDate={scheduleStartDate}
          endDate={scheduleEndtDate}
          dateFormat='MMMM d, yyyy h:mm aa'
        />

        <span className={Styles.dates__scheduledate__until}>until</span>

        <DatePicker
          selected={scheduleEndtDate}
          onChange={handleScheduleEndDateChange}
          selectsEnd
          showTimeSelect
          startDate={scheduleStartDate}
          endDate={scheduleEndtDate}
          minDate={scheduleStartDate}
          dateFormat='MMMM d, yyyy h:mm aa'
        />
      </div>
      <Recurrence />
    </div>
  );
};

export default connect(null, {
  selectJobDueDate,
  selectJobStartDate,
  selectJobEndDate,
})(reduxForm({ form: "addJob" })(Dates));
