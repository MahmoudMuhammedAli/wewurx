import React from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./address.module.scss";

const renderField = ({
  input,
  id,
  label,
  type,
  className,
  meta: { error, touched },
}) => {
  return (
    <div className={Styles.address__inputcontainer}>
      <label className={Styles.address__label} htmlFor={id}>
        {label}
      </label>
      <input
        className={`${Styles.address__input} ${className ? className : ""}`}
        type={type}
        id={id}
        {...input}
      />
      {touched && error && <span>{error}</span>}
    </div>
  );
};

const Address = (props) => {
  return (
    <div className={Styles.address}>
      <h3 className={Styles.address__heading}>Site address</h3>
      <Field
        name='address'
        label='Address'
        id='addQuoteSiteAddress'
        component={renderField}
      />
      <label className={Styles.address__label}></label>
      <h4 className={Styles.address__choice}>
        Or choose a saved address/enter manually below
      </h4>

      <Field
        name='address1'
        label=''
        id='addQuoteSiteAddress1'
        component={renderField}
      />
      <Field
        name='address2'
        label=''
        id='addQuoteSiteAddress2'
        component={renderField}
      />
      <Field
        name='city'
        label='City'
        id='addQuoteSiteCity'
        component={renderField}
      />
      <Field
        name='state'
        label='State/County'
        id='addQuoteSiteState'
        component={renderField}
      />
      <Field
        name='zipCode'
        label='Post/Zip'
        id='addQuoteSiteZipCode'
        component={renderField}
        className={Styles.address__inputHalf}
      />
    </div>
  );
};

export default reduxForm({ form: "addQuoteSiteAddress" })(Address);
