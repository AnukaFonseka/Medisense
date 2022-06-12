import {combineReducers, configureStore} from '@reduxjs/toolkit'
import loginReducer from "../views/Login";
import {connectRouter, routerMiddleware} from "connected-react-router";
import {history} from "../router/router";

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    login: loginReducer
})

const preloadedState = {};
export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(routerMiddleware(history)),
    reducer: rootReducer(history),

    preloadedState
});
