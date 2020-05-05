import {
    GET_EXERCISE_PLAN,
    CLIENT_EXERCISE_PLANS,
    GET_ERRORS,
    GET_TEMPLATE,
    CREATE_SLOT,
} from "./types";
import axios from "axios";

export const createMealPlan = (clientId, formData, history) => async (
    dispatch
) => {
    try {
        await axios.post(`/api/client/${clientId}/mealPlan`, formData);
        history.goBack();
    } catch (err) {
        dispatch({
            GET_ERRORS,
            payload: err.response.data,
        });
    }
};

export const createExercisePlan = (clientId, formData, history) => async (
    dispatch
) => {
    try {
        axios.post(`/api/client/${clientId}/exercisePlan`, formData);
        history.goBack();
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
        if (err && err.response) {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            });
        }
    }
};

export const createTemplate = (clientId, planId, formData, history) => async (
    dispatch
) => {
    try {
        await axios.post(
            `/api/client/${clientId}/exercisePlan/${planId}/template`,
            formData
        );
        history.push(`/client/${clientId}/exercise-plan/${planId}`);
    } catch (err) {
        if (err && err.response) {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            });
        }
    }
};

export const getTemplate = (clientId, planId, templateId) => async (
    dispatch
) => {
    try {
        const res = await axios.get(
            `/api/client/${clientId}/exercisePlan/${planId}/template/${templateId}`
        );
        dispatch({
            type: GET_TEMPLATE,
            payload: res.data,
        });
    } catch (err) {
        if (err && err.response) {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            });
        }
    }
};

export const createExerciseSlot = (
    clientId,
    planId,
    templateId,
    formData = {}
) => async (dispatch) => {
    try {
        const res = await axios.post(
            `/api/client/${clientId}/exercisePlan/${planId}/template/${templateId}/exerciseSlot`,
            formData
        );
        dispatch({
            type: CREATE_SLOT,
            payload: res.data,
        });
        dispatch({
            GET_TEMPLATE,
        });
    } catch (error) {}
};

export const createWeek = (
    clientId,
    planId,
    templateId,
    exerciseSlotId
) => async (dispatch) => {
    try {
        await axios.post(
            `/api/client/${clientId}/exercisePlan/${planId}/template/${templateId}/exerciseSlot/${exerciseSlotId}/week`,
            { name: 0 }
        );
    } catch (err) {
        if (err && err.response) {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            });
        }
    }
};
