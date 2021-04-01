import React from "react";
import SideBar from "./components/sidebar";
import Styles from "./add-invoice.module.scss";
import { Switch, Route } from "react-router-dom";
import MainInfo from "./components/maininfo";
import CostItems from "../../shared/costitems";
import FilesAndNotes from "./components/files-and-notes";

const AddInvoice = (props) => {
  return (
    <div className={Styles.addinvoice}>
      <SideBar />
      <div className={Styles.addinvoice__components}>
        <Switch>
          <Route path='/system/jobs/invoices/add' exact component={MainInfo} />
          <Route
            path='/system/jobs/invoices/add/costitems'
            component={CostItems}
          />
          <Route
            path='/system/jobs/invoices/add/filesandnotes'
            component={FilesAndNotes}
          />
        </Switch>
      </div>
    </div>
  );
};

export default AddInvoice;
