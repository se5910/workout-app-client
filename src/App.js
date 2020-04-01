import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import "./App.css";

function App() {
  return (
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
  );
}

export default App;
