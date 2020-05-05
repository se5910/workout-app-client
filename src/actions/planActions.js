import {
    GET_MEAL_PLANS,
    GET_MEAL_PLAN,
    GET_EXERCISE_PLAN,
    CLIENT_EXERCISE_PLANS,
    CLIENT_MEAL_PLANS,
    GET_ERRORS,
} from "./types";
import axios from "axios";

export const createMealPlan = (clientId, formData) => async (dispatch) => {
    try {
        await axios.post(`/api/client/${clientId}/mealPlan`, formData);
        console.log("from ");
    } catch (err) {
        dispatch({
            GET_ERRORS,
            payload: err.response.data,
        });
    }
};

export const getClientMealPlans = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/client/${id}/mealPlan`);
        dispatch({
            type: CLIENT_MEAL_PLANS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
        });
    }
};

export const getMealPlanById = (clientId, planId) => async (dispatch) => {
    try {
        const res = await axios.get(
            `/api/client/${clientId}/mealPlan/${planId}`
        );

        dispatch({
            type: GET_MEAL_PLAN,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
        });
    }
};

export const createExercisePlan = (clientId, formData) => async (dispatch) => {
    try {
        axios.post(`/api/client/${clientId}/exercisePlan`, formData);
    } catch (err) {
        dispatch({
            GET_ERRORS,
            payload: err.response.data,
        });
    }
};

export const getClientExercisePlans = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/client/${id}/exercisePlan`);
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

export const getExercisePlanById = (clientId, planId) => async (dispatch) => {
    try {
        const res = await axios.get(
            `/api/client/${clientId}/exercisePlan/${planId}`
        );

        dispatch({
            type: GET_EXERCISE_PLAN,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
        });
    }
};
