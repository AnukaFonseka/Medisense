import {createAsyncThunk} from "@reduxjs/toolkit";

function getApiServerUrl() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return "http://127.0.0.1:8082";
    } else {
        return window.location.origin;
    }
}

// export async function login(username, password) {
//     const resp = await fetch(getApiServerUrl() + '/login', {
//         method: 'POST',
//         headers: 'Content-Type: application/x-www-form-urlencoded',
//         body: {username, password}
//     })
//     return await resp.json()
// }

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

