import React from "react";
import Styles from "./main-info.module.scss";
import InvoiceActivityBox from "../../../../shared/invoice-activity-box";
import SendInvoiceModal from "../send-invoice-modal";

const MainInfo = (props) => {
  return (
    <div className={Styles.maininfo}>
      <header className={Styles.maininfo__header}>
        <div className={Styles.maininfo__info}>
          <div className={Styles.maininfo__info__id}>INVOICE_ID</div>
          <div className={Styles.maininfo__info__name}>INVOICE_NAME</div>
          <div className={Styles.maininfo__info__clientname}>
            INVOICE_CLIENT_NAME
          </div>
          <div className={Styles.maininfo__info__status}>
            <span
              className={Styles.maininfo__info__status__color}
              style={{ backgroundColor: "var(--invoice-color-issued)" }}
            ></span>
            <span className={Styles.maininfo__info__status__text}>
              invoice issued
            </span>
          </div>
        </div>
        <div className={Styles.maininfo__prices}>
          <h5 className={Styles.maininfo__prices__heading}>Cost Items</h5>£0.00
        </div>
      </header>
      <section className={Styles.maininfo__description}>
        <h5 className={Styles.maininfo__description__heading}>
          Invoice Description
        </h5>

        <main className={Styles.maininfo__description__body}>
          some invoice description goes here
        </main>
      </section>

      <section className={Styles.maininfo__dates}>
        <h5 className={Styles.maininfo__dates__heading}>Date added</h5>
        <p>10/02/2021</p>
        <h5
          className={` ${Styles.maininfo__dates__heading}  ${Styles.maininfo__dates__headingItalic}`}
        >
          Due date
        </h5>
        <p>12/03/2021</p>
      </section>
      <section className={Styles.maininfo__contract}>
        {" "}
        <h5 className={Styles.maininfo__contract__heading}>Contract</h5>
        <p className={Styles.maininfo__contract__status}>Non</p>
      </section>
      <InvoiceActivityBox
        buttonText='Send'
        heading='New invoice created'
        Modal={SendInvoiceModal}
      />
    </div>
  );
};

export default MainInfo;
