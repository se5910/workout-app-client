import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getExercisePlans } from "../actions/planActions"

const ExercisePlans = ({ getExercisePlans, meal }) => {

    useEffect(() => {
        getExercisePlans()
    }, [])

    return (
        <div>
            <h1>"Aw shit its the exercise plans" </h1>
        </div>
    )
}


export default connect(null, { getExercisePlans })(ExercisePlans)
