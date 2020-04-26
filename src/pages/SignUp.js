import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux'
import { createNewUser, clearErrors } from '../actions/authActions'
import store from "../store";
import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";
import { Paper } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: '2rem'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));


const SignUp = ({ errors, createNewUser, history, auth }) => {
  // Don't display if logged in
  if (auth.validToken) {
    history.push("/dashboard")
  }

  const classes = useStyles();

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  })

  const [confirmError, setConfirmError] = useState(false);

  const {
    fullName,
    username,
    password,
    confirmPassword
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setConfirmError(true);
    } else {
      if (confirmError) {
        setConfirmError(false)
      }
      if (errors) {
        store.dispatch({ type: CLEAR_ERRORS })
      }
      createNewUser(formData, history)
    }
  }

  useEffect(() => {
    store.dispatch({
      type: GET_ERRORS,
      payload: {}
    })
  }, [])

  if (auth.validToken) {
    return <Redirect to="/dashboard" />
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper} elevation={3}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} onSubmit={e => onSubmit(e)}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="fullName"
            label="Full Name"
            name="fullName"
            value={fullName}
            autoFocus
            error={errors.fullName ? true : false}
            helperText={errors.fullName}
            onChange={e => onChange(e)}
          />


          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Email Address"
            name="username"
            value={username}
            error={errors.username ? true : false}
            helperText={errors.username}
            onChange={e => onChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            error={errors.password ? true : false}
            helperText={errors.password}
            onChange={e => onChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            error={confirmError ? true : false}
            helperText="Passwords do not match"
            onChange={e => onChange(e)}
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
}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
})

export default connect(mapStateToProps, { createNewUser, clearErrors })(SignUp)
