import { VERIFY_COACH, GET_CLIENTS, GET_CLIENT } from "../actions/types";

const initialState = {
    coach: null,
    loading: true,
    clients: null,
    client: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case VERIFY_COACH:
            return {
                ...state,
                coach: payload,
                loading: false,
            };
        case GET_CLIENTS:
            return {
                ...state,
                clients: payload,
                loading: false,
            };
        case GET_CLIENT:
            return {
                ...state,
                client: payload,
            };
        default:
            return state;
    }
}
