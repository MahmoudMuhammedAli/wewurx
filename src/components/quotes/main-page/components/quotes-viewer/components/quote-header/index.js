import React from "react";
import { reduxForm, Field } from "redux-form";
import "../../../../../../shared/item.scss";

const QuoteHeader = (props) => {
  return (
    <div className='itemHeader item'>
      <div className='item__nom'>
        <Field
          name='checkAll'
          component='input'
          type='checkbox'
          className='item__checkAll'
        />
        <button className='item__button'>
          <span>Quote no</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>

      <div className='item__date'>
        <button className='item__button'>
          <span>Date</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
      <div className='item__duedate'>
        <button className='item__button'>
          <span>Due date</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
      <div className='item__name'>
        <button className='item__button'>
          <span>Quote name</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
      <div className='item__customer'>
        <button className='item__button'>
          <span>Customer</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
      <div className='item__address'>
        <button className='item__button'>
          <span>Address</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
      <div className='item__amount'>
        <button className='item__button'>
          <span>Amount</span>
          <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
      <div className='item__reset'>
        <button className='item__buttonHeader  item__button'>
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};

export default reduxForm({ form: "quoteViwerHeader" })(QuoteHeader);
