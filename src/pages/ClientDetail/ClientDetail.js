import React, { useEffect } from "react";
import ClientCard from "./ClientCard";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getClient } from "../../actions/coachActions";
import {
    getClientExercisePlans,
    getClientMealPlans,
} from "../../actions/planActions";
import ExercisePlanCard from "./ExercisePlanCard";
import MealPlanCard from "./MealPlanCard";
import Paper from "@material-ui/core/Paper";
import { Container, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    item: {
        marginBottom: 12,
    },
});

const ClientDetail = ({
    match,
    coach: { client, loading },
    plans: { meal, exercise },
    getClient,
    getClientExercisePlans,
    getClientMealPlans,
}) => {
    const classes = useStyles();
    const { id } = match.params;

    useEffect(() => {
        getClient(id);
        getClientExercisePlans(id);
        getClientMealPlans(id);
    }, [getClient, id]);

    return (
        <Container>
            <ClientCard className={classes.marginBottom} client={client} />
            {exercise && exercise.length !== 0 ? (
                <ExercisePlanCard
                    className={classes.marginBottom}
                    plans={exercise}
                    clientId={id}
                />
            ) : (
                <Paper style={{ marginTop: "1.5rem" }}>
                    <Container style={{ padding: "3rem" }}>
                        <Typography>
                            No Exercise plans have been created
                        </Typography>
                        <Button
                            component={Link}
                            to={
                                client &&
                                `/client/${client.id}/create-exercise-plan`
                            }
                            variant="contained"
                            color="primary"
                        >
                            Create a plan
                        </Button>
                    </Container>
                </Paper>
            )}

            {meal && meal.length !== 0 ? (
                <MealPlanCard
                    className={classes.marginBottom}
                    plans={exercise}
                    clientId={id}
                />
            ) : (
                <Paper style={{ marginTop: "1.5rem" }}>
                    <Container style={{ padding: "3rem" }}>
                        <Typography>No Meal plans have been created</Typography>
                        <Button
                            component={Link}
                            to={
                                client &&
                                `/client/${client.id}/create-meal-plan`
                            }
                            variant="contained"
                            color="primary"
                        >
                            Create a plan
                        </Button>
                    </Container>
                </Paper>
            )}
        </Container>
    );
};

ClientDetail.propTypes = {
    coach: PropTypes.object.isRequired,
    getClient: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    coach: state.coach,
    plans: state.plans,
});

export default connect(mapStateToProps, {
    getClient,
    getClientExercisePlans,
    getClientMealPlans,
})(ClientDetail);
