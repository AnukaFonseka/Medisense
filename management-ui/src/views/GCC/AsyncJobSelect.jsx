import React from "react";
import {useField, FieldProps} from "formik";
import AsyncSelect from "react-select/async"
import {findAgencyByNameThunk, findJobByNameThunk} from "../../apiCalls/apiCalls";
import {useDispatch, useSelector} from "react-redux";
import {jobSelector} from "../AddJob";
import {customerSelector} from "../CustomerDetails";

const AsyncJobSelect = ({ ...props}) => {
    const dispatch = useDispatch()
    const [field, meta, helpers] = useField(props);
    const {JobsByNameList, isJobFindByNameLoading} = useSelector(jobSelector)
    const {selectedCustomer} =  useSelector(customerSelector)
    const {setValue} = helpers;

    const onChange = (option) => {
        setValue(option.value);
    };

    const loadOptions = (input, callback) => {
        let payLoad = {jobName: input}
        dispatch(findJobByNameThunk(payLoad))

        if (!isJobFindByNameLoading) {
            let newJobs = JobsByNameList.map((job) => {
                return {label: job.job_name, value: job.job_description}
            })
            callback(newJobs)
        }
    }

    return(
        <AsyncSelect
            className="select__agency"
            defaultValue={{label : selectedCustomer.customer_job_title, value: selectedCustomer.customer_job_title}}
            loadOptions={loadOptions}
            name={field.name}
            onChange={onChange}
        />
    );
}

export default AsyncJobSelect