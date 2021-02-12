import React from "react";
import MainPage from "../../components/invoices/main-page";
import AddInvoice from "../../components/invoices/add-invoice";
import Styles from "./invoices.module.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import InvoiceView from "../../components/invoices/view-invoice";

const Invoices = (props) => {
  return (
    <div className={`${Styles.invoices} page`}>
      <Switch>
        <Route path='/jobs/invoices' component={MainPage} exact />
        <Route path='/jobs/invoices/add' component={AddInvoice} />
        <Route path='/jobs/invoices/view/:id' component={InvoiceView} />
        <Redirect to='/jobs/invoices' />
      </Switch>
    </div>
  );
};

export default Invoices;
