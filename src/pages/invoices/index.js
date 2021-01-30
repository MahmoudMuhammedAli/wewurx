import React from "react";
import Styles from "./invoices.module.scss";
import FilterBar from "../../components/invoices/filterbar";

const Invoices = (props) => {
  return (
    <div className={`${Styles.invoices} page`}>
      <FilterBar />
    </div>
  );
};

export default Invoices;
