import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import WeekCard from "./WeekCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { createWeek } from "../../actions/planActions";

import Select from "@material-ui/core/Select";
import { FormControl, MenuItem } from "@material-ui/core";
import { connect } from "react-redux";
import { createExerciseSlot, getWeeks } from "../../actions/planActions";

import bench1 from "../../images/bench1.jpg";
import bench2 from "../../images/bench2.jpg";
import dum1 from "../../images/dum1.jpg";
import dum2 from "../../images/dum2.jpg";

import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: "75%",
    },
    button: {
        width: 151,
        marginBottom: "1rem",
        marginLeft: ".5rem",
        marginRight: "1rem",
    },
    marginLeft: {
        marginLeft: ".5rem",
    },
    center: {
        textAlign: "center",
    },
    img: {
        height: "auto",
        width: "40%",
    },
}));

const ExerciseSlot = ({
    createWeek,
    clientId,
    exercisePlanId,
    templateId,
    slotId,
    slot,
    createExerciseSlot,
    coach,
}) => {
    const [formData, setFormData] = useState({ exerciseId: 1 });
    const { exerciseId } = formData;
    const classes = useStyles();

    let image1;
    let image2;

    if (exerciseId === 1) {
        image1 = bench1;
        image2 = bench2;
    } else {
        image1 = dum1;
        image2 = dum2;
    }

    const onChange = (e) => {
        console.log("sjot");
        createExerciseSlot(
            clientId,
            exercisePlanId,
            templateId,
            slotId,
            formData
        );
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        getWeeks(clientId, exercisePlanId, templateId, slotId);
    }, []);

    return (
        <Container>
            <Paper className={classes.content}>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography className={classes.marginLeft} variant="h4">
                            Exercise:{" "}
                        </Typography>
                        <div className={classes.marginLeft}>
                            <img className={classes.img} src={image1} alt="" />
                            <img className={classes.img} src={image2} alt="" />
                        </div>
                        {coach.coach && (
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    createWeek(
                                        clientId,
                                        exerciseId,
                                        templateId,
                                        slotId
                                    );
                                }}
                            >
                                Create a Week
                            </Button>
                        )}
                        {coach.coach && (
                            <FormControl>
                                <Select
                                    name="exerciseId"
                                    value={exerciseId}
                                    onChange={(e) => {
                                        onChange(e);
                                    }}
                                >
                                    <MenuItem value={1}>Bench Press</MenuItem>
                                    <MenuItem value={2}>Dumbell Press</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    </Grid>
                    <Grid item xs={6} spacing={3}>
                        <Grid container>
                            {slot &&
                                slot.weeks.map((week) => {
                                    return (
                                        <Grid item lg={6}>
                                            <WeekCard
                                                className={classes.card}
                                                week={week}
                                                clientId={clientId}
                                                exercisePlanId={exercisePlanId}
                                                templateId={templateId}
                                                slotId={slotId}
                                            />
                                        </Grid>
                                    );
                                })}
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

ExerciseSlot.propTypes = {
    createWeek: PropTypes.func.isRequired,
    clientId: PropTypes.number.isRequired,
    exercisePlanId: PropTypes.number.isRequired,
    templateId: PropTypes.number.isRequired,
    slotId: PropTypes.number.isRequired,
    slot: PropTypes.object.isRequired,
    createExerciseSlot: PropTypes.func.isRequired,
    coach: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    coach: state.coach,
});

export default connect(mapStateToProps, { createWeek, createExerciseSlot })(
    ExerciseSlot
);
