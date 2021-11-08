
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Cookies from "universal-cookie";
import Login from "./components/login"
import SignUp from "./components/signUp"

// const cookies = new Cookies();

const AppContainer = () => {
  const dispatch = useDispatch();
  const [role, setRole] = useState(""); 

  

  
  function renderPage(Component, name) {
    return <Component />
  }

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={Login}
          />
          <Route
            exact
            path="/sign-up"
            render={() => renderPage(SignUp, "SignUp")}
          />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    common: state.common,
    // isFetchingAgencyAttr: state.agency.isFetchingAgencyAttr,
    // user: state.user.agencyDetails,
    // agencyTheme: state.user.agencyTheme.agency_theme,
  };
};

const App = connect(mapStateToProps)(AppContainer);
export default App;
