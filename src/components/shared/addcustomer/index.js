import React, { useRef } from "react";
import Styles from "./addcustomer.module.scss";
import { reduxForm, Field } from "redux-form";

const renderField = ({
  input,
  label,
  placeholder,
  className,
  type,
  meta: { touched, error },
}) => {
  return (
    <div className={Styles.addcustomer__form__input}>
      <div className={Styles.addcustomer__form__input__label}>
        <label htmlFor={label}>{label}</label>
      </div>
      <div className={`${Styles.addcustomer__form__input__input} ${className}`}>
        <input {...input} type={type} placeholder={placeholder} id={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};

const AddCustomer = (props) => {
  const formEl = useRef(null);
  let isFormOpen = false;

  const showForm = () => {
    formEl.current.style.transform = "scaleY(1)";
    isFormOpen = true;
  };
  const hideForm = () => {
    formEl.current.style.transform = "scaleY(0)";
    isFormOpen = false;
  };
  const handleShowingTheForm = (e) => {
    if (isFormOpen) {
      return hideForm();
    }
    showForm();
  };

  const handlSubmit = (values) => {};
  return (
    <div className={Styles.addcustomer}>
      <button
        className={Styles.addcustomer__label}
        onClick={handleShowingTheForm}
      >
        Add new Customer
      </button>

      <form
        className={Styles.addcustomer__form}
        onSubmit={props.handleSubmit(handlSubmit)}
        ref={formEl}
      >
        <div className={Styles.addcustomer__form__input}>
          <div className={Styles.addcustomer__form__input__label}>
            <label htmlFor='isCompany'>Company</label>
          </div>
          <div className={Styles.addcustomer__form__input__input}>
            <Field
              component='input'
              type='checkbox'
              name='isCompany'
              id='isCompany'
            />
          </div>
        </div>
        <span
          className={Styles.addcustomer__form__cancelbutton}
          onClick={hideForm}
        >
          cancel
        </span>
        <Field component={renderField} name='firstName' label='First name' />
        <Field component={renderField} name='lastName' label='Last name' />
        <Field
          component={renderField}
          name='email'
          type='email'
          label='Email'
        />
        <Field component={renderField} name='phone' type='tel' label='Phone' />
        <Field
          component={renderField}
          name='mobile'
          type='tel'
          label='Mobile'
        />
        <Field
          component={renderField}
          name='address'
          type='text'
          label='Address'
        />
        <Field component={renderField} name='city' type='text' label='City' />
        <Field
          component={renderField}
          name='state'
          type='text'
          label='State/Country'
        />
        <Field
          component={renderField}
          name='zipCode'
          type='text'
          label='Post/Zip code'
          className={Styles.addcustomer__form__input__inputHalf}
        />
        <div className={Styles.addcustomer__form__input}>
          <div className={Styles.addcustomer__form__input__label}></div>
          <div
            className={`${Styles.addcustomer__form__input__input} ${Styles.addcustomer__form__input__inputCheck}`}
          >
            <label htmlFor='isSiteAddress'>Also make site Address</label>
            <Field
              component='input'
              type='checkbox'
              name='isSiteAddress'
              id='isSiteAddress'
            />
          </div>
        </div>
        <button>Add Customer</button>
      </form>
    </div>
  );
};
export default reduxForm({
  form: "addCustomer",
})(AddCustomer);
