import React, { Fragment, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../../actions/profileActions";
import ClientExercisePlans from "./ClientExercisePlans";
import ClientMealPlans from "./ClientMealPlans";

const ClientDashboard = ({
    auth: { user },
    profile: { profile, loading },
    getCurrentProfile,
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return (
        <Fragment>
            <h1 className="large text-primary">Dashboard</h1>
            <p>Welcome {user && user.fullName}</p>
            {profile !== null && profile.approved === false ? (
                <Fragment>
                    <Typography variant="h5">
                        Please wait for approval
                    </Typography>
                    <Button
                        component={Link}
                        to="/update-profile"
                        variant="contained"
                        color="secondary"
                    >
                        Edit Profile
                    </Button>
                </Fragment>
            ) : profile && profile.approved ? (
                <Grid container spacing={3}>
                    <Grid item lg={6} sm={12}>
                        <ClientExercisePlans />
                    </Grid>
                    <Grid item lg={6} sm={12}>
                        <ClientMealPlans />
                    </Grid>
                </Grid>
            ) : (
                <Fragment>
                    <p>
                        You have not yet setup a profile, please add some info
                    </p>
                    <Button
                        component={Link}
                        to="/create-profile"
                        variant="contained"
                        color="primary"
                    >
                        Create Profile
                    </Button>
                </Fragment>
            )}
        </Fragment>
    );
};

ClientDashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
    plans: state.plans,
});

export default connect(mapStateToProps, {
    getCurrentProfile,
})(ClientDashboard);
