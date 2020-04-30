import { GET_CLIENTS, GET_ERRORS } from "./types";
import axios from "axios";

export const getClients = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/coach/clients");
        dispatch({
            type: GET_CLIENTS,
            payload: res.data,
        });
    } catch (err) {
        if (err.response && err.response.data) {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            });
        }
    }
};
