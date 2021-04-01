import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className='item item--invoice'>
      <div className='item__nom'>
        <Field
          name='checkAll'
          component='input'
          type='checkbox'
          className='item__checkAll'
        />
        <span>INV-CNA1 </span>
      </div>
      <div className='item__status'>
        <span
          className='item__status__color'
          style={{ backgroundColor: "var(--invoice-color-issued)" }}
        ></span>

        <span>issued</span>
      </div>
      <div className='item__date'>
        <span>01/02/2021</span>
      </div>
      <div className='item__duedate'>
        <span>01/03/2021</span>
      </div>
      <div className='item__customer'>
        <span>fname lname</span>
      </div>
      <div className='item__amount'>
        <span>£40.00</span>
      </div>
      <div className='item__viewbutton'>
        <Link
          to='/system/jobs/invoices/view/id'
          className='item__button item__viewbutton__button'
        >
          view
        </Link>
      </div>
    </div>
  );
};

export default reduxForm({ form: "invoiceItem" })(Item);
