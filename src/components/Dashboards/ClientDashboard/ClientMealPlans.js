import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { getClientMealPlans } from "../../../actions/planActions";
import { connect } from "react-redux";

const ClientMealPlans = ({ profile: { profile }, getClientMealPlans }) => {
    useEffect(() => {
        getClientMealPlans(profile.id);
    }, [profile.id]);
    return (
        <Paper>
            <Typography variant="h5">Meal Plans</Typography>
            <hr />
        </Paper>
    );
};

const mapStateToProps = (state) => ({
    profile: state.profile,
});

export default connect(mapStateToProps, { getClientMealPlans })(
    ClientMealPlans
);
