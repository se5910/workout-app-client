import React, { useEffect } from "react";
import ClientCard from "./ClientCard";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getClient } from "../../actions/coachActions";
import { getClientExercisePlans } from "../../actions/planActions";
import ExercisePlanCard from "./ExercisePlanCard";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    item: {
        marginBottom: 12,
    },
});

const ClientDetail = ({
    match,
    coach: { client, loading },
    plans: { mealPlans, exercisePlans },
    getClient,
    getClientExercisePlans,
    getClientMealPlans,
}) => {
    const classes = useStyles();
    const { id } = match.params;

    useEffect(() => {
        getClient(id);
        getClientExercisePlans(id);
    }, []);

    return (
        <Container>
            <ClientCard className={classes.marginBottom} client={client} />

            <ExercisePlanCard
                className={classes.marginBottom}
                plans={exercisePlans}
                clientId={id}
                client={client && client.id}
            />
        </Container>
    );
};

ClientDetail.propTypes = {
    coach: PropTypes.object.isRequired,
    getClient: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    coach: state.coach,
    plans: state.plans,
});

export default connect(mapStateToProps, {
    getClient,
    getClientExercisePlans,
})(ClientDetail);
