import React from "react";
import { Redirect, Route, Switch } from "react-router";
import CostItems from "./components/cost-items";
import FilesAndNotes from "./components/files-and-notes";
import Quote from "./components/quote";
import SideBar from "./components/sidebar";
import Styles from "./view-quote.module.scss";

const ViewQuote = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <div className={Styles.viewquote}>
      {" "}
      <SideBar id={id} />
      <Switch>
        <Route path={`/system/jobs/quotes/:id/view/`} exact component={Quote} />
        <Route
          path={`/system/jobs/quotes/:id/view/cost-items`}
          component={CostItems}
        />
        <Route
          path={`/system/jobs/quotes/:id/view/files-and-notes`}
          component={FilesAndNotes}
        />
        <Redirect to={`/system/jobs/quotes/:id/view/`} />
      </Switch>
    </div>
  );
};

export default ViewQuote;
