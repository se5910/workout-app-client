import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { connect } from "react-redux";
import { createExercisePlan } from "../../actions/planActions";
import PropTypes from "prop-types";

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

const CreateExercisePlan = ({ errors, createExercisePlan, client }) => {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        name: "",
    });

    const { name } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        createExercisePlan(client.id, formData);
    };

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <Paper className={classes.paper} elevation={3}>
                <Typography component="h1" variant="h5">
                    Create Exercise plan
                </Typography>
                <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="name"
                        type="text"
                        label="Exercise Plan Name"
                        name="name"
                        value={name}
                        autoFocus
                        error={errors.height}
                        helperText={errors.height}
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

CreateExercisePlan.propTypes = {};

const mapStateToProps = (state) => ({
    errors: state.errors,
    client: state.coach.client,
});

export default connect(mapStateToProps, { createExercisePlan })(
    CreateExercisePlan
);
