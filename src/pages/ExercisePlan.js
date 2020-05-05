import React from "react";
import PropTypes from "prop-types";

const ExercisePlan = ({ match }) => {
    const { id } = match.params;
    console.log(match.params);
    return <div>Plan number {id}</div>;
};

ExercisePlan.propTypes = {};

export default ExercisePlan;
