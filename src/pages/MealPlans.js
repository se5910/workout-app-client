import React, { useEffect } from "react";
import { connect } from "react-redux";

const MealPlans = ({ getMealPlans, createMealPlan, meals }) => {
    const formData = {
        name: "Test 1",
    };

    const formData2 = {
        name: "Test 2",
    };

    console.log(meals);
    console.log(typeof plan);

    return (
        <div>
            {meals.map((meal) => {
                return <h1>{meal.name}</h1>;
            })}
        </div>
    );
};

const mapStateToProps = (state) => ({
    meals: state.plans.meals,
});

export default connect(mapStateToProps, {})(MealPlans);
