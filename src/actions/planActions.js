import { GET_MEAL_PLANS } from "./types"

export const getMealPlans = () => async dispatch => {
    dispatch({
        type: GET_MEAL_PLANS,
        payload: {
            "fuck": "fuck"
        }
    })
}
