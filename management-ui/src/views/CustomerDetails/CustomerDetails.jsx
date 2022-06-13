import React from "react";
import "./customerDetails.css";

const CustomerDetails = () => {
    return(
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
                                        <input className="form-control" type="text" value={123} id="id" name="id" readOnly/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="date">Register Date</label>
                                        <input className="form-control" type="date" id="date" name="date" readOnly/>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col">
                                        <label htmlFor="name">Full Name</label>
                                        <input className="form-control" type="text" id="name" name="name" readOnly/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="date">Date of Birth</label>
                                        <input className="form-control" type="date" id="dob" name="dob" readOnly/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="mobile">Mobile No</label>
                                        <input className="form-control" type="text" id="mobile" name="mobile" readOnly/>
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
                                        <input className="form-control" type="text" id="NIC" name="NIC" readOnly/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="cStatus">Civil Status</label>
                                        <input className="form-control" type="text" id="cStatus" name="cStatus" readOnly/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="passport">Passport</label>
                                        <input className="form-control" type="text" id="passport" name="passport" readOnly/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="issuedDate">Issued Date</label>
                                        <input className="form-control" type="text" id="issuedDate" name="issuedDate" readOnly/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="place">Place</label>
                                        <input className="form-control" type="text" id="place" name="place" readOnly/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="agency">Agency</label>
                                        <input className="form-control" type="text" id="agency" name="agency" readOnly/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="job">Job Title</label>
                                        <input className="form-control" type="text" id="jobTitle" name="jobTitle" readOnly/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="country">Country</label>
                                        <input className="form-control" type="text" id="country" name="country" readOnly/>
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
    )
}

export default CustomerDetails