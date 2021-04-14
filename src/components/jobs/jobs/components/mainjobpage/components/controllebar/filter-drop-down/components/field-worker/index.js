import React from "react";
import { Field, reduxForm } from "redux-form";
import PersonsCheckboxes from "../persons-checkboxes";
import SearchInput from "../search-input";
import Styles from "./field-worker.module.scss";

const FieldWorker = ({ change }) => {
  const workers = [
    { firstName: "fname", lastName: "lname", id: "id1" },
    { firstName: "secondfname secondlname", lastName: "", id: "id2" },
  ];
  return (
    <div className={Styles.fieldworker}>
      <SearchInput />
      <h3 className={Styles.fieldworker__heading}>Person</h3>
      <PersonsCheckboxes persons={workers} />
    </div>
  );
};

export default reduxForm({ form: "jobFieldWorkerFilter" })(FieldWorker);
