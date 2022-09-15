import {createSlice} from "@reduxjs/toolkit";
import {NotificationManager} from 'react-notifications';
import {getCashierListThunk} from "../../apiCalls/apiCalls";


const initialState = {
    waitingList: [],
    isGetCashierListLoading: false
}

export const cashierSlice = createSlice({
    name: 'cashier',
    initialState,
    reducers: {
        setSelectedCustomer: (state, action) => {
            state.selectedCustomer = action.payload
        },
    },

    extraReducers(builder) {
        builder.addCase(getCashierListThunk.fulfilled, (state,action) => {
            state.waitingList = action.payload
        })
    }

})

export default cashierSlice.reducer
export const {setSelectedCustomer} = cashierSlice.actions
export const cashierSelector = state => state.cashier