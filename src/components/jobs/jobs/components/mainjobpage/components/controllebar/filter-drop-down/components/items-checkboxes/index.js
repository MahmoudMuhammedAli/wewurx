import React from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./items-checkboxes.module.scss";
import CheckBoxWithLabel from "../checkbox-with-label";

const PersonsCheckboxes = ({ change, items }) => {
  const renderCustomers = (customers) => {
    return customers.map(({ id, firstName, lastName }) => (
      <CheckBoxWithLabel
        label={firstName + lastName}
        name={id}
        id={id}
        key={id}
      />
    ));
  };

  const changeAllFields = (value) => {
    items.forEach(({ id }) => {
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
    <div className={Styles.items}>
      {" "}
      <label className={Styles.items__inputcontainer}>
        <div className={Styles.items__inputwrapper}>
          <Field
            name='all'
            type='checkbox'
            component='input'
            onChange={(e) => handleAllChange(e)}
          />
        </div>
        <span className={Styles.items__inputwrapper__name}>All</span>
      </label>
      {renderCustomers(items)}
    </div>
  );
};

export default reduxForm({ form: "itemsCheckboxes" })(PersonsCheckboxes);
