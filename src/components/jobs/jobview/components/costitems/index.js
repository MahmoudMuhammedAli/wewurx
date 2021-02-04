import React from "react";
import Item from "../../../../shared/cost-item";
import PricingInfo from "../../../../shared/pricing-info";
import Styles from "./costitems.module.scss";

const CostItems = (props) => {
  return (
    <div className={`${Styles.costitems} viewjob__pag`}>
      <header className={Styles.costitems__header}>
        <div className={Styles.costitems__header__name}>Job Name</div>
        <div className={Styles.costitems__header__id}>
          <span className={Styles.costitems__header__id__label}>Job ID</span>{" "}
          <span className={Styles.costitems__header__id__id}>YUP5</span>
        </div>
        <div className={Styles.costitems__header__customername}>
          FirstName LastName
        </div>
        <div className={Styles.costitems__header__invoicestatus}>
          <span
            className={Styles.costitems__header__invoicestatus__color}
            style={{ backgroundColor: `var(--invoice-color-partPaid)` }}
          ></span>
          <span className={Styles.costitems__header__invoicestatus__text}>
            Invoice Part-Paid
          </span>
        </div>
      </header>
      <div
        className={`${Styles.costitems__items} ${Styles.costitems__itemsBillable}`}
      >
        <div className={`${Styles.costitems__items__header}`}>Billable (1)</div>
        <div className='costitems__item costitems__item--header'>
          <div className='costitems__item__item'>Item</div>
          <div className='costitems__item__qty'>Qty</div>
          <div className='costitems__item__tax'>Tax</div>
          <div className='costitems__item__discount'>Discount</div>
          <div className='costitems__item__total'>Total</div>
        </div>
        <Item />
      </div>
      <div
        className={`${Styles.costitems__items} ${Styles.costitems__itemsNonBillable}`}
      >
        <div className={Styles.costitems__items__header}>Non Billable (0)</div>
        <div className='costitems__item costitems__item--header'>
          <div className='costitems__item__item'>Item</div>
          <div className='costitems__item__qty'>Qty</div>
          <div className='costitems__item__tax'>Tax</div>
          <div className='costitems__item__discount'>Discount</div>
          <div className='costitems__item__total'>Total</div>
        </div>
      </div>
      <PricingInfo />
    </div>
  );
};

export default CostItems;
