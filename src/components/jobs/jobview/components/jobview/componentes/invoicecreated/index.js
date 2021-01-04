import React from "react";
import Styles from "./invoicecreated.module.scss";

const InvoiceCreated = (props) => {
  return (
    <div className={Styles.invoicecreated}>
      <h3 className={Styles.invoicecreated__heading}>New invoice created</h3>
      <div className={Styles.invoicecreated__details}>
        <span className={Styles.invoicecreated__details__dates}>
          {new Date().toLocaleDateString()} -{" "}
          {new Date().toTimeString().substring(0, 5)}
        </span>
        <span> by FirstName LastName</span>
      </div>
      <button className={Styles.invoicecreated__send}>Send</button>
    </div>
  );
};

export default InvoiceCreated;
