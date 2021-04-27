import React from "react";
import { Field } from "redux-form";
import Styles from "./worker.module.scss";

const Worker = ({ id, firstName, lastName }) => {
  return (
    <label className={Styles.worker}>
      <Field name={`worker_${id}`} component='input' type='checkbox' />
      <span className={Styles.worker__name}>
        {firstName} {lastName}
      </span>
    </label>
  );
};

export default Worker;
