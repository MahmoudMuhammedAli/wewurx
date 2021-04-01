import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.scss";
import "./items.scss";
import "font-awesome/css/font-awesome.min.css";

import LandingPage from "./pages/landing-page";
import System from "./pages/system";

function App() {
  return (
    <div className=''>
      <Router>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/system' component={System} />
        </Switch>
      </Router>

      {/* <Router>
    
      </Router> */}
    </div>
  );
}

export default App;
