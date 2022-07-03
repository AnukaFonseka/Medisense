import {createSlice} from "@reduxjs/toolkit";
import {customerThunk} from "../../apiCalls/apiCalls";

const initialState = {
    isCustomerSaved: false,
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(customerThunk.pending, (state, action) => {
            state.isCustomerSaved = false
        })
        builder.addCase(customerThunk.fulfilled, (state, action) =>{
            state.isCustomerSaved = true
        })
    }
})

export default customerSlice.reducer
export const customerSelector = state => state.customer