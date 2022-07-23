import React from "react";
import {useField} from "formik";
import AsyncSelect from "react-select/async"
import {findAgencyByNameThunk} from "../../apiCalls/apiCalls";
import {useDispatch, useSelector} from "react-redux";
import {agencySelector} from "../AddAgency";
import {customerSelector} from "../CustomerDetails";

const AsyncAgencySelect = ({ ...props}) => {
    const dispatch = useDispatch()
    const [field, helpers] = useField(props);
    const {AgenciesByNameList, isAgencyFindByNameLoading} = useSelector(agencySelector)
    const {selectedCustomer} =  useSelector(customerSelector)
    const {setValue} = helpers;

    const onChange = (option) => {
        setValue(option.value);
    };

    const loadOptions = (input, callback) => {
        let payLoad = {agencyName: input}
        dispatch(findAgencyByNameThunk(payLoad))

        if (!isAgencyFindByNameLoading) {
            let newAgencies = AgenciesByNameList.map((agency) => {
                return {label: agency.agency_name, value: agency.agency_name}
            })
            callback(newAgencies)
        }
    }

    return (
        <AsyncSelect
            className="select__agency"
            defaultValue={{label : selectedCustomer.customer_agency, value: selectedCustomer.customer_agency}}
            loadOptions={loadOptions}
            name={field.name}
            onChange={onChange}
        />
    );
};

export default AsyncAgencySelect;