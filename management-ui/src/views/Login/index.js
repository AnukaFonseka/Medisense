import {createSlice} from '@reduxjs/toolkit'
import {loginThunk} from "../../apiCalls/apiCalls";
import jwt_decode from "jwt-decode";

const initialState = {
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginError: false,
    user: {}
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(loginThunk.pending, (state, action) => {
            state.isLoginPending = true
            state.isLoginSuccess = false
        })
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            let decodedToken = jwt_decode(action.payload.token);
            state.user = {
                username: decodedToken.username,
                name: decodedToken.sub,
                roles: decodedToken.roles,
                token: action.payload.token
            }
            state.isLoginPending = false
            if(action.payload.status === '200') {
                state.isLoginSuccess = true
            } else {
                state.isLoginSuccess = false
            }
        })
    }
})

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = loginSlice.actions

export default loginSlice.reducer
export const loginSelector = state => state.login
