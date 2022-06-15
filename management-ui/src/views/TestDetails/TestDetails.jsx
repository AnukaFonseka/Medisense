import React from "react";
import "./TestDetails.css"
import {NavLink} from "react-router-dom";

const TestDetails = () => {
    return(
        <div>
            <nav aria-label="breadcrumb" className="navbar">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="receptionHome">Home</a></li>
                    <li className="breadcrumb-item"><a href="GCC">GCC</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Test Details</li>
                </ol>
            </nav>
            <div className="main__container">
                <form className="form">

                    <div className="common__info">
                        <h1>Test Details</h1>

                    </div>
                    <br/>

                    <div className="common__info">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here"
                                      id="floatingTextarea"></textarea>
                            <label htmlFor="floatingTextarea">Remarks</label>
                        </div>

                    </div>
                    <br/>

                    <div className="common__info">
                        <div className="search__wrapper">
                            <input className="searchbar" type="search" placeholder="Search..."/>
                            <button className="btn btn-success">Add</button>
                        </div>

                    </div>
                    <br/>
                    <div className="common__info">
                        <table className="table table-hover">
                            <thead>
                            <tr className="table-success">
                                <th scope="col">No</th>
                                <th scope="col">Description</th>
                                <th scope="col">Amount</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    asasa
                                </td>
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
                    <br/>

                    <div className="common__info">
                        <table className="table table-hover">
                            <thead>
                            <tr className="table-info">
                                <th scope="col">No</th>
                                <th scope="col">Master Code</th>
                                <th scope="col">Description</th>

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

                        <NavLink to = "/cashierList" className = "btn btn-primary mb-2" > Save </NavLink>

                    </div>



                </form>
            </div>
        </div>
    )
}

export default TestDetails