import React from "react";
import "./applicationDetails.css"

const ApplicantDetails = () => {
    return(
        <div className="main__container">
            <form className="form">

                <div className="common__info">
                    <h1>Applicant Details</h1>
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
                                <div className="col">
                                    <label htmlFor="name">Title</label>
                                    <select className="form-select">
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
                            <img src={require("./images/1.png")} alt="" width="200px" height="200px"/>
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
                                <div className="col">
                                    <label htmlFor="agency">Agency</label>
                                    <select className="form-select">
                                        <option selected></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
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

                            <button type="button" className="btn btn-primary">Save</button>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ApplicantDetails