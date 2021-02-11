import React, { useState } from "react";
import Styles from "./add-item.module.scss";
import Modal from "../modal";
import SavedItemSelector from "./components/saved-item-selector";
import ItemDescription from "./components/item-description";
import QuantityCollector from "./components/quantity-collector";
import Prices from "./components/prices";
import TaxRates from "./components/tax-rates";
import TotalPrice from "./components/total-prices";

const AddItemModal = ({ isModalOpened, setIsModalOpened }) => {
  return (
    <Modal isOpen={isModalOpened} height='150vh'>
      <div className={Styles.modal}>
        <h3 className={Styles.modal__heading}>Add a new item</h3>
        <SavedItemSelector />
        <ItemDescription />
        <QuantityCollector />
        <Prices />
        <TaxRates />
        <TotalPrice />

        <footer className={Styles.modal__footer}>
          <button
            onClick={() => setIsModalOpened(false)}
            className={Styles.modal__cancel}
          >
            Cancel
          </button>
          <div>
            <button className={Styles.modal__saveandmore}>
              Save and add more
            </button>
            <button className={Styles.modal__save}>Save</button>
          </div>
        </footer>
      </div>
    </Modal>
  );
};

export default AddItemModal;
