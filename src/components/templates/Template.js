import React, { useEffect, useState, useCallback } from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ExerciseSlot from "../exerciseSlot/ExerciseSlot";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTemplate, createExerciseSlot } from "../../actions/planActions";
import { verifyCoach } from "../../actions/authActions";

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
        marginTop: "2rem",
    },
});

const Template = ({
    getTemplate,
    template,
    match,
    createExerciseSlot,
    coach,
    verifyCoach,
}) => {
    const { id, exerciseId, templateId } = match.params;

    const classes = useStyles();

    useEffect(() => {
        getTemplate(id, exerciseId, templateId);

        verifyCoach();
    }, [getTemplate, verifyCoach, id, exerciseId, templateId]);

    const onClick = () => {
        console.log(id, exerciseId, templateId);
        createExerciseSlot(id, exerciseId, templateId, {});
    };

    return (
        <Paper style={{ height: "100%" }}>
            <Container>
                {template && (
                    <Typography variant="h2">
                        Template: {template.name}
                    </Typography>
                )}
                <hr />
                <Typography variant="h5" className={classes.templates}>
                    Exercises
                </Typography>

                <hr />
                {template && template.exerciseSlots.length <= 0 && (
                    <p>There are no templates in this plan</p>
                )}
                <Container>
                    <Grid container spacing={3}>
                        {template &&
                            template.exerciseSlots.map((slot) => (
                                <Grid item md={12} key={slot.id}>
                                    <ExerciseSlot
                                        clientId={parseInt(id)}
                                        slotId={parseInt(slot.id)}
                                        exercisePlanId={parseInt(exerciseId)}
                                        templateId={parseInt(templateId)}
                                        slot={slot}
                                    />
                                </Grid>
                            ))}
                    </Grid>
                </Container>
                {coach.coach && (
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            onClick();
                        }}
                    >
                        Create An Exercise
                    </Button>
                )}
            </Container>
        </Paper>
    );
};

Template.propTypes = {
    template: PropTypes.object.isRequired,
    getTemplate: PropTypes.func.isRequired,
    createExerciseSlot: PropTypes.func.isRequired,
    verifyCoach: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    template: state.plans.template,
    coach: state.coach,
});

export default connect(mapStateToProps, {
    getTemplate,
    verifyCoach,
    createExerciseSlot,
})(Template);
