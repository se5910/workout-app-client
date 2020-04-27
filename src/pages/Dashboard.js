import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CoachDashboard from "../components/Dashboards/CoachDashboard";
import ClientDashboard from "../components/Dashboards/ClientDashboard";

const Dashboard = ({ auth: { user } }) => {
    useEffect(() => {});

    const { isCoach } = user;
    return (
        <Fragment>
            {isCoach ? <CoachDashboard /> : <ClientDashboard />}
        </Fragment>
    );
};

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
});

export default connect(mapStateToProps)(Dashboard);
