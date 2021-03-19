import React from "react";
import Styles from "./customer.module.scss";
import { Field, reduxForm } from "redux-form";

const renderField = ({ input, type, meta: { error, touched } }) => {
  return (
    <div className={Styles.customer__searchinput}>
      <div className='searchinputwrapper'>
        <input
          {...input}
          type={type}
          className='searchinputwrapper__input'
          id='customerSearchInputQuote'
        />
        <label htmlFor='customerSearchInputQuote'>
          <i className='fa fa-search'></i>
        </label>
      </div>
      {touched && error && <span>{error}</span>}
    </div>
  );
};

const renderCustomers = (customers) => {
  return (
    <>
      {" "}
      {customers.map(({ id, firstName, lastName }) => {
        return (
          <label
            className={Styles.customer__customers__inputcontainer}
            key={id}
          >
            <div className={Styles.customer__customers__inputwrapper}>
              <Field name={id} type='checkbox' component='input' />
            </div>
            <span className={Styles.customer__customers__inputwrapper__name}>
              {firstName} {lastName}
            </span>
          </label>
        );
      })}
    </>
  );
};

const Customer = ({ change }) => {
  const names = [
    {
      id: "customer_id",
      firstName: "some first name",
      lastName: "some last name",
    },
    {
      id: "customer_id2",
      firstName: " first name",
      lastName: " last name",
    },
    {
      id: "customer_id4",
      firstName: " fname",
      lastName: " lname",
    },
  ];

  const changeAllFields = (value) => {
    names.forEach(({ id }) => {
      change(id, value);
    });
  };

  const checkAllFields = () => {
    changeAllFields(true);
  };
  const unCheckAllFields = () => {
    changeAllFields(false);
  };

  const handleAllChange = (e) => {
    const nextValue = e.target.checked;
    change("all", nextValue);

    if (nextValue) {
      return checkAllFields();
    }
    unCheckAllFields();
  };

  return (
    <div className={Styles.customer}>
      <Field name='keywords' component={renderField} type='text' />
      <div className={Styles.customer__customers}>
        {" "}
        <label className={Styles.customer__customers__inputcontainer}>
          <div className={Styles.customer__customers__inputwrapper}>
            <Field
              name='all'
              type='checkbox'
              component='input'
              onChange={(e) => handleAllChange(e)}
            />
          </div>
          <span className={Styles.customer__customers__inputwrapper__name}>
            All
          </span>
        </label>
        {renderCustomers(names)}
      </div>
    </div>
  );
};

export default reduxForm({ form: "quoteCustomerFilter" })(Customer);
