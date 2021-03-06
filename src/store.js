import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import jwtDecode from "jwt-decode";
import { logout } from "./actions/authActions";
const initialState = {};
const middleware = [thunk];

let store;

const ReactReduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

const checkTokenExpirationMiddleware = (store) => (next) => (action) => {
    console.log("from middleware");

    const token = localStorage.jwtToken;
    if (token) {
        if (jwtDecode(token).exp < Date.now() / 1000) {
            next(action);

            logout();
        }
        next(action);
    }
    next(action);
};

if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools) {
    store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware, checkTokenExpirationMiddleware),
            ReactReduxDevTools
        )
    );
} else {
    store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware))
    );
}

export default store;
