import React from "react";
import { Redirect, Route, Switch } from "react-router";
import CostItems from "./components/cost-items";
import FilesAndNotes from "./components/files-and-notes";
import Quote from "./components/quote";
import SideBar from "./components/sidebar";
import Styles from "./view-quote.module.scss";

const ViewQuote = (props) => {
  return (
    <div className={Styles.viewquote}>
      {" "}
      <SideBar />
      <Switch>
        <Route path='/jobs/quotes/123id/view/' exact component={Quote} />
        <Route
          path='/jobs/quotes/123id/view/cost-items'
          component={CostItems}
        />
        <Route
          path='/jobs/quotes/123id/view/files-and-notes'
          component={FilesAndNotes}
        />
        <Redirect to='/jobs/quotes/123id/view/' />
      </Switch>
    </div>
  );
};

export default ViewQuote;
