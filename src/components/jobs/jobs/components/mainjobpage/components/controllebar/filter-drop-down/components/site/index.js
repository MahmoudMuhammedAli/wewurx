import React from "react";
import Styles from "./site.module.scss";
import { reduxForm, Field } from "redux-form";
import PersonsCheckboxes from "../items-checkboxes";
import SearchInput from "../search-input";
import SitesDirectory from "./sites-directory";

const Site = ({ change }) => {
  const sites = [
    {
      id: "customer_id",
      site: "10 redwood drive",
      person: "adam bennet-griffin",
    },
    {
      id: "customer_id2",
      site: "Melrose Gardens",
      person: "Adam Davies",
    },
    {
      id: "customer_id4",
      site: "6 Saint Lawrence Avenue",
      person: "Adam Patel",
    },
  ];

  return (
    <div className={Styles.site}>
      <SearchInput />
      <SitesDirectory sites={sites} />
    </div>
  );
};

export default reduxForm({ form: "jobSiteFilter" })(Site);
