import React from "react";
import SideBar from "./components/sidebar";
import Styles from "./add-invoice.module.scss";
import { Switch, Route } from "react-router-dom";
import MainInfo from "./components/maininfo";
import CostItems from "./components/costitems";
import FilesAndNotes from "./components/files-and-notes";

const AddInvoice = (props) => {
  return (
    <div className={Styles.addinvoice}>
      <SideBar />
      <div className={Styles.addinvoice__components}>
        <Switch>
          <Route path='/jobs/invoices/add' exact component={MainInfo} />
          <Route path='/jobs/invoices/add/costitems' component={CostItems} />
          <Route
            path='/jobs/invoices/add/filesandnotes'
            component={FilesAndNotes}
          />
        </Switch>
      </div>
    </div>
  );
};

export default AddInvoice;
