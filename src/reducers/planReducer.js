import { GET_MEAL_PLANS } from "../actions/types"

const initialState = {
    plans: {
        meals: {},
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
        default:
            return state
    }
}
