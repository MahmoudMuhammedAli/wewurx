import React from "react";
import Styles from "./billing.module.scss";
import MainBilling from "./components/billing";
import Customerjobvisitreminder from "./components/customerjobvisitreminder";
import QuoteFollowUpEmails from "./components/quotefollowupemails";
import Rates from "./components/rates";

const Billing = (props) => {
  return (
    <div className={Styles.billing}>
      <h3 className={Styles.billing__heading}>Billing</h3>
      <MainBilling />
      <Rates />
      <QuoteFollowUpEmails />
      <Customerjobvisitreminder />
      <button className={Styles.billing__save}>save</button>
    </div>
  );
};

export default Billing;
