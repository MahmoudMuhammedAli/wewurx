import React, { useState } from "react";
import Styles from "./costitems.module.scss";
import Item from "../cost-item";
import PricingInfo from "../pricing-info";
import AddItemModal from "../add-cost-item";
import CostItemHeader from "../cost-item-header";

const CostItems = (props) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <div className={Styles.costitems}>
      <div className={`${Styles.costitems__items__header}`}>Billable (1)</div>
      <CostItemHeader />{" "}
      <div
        className={`${Styles.costitems__items} ${Styles.costitems__itemsBillable}`}
      >
        <Item />
        <Item />
      </div>
      <div
        className={`${Styles.costitems__items} ${Styles.costitems__itemsNonBillable}`}
      >
        <div className={Styles.costitems__items__header}>Non Billable (0)</div>
        <CostItemHeader />
        <button
          className={Styles.costitems__additembutton}
          onClick={() => setIsModalOpened(true)}
        >
          Add Item +
        </button>
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
