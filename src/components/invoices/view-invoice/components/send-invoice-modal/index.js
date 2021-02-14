import React from "react";
import Styles from "./send-invoice-modal.module.scss";
import Modal from "../../../../shared/modal";
import { reduxForm, Field } from "redux-form";
import TextArea from "./components/textarea";
import AddFiles from "./components/addfiles";
import PreviewButton from "./components/preview-button";
import SaveButton from "./components/save-button";

const EmailInput = (props) => {
  return (
    <Field
      name='email'
      type='email'
      component='input'
      className={Styles.sendinvoice__emails__input}
    />
  );
};

const DecoratedEmailInput = reduxForm({ form: "sendInvoiceEmail" })(EmailInput);

const CheckBoxInput = (props) => {
  return <Field name='input' component='input' type='checkbox' />;
};

const DecoratedCheckBoxInput = reduxForm({
  form: "sendInvoiceShouldSendEmail",
})(CheckBoxInput);

const SendInvoiceModal = ({ isOpened, setIsOpened }) => {
  return (
    <Modal isOpen={isOpened}>
      <div className={Styles.sendinvoice}>
        <button
          onClick={() => setIsOpened(false)}
          className={Styles.sendinvoice__closebutton}
        >
          <i className='fa fa-close'></i>
        </button>

        <header className={Styles.sendinvoice__maininfo}>
          <div className={Styles.sendinvoice__number}>
            <h5
              className={` ${Styles.sendinvoice__label} ${Styles.sendinvoice__number__heading}`}
            >
              Invoice number
            </h5>
            <div
              className={` ${Styles.sendinvoice__value} ${Styles.sendinvoice__number__number}`}
            >
              INV-COM2
            </div>
          </div>
          <div className={Styles.sendinvoice__date}>
            <h5
              className={` ${Styles.sendinvoice__label} ${Styles.sendinvoice__date__heading}`}
            >
              Invoice date
            </h5>
            <div
              className={` ${Styles.sendinvoice__value} ${Styles.sendinvoice__date__date}`}
            >
              11/02/2021
            </div>
          </div>
          <div className={Styles.sendinvoice__duedate}>
            <h5
              className={` ${Styles.sendinvoice__label} ${Styles.sendinvoice__duedate__heading}`}
            >
              Due date
            </h5>
            <div
              className={` ${Styles.sendinvoice__value} ${Styles.sendinvoice__duedate__duedate}`}
            >
              11/02/2021
            </div>
          </div>

          <div className={Styles.sendinvoice__emails}>
            <div
              className={`${Styles.sendinvoice__label} ${Styles.sendinvoice__emails__label}`}
            >
              <DecoratedCheckBoxInput />
              <span> Send E-mail</span>
            </div>
            <div className={Styles.sendinvoice__value}>
              <DecoratedEmailInput />
            </div>
          </div>
        </header>
        <TextArea />
        <AddFiles />
        <footer className={Styles.sendinvoice__footer}>
          <PreviewButton />
          <SaveButton />
        </footer>
      </div>
    </Modal>
  );
};

export default reduxForm({ form: "sendInvoice" })(SendInvoiceModal);
