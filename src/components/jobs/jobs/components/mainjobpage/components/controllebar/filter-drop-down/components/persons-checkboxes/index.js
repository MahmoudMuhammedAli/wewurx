import React from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./persons-checkboxes.module.scss";

const PersonsCheckboxes = ({ change, persons }) => {
  const renderCustomers = (customers) => {
    return (
      <>
        {" "}
        {customers.map(({ id, firstName, lastName }) => {
          return (
            <label className={Styles.persons__inputcontainer} key={id}>
              <div className={Styles.persons__inputwrapper}>
                <Field name={id} type='checkbox' component='input' />
              </div>
              <span className={Styles.persons__inputwrapper__name}>
                {firstName} {lastName}
              </span>
            </label>
          );
        })}
      </>
    );
  };

  const changeAllFields = (value) => {
    persons.forEach(({ id }) => {
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
    <div className={Styles.persons}>
      {" "}
      <label className={Styles.persons__inputcontainer}>
        <div className={Styles.persons__inputwrapper}>
          <Field
            name='all'
            type='checkbox'
            component='input'
            onChange={(e) => handleAllChange(e)}
          />
        </div>
        <span className={Styles.persons__inputwrapper__name}>All</span>
      </label>
      {renderCustomers(persons)}
    </div>
  );
};

export default reduxForm({ form: "personsCheckboxes" })(PersonsCheckboxes);
