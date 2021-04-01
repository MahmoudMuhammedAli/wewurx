import React from "react";
import SideBar from "./components/sidebar";
import Styles from "./view-invoice.module.scss";
import MainInfo from "./components/main-info";
import { Switch, Route, Redirect } from "react-router-dom";
import CostItems from "./components/cost-items";
import FilesAndNotes from "./components/files-and-notes";

const InvoiceView = (props) => {
  const { id } = props.match.params;
  return (
    <div className={Styles.view}>
      <SideBar id={id} />
      <Switch>
        <Route
          path='/system/jobs/invoices/view/:id/'
          exact
          component={MainInfo}
        />
        <Route
          path='/system/jobs/invoices/view/:id/costitems'
          component={CostItems}
        />
        <Route
          path='/system/jobs/invoices/view/:id/filesandnotes'
          component={FilesAndNotes}
        />
        <Redirect to='/system/jobs/invoices/view/id' />
      </Switch>
    </div>
  );
};

export default InvoiceView;
