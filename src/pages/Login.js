import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import { connect } from "react-redux";
import { login } from "../actions/authActions";
import PropTypes from "prop-types";
import store from "../store";
import { GET_ERRORS } from "../actions/types";
import { Redirect } from "react-router-dom";

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

const Login = ({ login, errors, auth, history }) => {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const { username, password } = formData;

    useEffect(() => {
        store.dispatch({
            type: GET_ERRORS,
            payload: {},
        });
    }, []);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        login(formData);
    };

    // Don't display if logged in
    if (auth.validToken) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper className={classes.paper} elevation={3}>
                <Typography component="h1" variant="h5">
                    Log in
                </Typography>
                <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="username"
                        label="Email Address"
                        name="username"
                        error={errors.username ? true : false}
                        helperText={errors.username}
                        value={username}
                        onChange={(e) => onChange(e)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        error={errors.password ? true : false}
                        helperText={errors.password}
                        value={password}
                        onChange={(e) => onChange(e)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

Login.propTypes = {
    errors: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    errors: state.errors,
    auth: state.auth,
});

export default connect(mapStateToProps, { login })(Login);
