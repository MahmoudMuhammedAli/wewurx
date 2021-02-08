import React, { useState } from "react";
import Styles from "./add-item.module.scss";
import Modal from "../../../../shared/modal";
import SavedItemSelector from "./components/saved-item-selector";
import ItemDescription from "./components/item-description";
import QuantityCollector from "./components/quantity-collector";

const AddItemModal = ({ isModalOpened, setIsModalOpened }) => {
  return (
    <Modal isOpen={isModalOpened}>
      <div className={Styles.modal}>
        <h3 className={Styles.modal__heading}>Add a new item</h3>
        <SavedItemSelector />
        <ItemDescription />
        <QuantityCollector />
        <button onClick={() => setIsModalOpened(false)}>Cancel</button>
      </div>
    </Modal>
  );
};

export default AddItemModal;
