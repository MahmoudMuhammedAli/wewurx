import React from "react";
import InvoiceSettings from "./components/invoicesettings";
import QuoteSettings from "./components/quotesettings";
import Styles from "./quotesandinvoices.module.scss";

const QuotesAndInvoices = (props) => {
  return (
    <div className={Styles.invoices}>
      <QuoteSettings />
      <InvoiceSettings />
      <button className={Styles.invoices__save}>save</button>
    </div>
  );
};

export default QuotesAndInvoices;
