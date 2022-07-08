import React from "react";
import "./lab.css"
import {NavLink} from "react-router-dom";

const Lab = () => {
    return(
        <div className="main--container">
            <form className="formm">
                <div className="common__info">
                    <h1>Mini Lab</h1>
                </div>
                <br/>
                <div className="common__info">
                    <div className="search__wrapper">
                        <input className="searchbar" type="search" placeholder="Search..."/>
                        <button className="btn btn-success">Search</button>
                    </div>
                </div>
                <br/>
                <div className="common__info">
                    <div className="common__info__wrap">
                        <div className="common__info__details">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="name">Name</label>
                                    <input className="form-control" type="text" id="name" name="name"/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <label htmlFor="name">ID</label>
                                    <input className="form-control" type="text" id="id" name="id"/>
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
                    <table className="table table-hover">
                        <thead>
                        <tr className="table-info">
                            <th scope="col">No</th>
                            <th scope="col">Type</th>
                            <th scope="col">Code</th>
                            <th scope="col">Description</th>
                            <th scope="col">Result</th>
                            <th scope="col">Unit</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Alpha</td>
                            <td>A</td>
                            <td>descA</td>
                            <td>X</td>
                            <td>kgmol</td>
                            <td>Done</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Beta</td>
                            <td>B</td>
                            <td>descB</td>
                            <td>Y</td>
                            <td>mg</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Gamma</td>
                            <td>C</td>
                            <td>descC</td>
                            <td>Z</td>
                            <td>mol</td>
                            <td>Done</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <br/>
                <div className="common__info">
                    <div className="category-container-minilab">
                        <div className="button">
                            <NavLink to = "/labValues" className = "mark__btn btn btn-primary mb-2" > Mark Default </NavLink>
                        </div>
                        <select className="form--select-2" >
                            <option selected></option>
                            <option value="" disabled selected>Status</option>
                            <option value="1">Done</option>
                            <option value="2">Pending</option>
                        </select>
                    </div>

                    <div className="minilab-btns">
                        <div className="button">
                            <NavLink to = "/testDetails" className = "save__btn btn btn-primary mb-2" > Save </NavLink>
                        </div>
                        <div className="button">
                            <NavLink to = "/testDetails" className = "save__btn btn btn-primary mb-2" > New </NavLink>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Lab