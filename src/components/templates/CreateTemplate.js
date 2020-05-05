import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { connect } from "react-redux";
import { Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import { createTemplate } from "../../actions/planActions";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Template = ({ history, createTemplate, match }) => {
    const classes = useStyles();

    const { id, exerciseId } = match.params;

    const [formData, setFormData] = useState({
        name: "",
        workoutType: "",
        phase: "",
    });

    const { name, workoutType, phase } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        createTemplate(id, exerciseId, formData, history);
    };

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <Paper className={classes.paper} elevation={3}>
                <Typography component="h1" variant="h5">
                    Create Template
                </Typography>
                <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Template Name"
                        name="name"
                        value={name}
                        autoFocus
                        onChange={(e) => onChange(e)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="workoutType"
                        label="Workout Type"
                        name="workoutType"
                        value={workoutType}
                        autoFocus
                        onChange={(e) => onChange(e)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="phase"
                        label="Phase"
                        name="phase"
                        value={phase}
                        autoFocus
                        onChange={(e) => onChange(e)}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Submit
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

Template.propTypes = {
    createTemplate: PropTypes.func.isRequired,
};

export default connect(null, { createTemplate })(Template);
