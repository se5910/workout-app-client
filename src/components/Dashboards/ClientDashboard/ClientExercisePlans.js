import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { getClientExercisePlans } from "../../../actions/planActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    content: {
        display: "flex",
        flexDirection: "column",
    },
    margin: {
        margin: ".5rem",
        marginLeft: "1rem",
    },
});

const ClientExercisePlans = ({
    profile: { profile },
    plans: { exercisePlans },
    getClientExercisePlans,
}) => {
    const classes = useStyles();
    useEffect(() => {
        getClientExercisePlans(profile.id);
    }, [profile.id]);
    return (
        <Paper className={classes.content}>
            <Typography variant="h5" className={classes.margin}>
                Exercise Plans
            </Typography>
            <hr />
            {exercisePlans &&
                exercisePlans.map((plan) => (
                    <Typography
                        variant="h5"
                        className={classes.margin}
                        key={plan.id}
                        component={Link}
                        to={`/client/${profile.id}/exercise-plan/${plan.planId}`}
                    >
                        {plan.name}
                    </Typography>
                ))}
        </Paper>
    );
};

const mapStateToProps = (state) => ({
    profile: state.profile,
    plans: state.plans,
});

export default connect(mapStateToProps, { getClientExercisePlans })(
    ClientExercisePlans
);
