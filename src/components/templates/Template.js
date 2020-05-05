import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { Paper, Container } from "@material-ui/core";
import 
import Typography from "@material-ui/core/Typography";
import { getTemplate, createTemplate } from "../../actions/planActions";
import { connect } from "react-redux";

const Template = ({ match, getTemplate, template, history }) => {
    const { id, exerciseId, templateId } = match.params;

    const [formData, setFormData] = useState({
        name: (template && template.id) || "",
        workoutType: (template && template.workoutType) || "",
        phase: (template && template.phase) || "",
    });

    useEffect(() => {
        getTemplate(id, exerciseId, templateId);
    }, []);

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
                        Sign Up
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

Template.propTypes = {
    getTemplate: PropTypes.func.isRequired,
    template: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    template: state.plans.template,
});

export default connect(mapStateToProps, { getTemplate })(Template);
