import React from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./textarea.module.scss";

const TextArea = (props) => {
  return (
    <div className={Styles.textarea}>
      <h3 className={Styles.textarea__heading}>Notes (visible on invoice)</h3>
      <Field
        name='description'
        component='textarea'
        className={Styles.textarea__box}
      />
    </div>
  );
};

export default reduxForm({ form: "sendInvoiceDescription" })(TextArea);
