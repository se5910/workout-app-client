import React from "react";
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

import bench1 from "../../images/bench1.jpg";
import bench2 from "../../images/bench2.jpg";

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
                            <img className={classes.img} src={bench1} alt="" />
                            <img className={classes.img} src={bench2} alt="" />
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
                        <FormControl>
                            <Select>
                                <MenuItem value={1}>OverHead Press</MenuItem>
                                <MenuItem value={2}>deadLift</MenuItem>
                                <MenuItem value={3}>OverHead Press</MenuItem>
                            </Select>
                        </FormControl>
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

ExerciseSlot.propTypes = {};

const mapStateToProps = (stat) => ({});

export default connect(null, { createWeek })(ExerciseSlot);
