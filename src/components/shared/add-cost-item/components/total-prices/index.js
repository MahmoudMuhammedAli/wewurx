import React from "react";
import Styles from "./total-prices.module.scss";
import { useSelector } from "react-redux";

const TotalPrice = () => {
  const { addCostItemPrices, costItemTaxes } = useSelector(
    (state) => state.form
  );

  let { sellPrice } = addCostItemPrices.values;
  const { buyPrice } = addCostItemPrices.values;
  const { taxRate } = costItemTaxes.values;
  const { discount } = addCostItemPrices.values;
  const discountValue = (+discount / 100) * sellPrice;

  sellPrice = +sellPrice - discountValue;
  const taxValue = (taxRate / 100) * (+sellPrice).toFixed(2);

  const totalWithTaxes = taxValue + +sellPrice;
  const profits = (+sellPrice).toFixed(2) - (+buyPrice).toFixed(2);

  return (
    <div className={Styles.total}>
      <div className={Styles.total__status}>
        {" "}
        <h5 className={Styles.total__status__heading}>Profits / Loss</h5>
        <div
          className={`${
            profits > 0
              ? Styles.total__status__priceProfit
              : profits < 0
              ? Styles.total__status__priceLoss
              : ""
          } ${Styles.total__status__price}`}
        >
          £{profits.toFixed(2)}
        </div>
      </div>

      <div className={Styles.total__details}>
        <div className={Styles.total__details__item}>
          <h4 className={Styles.total__details__item__heading}>Discount: </h4>
          <span className={Styles.total__details__item__price}>£0.00</span>
        </div>
        <div className={Styles.total__details__item}>
          <h4 className={Styles.total__details__item__heading}>Subtotal: </h4>
          <span className={Styles.total__details__item__price}>
            £{(+sellPrice).toFixed(2)}
          </span>
        </div>
        <div className={Styles.total__details__item}>
          <h4 className={Styles.total__details__item__heading}>Tax: </h4>
          <span className={Styles.total__details__item__price}>
            £{taxValue.toFixed(2)}
          </span>
        </div>
        <div
          className={` ${Styles.total__details__itemTotal} ${Styles.total__details__item}`}
        >
          <h4 className={Styles.total__details__item__heading}>
            Total Including Tax:{" "}
          </h4>
          <span className={Styles.total__details__item__price}>
            £{totalWithTaxes.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
