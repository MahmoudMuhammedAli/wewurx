import React from "react";
import { Field, reduxForm } from "redux-form";
import Heading from "../heading";
import PersonsCheckboxes from "../items-checkboxes";
import SearchInput from "../search-input";

const FieldWorker = ({ change }) => {
  const workers = [
    { firstName: "fname", lastName: "lname", id: "id1" },
    { firstName: "secondfname secondlname", lastName: "", id: "id2" },
  ];
  return (
    <div>
      <SearchInput />
      <Heading>Person</Heading> <PersonsCheckboxes items={workers} />
    </div>
  );
};

export default reduxForm({ form: "jobFieldWorkerFilter" })(FieldWorker);
