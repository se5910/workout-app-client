import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Purchases from "./pages/Purchases";
import ClientDetail from "./components/ClientDetail/ClientDetail";
import Profile from "./components/profile-forms/Profile";
import ExercisePlan from "./components/ExercisePlan";
import MealPlan from "./components/MealPlan";
import CreateExercisePlan from "./components/plans/CreateExercisePlan";
import CreateMealPlan from "./components/plans/CreateMealPlan";
import CreateTemplate from "./components/templates/CreateTemplate";
import Template from "./components/templates/Template";
import NotFound from "./pages/NotFound";

import store from "./store";
import SecureRoute from "./util/SecureRoute";
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
                        <SecureRoute
                            exact
                            path="/client/:id/exercise-plan/:planId"
                            component={ExercisePlan}
                        />
                        <SecureRoute
                            exact
                            path="/client/:id/meal-plan/:planId"
                            component={MealPlan}
                        />
                        <SecureRoute
                            exact
                            path="/client/:id/create-exercise-plan"
                            component={CreateExercisePlan}
                        />
                        <SecureRoute
                            exact
                            path="/client/:id/create-meal-plan"
                            component={CreateMealPlan}
                        />
                        <SecureRoute
                            exact
                            path="/client/:id/exercise-plan/:exerciseId/create-template"
                            component={CreateTemplate}
                        />
                        <SecureRoute
                            exact
                            path="/client/:id/exercise-plan/:exerciseId/template/:templateId"
                            component={Template}
                        />

                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </Router>
        </Provider>
    );
}

export default App;
