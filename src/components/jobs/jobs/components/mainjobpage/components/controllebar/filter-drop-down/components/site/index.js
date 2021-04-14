import React from "react";
import Styles from "./site.module.scss";
import { reduxForm, Field } from "redux-form";
import PersonsCheckboxes from "../persons-checkboxes";
import SearchInput from "../search-input";

const Site = ({ change }) => {
  const persons = [
    {
      id: "customer_id",
      firstName: "some first name",
      lastName: "some last name",
    },
    {
      id: "customer_id2",
      firstName: " first name",
      lastName: " last name",
    },
    {
      id: "customer_id4",
      firstName: " fname",
      lastName: " lname",
    },
  ];

  return (
    <div className={Styles.site}>
      <SearchInput />
      <PersonsCheckboxes persons={persons} />
    </div>
  );
};

export default reduxForm({ form: "jobSiteFilter" })(Site);
