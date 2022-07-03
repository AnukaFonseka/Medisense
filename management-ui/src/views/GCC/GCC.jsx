import React, {useEffect} from "react";
import "./gcc.css"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {customerThunk} from "../../apiCalls/apiCalls";

const GCC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        let customer = {
            id: 0,
            cus_ref_no: 1000,
            customer_salutation: "Mr",
            customer_full_name : "Anuka",
            customer_address: "",
            customer_contact_no: "",
            customer_dob: "1998/10/02",
            customer_reg_date: "2022/06/23",
            customer_nic: "",
            customer_civil_status: "",
            customer_passport_no: "",
            customer_pp_issued_date: "",
            customer_pp_issued_place: "",
            customer_agency: "",
            customer_job_title: "",
            customer_country: "",
            customer_last_meal_time: "",
            customer_last_meal_time_rfrd_by: ""
        }
        dispatch(customerThunk(customer));
    }, [])

    return(
        <div>
            <nav aria-label="breadcrumb" className="navbar">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="receptionHome">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">GCC</li>
                </ol>
            </nav>
        <div className="main__container">
            <form className="form">
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
                                    <input className="form-control" type="text" id="id" name="id"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="date">Register Date</label>
                                    <input className="form-control" type="date" id="date" name="date"/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-2">
                                    <label htmlFor="name">Title</label>
                                    <select className="form-select form-select__title">
                                        <option selected></option>
                                        <option value="1">Mr</option>
                                        <option value="2">Mrs</option>
                                        <option value="3">Ms</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="name">Full Name</label>
                                    <input className="form-control" type="text" id="name" name="name"/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <label htmlFor="date">Date of Birth</label>
                                    <input className="form-control" type="date" id="dob" name="dob"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="mobile">Mobile No</label>
                                    <input className="form-control" type="text" id="mobile" name="mobile"/>
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
                                    <label htmlFor="NIC">NIC</label>
                                    <input className="form-control" type="text" id="NIC" name="NIC"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="cStatus">Civil Status</label>
                                    <select className="form-select">
                                        <option selected></option>
                                        <option value="1">Married</option>
                                        <option value="2">Single</option>
                                        <option value="3">Widowed</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <label htmlFor="passport">Passport</label>
                                    <input className="form-control" type="text" id="passport" name="passport"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="issuedDate">Issued Date</label>
                                    <input className="form-control" type="text" id="issuedDate" name="issuedDate"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="place">Place</label>
                                    <input className="form-control" type="text" id="place" name="place"/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col agencyCol">
                                    <label htmlFor="agency">Agency</label>
                                    <div className="agencyDiv">
                                        <select className="form-select select__agency">
                                            <option selected></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <NavLink to = "/addAgency" className = "btn__agency btn btn-secondary " >Add</NavLink>
                                    </div>

                                </div>
                                <div className="col">
                                    <label htmlFor="job">Job Title</label>
                                    <select className="form-select">
                                        <option selected></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="country">Country</label>
                                    <select className="form-select">
                                        <option selected></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>

                            <NavLink to = "/testDetails" className = "btn btn-primary mb-2" > Save </NavLink>

                        </div>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}

export default GCC