import React, { useState } from "react";
import Styles from "./quote-expiration.module.scss";

const QuoteExpiration = (props) => {
  const [dateadded, setDateadded] = useState(new Date());
  const getFormatedDate = (date) => {
    let numOfDays = date.getDate();
    let formatedNumberOfDays = numOfDays < 10 ? "0" + numOfDays : numOfDays;
    let month = date.getMonth() + 1;
    let formatedMonth = month < 10 ? "0" + month : month;
    return `${formatedNumberOfDays}/${formatedMonth}/${date.getFullYear()}`;
  };
  return (
    <div className={Styles.timinginfo}>
      <h5 className={Styles.timinginfo__label}>Date added</h5>
      <p className={Styles.timinginfo__date}>{getFormatedDate(dateadded)}</p>
      <i className={Styles.timinginfo__label}>Expiring</i>
      <p className={Styles.timinginfo__date}>{getFormatedDate(dateadded)}</p>
      <h5 className={Styles.timinginfo__label}>Assigned to</h5>
      <p className={Styles.timinginfo__label}>Not specified</p>

      <div className={Styles.timinginfo__duration}>
        <h5
          className={`${Styles.timinginfo__label} ${Styles.timinginfo__duration__label}`}
        >
          Quote duration
        </h5>
        <p className={Styles.timinginfo__duration__content}>Hours</p>
      </div>
      <h5 className={Styles.timinginfo__label}>Scheduled date</h5>
      <i className={Styles.timinginfo__label}>until</i>
      <p className={Styles.timinginfo__label}>Not specified</p>
    </div>
  );
};

export default QuoteExpiration;
