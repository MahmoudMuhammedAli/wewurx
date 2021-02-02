import React from "react";
import Styles from "../invoice-item-header/item.module.scss";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className={Styles.item}>
      <div className={Styles.item__invoicenom}>
        <Field
          name='checkAll'
          component='input'
          type='checkbox'
          className={Styles.item__checkAll}
        />
        <span>INV-CNA1 </span>
      </div>
      <div className={Styles.item__status}>
        <span
          className={Styles.item__status__color}
          style={{ backgroundColor: "var(--invoice-color-issued)" }}
        ></span>

        <span>issued</span>
      </div>
      <div className={Styles.item__date}>
        <span>01/02/2021</span>
      </div>
      <div className={Styles.item__duedate}>
        <span>01/03/2021</span>
      </div>
      <div className={Styles.item__customer}>
        <span>fname lname</span>
      </div>
      <div className={Styles.item__amount}>
        <span>£40.00</span>
      </div>
      <div className={Styles.item__viewbutton}>
        <Link
          to='invoices/view/id'
          className={` ${Styles.item__button} ${Styles.item__viewbutton__button}`}
        >
          view
        </Link>
      </div>
    </div>
  );
};

export default reduxForm({ form: "invoiceItem" })(Item);
