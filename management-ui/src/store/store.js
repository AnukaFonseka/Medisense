import {combineReducers, configureStore} from '@reduxjs/toolkit'
import loginReducer from "../views/Login";
import customerReducer from '../views/CustomerDetails'
import agencyReducer from '../views/AddAgency'
import jobReducer from '../views/AddJob'
import testReducer from '../views/AddTest/index'
import {connectRouter, routerMiddleware} from "connected-react-router";
import {history} from "../router/router";
import countryReducer from '../views/AddCountry/index'

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    login: loginReducer,
    customer: customerReducer,
    agency: agencyReducer,
    job: jobReducer,
    test: testReducer,
    country: countryReducer
})

const preloadedState = {};
export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false}).concat(routerMiddleware(history)),
    reducer: rootReducer(history),

    preloadedState
});
