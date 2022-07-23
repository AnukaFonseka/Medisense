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

export const addCustomerThunk = createAsyncThunk('customer/createCustomer', async (payload) => {

    return await fetch('http://127.0.0.1:8082/customers/addCustomer', {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer '+ localStorage.getItem("login_token"),
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(payload)
    }).then((res) => res.json()).then((res) => res)
})

export const updateCustomerThunk = createAsyncThunk('customer/updateCustomer', async (payload) => {

    return await fetch('http://127.0.0.1:8082/customers/updateCustomer', {
        method: 'PUT',
        headers: new Headers({
            'Authorization': 'Bearer '+ localStorage.getItem("login_token"),
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(payload)
    }).then((res) => res.json()).then((res) => res)
})

export const findCustomerByNameThunk = createAsyncThunk('customer/findCustomerByName', async (payload) => {
    const {customerName} = payload
    return await fetch(`http://127.0.0.1:8082/customers/getCustomers?customerName=${customerName}`, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer '+ localStorage.getItem("login_token"),
        }),
    }).then((res) => res.json()).then((res) => res)
})

export const findAgencyByNameThunk = createAsyncThunk('customer/findCustomerByName', async (payload) => {
    const {agencyName} = payload
    return await fetch(`http://127.0.0.1:8082/agencies/getAgencies?agencyName=${agencyName}`, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer '+ localStorage.getItem("login_token"),
        }),
    }).then((res) => res.json()).then((res) => res)
})



export const addAgencyThunk = createAsyncThunk('agency/createAgency', async (payload) => {
    return await fetch('http://127.0.0.1:8082/agencies/addAgency', {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer '+ localStorage.getItem("login_token"),
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(payload)
    }).then((res) => res.json()).then((res) => res)
})

export const findJobByNameThunk = createAsyncThunk('job/findJobByName', async (payload) => {
    const {jobName} = payload
    return await fetch(`http://127.0.0.1:8082/jobs/getJobs?jobName=${jobName}`, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer '+ localStorage.getItem("login_token"),
        }),
    }).then((res) => res.json()).then((res) => res)
})

export const addJobThunk = createAsyncThunk('job/createJob', async (payload) => {
    return await fetch('http://127.0.0.1:8082/jobs/addJob', {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer '+ localStorage.getItem("login_token"),
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(payload)
    }).then((res) => res.json()).then((res) => res)
})

export const addTestThunk = createAsyncThunk('test/createTest', async (payload) => {
    return await fetch('http://127.0.0.1:8082/tests/addTest', {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer '+ localStorage.getItem("login_token"),
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(payload)
    }).then((res) => res.json()).then((res) => res)
})

export const findTestByNameThunk = createAsyncThunk('test/findTestByName', async (payload) => {
    const {testName} = payload
    return await fetch(`http://127.0.0.1:8082/tests/getTests?testName=${testName}`, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer '+ localStorage.getItem("login_token"),
        }),
    }).then((res) => res.json()).then((res) => res)
})
