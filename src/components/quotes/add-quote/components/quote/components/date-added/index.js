import React, { useState } from "react";
import Styles from "./date-added.module.scss";
import DatePicker from "react-datepicker";
import { Field, reduxForm } from "redux-form";

const days = [7, 14, 30, 70, 90];

const renderSelect = ({ input }) => {
  return (
    <div className={Styles.dateadded__selectContainer}>
      <select {...input} className={Styles.dateadded__select}>
        {days.map((day) => {
          return (
            <option value={day} key={day}>
              {day} days
            </option>
          );
        })}
      </select>

      <i className='fa fa-arrow-circle-down'></i>
    </div>
  );
};

const DateAdded = (props) => {
  const [dateAdded, setDateAdded] = useState(new Date());
  return (
    <div className={Styles.dateadded}>
      <h3 className={Styles.dateadded__heading}>Date added</h3>
      <div className={Styles.dateadded__datepickercontainer}>
        <DatePicker selected={dateAdded} onChange={setDateAdded} />
        <i className='fa fa-arrow-circle-down'></i>
      </div>

      <label className={Styles.dateadded__label}>Valid for</label>

      <Field name='validDays' component={renderSelect} />
    </div>
  );
};

export default reduxForm({ form: "addQuoteDateAdded" })(DateAdded);
