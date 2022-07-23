import {createSlice} from "@reduxjs/toolkit";
import {NotificationManager} from 'react-notifications';
import {addTestThunk, findTestByNameThunk} from "../../apiCalls/apiCalls";

const initialState = {
    isTestUpdated: false,
    TestsByNameList: [],
    isTestFindByNameLoading: false,
    selectedTest: {
        test_name: "",
        test_code: "",
        test_amount:"",
    }
}

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        setSelectedTest: (state, action) => {
            state.selectedTest = action.payload
        },
        setIsTestUpdated: (state, action) => {
            state.isTestUpdated = action.payload
        }
    },

    extraReducers(builder) {
        builder.addCase(addTestThunk.pending, (state, action) => {
            state.isTestUpdated = false
        })
        builder.addCase(addTestThunk.fulfilled, (state, action) =>{
            if(action.payload.statusCode === "S1000") {
                NotificationManager.success("Successfully saved test details")
                state.isTestUpdated = true
            }
        })

        builder.addCase(findTestByNameThunk.pending, (state, action) => {
            state.isTestFindByNameLoading = true
        })
        builder.addCase(findTestByNameThunk.fulfilled, (state, action) => {
            state.isTestFindByNameLoading = false
            state.TestsByNameList = action.payload

        })
    }
})

export default testSlice.reducer
export const {setSelectedTest, setIsTestUpdated} = testSlice.actions
export const testSelector = state => state.test