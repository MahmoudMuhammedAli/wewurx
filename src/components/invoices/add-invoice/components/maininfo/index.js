import React from "react";
import Styles from "./maininfo.module.scss";
import { reduxForm, Field } from "redux-form";
import StatusSelector from "./components/invoice-status-selector";
import CustomerSelector from "../../../../shared/customer-selector";

const MainInfo = (props) => {
  return (
    <div className={Styles.info}>
      <Field
        name='name'
        component='input'
        type='text'
        className={Styles.info__input}
        placeholder='Invoice name'
      />
      <StatusSelector />
      <CustomerSelector />
    </div>
  );
};
export default reduxForm({ form: "invoiceMainInfo" })(MainInfo);
