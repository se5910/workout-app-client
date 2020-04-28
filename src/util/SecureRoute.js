import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Spinner } from "../components/Layout/Spinner";

const SecureRoute = ({
    component: Component,
    auth: { validToken, loading },
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                loading && validToken ? (
                    <Spinner />
                ) : validToken ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

SecureRoute.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(SecureRoute);
