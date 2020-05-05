import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { getExercisePlanById } from "../actions/planActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TemplateCard from "./templates/TemplateCard";

const useStyles = makeStyles({
    content: {
        display: "flex",
        flexDirection: "column",
    },
    templates: {
        marginTop: "2rem",
    },
    button: {
        marginBottom: "2rem",
    },
});

const ExercisePlan = ({
    match,
    getExercisePlanById,
    plans: { exercisePlan },
}) => {
    const classes = useStyles();

    const { id, planId } = match.params;

    console.log(match.params);

    useEffect(() => {
        getExercisePlanById(id, planId);
    }, [id, planId]);

    return (
        <Paper style={{ height: "100%" }}>
            <Container>
                {exercisePlan && (
                    <Typography variant="h2">
                        Plan: {exercisePlan.name}
                    </Typography>
                )}
                <hr />
                <Typography variant="h5" className={classes.templates}>
                    Templates
                </Typography>
                <Button
                    className={classes.container}
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/client/${id}/exercise-plan/${planId}/create-template`}
                >
                    Create A Template
                </Button>
                <hr />
                {exercisePlan && exercisePlan.templates.length < 0 && (
                    <p>There are no templates in this plan</p>
                )}
                <Container>
                    <Grid container spacing={3}>
                        {exercisePlan &&
                            exercisePlan.templates.map((template) => (
                                <Grid item>
                                    <TemplateCard
                                        template={template}
                                        clientId={id}
                                        planId={planId}
                                    />
                                </Grid>
                            ))}
                    </Grid>
                </Container>
            </Container>
        </Paper>
    );
};

ExercisePlan.propTypes = {};

const mapStateToProps = (state) => ({
    plans: state.plans,
});

export default connect(mapStateToProps, { getExercisePlanById })(ExercisePlan);
