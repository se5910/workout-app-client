import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
    validToken: false,
    loading: true,
    user: null,
};

const hasPayload = (payload) => {
    if (payload) {
        return true;
    } else {
        return false;
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload,
                validToken: hasPayload(action.payload),
                loading: false,
            };

        default:
            return state;
    }
}
