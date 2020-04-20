import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getMealPlans } from "../actions/planActions"

const MealPlans = ({ getMealPlans, meal }) => {

    useEffect(() => {
        getMealPlans()
    }, [])

    return (
        <div>
            <h1>"Aw shit its the meal plans" </h1>
        </div>
    )
}

const mapStateToProps = state => ({
    meal: state.plans
})

export default connect(mapStateToProps, { getMealPlans })(MealPlans)
