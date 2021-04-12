import React from "react";
import { reduxForm, Field } from "redux-form";
import Styles from "../job-item/job-item.module.scss";

const JobHeader = (props) => {
  return (
    <div className={`${Styles.job} ${Styles["job--heading"]}`}>
      <Field
        name='checkAll'
        component='input'
        type='checkbox'
        className={`${Styles.job__checkbox}`}
      />
      <div className={Styles.job__job}>
        <button className='item__button'>
          <span>Job Name</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
      <div className={Styles.job__status}></div>
      <div className={Styles.job__invoice}>Invoiced</div>
      <div className={Styles.job__amount}>
        <button className='item__button'>
          <span>Amount</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
      <div className={Styles.job__customer}>
        <button className='item__button'>
          <span>Customer</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
      <div className={Styles.job__site}>
        <button className='item__button'>
          <span>Site</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
      <div className={Styles.job__due}>
        <button className='item__button'>
          <span>Due date</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
      <div className={Styles.job__schedule}>
        <button className='item__button'>
          <span>Scheduled</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
      <div className={Styles.job__assign}>
        <button className='item__button'>
          <span>Assigned to</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>

      <div>
        <button
          className={`${Styles.job__button} ${Styles["job__button--reset"]}`}
        >
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};

export default reduxForm({ form: "quoteViwerHeader" })(JobHeader);
