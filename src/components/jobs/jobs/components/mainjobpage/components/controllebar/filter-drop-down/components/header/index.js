import React from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./header.module.scss";
const renderSelect = (list) => ({ input, className }) => {
  return (
    <select {...input} className={className}>
      {list.map(({ name, value }) => {
        return (
          <option key={value} value={value}>
            {name}
          </option>
        );
      })}
    </select>
  );
};

const Header = ({ setIsDropDownOpened }) => {
  return (
    <header className={Styles.header__header}>
      <button className={Styles.header__filtersbutton}>filters</button>
      <div className={Styles.header__presets}>
        <label className={Styles.header__presets__label}>
          Presets
          <Field
            name='preset'
            component={renderSelect([])}
            className={Styles.header__presets__select}
          />
        </label>
      </div>

      <button
        onClick={() => setIsDropDownOpened(false)}
        className={Styles.header__cancelbutton}
      >
        Cancel
      </button>
    </header>
  );
};

export default reduxForm({ form: "jobFilterDropDownHeader" })(Header);
