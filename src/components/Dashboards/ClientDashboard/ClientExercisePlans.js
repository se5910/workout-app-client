import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { getClientExercisePlans } from "../../../actions/planActions";
import { connect } from "react-redux";

const ClientExercisePlans = ({
    profile: { profile },
    getClientExercisePlans,
}) => {
    useEffect(() => {
        getClientExercisePlans(profile.id);
    }, [profile.id]);
    return (
        <Paper>
            <Typography variant="h5">Exercise Plans</Typography>
            <hr />
        </Paper>
    );
};

const mapStateToProps = (state) => ({
    profile: state.profile,
});

export default connect(mapStateToProps, { getClientExercisePlans })(
    ClientExercisePlans
);
