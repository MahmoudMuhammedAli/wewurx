import React from "react";
import Styles from "./invoices.module.scss";
import FilterBar from "../../components/invoices/filterbar";
import StatusBar from "../../components/invoices/statusfilterbar";

const Invoices = (props) => {
  return (
    <div className={`${Styles.invoices} page`}>
      <FilterBar />
      <StatusBar />
    </div>
  );
};

export default Invoices;
