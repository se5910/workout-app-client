import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import store from "../../store";
import { GET_ERRORS } from "../../actions/types";
import { Paper } from "@material-ui/core";
import {
    createOrUpdateClientAndProfile,
    getCurrentProfile,
} from "../../actions/profileActions";

const initialState = {
    name: "",
    height: "",
    weight: "",
    goalWeight: "",
    age: "",
    bodyFatPercentage: "",
    restingHeartRate: "",
    goalStatement: "",
    healthHistory: "",
    coach: "",
};

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

const CreateProfile = ({
    history,
    auth: { user, validToken },
    profile: { profile, loading },
    errors,
    createOrUpdateClientAndProfile,
    getCurrentProfile,
}) => {
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if (!profile) getCurrentProfile();
        if (!loading && profile) {
            const profileData = { ...initialState };
            for (const key in profile) {
                if (key in profile) profileData[key] = profile[key];
            }
            setFormData(profileData);
        } else {
            setFormData({ ...formData, name: user.fullName });
        }
        store.dispatch({
            type: GET_ERRORS,
            payload: {},
        });
    }, [getCurrentProfile, setFormData, loading]);

    const {
        height,
        weight,
        goalWeight,
        age,
        bodyFatPercentage,
        restingHeartRate,
        goalStatement,
        healthHistory,
        coach,
    } = formData;

    const classes = useStyles();

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        createOrUpdateClientAndProfile(
            formData,
            history,
            profile ? true : false
        );
    };

    const formatCoachName = (coach) => {
        const name = coach.split("@")[0];
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <Paper className={classes.paper} elevation={3}>
                <Typography component="h1" variant="h5">
                    Edit Your Profile
                </Typography>
                <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="height"
                        type="number"
                        label="Height (in inches)"
                        name="height"
                        value={height}
                        autoFocus
                        error={errors.height}
                        helperText={errors.height}
                        onChange={(e) => onChange(e)}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        type="number"
                        id="weight"
                        label="Current Weight"
                        name="weight"
                        value={weight}
                        error={errors.weight}
                        helperText={errors.weight}
                        onChange={(e) => onChange(e)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        weight="number"
                        name="goalWeight"
                        label="Goal Weight"
                        id="goalWeight"
                        value={goalWeight}
                        error={errors.goalWeight}
                        helperText={errors.goalWeight}
                        onChange={(e) => onChange(e)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        type="number"
                        name="age"
                        label="Age"
                        id="age"
                        value={age}
                        error={errors.age}
                        helperText={errors.age}
                        onChange={(e) => onChange(e)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        type="number"
                        name="bodyFatPercentage"
                        label="Body Fat Percentage"
                        id="bodyFatPercentage"
                        value={bodyFatPercentage}
                        onChange={(e) => onChange(e)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        type="number"
                        name="restingHeartRate"
                        label="Resting Heart Rate"
                        id="restingHeartRate"
                        value={restingHeartRate}
                        onChange={(e) => onChange(e)}
                    />
                    <TextField
                        variant="outlined"
                        multiline
                        rowsMax={4}
                        margin="normal"
                        fullWidth
                        name="goalStatement"
                        label="Goal Statement"
                        id="goalStatement"
                        value={goalStatement}
                        onChange={(e) => onChange(e)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="healthHistory"
                        label="Health History"
                        id="healthHistory"
                        value={healthHistory}
                        onChange={(e) => onChange(e)}
                        error={errors.healthHistory}
                        helperText={errors.healthHistory}
                    />

                    {profile && profile.coach ? (
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            disabled
                            name="coach"
                            label="Coach"
                            id="coach"
                            value={formatCoachName(coach)}
                        />
                    ) : (
                        <Fragment>
                            <InputLabel id="coach-label">Coach</InputLabel>
                            <Select
                                variant="outlined"
                                fullWidth
                                name="coach"
                                label-id="coach"
                                id="coach"
                                value={coach}
                                onChange={(e) => onChange(e)}
                                error={errors.coach}
                                helperText={errors.coach}
                            >
                                <MenuItem value="shayne@hype4fitness.com">
                                    Shayne
                                </MenuItem>
                                <MenuItem value="josh@hype4fitness.com">
                                    Josh
                                </MenuItem>
                                <MenuItem value="glynn@hype4fitness.com">
                                    Glynn
                                </MenuItem>
                                <MenuItem value="john@hype4fitness.com">
                                    John
                                </MenuItem>
                            </Select>
                        </Fragment>
                    )}
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

CreateProfile.propTypes = {
    auth: PropTypes.object.isRequired,
    createOrUpdateClientAndProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    profile: state.profile,
});

export default connect(mapStateToProps, {
    createOrUpdateClientAndProfile,
    getCurrentProfile,
})(CreateProfile);
