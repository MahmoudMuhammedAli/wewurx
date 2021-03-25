import React from "react";
import Styles from "./main-info.module.scss";
import CustomerSelector from "../../../../../../shared/customer-selector";
import { Field, reduxForm } from "redux-form";
import StatusSelector from "../quote-status-selector";

const MainInfo = (props) => {
  return (
    <div className={Styles.maininfo}>
      <CustomerSelector />
      <Field
        name='quoteName'
        component='input'
        type='text'
        placeholder='Quote name'
        className={Styles.maininfo__quotename}
      />
      <br />
      <StatusSelector onStatusChange={(item) => console.log(item)} />
    </div>
  );
};

export default reduxForm({ form: "addQuoteMainInfo" })(MainInfo);
