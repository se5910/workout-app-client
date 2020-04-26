import React, { Fragment, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';

const ClientDashboard = ({ auth: { user }, profile: { profile, loading }, getCurrentProfile }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile])

    return (
        <Fragment>
            <h1 className="large text-primary">
                Dashboard
            </h1>
            <p>
                <i className="fas fa-user">{' '}Welcome {user && user.fullName}</i>
            </p>
            {profile !== null ? <Fragment><Button>Edit Profile</Button></Fragment> : <Fragment><p>You have not yet setup a profile, please add some info</p>
                <Button component={Link} to='/create-profile' variant="contained" color="primary" className="btn btn-primary my-1">Create Profile</Button></Fragment>}
        </Fragment>
    )
}

ClientDashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
})

export default connect(mapStateToProps, { getCurrentProfile })(ClientDashboard)
