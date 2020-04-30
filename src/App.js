import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import MealPlans from "./pages/MealPlans";
import "./App.css";
import { Provider } from "react-redux";

import store from "./store";
import SecureRoute from "./util/SecureRoute";
import setJWTToken from "./util/setJWTToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/authActions";
import ExercisePlans from "./pages/ExercisePlans";
import Purchases from "./pages/Purchases";
import ClientDetail from "./pages/ClientDetail/ClientDetail";
import Profile from "./components/profile-forms/Profile";

import NotFound from "./pages/NotFound";

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
                        {
                            // Public
                        }
                        <Route exact path="/" component={Home} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/login" component={Login} />

                        {
                            // Protected
                        }

                        <SecureRoute
                            exact
                            path="/dashboard"
                            component={Dashboard}
                        />
                        <SecureRoute exact path="/meal" component={MealPlans} />
                        <SecureRoute
                            exact
                            path="/exercise"
                            component={ExercisePlans}
                        />
                        <SecureRoute
                            exact
                            path="/purchases"
                            component={Purchases}
                        />
                        <SecureRoute
                            exact
                            path="/create-profile"
                            component={Profile}
                        />
                        <SecureRoute
                            exact
                            path="/update-profile"
                            component={Profile}
                        />
                        <SecureRoute
                            exact
                            path="/client/:id"
                            component={ClientDetail}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </Router>
        </Provider>
    );
}

export default App;
