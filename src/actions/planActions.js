import {
    GET_MEAL_PLANS,
    GET_EXERCISE_PLANS,
    CLIENT_EXERCISE_PLANS,
    GET_ERRORS,
} from "./types";
import axios from "axios";

export const createMealPlan = (formData) => async (dispatch) => {
    try {
        axios.post("/api/meal", formData);
    } catch (err) {
        dispatch({
            GET_ERRORS,
            payload: err.response.data,
        });
    }
};

export const getMealPlans = () => async (dispatch) => {
    axios
        .get("/api/meal/all")
        .then((res) => {
            dispatch({
                type: GET_MEAL_PLANS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                GET_ERRORS,
                payload: err.response.data,
            });
        });
};

export const createExercisePlan = (formData) => async (dispatch) => {
    try {
        axios.post("/api/exercise", formData);
    } catch (err) {
        dispatch({
            GET_ERRORS,
            payload: err.response.data,
        });
    }
};

export const getExercisePlans = () => async (dispatch) => {
    axios
        .get("/api/exercise/all")
        .then((res) => {
            dispatch({
                type: GET_EXERCISE_PLANS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                GET_ERRORS,
                payload: err.response.data,
            });
        });
};

export const getClientExercisePlans = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/exercisePlan/client/${id}`);
        dispatch({
            type: CLIENT_EXERCISE_PLANS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
        });
    }
};
