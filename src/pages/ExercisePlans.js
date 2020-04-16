import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getExercisePlans, createExercisePlan } from "../actions/planActions"

const ExercisePlans = ({ getExercisePlans, createExercisePlan }) => {



    useEffect(() => {
        getExercisePlans()
    }, [])

    const formData = {
        name: "Test 1",
    }

    createExercisePlan(formData);

    return (
        <div>
            <h1>"Aw shit its the exercise plans" </h1>
        </div>
    )
}


export default connect(null, { getExercisePlans, createExercisePlan })(ExercisePlans)
