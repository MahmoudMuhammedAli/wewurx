import React from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./regionalsettings.module.scss";

const renderSelector = (selections) => ({
  input,
  label,
  meta: { error, touched },
}) => {
  return (
    <div className={Styles.settings__selectorwrapper}>
      <label className={Styles.settings__selectorwrapper__label}>
        <span className={Styles.settings__selectorwrapper__label__label}>
          {label}
        </span>
        <select
          className={Styles.settings__selectorwrapper__label__select}
          {...input}
        >
          {selections.map((selection) => (
            <option key={selection} value={selection}>
              {selection}
            </option>
          ))}
        </select>
        {touched && error && <span>{error}</span>}
      </label>
    </div>
  );
};

const dateFormates = ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY/MM/DD"];
const countries = ["United Kingdom", "United States", "Canada"];
const timeZones = ["GMT", "GMT +1", "GMT -1"];
const currencies = ["GBP", "EGP", "USD"];
const timeFormates = ["24 Hours", "12 Hours"];

const RegionalSettings = (props) => {
  return (
    <div className={Styles.settings}>
      <h3 className={Styles.settings__heading}>Regional Settings</h3>
      <Field
        component={renderSelector(countries)}
        name='country'
        label='Country'
      />
      <div className={Styles.settings__timezonewrapper}>
        <div className={Styles.settings__selectorwrapper}>
          <span className={Styles.settings__selectorwrapper__label}>
            <span
              className={Styles.settings__selectorwrapper__label__label}
            ></span>
            <span className={Styles.settings__timezonewrapper__currenttime}>
              Current time {new Date().toTimeString().substring(0, 5)}
            </span>
          </span>
        </div>
        <Field
          component={renderSelector(timeZones)}
          name='timeZone'
          label='Set timezone manually'
        />
      </div>

      <Field
        component={renderSelector(dateFormates)}
        name='dateFormate'
        label='Date formate'
      />

      <Field
        component={renderSelector(currencies)}
        name='currency'
        label='Currency'
      />
      <Field
        component={renderSelector(timeFormates)}
        name='timeFormate'
        label='Time formate'
      />
    </div>
  );
};

export default reduxForm({ form: "regionalSettings" })(RegionalSettings);
