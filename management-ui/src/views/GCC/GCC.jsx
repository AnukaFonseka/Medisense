import React, {useEffect, useState} from "react";
import "./gcc.css"
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addCustomerThunk, updateCustomerThunk} from "../../apiCalls/apiCalls";
import {Formik, Form, Field} from "formik";
import * as Yup from 'yup';
import {customerSelector, setSelectedCustomer} from "../CustomerDetails";
import AsyncAgencySelect from "./AsyncAgencySelect";
import AsyncJobSelect from "./AsyncJobSelect";
import { setIsAgencyUpdated} from "../AddAgency";
import {setIsJobUpdated} from "../AddJob";

const GCC = () => {
    const dispatch = useDispatch()
    const {selectedCustomer, isCustomerUpdated} =  useSelector(customerSelector)
    const history = useHistory();
    const [updatedCustomerValues, setUpdatedCustomerValues] = useState({});

    useEffect(() => {
        dispatch(setIsAgencyUpdated(false))
        dispatch(setIsJobUpdated(false))
    },[dispatch])


    useEffect(() => {
        if(isCustomerUpdated) {
            dispatch(setSelectedCustomer(updatedCustomerValues))
            history.push('/testDetails')
        }
    },[selectedCustomer, isCustomerUpdated])



    const CustomerSchema = Yup.object().shape({
        cus_ref_no: Yup.number()
            .required('Reference Number is Required'),
        customer_salutation: Yup.string()
            .required('Salutation is required'),
        customer_full_name: Yup.string()
            .required('Full name is required'),
        customer_reg_date: Yup.date()
            .max(new Date(), 'Please choose a valid registered date')
            .required('Registered Date is required'),
        customer_dob: Yup.date()
            .max(new Date(), 'Please choose a valid date of birth')
            .required('Date of birth is required'),
            // .test("DOB", "Please choose a valid date of birth", (value) => {
            //     return moment().diff(moment(value), "day") >= 0;
            // })
        // email: Yup.string().email('Invalid email').required('Required'),
    });

    return (
        <div>
            <nav aria-label="breadcrumb" className="navbar">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <NavLink to="/receptionHome"> Home </NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">GCC</li>
                </ol>
            </nav>
            <div className="main__container">
                <Formik
                    initialValues={selectedCustomer}
                    onSubmit={async (values) => {
                        if(selectedCustomer.cus_ref_no === ""){
                            setUpdatedCustomerValues(values);
                            dispatch(addCustomerThunk(values));
                        } else {
                            setUpdatedCustomerValues(values);
                            dispatch(updateCustomerThunk(values))
                        }
                    }}
                    validationSchema={CustomerSchema}
                >
                    {({errors, touched}) => (
                        <Form className="form">
                            <div className="common__info">
                                <h1>Applicant Details</h1>

                            </div>
                            <br/>

                            <div className="common__info">
                                <div className="common__info__wrap">
                                    <div className="common__info__details">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="id">Reference Number</label>
                                                <Field className="form-control" type="text" id="cus_ref_no"
                                                       name="cus_ref_no"/>
                                                {errors.cus_ref_no && touched.cus_ref_no ? (
                                                    <div className="error_message">{errors.cus_ref_no}</div>
                                                ) : null}
                                            </div>
                                            <div className="col">
                                                <label htmlFor="date">Register Date</label>
                                                <Field className="form-control" type="date" id="date"
                                                       name="customer_reg_date"/>
                                                {errors.customer_reg_date && touched.customer_reg_date ? (
                                                    <div className="error_message">{errors.customer_reg_date}</div>
                                                ) : null}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-2">
                                                <label htmlFor="name">Title</label>
                                                <Field as="select" defaultValue={selectedCustomer.customer_salutation}
                                                       name="customer_salutation"
                                                       className="form-select form-select__title">
                                                    <option selected></option>
                                                    <option value="Mr">Mr</option>
                                                    <option value="Mrs">Mrs</option>
                                                    <option value="Ms">Ms</option>
                                                </Field>
                                                {errors.customer_salutation && touched.customer_salutation ? (
                                                    <div className="error_message">{errors.customer_salutation}</div>
                                                ) : null}
                                            </div>
                                            <div className="col">
                                                <label htmlFor="name">Full Name</label>
                                                <Field className="form-control" type="text" id="name"
                                                       name="customer_full_name"/>
                                                {errors.customer_full_name && touched.customer_full_name ? (
                                                    <div className="error_message">{errors.customer_full_name}</div>
                                                ) : null}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="date">Date of Birth</label>
                                                <Field className="form-control" type="date" id="dob"
                                                       name="customer_dob"/>
                                                {errors.customer_dob && touched.customer_dob ? (
                                                    <div className="error_message">{errors.customer_dob}</div>
                                                ) : null}
                                            </div>
                                            <div className="col">
                                                <label htmlFor="mobile">Mobile No</label>
                                                <Field className="form-control" type="text" id="mobile"
                                                       name="customer_contact_no"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="common__info__image">
                                        <img src={require("../Reception/images/1.png")} alt="" width="200px"
                                             height="200px"/>
                                    </div>

                                </div>
                            </div>
                            <br/>
                            <div className="common__info">
                                <div className="common__info__wrap">
                                    <div className="common__info__details">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="NIC">NIC</label>
                                                <Field className="form-control" type="text" id="NIC"
                                                       name="customer_nic"/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="cStatus">Civil Status</label>
                                                <Field as="select" defaultValue={selectedCustomer.customer_civil_status}
                                                       name="customer_civil_status"
                                                       className="form-select">
                                                    <option selected></option>
                                                    <option value="Married">Married</option>
                                                    <option value="Single">Single</option>
                                                    <option value="Widowed">Widowed</option>
                                                </Field>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="passport">Passport</label>
                                                <Field className="form-control" type="text" id="passport"
                                                       name="customer_passport_no"/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="issuedDate">Issued Date</label>
                                                <Field className="form-control" type="date" id="date"
                                                       name="customer_pp_issued_date"/>
                                                {errors.customer_pp_issued_date && touched.customer_pp_issued_date ? (
                                                    <div className="error_message">{errors.customer_pp_issued_date}</div>
                                                ) : null}
                                            </div>
                                            <div className="col">
                                                <label htmlFor="place">Place</label>
                                                <Field className="form-control" type="text" id="place"
                                                       name="customer_pp_issued_place"/>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col agencyCol">
                                                <label htmlFor="agency">Agency</label>
                                                <div className="agencyDiv">
                                                    <Field as={AsyncAgencySelect}
                                                           name="customer_agency" />
                                                    <NavLink to="/addAgency"
                                                             className="btn__agency btn btn-secondary ">Add</NavLink>
                                                </div>

                                            </div>
                                            <div className="col">
                                                <label htmlFor="job">Job Title</label>
                                                <div className="agencyDiv">
                                                    <Field as={AsyncJobSelect}
                                                           name="customer_job_title" />
                                                <NavLink to="/addJob"
                                                         className="btn__agency btn btn-secondary ">Add</NavLink>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="country">Country</label>
                                                <div className="agencyDiv">
                                                    <Field as={AsyncJobSelect}
                                                           name="country_name" />
                                                    <NavLink to="/addCountry"
                                                             className="btn__agency btn btn-secondary ">Add</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>

                                        <button type="submit" className="btn btn-primary mb-2"> Save</button>
                                        {/*<NavLink to="/testDetails" className="btn btn-primary mb-2"> Save </NavLink>*/}

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

export default GCC