import React from "react";
import Styles from "./quote-maininfo.module.scss";

const QuoteMainInfo = (props) => {
  return (
    <div className={Styles.maininfo}>
      {" "}
      <h2 className={Styles.maininfo__name}>quote name</h2>
      <p className={Styles.maininfo__number}>
        <span className={Styles.maininfo__number__label}>Quote Number</span>
        SCO3
      </p>
      <p className={Styles.maininfo__contactcompany}>Contact Company name</p>
    </div>
  );
};

export default QuoteMainInfo;
