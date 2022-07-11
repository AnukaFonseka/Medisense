import React from "react";
import "./customerDetails.css";
import {NavLink} from "react-router-dom";
import {Field, Formik} from "formik";
import {useSelector} from "react-redux";
import {customerSelector} from "../CustomerDetails";

const CustomerDetails = () => {

    const {selectedCustomer} =  useSelector(customerSelector)

    console.log(selectedCustomer)

    return(
        <div>
            <nav aria-label="breadcrumb" className="navbar">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <NavLink to="/receptionHome"> Home </NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Customer Details</li>
                </ol>
            </nav>

            <Formik initialValues={selectedCustomer}>
            <div className="main__container__customer">
                <form className="form">
                    <div className="common__info">
                        <h1>Basic Info</h1>

                    </div>
                    <br/>

                    <div className="common__info">
                        <div className="common__info__wrap">
                            <div className="common__info__details">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="id">ID</label>
                                        <Field className="form-control" type="text" id="cus_ref_no"
                                               name="cus_ref_no" readOnly/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="date">Register Date</label>
                                        <Field className="form-control" type="text" id="issuedDate" name="customer_reg_date" readOnly/>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col">
                                        <label htmlFor="name">Full Name</label>
                                        <Field className="form-control" type="text" id="name"
                                               name="customer_full_name" readOnly/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="date">Date of Birth</label>
                                        <Field className="form-control" type="text" id="issuedDate" name="customer_dob" readOnly/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="mobile">Mobile No</label>
                                        <Field className="form-control" type="text" id="mobile"
                                               name="customer_contact_no" readOnly/>
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
                        <div className="common__info__wrap" >
                            <div className="common__info__details">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="NIC">NIC</label>
                                        <Field className="form-control" type="text" id="NIC"
                                               name="customer_nic" readOnly/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="cStatus">Civil Status</label>
                                        <Field className="form-control" type="text" id="cStatus" name="customer_civil_status" readOnly/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="passport">Passport</label>
                                        <Field className="form-control" type="text" id="passport"
                                               name="customer_passport_no" readOnly/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="issuedDate">Issued Date</label>
                                        <Field className="form-control" type="text" id="issuedDate" name="customer_pp_issued_date" readOnly/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="place">Place</label>
                                        <Field className="form-control" type="text" id="place"
                                               name="customer_pp_issued_place" readOnly/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="agency">Agency</label>
                                        <Field className="form-control" type="text" id="agency" name="customer_agency" readOnly/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="job">Job Title</label>
                                        <Field className="form-control" type="text" id="jobTitle" name="customer_job_title" readOnly/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="country">Country</label>
                                        <Field className="form-control" type="text" id="country" name="customer_country" readOnly/>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                    <br/>
                    <div className="common__info">
                        <h1>Medical History</h1>

                    </div>

                    <br/>

                    <div className="common__info">
                        <table className="table table-hover">
                            <thead>
                            <tr className="table-info">
                                <th scope="col">Date</th>
                                <th scope="col">Description</th>
                                <th scope="col">Result</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </form>
            </div>
            </Formik>
        </div>
    )
}

export default CustomerDetails