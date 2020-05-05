import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
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
            {mealPlans && mealPlans.length > 0 ? (
                mealPlans.map((plan) => (
                    <Typography
                        variant="h5"
                        key={plan.id}
                        className={classes.margin}
                        component={Link}
                        to={`/client/${profile.id}/meal-plan/${plan.planId}`}
                    >
                        {plan.name}
                    </Typography>
                ))
            ) : (
                <Container style={{ padding: ".5rem" }}>
                    <Typography>No Meal plans have been created</Typography>
                </Container>
            )}
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
