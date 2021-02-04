import React, { useState } from "react";
import Styles from "./invoice-dates.module.scss";
import DatePicker from "react-datepicker";
import { reduxForm, Field } from "redux-form";

const terms = [
  { name: "Due on receipt", value: "dueONReceipt" },
  { name: "7 Days", value: "7Days" },
  { name: "14 Days", value: "14Days" },
  { name: "30 Days", value: "30Days" },
  { name: "60 Days", value: "60Days" },
  { name: "90 Days", value: "90Days" },
];

const renderTerms = ({ input }) => {
  return (
    <select {...input} className={Styles.invoicedates__termsSelector}>
      {terms.map(({ name, value }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

const InvoiceDates = (props) => {
  const [startdate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className={Styles.invoicedates}>
      <div className={Styles.invoicedates__startdates}>
        <h4 className={Styles.invoicedates__startdates__heading}>Date added</h4>
        <div className={Styles.invoicedates__datepicker}>
          <i className='fa fa-arrow-circle-down'></i>
          <DatePicker
            selected={startdate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <i className={Styles.invoicedates__startdates__terms}>Terms</i>
        <div className={Styles.invoicedates__startdates__selectwrapper}>
          <i className='fa fa-arrow-circle-down'></i>
          <Field name='terms' component={renderTerms} />
        </div>
      </div>
      <div className={Styles.invoicedates__enddate}>
        <h4 className={Styles.invoicedates__enddate__heading}>Due date</h4>
        <div className={Styles.invoicedates__datepicker}>
          <i className='fa fa-arrow-circle-down'></i>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
      </div>
    </div>
  );
};

export default reduxForm({ form: "invoiceMainInfo" })(InvoiceDates);
