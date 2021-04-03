import React, { useState } from "react";
import AddItemModal from "../../../../shared/add-cost-item";
import Item from "../../../../shared/cost-item";
import CostItemHeader from "../../../../shared/cost-item-header";
import PricingInfo from "../../../../shared/pricing-info";
import QuoteMainInfo from "../../../../shared/quote-maininfo";
import Styles from "./cost-items.module.scss";

const CostItems = (props) => {
  const [isAddItemModalOpened, setIsAddItemModalOpened] = useState(false);
  return (
    <div className={Styles.costitems}>
      <QuoteMainInfo />
      <div className={Styles.costitems__billable}>
        <h3 className={Styles.costitems__label}>
          Billable (<b>0</b>)
        </h3>
        <CostItemHeader />
        <Item />
      </div>
      <div className={Styles.costitems__notbillable}>
        <h3 className={Styles.costitems__label}>
          Not Billable (<b>0</b>)
        </h3>
        <CostItemHeader />
        <Item />
      </div>
      <div className={Styles.costitems__additemcontainer}>
        <button
          className={Styles.costitems__additembutton}
          onClick={() => setIsAddItemModalOpened(true)}
        >
          Add item +
        </button>
      </div>
      <PricingInfo />
      <AddItemModal
        isModalOpened={isAddItemModalOpened}
        setIsModalOpened={setIsAddItemModalOpened}
      />
    </div>
  );
};

export default CostItems;
