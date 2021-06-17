/**
 * Root component for the application
 */

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "share/images/Logo.svg";
import LocationList from "components/LocationList";
import LocationDetail from "components/LocationDetail";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Link to="/">
          <img src={Logo} className={styles.logo} alt="Logo" />
        </Link>
        <Switch>
          <Route exact path="/">
            <LocationList />
          </Route>
          <Route path="/location/:id">
            <LocationDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
