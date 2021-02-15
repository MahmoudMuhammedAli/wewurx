import React from "react";
import Styles from "./cost-items.module.scss";
import SharedCostItems from "../../../../shared/costitems";

const CostItems = (props) => {
  return (
    <div className={Styles.costitems}>
      <header className={Styles.costitems__header}>
        <h3 className={Styles.costitems__header__heading}>Invoice Name</h3>
        <div className={Styles.costitems__header__invoicenumber}>
          <h5 className={Styles.costitems__header__invoicenumber__heading}>
            Invoice Number
          </h5>
          <span className={Styles.costitems__header__invoicenumber__number}>
            {" "}
            INV-COM1
          </span>
        </div>
        <div className={Styles.costitems__header__customerinfo}>
          <span>FirstName</span>
          <span> Lastname</span>
        </div>
      </header>
      <SharedCostItems />
    </div>
    // this comment to change the prev commit message
  );
};

export default CostItems;
