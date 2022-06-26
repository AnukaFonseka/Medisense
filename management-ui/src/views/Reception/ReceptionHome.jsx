import React from 'react'
import './receptionHome.css'
import {NavLink} from "react-router-dom";

const ReceptionHome = () => {
    return (
        <div>
            <nav className="navbar" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
            </nav>
        <div className="home">
            <div className="home__container">

                <div className="common__info">
                    <div className="search__wrapper">
                        <input className="searchbar" type="search" placeholder="Search..."/>
                        <button className="btn btn-success">Search</button>
                    </div>

                </div>
                <br/>

                    <div className="details__container">
                        <br/>
                        <img src={require("./images/1.png")} alt="" width="150px" height="150px"/><br/>
                        <p>Anuka Fonseka</p>
                        <p>19517</p>
                        <NavLink to="/customerDetails" className="view__btn btn btn-secondary"> View More </NavLink>
                    </div>

                    <div className="category__container">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                GCC
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Non GCC
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                OPD
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                Repeat
                            </label>
                        </div>
                        <NavLink to="/GCC" className="next__btn btn btn-primary"> Next </NavLink>
                    </div>
                    <br/>
            </div>
        </div>
        </div>
    )
}

export default ReceptionHome