import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Field, reduxForm } from "redux-form";
import Modal from "../modal";
import Styles from "./sendinvoicemodal.module.scss";

const termsOptions = [
  { name: "Due on receipt", value: "dueONReceipt" },
  { name: "7 days", value: "7days" },
  { name: "30 days", value: "30days" },
  { name: "60 days", value: "60days" },
];

const renderTermsSelector = ({ input, meta: { error, touched } }) => {
  return (
    <div className={Styles.invoicemodal__termsselectorwrapper}>
      <select
        {...input}
        className={Styles.invoicemodal__termsselectorwrapper__select}
      >
        {termsOptions.map(({ name, value }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

const CustomInput = ({ value, onClick }) => {
  console.log(value, onClick, "from custom input");
  return (
    <button
      className={Styles.invoicemodal__datepicker__button}
      onClick={onClick}
    >
      {value}
      <div>
        <i className='fa fa-calendar'></i>
      </div>
    </button>
  );
};

const InvoiceModal = ({ isOpened, setIsOpened }) => {
  const [invoiceDate, setInvoiceDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());

  return (
    <Modal isOpen={isOpened}>
      <div className={Styles.invoicemodal}>
        <button
          onClick={() => setIsOpened(false)}
          className={Styles.invoicemodal__close}
        >
          <i className='fa fa-times fa-lg'></i>
        </button>

        <div className={Styles.invoicemodal__datepicker}>
          <h3
            className={`${Styles.invoicemodal__label} ${Styles.invoicemodal__datepicker__heading}`}
          >
            Invoice date
          </h3>
          <DatePicker
            selected={invoiceDate}
            onChange={setInvoiceDate}
            selectsStart
            customInput={<CustomInput />}
          />
        </div>
        <div>
          <h3 className={Styles.invoicemodal__label}>Terms</h3>
          <Field component={renderTermsSelector} name='terms' />
        </div>
        <div className={Styles.invoicemodal__datepicker}>
          <h3
            className={`${Styles.invoicemodal__label} ${Styles.invoicemodal__datepicker__heading}`}
          >
            Due date
          </h3>
          <DatePicker
            selected={dueDate}
            onChange={setDueDate}
            selectsStart
            customInput={<CustomInput />}
          />
        </div>
        <div className={Styles.invoicemodal__emails}>
          <div className={Styles.invoicemodal__label}>
            <Field
              component='input'
              type='checkbox'
              name='isSendable'
              id='isSendable'
            />
            <label
              htmlFor='isSendable'
              className={Styles.invoicemodal__label__label}
            >
              Send E-mail
            </label>
          </div>
          <Field
            name='email'
            component='input'
            type='email'
            className={Styles.invoicemodal__emails__input}
          />
        </div>
        <div className={Styles.invoicemodal__jobreport}>
          <Field
            name='isReported'
            component='input'
            type='checkbox'
            id='isReported'
          />
          <label htmlFor='isReported' className={Styles.invoicemodal__label}>
            Include Job Report
          </label>
        </div>

        <div className={Styles.invoicemodal__notes}>
          <h3 className={Styles.invoicemodal__notes__label}>
            Notes (visible on invoice)
          </h3>
          <Field
            component='textarea'
            name='notes'
            className={Styles.invoicemodal__notes__box}
          />

          <p className={Styles.invoicemodal__notes__p}>
            The invoice will also automatically be saved to Jobs &gt; Invoices -
            section once Invoice is created.
          </p>
        </div>

        <div className={Styles.invoicemodal__addfiles}>
          <button className={Styles.invoicemodal__addfiles__button}>
            + Add files
          </button>
        </div>
        <footer className={`${Styles.invoicemodal__footer}`}>
          <div>
            <button
              className={`${Styles.invoicemodal__footer__cancel} ${Styles.invoicemodal__footer__button}`}
            >
              Cancel
            </button>
            <button
              className={`${Styles.invoicemodal__footer__previewinvoice} ${Styles.invoicemodal__footer__button}`}
            >
              {" "}
              Preview Invoice
            </button>
          </div>

          <button
            className={`${Styles.invoicemodal__footer__submit} ${Styles.invoicemodal__footer__button}`}
          >
            Send Invoice
          </button>
        </footer>
      </div>
    </Modal>
  );
};

export default reduxForm({
  form: "sendInvoiceModal",
})(InvoiceModal);
