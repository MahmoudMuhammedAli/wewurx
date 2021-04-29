import React from "react";
import { getDayName, getMonthName } from "../../../../../helpers";
import Styles from "./dates-info.module.scss";

const DatesInfo = ({ range, startDate }) => {
  let endDate = new Date();
  endDate.setDate(endDate.getDate() + range);

  return (
    <div className={Styles.dates}>
      <i className={`fa fa-calendar ${Styles.dates__icon}`}></i>
      <div className={Styles.dates__date}>
        <span>
          {getDayName(startDate)}, {startDate.getDate()}{" "}
          {getMonthName(startDate).substr(0, 3)}
        </span>
        <span className={Styles.dates__date__year}>
          {startDate.getFullYear()}
        </span>
      </div>{" "}
      <span className={Styles.dates__dash}> – </span>
      <div className={Styles.dates__date}>
        {" "}
        <span>
          {getDayName(endDate)}, {endDate.getDate()}{" "}
          {getMonthName(endDate).substr(0, 3)}
        </span>
        <span className={Styles.dates__date__year}>
          {endDate.getFullYear()}
        </span>
      </div>
    </div>
  );
};

export default DatesInfo;
