import {createSlice} from "@reduxjs/toolkit";
import { addJobThunk, findJobByNameThunk} from "../../apiCalls/apiCalls";
import {NotificationContainer, NotificationManager} from 'react-notifications';

const initialState = {
    isJobUpdated: false,
    JobsByNameList: [],
    isJobFindByNameLoading: false,
    selectedJob: {
        job_name: "",
        job_description: "",
    }
}

export const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        setSelectedJob: (state, action) => {
            state.selectedJob = action.payload
        },
        setIsJobUpdated: (state, action) => {
            state.isJobUpdated = action.payload
        }
    },

    extraReducers(builder) {
        builder.addCase(addJobThunk.pending, (state, action) => {
            state.isJobUpdated = false
        })
        builder.addCase(addJobThunk.fulfilled, (state, action) =>{
            if(action.payload.statusCode === "S1000") {
                NotificationManager.success("Successfully saved job details")
                state.isJobUpdated = true
            }
        })

        builder.addCase(findJobByNameThunk.pending, (state, action) => {
            state.isJobFindByNameLoading = true
        })
        builder.addCase(findJobByNameThunk.fulfilled, (state, action) => {
            state.isJobFindByNameLoading = false
            state.JobsByNameList = action.payload

        })
    }
})

export default jobSlice.reducer
export const {setSelectedJob, setIsJobUpdated} = jobSlice.actions
export const jobSelector = state => state.job