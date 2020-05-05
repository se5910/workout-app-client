import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { Paper, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getTemplate, createTemplate } from "../../actions/planActions";
import { connect } from "react-redux";

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

const initialState = {
    id: "",
    name: "",
    workoutType: "",
    phase: "",
};

const Template = ({
    match,
    getTemplate,
    createTemplate,
    template: { template, loading },
    history,
}) => {
    const { id, exerciseId, templateId } = match.params;

    const classes = useStyles();

    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        getTemplate(id, exerciseId, templateId);
        if (!loading && template) {
            const profileData = { ...initialState };
            for (const key in template) {
                if (key in template) profileData[key] = template[key];
            }
            setFormData(profileData);
        }
    }, [loading, getTemplate, setFormData]);

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
            <Paper className={classes.paper} elevation={3}>
                <Typography component="h1" variant="h5">
                    Edit Template
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
    getTemplate: PropTypes.func.isRequired,
    template: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    template: state.plans,
});

export default connect(mapStateToProps, { getTemplate, createTemplate })(
    Template
);
