import { GET_MEAL_PLANS, GET_EXERCISE_PLANS } from "../actions/types"

const initialState = {
    plans: {
        meals: {},
        exercises: {}
    },
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MEAL_PLANS:
            return {
                ...state,
                plans: {
                    meals: action.payload
                }
            }
        case GET_EXERCISE_PLANS:
            return {
                ...state,
                plans: {
                    exercises: action.payload
                }
            }
        default:
            return state
    }
}
