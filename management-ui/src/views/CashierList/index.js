import {createSlice} from "@reduxjs/toolkit";
import {NotificationManager} from 'react-notifications';
import {getCashierListThunk} from "../../apiCalls/apiCalls";


const initialState = {
    waitingList: [],
    isGetCashierListLoading: false,
    selectedCustomer: {
        cus_ref_no: "",
        customer_full_name: ""
    }
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
        builder.addCase(getCashierListThunk.pending, (state,action) => {
            state.isGetCashierListLoading = true
        })
        builder.addCase(getCashierListThunk.fulfilled, (state,action) => {
            state.isGetCashierListLoading = false
            state.waitingList = action.payload
        })

    }

})

export default cashierSlice.reducer
export const {setSelectedCustomer} = cashierSlice.actions
export const cashierSelector = state => state.cashier