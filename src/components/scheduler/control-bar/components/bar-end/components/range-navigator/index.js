import React from "react";
import Styles from "./range-navigator.module.scss";

const RangeNavigator = (props) => {
  return (
    <div className={Styles.navigator}>
      <button className={`${Styles.navigator__btn} ${Styles.navigator__arrow}`}>
        <i className='fa fa-arrow-left'></i>
      </button>
      <button className={`${Styles.navigator__btn} ${Styles.navigator__today}`}>
        Today
      </button>
      <button className={`${Styles.navigator__btn} ${Styles.navigator__arrow}`}>
        <i className='fa fa-arrow-right'></i>
      </button>
    </div>
  );
};

export default RangeNavigator;
