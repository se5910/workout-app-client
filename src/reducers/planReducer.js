import { GET_MEAL_PLANS, GET_EXERCISE_PLANS } from "../actions/types"

const initialState = {
    meals: [],
    exercises: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MEAL_PLANS:
            return {
                ...state,
                meals: action.payload
            }
        case GET_EXERCISE_PLANS:
            return {
                ...state,
                exercises: action.payload
            }
        default:
            return state
    }
}
