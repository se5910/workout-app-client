import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import MealPlans from "./pages/MealPlans"
import "./App.css";
import { Provider } from 'react-redux';

import store from "./store";
import SecureRoute from './util/SecureRoute'
import setJWTToken from './util/setJWTToken'
import jwt_decode from 'jwt-decode'
import { SET_CURRENT_USER } from './actions/types';
import { logout } from './actions/authActions'



function App() {

  console.log("checking")
  const jwtToken = localStorage.jwtToken

  if (jwtToken) {
    setJWTToken(jwtToken)
    const decoded_jwtToken = jwt_decode(jwtToken)
    store.dispatch({
      type: SET_CURRENT_USER,
      payload: decoded_jwtToken
    })

    const currentTime = Date.now() / 1000
    if (decoded_jwtToken.exp < currentTime) {
      store.dispatch(logout())
      window.location.href = "/"
    }
  }

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          {
            // Public
          }
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />

          {
            // Protected
          }
          <Switch>
            <SecureRoute exact path="/dashboard" component={Dashboard} />
            <SecureRoute exact path="/meal" component={MealPlans} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
