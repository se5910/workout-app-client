import React, { useEffect } from "react";
import { connect } from "react-redux";

const ExercisePlans = ({ getExercisePlans, createExercisePlan, exercises }) => {
    const formData = {
        name: "Test 1",
    };

    const formData2 = {
        name: "Test 2",
    };

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

export default connect(mapStateToProps, {})(ExercisePlans);
