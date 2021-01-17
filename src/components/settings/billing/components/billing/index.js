import React from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./billing.module.scss";

const paymentTerms = [
  { name: "On receipt", value: "onReceipt" },
  { name: "Net 7 days", value: "net7Days" },
  { name: "Net 14 days", value: "net14Days" },
  { name: "Net 30 days", value: "net30Days" },
  { name: "Net 60 days", value: "net60Days" },
];
const validDurations = [
  { name: "7 days", value: "7Days" },
  { name: "14 days", value: "14Days" },
  { name: "30 days", value: "30Days" },
  { name: "60 days", value: "60Days" },
  { name: "90 days", value: "90Days" },
];

const renderSelector = (list) => ({
  input,
  className,
  label,
  meta: { error, touched },
}) => {
  return (
    <div className={Styles.billing__selectcontainer}>
      <label className={Styles.billing__selectcontainer__label}>{label}</label>
      <select
        className={` ${className} ${Styles.billing__input} ${Styles.billing__selectcontainer__select}`}
        {...input}
      >
        {list.map(({ name, value }) => (
          <option value={value} key={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

const renderField = ({
  input,
  type,
  label,
  secondLabel,
  meta: { error, touched },
}) => {
  return (
    <div className={Styles.billing__billingtimeduration}>
      <label className={Styles.billing__billingtimeduration__label}>
        {label}
      </label>
      <input
        type={type}
        {...input}
        className={`${Styles.billing__input} ${Styles.billing__billingtimeduration__input}`}
      />
      <label
        className={`${Styles.billing__billingtimeduration__label} ${Styles.billing__billingtimeduration__secondLabel}`}
      >
        {secondLabel}
      </label>
      {touched && error && <span>{error}</span>}
    </div>
  );
};

const MainBilling = (props) => {
  return (
    <div className={Styles.billing}>
      <h4 className={Styles.billing__heading}>Billing</h4>
      <Field
        component={renderSelector(paymentTerms)}
        name='paymentTerms'
        label='Payment terms'
      />
      <Field
        component={renderField}
        name='billingTimeDuration'
        label='Bill time in'
        type='number'
        secondLabel='minute increments'
      />
      <Field
        component={renderSelector(validDurations)}
        name='validDuration'
        label='Quote valid (default duration) '
        className={Styles.billing__validdurationselector}
      />
      <div className={Styles.billing__createlaborcontainer}>
        <Field
          name='createLaborCostItemAutomatically'
          component='input'
          type='checkbox'
          className={Styles.billing__createlaborcontainer__input}
        />
        <label className={Styles.billing__createlaborcontainer__label}>
          Automatically create a labour cost item
        </label>
        <p>
          Change name and description of <span> a labour cost item</span>
        </p>
      </div>
    </div>
  );
};
export default reduxForm({ form: "mainBilling" })(MainBilling);
