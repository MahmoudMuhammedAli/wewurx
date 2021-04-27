import React from "react";
import { reduxForm } from "redux-form";
import Worker from "../worker";
import Styles from "./workers-directory.module.scss";

const WorkersDirectory = (props) => {
  return (
    <div className={Styles.directory}>
      <Worker id={1} firstName='firstName' lastName='lastName' />
    </div>
  );
};

export default reduxForm({ form: "workers" })(WorkersDirectory);
