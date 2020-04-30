import React, { useEffect, Fragment } from "react";
import ClientCard from "./ClientCard";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getClient } from "../../actions/coachActions";

const ClientDetail = ({ match, coach: { client, loading }, getClient }) => {
    const { id } = match.params;

    useEffect(() => {
        getClient(id);
    }, [getClient, id]);

    return (
        <Fragment>
            <ClientCard client={client} />
        </Fragment>
    );
};

ClientDetail.propTypes = {
    coach: PropTypes.object.isRequired,
    getClient: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    coach: state.coach,
});

export default connect(mapStateToProps, { getClient })(ClientDetail);
