import React from "react";
import "./opd.css"
import {NavLink} from "react-router-dom";

const OPD = () => {
    return(
        <div>
            <nav aria-label="breadcrumb" className="navbar">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="receptionHome">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">OPD</li>
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
                                    <label htmlFor="address">Address</label>
                                    <input className="form-control" type="text" id="address" name="address"/>
                                </div>

                            </div>


                            <div className="row">
                                <div className="col">
                                    <label htmlFor="lastmeal">Time of last meal</label>
                                    <input className="form-control" type="text" id="lastmeal" name="lastmeal"/>
                                </div>

                                <div className="col">
                                    <label htmlFor="country">Referred by</label>
                                    <select className="form-select">
                                        <option selected></option>
                                        <option value="1">Mr.Rohan</option>
                                        <option value="2">Mario</option>
                                        <option value="3">Nurse Anty</option>
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

export default OPD