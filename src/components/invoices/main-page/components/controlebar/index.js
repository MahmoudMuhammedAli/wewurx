import React from "react";
import Styles from "./controlebar.module.scss";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

const renderSelector = (options) => ({ input }) => {
  return (
    <select {...input} className={Styles.bar__select}>
      {options.map(({ name, value }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

const ControleBar = (props) => {
  const actions = [
    { name: "export", value: "export" },
    { name: "Mark sent", value: "markSent" },
  ];
  return (
    <div className={Styles.bar}>
      <div className={Styles.bar__left}>
        <Field name='action' component={renderSelector(actions)} />
        <button className={Styles.bar__apply}>Apply</button>
        <Link to='/system/jobs/invoices/add' className={Styles.bar__addinvoice}>
          <i className='fa fa-plus'></i> Add Invoice
        </Link>
      </div>
      <div className={Styles.bar__right}>
        <button className={Styles.bar__reset}>Reset</button>
        <div className={Styles.bar__search}>
          <Field
            name='searchKeyWord'
            component='input'
            type='text'
            className={Styles.bar__search__input}
            placeholder='Keyword'
          />
          <i className='fa fa-search'></i>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({ form: "invoicesActionBar" })(ControleBar);
