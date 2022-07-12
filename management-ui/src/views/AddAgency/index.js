import {createSlice} from "@reduxjs/toolkit";
import {addAgencyThunk, addCustomerThunk, findCustomerByNameThunk, updateCustomerThunk} from "../../apiCalls/apiCalls";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {customerSlice} from "../CustomerDetails";


const initialState = {
    isAgencyUpdated: false,
    AgenciesByNameList: [],
    selectedAgency: {
        agency_name: "",
        agency_address: "",
        agency_contact_no: "",
        agency_fax: "",
        agency_email: "",
        agency_contact_person: "",
        agency_labour_licence: "",
        agency_commission: ""
    }
}

export const agencySlice = createSlice({
    name: 'agency',
    initialState,
    reducers: {
        setSelectedAgency: (state, action) => {
            state.selectedAgency = action.payload
        },
        setIsAgencyUpdated: (state, action) => {
            state.isAgencyUpdatedUpdated = action.payload
        }
    },

    extraReducers(builder) {
        builder.addCase(addAgencyThunk.pending, (state, action) => {
            state.isAgencyUpdated = false
        })
        builder.addCase(addAgencyThunk.fulfilled, (state, action) =>{
            if(action.payload.statusCode === "S1000") {
                NotificationManager.success("Successfully saved customer details")
                state.isAgencyUpdated = true
            }
        })
    }
})

export default agencySlice.reducer
export const { setSelectedAgency, setIsAgencyUpdated } = agencySlice.actions
export const agencySelector = state => state.agency