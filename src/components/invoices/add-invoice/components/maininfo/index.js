import React from "react";
import Styles from "./maininfo.module.scss";
import { reduxForm, Field } from "redux-form";
import StatusSelector from "./components/invoice-status-selector";
import CustomerSelector from "../../../../shared/customer-selector";
import ContractSelector from "./components/contaract-selector";
import InvoiceDescription from "./components/invoice-description";
import InvoiceDates from "./components/invoice-dates";

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
      <ContractSelector />
      <InvoiceDescription />
      <InvoiceDates />
      <button className={Styles.info__save}>Save</button>
    </div>
  );
};
export default reduxForm({ form: "invoiceMainInfo" })(MainInfo);
