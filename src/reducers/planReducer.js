import {
    GET_MEAL_PLANS,
    GET_EXERCISE_PLANS,
    CLIENT_EXERCISE_PLANS,
    CLIENT_MEAL_PLANS,
} from "../actions/types";

const initialState = {
    meal: null,
    exercise: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MEAL_PLANS:
            return {
                ...state,
                meal: action.payload,
            };
        case GET_EXERCISE_PLANS:
            return {
                ...state,
                exercise: action.payload,
            };
        case CLIENT_EXERCISE_PLANS:
            return {
                ...state,
                exercise: action.payload,
            };
        case CLIENT_MEAL_PLANS:
            return {
                ...state,
                meal: action.payload,
            };
        default:
            return state;
    }
}
