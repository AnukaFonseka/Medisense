import React from "react";
import {useField, FieldProps} from "formik";
import AsyncSelect from "react-select/async"
import {findCountryByNameThunk} from "../../apiCalls/apiCalls";
import {useDispatch, useSelector} from "react-redux";
import {customerSelector} from "../CustomerDetails";
import {countrySelector} from "../AddCountry";

const AsyncCountrySelect = ({ ...props}) => {
    const dispatch = useDispatch()
    const [field, meta, helpers] = useField(props);
    const {CountriesByNameList, isCountryFindByNameLoading} = useSelector(countrySelector)
    const {selectedCustomer} =  useSelector(customerSelector)
    const {setValue} = helpers;

    const onChange = (option) => {
        setValue(option.value);
    };

    const loadOptions = (input, callback) => {
        let payLoad = {countryName: input}
        dispatch(findCountryByNameThunk(payLoad))

        if (!isCountryFindByNameLoading) {
            let newCountries = CountriesByNameList.map((country) => {
                return {label: country.country_name, value: country.country_code}
            })
            callback(newCountries)
        }
    }

    return(
        <AsyncSelect
            className="select__country"
            defaultValue={{label : selectedCustomer.country_name, value: selectedCustomer.country_name}}
            loadOptions={loadOptions}
            name={field.name}
            onChange={onChange}
        />
    );
}

export default AsyncCountrySelect