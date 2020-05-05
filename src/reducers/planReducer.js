import {
    GET_MEAL_PLANS,
    GET_MEAL_PLAN,
    GET_EXERCISE_PLANS,
    GET_EXERCISE_PLAN,
    CLIENT_EXERCISE_PLANS,
    CLIENT_MEAL_PLANS,
} from "../actions/types";

const initialState = {
    mealPlans: null,
    mealPlan: null,
    exercisePlans: null,
    exercisePlan: null,
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
                exerciseplans: action.payload,
            };
        case CLIENT_EXERCISE_PLANS:
            return {
                ...state,
                exercisePlans: action.payload,
            };
        case GET_EXERCISE_PLAN:
            return {
                ...state,
                exercisePlan: action.payload,
            };
        case CLIENT_MEAL_PLANS:
            return {
                ...state,
                mealPlans: action.payload,
            };
        case GET_MEAL_PLAN:
            return {
                ...state,
                mealPlan: action.payload,
            };
        default:
            return state;
    }
}
