import React from "react";
import Styles from "./invoicesent.module.scss";

const InvoiceSent = (props) => {
  return (
    <div className={Styles.invoicesent}>
      <h3 className={Styles.invoicesent__heading}>
        Invoice was sent to test@test.com
      </h3>
      <div className={Styles.invoicesent__details}>
        <span className={Styles.invoicesent__details__dates}>
          {new Date().toLocaleDateString()} -{" "}
          {new Date().toTimeString().substring(0, 5)}
        </span>
        <span> by FirstName LastName</span>
      </div>
      <button className={Styles.invoicesent__send}>Resend</button>
    </div>
  );
};

export default InvoiceSent;
