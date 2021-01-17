import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.scss";
import "font-awesome/css/font-awesome.min.css";
import Jobs from "./pages/jobs";
import Contacts from "./pages/contacts";
import Settings from "./pages/settings";
import Documents from "./pages/documents";
import SideBar from "./components/shared/sidebar";
import InfoBar from "./components/shared/infobar";
import ViewJob from "./components/jobs/jobview";
import Quotes from "./pages/quotes";
import Invoices from "./pages/invoices";
import Purchases from "./pages/purchases";

function App() {
  return (
    <div className='App'>
      <Router>
        <SideBar />
        <InfoBar />
        <Switch>
          <Route path='/jobs' component={Jobs} />
          <Route path='/job/view/:id' component={ViewJob} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/documents' component={Documents} />
          <Route path='/quotes' component={Quotes} />
          <Route path='/invoices' component={Invoices} />
          <Route path='/purchases' component={Purchases} />
          <Route path='/settings' component={Settings} />
          <Redirect to='/jobs' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
