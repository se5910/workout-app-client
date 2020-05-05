import React, { useEffect } from "react";
import { getExercisePlanById } from "../actions/planActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const ExercisePlan = ({
    match,
    getExercisePlanById,
    plans: { exercisePlan },
}) => {
    const { id, planId } = match.params;

    useEffect(() => {
        getExercisePlanById(id, planId);
    }, []);

    return <div>{exercisePlan && exercisePlan.name}</div>;
};

ExercisePlan.propTypes = {};

const mapStateToProps = (state) => ({
    plans: state.plans,
});

export default connect(mapStateToProps, { getExercisePlanById })(ExercisePlan);
