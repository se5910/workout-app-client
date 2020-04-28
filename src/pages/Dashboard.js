import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CoachDashboard from "../components/Dashboards/CoachDashboard";
import ClientDashboard from "../components/Dashboards/ClientDashboard";
import { verifyCoach } from "../actions/authActions";

const Dashboard = ({ auth: { user }, coach: { coach }, verifyCoach }) => {
    useEffect(() => {
        verifyCoach();
    }, [verifyCoach]);

    return (
        <Fragment>{coach ? <CoachDashboard /> : <ClientDashboard />}</Fragment>
    );
};

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    coach: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
    coach: state.coach,
});

export default connect(mapStateToProps, { verifyCoach })(Dashboard);
