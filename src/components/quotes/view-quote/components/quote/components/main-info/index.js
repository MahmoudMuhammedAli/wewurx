import React from "react";
import { Link } from "react-router-dom";
import Styles from "./main-info.module.scss";

const MainInfo = ({ id }) => {
  return (
    <div className={Styles.maininfo}>
      <div className={Styles.maininfo__details}>
        <h2 className={Styles.maininfo__details__name}>quote name</h2>
        <p className={Styles.maininfo__details__number}>
          <span className={Styles.maininfo__details__number__label}>
            Quote Number
          </span>
          SCO3
        </p>
        <p className={Styles.maininfo__details__contactcompany}>
          Contact Company name
        </p>
        <p className={Styles.maininfo__details__status}>
          <span className={Styles.maininfo__details__status__color}></span>Draft
        </p>
      </div>
      <div className={Styles.maininfo__price}>
        <p>£0.00</p>
        <Link
          className={Styles.maininfo__price__link}
          to={`/jobs/quotes/${id}/view/cost-items`}
        >
          Cost Item
        </Link>
      </div>
    </div>
  );
};

export default MainInfo;
