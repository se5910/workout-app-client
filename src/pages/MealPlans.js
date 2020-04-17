import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMealPlans, createMealPlan } from "../actions/planActions";

const MealPlans = ({ getMealPlans, createMealPlan, meals }) => {
  useEffect(() => {
    getMealPlans();
  }, []);

  const formData = {
    name: "Test 1",
  };

  const formData2 = {
    name: "Test 2",
  };

  createMealPlan(formData);
  createMealPlan(formData2);

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

export default connect(mapStateToProps, {
  getMealPlans,
  createMealPlan,
})(MealPlans);
