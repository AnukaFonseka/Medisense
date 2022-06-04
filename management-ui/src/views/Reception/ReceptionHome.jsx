import React from 'react'
import './receptionHome.css'
import {NavLink} from "react-router-dom";

const receptionHome = () => {
    return (
        <div className="home">
            <h1>Reception Home</h1>
            <div className="home__container">

                <div className="details__container">
                    <br/>
                    <img src={require("./images/1.png")} alt="" width="200px" height="200px"/><br/><br/>
                    <p>Anuka Fonseka</p>
                    <p>19517</p>
                </div>
                <div className="category">
                    <div className="category__check">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                GCC
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Non GCC
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                OPD
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Repeat
                            </label>
                        </div>
                    </div>
                    <br/>
                    <NavLink to="/" className="next__btn btn btn-primary"> Next </NavLink>

                </div>
            </div>


        </div>
    )
}

export default receptionHome