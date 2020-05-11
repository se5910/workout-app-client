import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../../pages/Login";
import Dashboard from "../../pages/Dashboard";
import SignUp from "../../pages/SignUp";
import Purchases from "../../pages/Purchases";
import ClientDetail from "../ClientDetail/ClientDetail";
import Profile from "../profile-forms/Profile";
import ExercisePlan from "../ExercisePlan";
import CreateExercisePlan from "../plans/CreateExercisePlan";
import CreateTemplate from "../templates/CreateTemplate";
import UpdateTemplate from "../templates/UpdateTemplate";
import Template from "../templates/Template";
import NotFound from "../../pages/NotFound";
import SecureRoute from "../../util/SecureRoute";

const Routes = (props) => {
    return (
        <section>
            <Switch>
                {
                    // Public
                }

                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/login" component={Login} />

                {
                    // Protected
                }

                <SecureRoute exact path="/dashboard" component={Dashboard} />
                <SecureRoute exact path="/purchases" component={Purchases} />
                <SecureRoute exact path="/create-profile" component={Profile} />
                <SecureRoute exact path="/update-profile" component={Profile} />
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
                    path="/client/:id/create-exercise-plan"
                    component={CreateExercisePlan}
                />
                <SecureRoute
                    exact
                    path="/client/:id/exercise-plan/:exerciseId/create-template"
                    component={CreateTemplate}
                />
                <SecureRoute
                    exact
                    path="/client/:id/exercise-plan/:exerciseId/template/:templateId/update"
                    component={UpdateTemplate}
                />
                <SecureRoute
                    exact
                    path="/client/:id/exercise-plan/:exerciseId/template/:templateId"
                    component={Template}
                />

                <Route component={NotFound} />
            </Switch>
        </section>
    );
};

export default Routes;
