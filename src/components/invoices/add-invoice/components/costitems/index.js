import React, { useState } from "react";
import Styles from "./costitems.module.scss";
import Item from "../../../../shared/cost-item";
import PricingInfo from "../../../../shared/pricing-info";
import AddItemModal from "../add-item";

const CostItems = (props) => {
  const [isModalOpened, setIsModalOpened] = useState(true);
  return (
    <div className={Styles.costitems}>
      {" "}
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
        <button className={Styles.costitems__additembutton}>Add Item +</button>
      </div>
      <PricingInfo />
      <AddItemModal
        isModalOpened={isModalOpened}
        setIsModalOpened={setIsModalOpened}
      />
    </div>
  );
};

export default CostItems;
