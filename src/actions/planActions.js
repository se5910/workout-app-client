import { GET_MEAL_PLANS, GET_EXERCISE_PLANS } from "./types"

export const getMealPlans = () => async dispatch => {
    dispatch({
        type: GET_MEAL_PLANS,
        payload: {
            "fuck": "fuck"
        }
    })
}

export const getExercisePlans = () => async dispatch => {
    dispatch({
        type: GET_EXERCISE_PLANS,
        payload: {
            "ASS": "ASS"
        }
    })
}
