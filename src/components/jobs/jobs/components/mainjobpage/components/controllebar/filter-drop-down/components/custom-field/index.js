import React from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./custom-field.module.scss";

const customeField = (props) => {
  return <div className={Styles.customefield}></div>;
};

export default reduxForm({ form: "jobCustomFieldFilter" })(customeField);
