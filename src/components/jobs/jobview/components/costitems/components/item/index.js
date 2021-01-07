import React from "react";
import Styles from "./item.module.scss";

const Item = (props) => {
  return (
    <div className={`${Styles.item} costitems__item `}>
      <div className={`costitems__item__item`}>
        <div className={"costitems__item__item__phone"}>+44 7895 462136</div>
        <div className={"costitems__item__item__description"}>
          this is the description of this specisific item
        </div>
        <div className={"costitems__item__item__cost"}>£140.00</div>
      </div>
      <div className={`costitems__item__qty`}>
        <div>1</div>
      </div>
      <div className={`costitems__item__tax`}>20%</div>
      <div className={`costitems__item__discount`}></div>
      <div className={`costitems__item__total`}>
        <div className={`costitems__item__total__totalprice`}>£140.00</div>
        <div className={`costitems__item__total__profit`}>£40.00</div>
      </div>
    </div>
  );
};

export default Item;
