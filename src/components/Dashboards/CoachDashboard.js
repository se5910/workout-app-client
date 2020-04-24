import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { verifyCoach, logout } from '../../actions/authActions';

const CoachDashboard = ({ auth, coach: { isCoach }, verifyCoach, logout }) => {
    useEffect(() => {
        verifyCoach();
    }, []);

    if (!auth.validToken) {
        logout();
    }

    return (
        <div>
            Coach Dashboard
        </div>
    )
}

CoachDashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    coach: PropTypes.object.isRequired,
    verifyCoach: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    coach: state.coach
});

export default connect(mapStateToProps, { verifyCoach, logout })(CoachDashboard)
