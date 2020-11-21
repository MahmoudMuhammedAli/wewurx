import React, { useState } from "react";
import Styles from "./customerfilterbar.module.scss";

const CustomerFilterBar = (props) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className={`${Styles.bar}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(setChecked(!checked))}
        className={`${Styles.bar__checkbox}`}
      />
      <div className={Styles.bar__job}>
        Job <i className="fa fa-arrow-down fa-lg"></i>
      </div>
      <div className={Styles.bar__invoice}>invoiced</div>
      <div className={Styles.bar__amount}>
        Amount <i className="fa fa-arrow-down fa-lg"></i>
      </div>
      <div className={Styles.bar__customer}>
        Customer <i className="fa fa-arrow-down fa-lg"></i>
      </div>
      <div className={Styles.bar__site}>
        Site <i className="fa fa-arrow-down fa-lg"></i>
      </div>
      <div className={Styles.bar__due}>
        Due Date <i className="fa fa-arrow-down fa-lg"></i>
      </div>
      <div className={Styles.bar__schedule}>
        Scheduled <i className="fa fa-arrow-down fa-lg"></i>
      </div>
      <div className={Styles.bar__assign}>
        Assigned to <i className="fa fa-arrow-down fa-lg"></i>
      </div>
      <div className={Styles.bar__reset}>Reset</div>
    </div>
  );
};

export default CustomerFilterBar;
