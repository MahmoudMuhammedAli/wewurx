import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./description.module.scss";
import DatePicker from "react-datepicker";

const Description = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={Styles.description}>
      <label className={Styles.description__inputContainer}>
        <h3 className={` ${Styles.description__label}`}>Quote Description</h3>
        <Field
          name='description'
          component='textarea'
          className={Styles.description__textarea}
        />
      </label>
      <label className={Styles.description__inputContainer}>
        <Field name='showQuoteDescription' component='input' type='checkbox' />{" "}
        <span className={Styles.description__label}>
          Show quote description on quote
        </span>
      </label>
      <div className={Styles.description__duedate}>
        <h3 className={Styles.description__label}>Due date</h3>
        <DatePicker
          selected={startDate}
          onChange={setStartDate}
          showTimeSelect
          dateFormat='MMMM d, yyyy h:mm aa'
        />
      </div>
    </div>
  );
};

export default reduxForm({ form: "addQuoteDescription" })(Description);
