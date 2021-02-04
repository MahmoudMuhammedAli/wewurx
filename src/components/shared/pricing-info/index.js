import React from "react";
import Styles from "./pricing-info.module.scss";

const PricingInfo = (props) => {
  return (
    <div className={Styles.totalpricinginfo}>
      <div className={Styles.totalpricinginfo__total}>
        <div className={Styles.totalpricinginfo__total__subtotal}>
          <span className={Styles.totalpricinginfo__label}>Subtotal: </span>
          <span className={Styles.totalpricinginfo__price}>£140.00</span>
        </div>
        <div className={Styles.totalpricinginfo__total__tax}>
          <span className={Styles.totalpricinginfo__label}>Tax: </span>
          <span className={Styles.totalpricinginfo__price}>£28.00</span>
        </div>
        <div className={Styles.totalpricinginfo__total__totalincludingtax}>
          <span className={Styles.totalpricinginfo__label}>
            Total Including Tax:{" "}
          </span>
          <span className={Styles.totalpricinginfo__price}>£168.00</span>
        </div>
      </div>
      <div className={Styles.totalpricinginfo__expenses}>
        <div className={Styles.totalpricinginfo__expenses__expenses}>
          <span className={Styles.totalpricinginfo__label}>Expenses: </span>
          <span
            className={Styles.totalpricinginfo__price}
            style={{
              color: `var(--price-color-lossable)`,
              fontWeight: "bold",
            }}
          >
            -£100.00
          </span>
        </div>
        <div className={Styles.totalpricinginfo__expenses__profitOrLoss}>
          <span className={Styles.totalpricinginfo__label}>Profit/Loss: </span>
          <span
            className={Styles.totalpricinginfo__price}
            style={{ color: `var(--price-color-profitable)` }}
          >
            £40.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default PricingInfo;
