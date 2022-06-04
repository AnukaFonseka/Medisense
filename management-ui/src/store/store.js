import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {loginSlice} from "../views/Login";
import {connectRouter, routerMiddleware} from "connected-react-router";
import {history} from "../router/router";

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    login: loginSlice
})

const preloadedState = {};
export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(routerMiddleware(history)),
    reducer: rootReducer(history),

    preloadedState
});
