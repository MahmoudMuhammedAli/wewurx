import React from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./rates.module.scss";

const Rates = (props) => {
  return (
    <div className={Styles.rates}>
      <div className={Styles.rates__headingcontainer}>
        <h4 className={Styles.rates__headingcontainer__heading}>Rates</h4>
        <span>What is rates?</span>
      </div>
      <div className={Styles.rates__rates}>
        <label className={Styles.rates__rates__label}>Rates</label>
        <div className={Styles.rates__rates__defaultrates}>
          <label className={Styles.rates__rates__defaultrates__label}>
            Default Rate
          </label>
          <Field
            name='defaultRateValue'
            component='input'
            type='text'
            className={` ${Styles.rates__rates__defaultrates__input} ${Styles.rates__rates__defaultrates__ratevalueinput}`}
          />{" "}
          £{" "}
          <Field
            name='defaultRateNumber'
            component='input'
            type='number'
            className={`${Styles.rates__rates__defaultrates__ratenumberinput} ${Styles.rates__rates__defaultrates__input}`}
          />{" "}
          / hour
        </div>
        <div className={Styles.rates__rates__add}>
          {" "}
          <span className={Styles.rates__rates__add__button}>
            <i className='fa fa-plus fa-lg'></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({ form: "retes" })(Rates);
