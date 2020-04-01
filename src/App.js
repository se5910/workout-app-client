import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import "./App.css";
import { Provider } from 'react-redux';
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
