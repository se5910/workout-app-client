import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import WeekCard from "./WeekCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { createWeek } from "../../actions/planActions";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { Typography, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: "75%",
    },
    button: {
        width: 151,
        marginBottom: "1rem",
        marginLeft: ".5rem",
    },
    marginLeft: {
        marginLeft: ".5rem",
    },
    center: {
        textAlign: "center",
    },
    img: {
        height: "auto",
        width: "20%",
    },
}));

const ExerciseSlot = ({
    createWeek,
    clientId,
    exerciseId,
    templateId,
    slotId,
    slot,
}) => {
    const classes = useStyles();
    return (
        <Container>
            <Paper className={classes.content}>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography className={classes.marginLeft} variant="h4">
                            Exercise:{" "}
                        </Typography>
                        <div className={classes.marginLeft}>
                            <img
                                className={classes.img}
                                src="http://www.fillmurray.com/250/200"
                                alt=""
                            />
                            <img
                                className={classes.img}
                                src="http://www.fillmurray.com/250/200"
                                alt=""
                            />
                        </div>
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
                    </Grid>

                    <Grid item xs={6} spacing={3}>
                        <Grid container>
                            {slot &&
                                slot.weeks.map((week) => {
                                    return (
                                        <Grid item lg={6}>
                                            <WeekCard week={week} />
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

ExerciseSlot.propTypes = {};

const mapStateToProps = (stat) => ({});

export default connect(null, { createWeek })(ExerciseSlot);
