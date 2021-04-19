import React from "react";
import Styles from "./invoice-status.module.scss";

import { reduxForm, Field } from "redux-form";

const renderField = ({ input, type, label, id, color }) => {
  return (
    <div className={Styles.status__checkboxrow}>
      <div className={Styles.status__inputwrapper}>
        <input
          className={Styles.status__inputwrapper__input}
          id={id}
          type={type}
          {...input}
        />
        <div
          className={` ${Styles.status__labelwrapper}`}
          style={color ? {} : { width: "0px" }}
        >
          <label
            htmlFor={id}
            style={
              color ? { backgroundColor: `var(${color}) ` } : { width: "0px" }
            }
          ></label>
        </div>
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
};

const InvoiceStatus = ({ change }) => {
  const changeAllFieldValue = (value) => {
    change("issued", value);
    change("sent", value);
    change("partPaid", value);
    change("overdued", value);
    change("void", value);
    change("nonInvoiced", value);
  };
  const checkAllFields = () => {
    changeAllFieldValue(true);
  };
  const unCheckAllFields = () => {
    changeAllFieldValue(false);
  };
  const handleAllChange = (e) => {
    const allNextInvoiceStatus = e.target.checked;
    change("all", allNextInvoiceStatus);

    if (allNextInvoiceStatus) {
      return checkAllFields();
    }
    unCheckAllFields();
  };
  return (
    <div className={Styles.status}>
      <div className={Styles.status__status}>
        <h4 className={Styles.status__heading}>InvoiceStatus</h4>
        <div>
          <div
            className={`${Styles.status__labelwrapperUnColored} ${Styles.status__labelwrapper}`}
          >
            <Field
              component='input'
              type='checkbox'
              id='all'
              name='all'
              onChange={handleAllChange}
              className={Styles.status__labelwrapper__checkbox}
            />
          </div>
          <div className={Styles.status__inputwrapper}>
            <label htmlFor='all'>All</label>
          </div>
        </div>
        <Field
          component={renderField}
          type='checkbox'
          label='Issued'
          id='invoiceStatusFilterIssued'
          color='--invoice-color-issued'
          name='issued'
        />
        <Field
          component={renderField}
          type='checkbox'
          label='Send'
          id='invoiceStatusFilterSend'
          color='--invoice-color-sent'
          name='sent'
        />
        <Field
          component={renderField}
          type='checkbox'
          label='Part-paid'
          id='jobQuoteInPartPaid'
          color='--invoice-color-partPaid'
          name='partPaid'
        />
        <Field
          component={renderField}
          type='checkbox'
          label='Overdued'
          id='jobQuoteOverdued'
          color='--invoice-color-overdued'
          name='overdued'
        />
        <Field
          component={renderField}
          type='checkbox'
          label='Void'
          id='jobQuoteVoid'
          color='--invoice-color-void'
          name='void'
        />
        <Field
          component={renderField}
          type='checkbox'
          label='Non invoiced'
          id='jobQuoteNonInvoiced'
          name='nonInvoiced'
        />
      </div>
    </div>
  );
};

export default reduxForm({ form: "jobInvoiceStatusFilter" })(InvoiceStatus);
