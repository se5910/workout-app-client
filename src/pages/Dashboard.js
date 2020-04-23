import React, { Fragment, useEffect } from 'react';
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { getCurrentProfile } from '../actions/profileActions';

const Dashboard = ({ auth: { user }, profile: { profile, loading }, getCurrentProfile }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getCurrentProfile()
  }, [])

  return <Fragment>
    <h1 className="large text-primary">
      Dashboard
  </h1>
    <p>
      <i className="fas fa-user">{' '}Welcome {user && user.fullName}</i>
    </p>
    {profile !== null ? <Fragment>has</Fragment> : <Fragment><p>You have not yet setup a profile, please add some info</p>
      <Button component={Link} to='/create-profile' variant="contained" color="primary" className="btn btn-primary my-1">Create Profile</Button></Fragment>}
  </Fragment>
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
