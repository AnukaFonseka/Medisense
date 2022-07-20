import React, {useEffect, useState} from "react";
import "./opd.css"
import {NavLink, useHistory} from "react-router-dom";
import * as Yup from 'yup';
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {customerSelector, setSelectedCustomer} from "../CustomerDetails";
import {addCustomerThunk, updateCustomerThunk} from "../../apiCalls/apiCalls";

const OPD = () => {
    const {selectedCustomer, isCustomerUpdated} = useSelector(customerSelector);
    const dispatch = useDispatch();
    const history = useHistory();
    const [updatedCustomerValues, setUpdatedCustomerValues] = useState({});

    useEffect(() => {
        if(isCustomerUpdated) {
            dispatch(setSelectedCustomer(updatedCustomerValues))
            history.push('./testDetails')
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
           .max(new Date(), 'Please choose a valid register date')
           .required('Register date is required'),
       customer_dob: Yup.date()
           .max(new Date(), 'Please choose a valid date of birth')
           .required('Date of birth is required'),
    });

    return(
        <div>
            <nav aria-label="breadcrumb" className="navbar">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="receptionHome">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">OPD</li>
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
                                    <label htmlFor="id">ID</label>
                                    <Field className="form-control" type="text" id="cus_ref_no" name="cus_ref_no"/>
                                    {errors.cus_ref_no && touched.cus_ref_no ? (
                                        <div className="error_message">{errors.cus_ref_no}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <label htmlFor="date">Register Date</label>
                                    <Field className="form-control" type="date" id="customer_reg_date" name="customer_reg_date"/>
                                    {errors.customer_reg_date && touched.customer_red_date ? (
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
                                    <Field className="form-control" type="text" id="customer_full_name" name="customer_full_name"/>
                                    {errors.customer_full_name && touched.customer_full_name ? (
                                        <div className="error_message">{errors.customer_full_name}</div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <label htmlFor="date">Date of Birth</label>
                                    <Field className="form-control" type="date" id="customer_dob" name="customer_dob"/>
                                    {errors.customer_dob && touched.customer_dob ? (
                                        <div className="error_message">{errors.customer_dob}</div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <label htmlFor="mobile">Mobile No</label>
                                    <Field className="form-control" type="text" id="customer_contact_no" name="customer_contact_no"/>
                                </div>
                            </div>
                        </div>

                        <div className="common__info__image">
                            <img src={require("../Reception/images/1.png")} alt="" width="200px" height="200px"/>
                        </div>

                    </div>
                </div>
                <br/>
                <div className="common__info">
                    <div className="common__info__wrap">
                        <div className="common__info__details">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="address">Address</label>
                                    <Field className="form-control" type="text" id="customer_address" name="customer_address"/>
                                </div>

                            </div>


                            <div className="row">
                                <div className="col">
                                    <label htmlFor="lastmeal">Time of last meal</label>
                                    <Field className="form-control" type="time" id="customer_last_meal_time" name="customer_last_meal_time"/>
                                </div>

                                <div className="col">
                                    <label htmlFor="country">Referred by</label>
                                    <Field as="select" defaultValue={selectedCustomer.customer_last_meal_time_rfrd_by}
                                           name="customer_last_meal_time_rfrd_by"
                                           className="form-select">
                                        <option selected></option>
                                        <option value="Mr.Rohan">Mr.Rohan</option>
                                        <option value="Mr.Mario">Mr.Mario</option>
                                    </Field>
                                </div>
                            </div>

                            <button type="submit" className='btn btn-primary mb-2'>Save</button>
                            {/*<NavLink to = "/testDetails" className = "btn btn-primary mb-2" > Save </NavLink>*/}

                        </div>
                    </div>
                </div>
            </Form> )}
          </Formik>
        </div>
        </div>
    )
}

export default OPD