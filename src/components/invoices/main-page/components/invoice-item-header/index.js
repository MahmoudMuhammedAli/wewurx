import React from "react";
import { reduxForm, Field } from "redux-form";
import Styles from "./item.module.scss";

const Header = (props) => {
  return (
    <div className={` ${Styles.itemHeader} ${Styles.item}`}>
      <div className={Styles.item__invoicenom}>
        <Field
          name='checkAll'
          component='input'
          type='checkbox'
          className={Styles.item__checkAll}
        />
        <button className={Styles.item__button}>
          <span>Invoice no</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
      <div className={Styles.item__status}>
        <button className={Styles.item__button}>
          <span>Status</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
      <div className={Styles.item__date}>
        <button className={Styles.item__button}>
          <span>Date</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
      <div className={Styles.item__duedate}>
        <button className={Styles.item__button}>
          <span>Due date</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
      <div className={Styles.item__customer}>
        <button className={Styles.item__button}>
          <span>Customer</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
      <div className={Styles.item__amount}>
        <button className={Styles.item__button}>
          <span>Amount</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
      <div className={Styles.item__reset}>
        <button
          className={`${Styles.item__buttonHeader}  ${Styles.item__button}`}
        >
          <span>Rest</span>
        </button>
      </div>
    </div>
  );
};

export default reduxForm({ form: "invoiceCategory" })(Header);
