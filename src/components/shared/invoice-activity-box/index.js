import React, { useState } from "react";
import Styles from "./invoicecreated.module.scss";

const InvoiceCreated = ({ heading, Modal, buttonText }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <div className={Styles.invoicecreated}>
      <h3 className={Styles.invoicecreated__heading}>{heading}</h3>
      <div className={Styles.invoicecreated__details}>
        <span className={Styles.invoicecreated__details__dates}>
          {new Date().toLocaleDateString()} -{" "}
          {new Date().toTimeString().substring(0, 5)}
        </span>
        <span> by FirstName LastName</span>
      </div>
      <button
        className={Styles.invoicecreated__send}
        onClick={() => setIsModalOpened(true)}
      >
        {buttonText}
      </button>
      <Modal isOpened={isModalOpened} setIsOpened={setIsModalOpened} />
    </div>
  );
};

export default InvoiceCreated;
