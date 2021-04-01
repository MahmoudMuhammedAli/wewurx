import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Styles from "./qutoes.module.scss";
import MainPage from "../../components/quotes/main-page";
import ViewQuote from "../../components/quotes/view-quote";
import AddQuote from "../../components/quotes/add-quote";
import EditQuote from "../../components/quotes/edit-quote";

const Quotes = (props) => {
  return (
    <div className={`${Styles.quotes} page`}>
      <Switch>
        <Route path='/system/jobs/quotes' exact component={MainPage} />
        <Route path='/system/jobs/quotes/add' component={AddQuote} />
        <Route path='/system/jobs/quotes/:id/view' component={ViewQuote} />
        <Route path='/system/jobs/quotes/:id/edit' component={EditQuote} />
        <Redirect to='/system/jobs/quotes' />
      </Switch>
    </div>
  );
};

export default Quotes;
