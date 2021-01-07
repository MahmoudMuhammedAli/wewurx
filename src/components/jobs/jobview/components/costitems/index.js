import React from "react";
import Item from "./components/item";
import Styles from "./costitems.module.scss";
import "./items.scss";

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
      <div className={Styles.costitems__totalpricinginfo}>
        <div className={Styles.costitems__totalpricinginfo__total}>
          <div className={Styles.costitems__totalpricinginfo__total__subtotal}>
            <span className={Styles.costitems__totalpricinginfo__label}>
              Subtotal:{" "}
            </span>
            <span className={Styles.costitems__totalpricinginfo__price}>
              £140.00
            </span>
          </div>
          <div className={Styles.costitems__totalpricinginfo__total__tax}>
            <span className={Styles.costitems__totalpricinginfo__label}>
              Tax:{" "}
            </span>
            <span className={Styles.costitems__totalpricinginfo__price}>
              £28.00
            </span>
          </div>
          <div
            className={
              Styles.costitems__totalpricinginfo__total__totalincludingtax
            }
          >
            <span className={Styles.costitems__totalpricinginfo__label}>
              Total Including Tax:{" "}
            </span>
            <span className={Styles.costitems__totalpricinginfo__price}>
              £168.00
            </span>
          </div>
        </div>
        <div className={Styles.costitems__totalpricinginfo__expenses}>
          <div
            className={Styles.costitems__totalpricinginfo__expenses__expenses}
          >
            <span className={Styles.costitems__totalpricinginfo__label}>
              Expenses:{" "}
            </span>
            <span
              className={Styles.costitems__totalpricinginfo__price}
              style={{
                color: `var(--price-color-lossable)`,
                fontWeight: "bold",
              }}
            >
              -£100.00
            </span>
          </div>
          <div
            className={
              Styles.costitems__totalpricinginfo__expenses__profitOrLoss
            }
          >
            <span className={Styles.costitems__totalpricinginfo__label}>
              Profit/Loss:{" "}
            </span>
            <span
              className={Styles.costitems__totalpricinginfo__price}
              style={{ color: `var(--price-color-profitable)` }}
            >
              £40.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostItems;
