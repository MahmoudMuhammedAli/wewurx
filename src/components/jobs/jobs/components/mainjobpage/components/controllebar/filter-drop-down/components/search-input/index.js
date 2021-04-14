import React from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./search-input.module.scss";
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
const SearchInput = (props) => {
  return (
    <div className={Styles.search}>
      {" "}
      <Field name='keywords' component={renderField} type='text' />
    </div>
  );
};
export default reduxForm({ form: "searchInput" })(SearchInput);
