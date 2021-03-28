import React from "react";
import Styles from "./assets.module.scss";

const Assets = (props) => {
  return (
    <div className={Styles.assets}>
      <label className={Styles.assets__label}>
        {" "}
        <input type='radio' name='asset' value='none' checked /> None
      </label>
      <label className={Styles.assets__label}>
        <input
          type='radio'
          name='asset'
          value='ReactiveWorkForAssets'
          disabled
        />{" "}
        Reactive work for asset(s)
      </label>
      <label className={Styles.assets__label}>
        <input type='radio' name='asset' value='serviceContractVisit' /> Service
        contract visit
      </label>
    </div>
  );
};

export default Assets;
