import React from "react";
import "./xray.css"
import {NavLink} from "react-router-dom";

const Xray = () => {
    return(
        <div className="main--container">
            <form className="formm">
                <div className="common__info">
                    <h1>X - Ray</h1>
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
                            <th scope="col">X-Ray Film</th>
                            <th scope="col">Remarks</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Alpha</td>
                            <td>A</td>
                            <td>descA</td>
                            <td>X</td>
                            <td>Done</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Beta</td>
                            <td>B</td>
                            <td>descB</td>
                            <td>Y</td>
                            <td>Pending</td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Gamma</td>
                            <td>C</td>
                            <td>descC</td>
                            <td>Z</td>
                            <td>Done</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <br/>

                <div className="common__info">
                    <div className="mor">
                        <br/>
                        <h1>Medical Officer's Recommendations</h1>
                    </div>
                    <div className="category-container-xray">
                        <div className="col">
                            <select className="form--select-1" >
                                <option selected></option>
                                <option value="" disabled selected>X-Ray Results</option>
                                <option value="1">Pass</option>
                                <option value="2">Fail</option>
                            </select>
                        </div>

                        <div className="col">
                            <select className="form--select-1">
                                <option value="" disabled selected>Radiographer</option>
                                <option value="1">Mr.Rohan</option>
                                <option value="2">Mr.Mario</option>
                            </select>
                        </div>
                    </div>

                    <div className="button">
                        <NavLink to = "/testDetails" className = "save__btn btn btn-primary mb-2" > Save </NavLink>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Xray