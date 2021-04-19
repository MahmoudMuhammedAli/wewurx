import React from "react";
import Styles from "./customer.module.scss";
import { Field, reduxForm } from "redux-form";
import SearchInput from "../search-input";
import PersonsCheckboxes from "../items-checkboxes";

const Customer = ({ change }) => {
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
    <div className={Styles.customer}>
      <SearchInput /> <PersonsCheckboxes items={persons} />
    </div>
  );
};

export default reduxForm({ form: "jobCustomerFilter" })(Customer);
