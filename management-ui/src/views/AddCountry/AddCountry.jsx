import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from 'yup';
import {Formik, Form, Field} from "formik";
import {NavLink, useHistory} from "react-router-dom";
import {countrySelector} from "./index";
import {addCountryThunk} from "../../apiCalls/apiCalls";

const AddCountry = () => {

    const dispatch = useDispatch()
    const {selectedCountry, isCountryUpdated} = useSelector(countrySelector)
    const history = useHistory()

    useEffect( () => {
        if(isCountryUpdated) {
            history.push('/GCC')
        }
    }, [selectedCountry, isCountryUpdated])

    const countrySchema = Yup.object().shape({
        country_name: Yup.string()
            .required('Country Name is Required')
    });

    return(
        <div>
            <nav aria-label="breadcrumb" className="navbar">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <NavLink to="/receptionHome"> Home </NavLink>
                    </li>
                    <li className="breadcrumb-item">
                        <NavLink to="/GCC"> GCC </NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Add Country</li>
                </ol>
            </nav>
            <div className="main__container">
                <Formik
                    initialValues={selectedCountry}
                    onSubmit={async (values) => {
                        dispatch(addCountryThunk(values))
                    }}
                    validationSchema={countrySchema}
                >
                    {({errors, touched}) =>(
                        <Form className="form">
                            <div className="common__info">
                                <h1>Add Country</h1>

                            </div>
                            <br/>

                            <br/>
                            <div className="common__info">
                                <div className="common__info__wrap">
                                    <div className="common__info__details">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="address">Country Name</label>
                                                <Field className="form-control" type="text" id="country_name"
                                                       name="country_name"/>
                                                {errors.country_name && touched.country_name ? (
                                                    <div className="error_message">{errors.country_name}</div>
                                                ) : null}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="address">Country Code</label>
                                                <Field className="form-control" type="text" id="country_code"
                                                       name="country_code"/>
                                            </div>
                                        </div>

                                        <div className="col-md-2">
                                            <label htmlFor="name">Type</label>
                                            <Field as="select" defaultValue={}
                                                   name="country_type"
                                                   className="form-select form-select__title">
                                                <option selected></option>
                                                <option value="GCC">GCC</option>
                                                <option value="NonGCC">Non GCC</option>
                                            </Field>
                                        </div>

                                        <br/>

                                        <button type="submit" className="btn btn-primary mb-2"> Save</button>

                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default AddCountry