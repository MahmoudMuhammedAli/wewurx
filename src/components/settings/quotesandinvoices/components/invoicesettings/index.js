import React from "react";
import Styles from "./invoicesettings.module.scss";
import { Field, reduxForm } from "redux-form";

const InvoiceSettings = (props) => {
  return (
    <div className={Styles.settings}>
      <h4 className={Styles.settings__heading}>Invoice settings</h4>
      <div className={Styles.settings__invoicenamewrapper}>
        <div className={Styles.settings__invoicenamecontainer}>
          <div
            className={Styles.settings__invoicenamecontainer__invoicecollector}
          >
            <label
              htmlFor='invoiceNameCollector'
              className={
                Styles.settings__invoicenamecontainer__invoicecollector__label
              }
            >
              invoice name
            </label>
            <Field
              name='invoiceName'
              component='input'
              type='text'
              className={Styles.settings__input}
              id='invoiceNameCollector'
            />
            <input
              name='shouldDisplayInvoiceName'
              component='input'
              type='checkbox'
            />
          </div>
          <a
            href='#'
            className={Styles.settings__invoicenamecontainer__previewlink}
          >
            Preview
          </a>
        </div>
        <div className={Styles.settings__showresults}>
          <label>
            Show results{" "}
            <Field component='input' type='checkbox' name='shouldShowResults' />
          </label>
        </div>
      </div>

      <div className={Styles.settings__middle}>
        <button className={Styles.settings__middle__invoicenumberinquerier}>
          Invoice number?
        </button>
        <div className={Styles.settings__middle__lastinvoicenumbercontainer}>
          <label
            className={
              Styles.settings__middle__lastinvoicenumbercontainer__label
            }
          >
            Last invoice number{" "}
          </label>
          <Field
            component='input'
            type='text'
            className={Styles.settings__input}
            name='lastInvoiceNumber'
          />
        </div>
        <div className={Styles.settings__bottomtextarea}>
          <h4 className={Styles.settings__bottomtextarea__heading}>
            Bottom textarea
          </h4>
          <div className={Styles.settings__bottomtextarea__textareas}>
            <div
              className={Styles.settings__bottomtextarea__textareas__textarea}
            >
              <label>
                Left{" "}
                <Field
                  component='input'
                  type='checkbox'
                  name='shouldDispalyLeftTextArea'
                />
              </label>
              <br />
              <Field
                component='textarea'
                name='leftTextArea'
                className={Styles.settings__textarea}
              />
            </div>
            <div
              className={Styles.settings__bottomtextarea__textareas__textarea}
            >
              {" "}
              <label>
                Right{" "}
                <Field
                  component='input'
                  type='checkbox'
                  name='shouldDispalyRightTextArea'
                />
              </label>
              <br />
              <Field
                component='textarea'
                name='rightTextArea'
                className={Styles.settings__textarea}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.settings__purchaseorder}>
        <h4 className={Styles.settings__purchaseorder__heading}>
          Purchase Order settings
        </h4>
        <div>
          <label htmlFor='lastPurchaseOrderNumberInput'>
            Last purchase order number
          </label>
          <Field
            name='lastpurchaseordernumber'
            component='input'
            type='text'
            className={Styles.settings__input}
            id='lastPurchaseOrderNumberInput'
          />
        </div>
      </div>
    </div>
  );
};

export default reduxForm({ form: "invoiceSettings" })(InvoiceSettings);
