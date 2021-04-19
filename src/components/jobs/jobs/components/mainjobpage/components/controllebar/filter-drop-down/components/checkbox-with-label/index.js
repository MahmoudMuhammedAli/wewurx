import React from "react";
import { Field } from "redux-form";
import Styles from "./checkbox-with-label.module.scss";

const renderInput = ({ input, label, id }) => {
  return (
    <label className={Styles.inputcontainer}>
      <div className={Styles.inputwrapper}>
        <input name={id} type='checkbox' {...input} />
      </div>
      <span className={Styles.inputwrapper__name}>{label}</span>
    </label>
  );
};
const CheckBoxWithLabel = ({ label, name, id }) => {
  return <Field name={name} label={label} component={renderInput} id={id} />;
};
export default CheckBoxWithLabel;
