import {createSlice} from "@reduxjs/toolkit";
import { addCountryThunk, findCountryByNameThunk} from "../../apiCalls/apiCalls";
import {NotificationContainer, NotificationManager} from 'react-notifications';

const initialState = {
    isCountryUpdated: false,
    CountriesByNameList: [],
    isCountryFindByNameLoading: false,
    selectedCountry: {
        country_name: "",
        country_code: "",
    }
}

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        setSelectedCountry: (state, action) => {
            state.selectedCountry = action.payload
        },
        setIsCountryUpdated: (state, action) => {
            state.isCountryUpdated = action.payload
        }
    },

    extraReducers(builder) {
        builder.addCase(addCountryThunk.pending, (state, action) => {
            state.isCountryUpdated = false
        })
        builder.addCase(addCountryThunk.fulfilled, (state, action) =>{
            if(action.payload.statusCode === "S1000") {
                NotificationManager.success("Successfully saved country details")
                state.isCountryUpdated = true
            }
        })

        builder.addCase(findCountryByNameThunk.pending, (state, action) => {
            state.isCountryFindByNameLoading = true
        })
        builder.addCase(findCountryByNameThunk.fulfilled, (state, action) => {
            state.isCountryFindByNameLoading = false
            state.CountriesByNameList = action.payload
        })
    }
})

export default countrySlice.reducer
export const {setSelectedCountry, setIsCountryUpdated} = countrySlice.actions
export const countrySelector = state => state.country