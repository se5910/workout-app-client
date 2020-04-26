import React from "react";
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import { Link, Redirect } from 'react-router-dom'

import Shane from "../images/Shayne-workout-11-blur90.jpg";


const useStyles = makeStyles(theme => ({
  paper: {
    textAlign: 'center',
    height: "600px",
    padding: 0,
    background: `url(${Shane})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    marginTop: '1em',
    color: 'white',
  },
  image: {
    width: "100%",
  },
  overlay: {
    position: 'absolute',
    zIndex: 0,

  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: "1rem",
    minWidth: '12rem',
  },

}))


const Home = ({ auth, history }) => {
  const classes = useStyles();
  if (auth.validToken) {
    return <Redirect to="/dashboard" />
  }

  return (
    <Container className={classes.paper} maxWidth='lg'>
      <Typography variant="h2" component="h2" className={classes.h1} responsive>
        Hello, Please register or login
      </Typography>
      <div className={classes.buttons}>
        <Button
          component={Link}
          to="/signup"
          variant="contained"
          color="secondary"
        >
          Signup
        </Button>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </div>
    </Container>
  )

}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Home);
