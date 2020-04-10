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
          {
            // Public
          }
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />

          {
            // Protected
          }
          <Route path="/dashboard" component={Dashboard} />

        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
