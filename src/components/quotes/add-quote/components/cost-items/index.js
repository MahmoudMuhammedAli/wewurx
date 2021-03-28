import React from "react";
import Styles from "./cost-items.module.scss";

const CostItems = (props) => {
  return (
    <div className={Styles.costitems}>
      <p>Please save the quote prior to adding Cost items.</p>
    </div>
  );
};

export default CostItems;
