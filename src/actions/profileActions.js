import axios from 'axios'
import { GET_PROFILE, PROFILE_ERROR, GET_ERRORS } from './types'

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('api/client/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}


export const createOrUpdateClientAndProfile = (formData, history, edit = false) => async dispatch => {
    try {
        const res = await axios.post('/api/client', formData);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })

        if (!edit) {
            history.push('/dashboard');
        }
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}
