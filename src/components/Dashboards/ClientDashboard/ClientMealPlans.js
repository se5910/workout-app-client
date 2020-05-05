import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { getClientMealPlans } from "../../../actions/planActions";
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

const ClientMealPlans = ({
    profile: { profile },
    plans: { mealPlans },
    getClientMealPlans,
}) => {
    const classes = useStyles();
    useEffect(() => {
        getClientMealPlans(profile.id);
    }, [profile.id]);
    return (
        <Paper className={classes.content}>
            <Typography className={classes.margin} variant="h5">
                Meal Plans
            </Typography>
            <hr />
            {mealPlans &&
                mealPlans.map((plan) => (
                    <Typography
                        variant="h5"
                        key={plan.id}
                        className={classes.margin}
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

export default connect(mapStateToProps, { getClientMealPlans })(
    ClientMealPlans
);
