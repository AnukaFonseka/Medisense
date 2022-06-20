import React from "react";
import "./cashier.css"
import {NavLink} from "react-router-dom";

const Cashier = () => {
    return(
        <div className="main--container">
            <form className="formm">
                <div className="common__info">
                    <h1>Cashier</h1>
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
                            <th scope="col">Description</th>
                            <th scope="col">Amount</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Kuku</td>
                            <td>$5000</td>

                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Padamala</td>
                            <td>$8000</td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Tadmi</td>
                            <td>$3000</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <br/>

                <div className="common__info">
                    <div className="common__info__wrap">
                        <div className="common__info__details">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="commission">Commission</label>
                                    <input className="form-control" type="text" id="commission" name="commission"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="total">Total</label>
                                    <input className="form-control" type="text" id="total" name="total"/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <label htmlFor="discount">Discount</label>
                                    <input className="form-control" type="text" id="discount" name="discount"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="amountPay">Amount to Pay</label>
                                    <input className="form-control" type="text" id="amountPay" name="amountPay"/>
                                </div>
                            </div>

                            {/*Cash,Cheque,Credit selection*/}

                            <div className="category-container">
                                <div className="form--check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Cash
                                    </label>
                                </div>

                                <div className="category-con1">
                                    <div className="form--check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Cheque
                                        </label>
                                    </div>

                                    <div  className="category-box">
                                        <div className="roww">
                                            <input className="form-ctrl" type="text" id="cheque" name="cheque" placeholder="  Cheque No"/>
                                        </div>
                                        <div className="roww">
                                            <input className="form-ctrl" type="text" id="chequeDate" name="chequeDate" placeholder="  Cheque Date"/>
                                        </div>
                                        <div className="roww">
                                            <select className="form-select select__bank" >
                                                <option selected></option>
                                                <option value="" disabled selected>Bank</option>
                                                <option value="1">BOC</option>
                                                <option value="2">Seylan</option>
                                                <option value="3">NDB</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="category-con2">
                                    <div className="form--check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                                            Credit
                                        </label>
                                    </div>
                                    <div className="col">
                                        <select className="form--select">
                                            <option value="" disabled selected>  Credit Approved By</option>
                                            <option value="1">Mr.Rohan</option>
                                            <option value="2">Mario</option>
                                            <option value="3">Nurse Anty</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="button">
                                <NavLink to = "/testDetails" className = "save__btn btn btn-primary mb-2" > Save </NavLink>
                                <NavLink to = "/testDetails" className = "print__btn btn btn-primary mb-2" > Print </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Cashier