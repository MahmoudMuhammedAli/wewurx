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
    { name: "Mark Accepted", value: "markAccepted" },
    { name: "Mark Rejected", value: "markRejected" },
    { name: "Export Quotes", value: "exportQuotes" },
  ];
  return (
    <div className={Styles.bar}>
      <div className={Styles.bar__left}>
        <Field name='action' component={renderSelector(actions)} />
        <button className={Styles.bar__apply}>Apply</button>
        <Link to='/system/jobs/quotes/add' className={Styles.bar__addquote}>
          <i className='fa fa-plus'></i> Add Quote
        </Link>
      </div>
      <div className={Styles.bar__right}>
        <button className={Styles.bar__reset}>Reset</button>
        <div className={Styles.bar__search}>
          <Field
            name='searchKeyWord'
            component='input'
            type='text'
            name='q'
            className={Styles.bar__search__input}
            placeholder='Keyword'
          />
          <i className='fa fa-search'></i>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({ form: "quotesActionBar" })(ControleBar);
