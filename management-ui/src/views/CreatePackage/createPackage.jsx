import React from "react";
import "./createPackage.css"
import {NavLink} from "react-router-dom";

const CreatePackage = () => {
    return(
        <div className="main--container">
            <form className="formm">
                <div className="common__info">
                    <h1>Create Package</h1>
                </div>
                <br/>
                <div className="common__info">
                    <div className="common__info__wrap">
                        <div className="common__info__details">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="name">Package Name</label>
                                    <input className="form-control" type="text" id="name" name="name"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="name">Package Code</label>
                                    <input className="form-control" type="text" id="id" name="id"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="name">Price of tests</label>
                                    <input className="form-control" type="text" id="name" name="name"/>
                                </div>

                                <div className="col">
                                    <label htmlFor="name">Package price</label>
                                    <input className="form-control" type="text" id="id" name="id"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>

                <div className="common__info">
                    <table className="table table-hover">
                        <thead>
                        <tr className="table-info">
                            <th scope="col">Test Code</th>
                            <th scope="col">Test Name</th>
                            <th scope="col">Test Price</th>
                            <th scope="col">Select</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Alpha</td>
                            <td>2000</td>
                            <td>
                                <input type="checkbox"/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Beta</td>
                            <td>3000</td>
                            <td>
                                <input type="checkbox"/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Gamma</td>
                            <td>4000</td>
                            <td>
                                <input type="checkbox"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <br/>
                    <div className="button">
                        <NavLink to = "/labValues" className = "mark__btn btn btn-primary mb-2" > Create Package </NavLink>
                    </div>
                </div>
                <br/>
            </form>
        </div>
    )
}

export default CreatePackage