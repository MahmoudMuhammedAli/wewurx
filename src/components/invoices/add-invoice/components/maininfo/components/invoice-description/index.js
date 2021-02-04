import React from "react";
import Styles from "./invoice-description.module.scss";
import { Field, reduxForm } from "redux-form";

const InvoiceDescription = (props) => {
  return (
    <div className={Styles.description}>
      <h4 className={Styles.description__heading}>Invoice Description</h4>
      <Field
        name='description'
        component='textarea'
        className={Styles.description__textarea}
      />
      <br />
      <label className={Styles.description__checkbox}>
        <Field name='showDescription' component='input' type='checkbox' />
        Show invoice description on invoice
      </label>
    </div>
  );
};

export default reduxForm({ form: "invoiceMainInfo" })(InvoiceDescription);
