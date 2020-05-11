import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Layout from "./components/Layout";
import Routes from "./components/routing/Routes";

import store from "./store";
import Home from "./pages/Home";
import setJWTToken from "./util/setJWTToken";

import { Provider } from "react-redux";

import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/authActions";
// Make sure the token is valid and persist
function App() {
    console.log("checking");
    const jwtToken = localStorage.jwtToken;

    if (jwtToken) {
        setJWTToken(jwtToken);
        const decoded_jwtToken = jwt_decode(jwtToken);
        store.dispatch({
            type: SET_CURRENT_USER,
            payload: decoded_jwtToken,
        });

        const currentTime = Date.now() / 1000;
        if (decoded_jwtToken.exp < currentTime) {
            store.dispatch(logout());
            window.location.href = "/";
        }
    }

    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route component={Routes} />
                    </Switch>
                </Layout>
            </Router>
        </Provider>
    );
}

export default App;
