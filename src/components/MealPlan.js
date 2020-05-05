import React, { useEffect } from "react";
import { getMealPlanById } from "../actions/planActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const MealPlan = ({ match, getMealPlanById, plans: { mealPlan } }) => {
    const { id, planId } = match.params;

    useEffect(() => {
        getMealPlanById(id, planId);
    }, []);

    return <div>MealPlan: {mealPlan && mealPlan.name}</div>;
};

MealPlan.propTypes = {};

const mapStateToProps = (state) => ({
    plans: state.plans,
});

export default connect(mapStateToProps, { getMealPlanById })(MealPlan);
