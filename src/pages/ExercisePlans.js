import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getExercisePlans, createExercisePlan } from "../actions/planActions";

const ExercisePlans = ({ getExercisePlans, createExercisePlan, exercises }) => {
    useEffect(() => {
        getExercisePlans();
    }, [getExercisePlans]);

    const formData = {
        name: "Test 1",
    };

    const formData2 = {
        name: "Test 2",
    };

    createExercisePlan(formData);
    createExercisePlan(formData2);

    console.log(exercises);
    console.log(typeof plan);

    return (
        <div>
            {exercises.map((exercise) => {
                return <h1>{exercise.name}</h1>;
            })}
        </div>
    );
};

const mapStateToProps = (state) => ({
    exercises: state.plans.exercises,
});

export default connect(mapStateToProps, {
    getExercisePlans,
    createExercisePlan,
})(ExercisePlans);
