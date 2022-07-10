import {createSlice} from "@reduxjs/toolkit";
import {addCustomerThunk, findCustomerByNameThunk, updateCustomerThunk} from "../../apiCalls/apiCalls";
import {NotificationContainer, NotificationManager} from 'react-notifications';

const initialState = {
    isCustomerUpdated: false,
    customersByNameList: [],
    isCustomerFindByNameLoading: false,
    selectedCustomer: {
        cus_ref_no: "",
        customer_salutation: "",
        customer_full_name: "",
        customer_address: "",
        customer_contact_no: "",
        customer_dob: "",
        customer_reg_date: "",
        customer_nic: "",
        customer_civil_status: "",
        customer_passport_no: "",
        customer_pp_issued_date: "",
        customer_pp_issued_place: "",
        customer_agency: "",
        customer_job_title: "",
        customer_country: "",
        customer_last_meal_time: "",
        customer_last_meal_time_rfrd_by: ""
    }
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        setSelectedCustomer: (state, action) => {
            state.selectedCustomer = action.payload
        },
        setIsCustomerUpdated: (state, action) => {
            state.isCustomerUpdated = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(addCustomerThunk.pending, (state, action) => {
            state.isCustomerUpdated = false
        })
        builder.addCase(addCustomerThunk.fulfilled, (state, action) =>{
            if(action.payload.statusCode === "S1000") {
                NotificationManager.success("Successfully saved customer details")
                state.isCustomerUpdated = true
            }
        })
        builder.addCase(updateCustomerThunk.pending, (state, action) => {
            state.isCustomerUpdated = false
        })
        builder.addCase(updateCustomerThunk.fulfilled, (state, action) =>{
            if(action.payload.statusCode === "S1000") {
                NotificationManager.success("Successfully updated customer details")
                state.isCustomerUpdated = true
            }
        })
        builder.addCase(findCustomerByNameThunk.pending, (state, action) => {
            state.isCustomerFindByNameLoading = true
        })
        builder.addCase(findCustomerByNameThunk.fulfilled, (state, action) => {
            state.isCustomerFindByNameLoading = false
            state.customersByNameList = action.payload

        })
    }
})

export default customerSlice.reducer
export const { setSelectedCustomer, setIsCustomerUpdated} = customerSlice.actions
export const customerSelector = state => state.customer