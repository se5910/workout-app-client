import { VERIFY_COACH } from "../actions/types";

const initialState = {
    coach: null,
    loading: true,
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
        default:
            return state;
    }
}
