import {createAsyncThunk} from "@reduxjs/toolkit";

function getApiServerUrl() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return "http://127.0.0.1:8082";
    } else {
        return window.location.origin;
    }
}

export const loginThunk = createAsyncThunk('user/loginUser', async (payload) => {
    const {username, password} = payload
    return await fetch('http://127.0.0.1:8082/loginUser', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        // body: {username: username, password: password}
        body: new URLSearchParams({
            'username': username,
            'password': password
        })
    }).then((res) => res.json()).then((res) => res)
})

export const customerThunk = createAsyncThunk('customer/createCustomer', async (payload) => {

    return await fetch('http://127.0.0.1:8082/customers/addCustomer', {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer '+ localStorage.getItem("login_token"),
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(payload)
    })
})

